# Backend handoff: dashboard data and reminders

## Goal

Provide authenticated, API-backed data for the dashboard so follow-up prompts,
interview notifications, and summary metrics do not depend on a client-side
partial jobs list.

The frontend currently fetches paginated jobs and derives much of the dashboard
from the jobs stored in the browser. Dashboard features should use data scoped
to the signed-in user and should not require the client to fetch every job just
to calculate counts or find reminders.

## Current frontend behavior

### Follow-up prompts

The dashboard currently flags a job when all of these are true:

- `status` is `applied`.
- `appliedAt` is present and is a valid date.
- `interviewDate` is absent.
- At least seven days have elapsed since `appliedAt`.

Results are sorted oldest application first. The dashboard shows up to three
items and links each item to `/jobs/:id`. The empty state says no applications
need follow-up. There is no dismiss, snooze, or completion action yet.

### Interview notifications

The notification popover currently displays jobs with an `interviewDate`,
sorted earliest first. It displays company, role, and interview date, with a
link to `/interviews`.

Note: the present frontend filter includes past dates even though the popover
copy says “upcoming.” The API should return only upcoming interviews
(`interviewAt >= now`) unless the product explicitly wants past interview
notifications included.

### Dashboard summary

The dashboard currently displays total job applications and interview counts.
The frontend derives interview counts from jobs carrying an `interviewDate`.
Clarify whether the summary count should mean all interviews ever scheduled or
only future interviews before finalizing the response contract.

## Proposed API

Prefer one authenticated dashboard endpoint that returns the data needed by
the initial dashboard render:

```http
GET /api/dashboard
```

Use the project's existing authentication/session mechanism and response
conventions. The example below is a proposed payload, not a requirement to
change the API's existing envelope if it has one.

```json
{
  "summary": {
    "totalApplications": 24,
    "totalInterviews": 5,
    "upcomingInterviews": 2
  },
  "followUps": {
    "thresholdDays": 7,
    "total": 3,
    "items": [
      {
        "jobId": "job_123",
        "company": "Acme",
        "role": "Product Designer",
        "status": "applied",
        "appliedAt": "2026-10-01T12:00:00.000Z"
      }
    ]
  },
  "interviewReminders": {
    "total": 2,
    "items": [
      {
        "jobId": "job_456",
        "company": "Northstar",
        "role": "Frontend Engineer",
        "interviewAt": "2026-10-25T14:00:00.000Z",
        "interviewType": "Virtual"
      }
    ]
  }
}
```

### Follow-up rules

- Compute against the authenticated user's jobs only.
- Include jobs with status `applied`, an `appliedAt` timestamp at least seven
  days before the request time, and no scheduled interview date.
- Exclude invalid/missing timestamps and jobs in other statuses.
- Sort ascending by `appliedAt` (oldest first); use a stable secondary sort such
  as job ID.
- Return `total` for all matches and at most three `items` for the dashboard.
- Return ISO-8601 UTC timestamps. The frontend will localize relative dates.
- Do not mutate job status or mark a job as followed up as a side effect of a
  GET request.

The seven-day threshold is currently fixed in the frontend. Keep it server-side
as a named constant or configuration, but do not make it user-configurable
unless that becomes a separate product requirement.

### Interview reminder rules

- Include only interviews scheduled for now or later.
- Sort ascending by `interviewAt`, with a stable secondary sort such as job ID.
- Return the total number of matching upcoming interviews separately from the
  capped dashboard list.
- Return only fields needed by the notification UI; do not include resume,
  feedback, salary, or unrelated personal data.

The notification popover currently displays every reminder returned by its
jobs source. A maximum list size (for example, 10) is recommended to bound the
response; if applied, expose `total` and make the limit clear so a future
“View all” screen can retrieve the rest.

### Summary metrics

- `totalApplications` should count the authenticated user's jobs, not the
  current page of a paginated jobs response.
- Define `totalInterviews` consistently: suggested definition is jobs with an
  interview date, including past interviews.
- `upcomingInterviews` should count jobs with an interview date at or after the
  current time.

## Data and compatibility

The frontend job model currently has:

```text
id, company, role, status, appliedAt, interviewDate, interviewType,
companyEmail, jobType, workType, salaryRange, feedback
```

Existing status values are `applied`, `interview`, `offer`, and `rejected`.
The current jobs endpoint is `GET /api/jobs?page=<page>` and returns paginated
data. Keep that endpoint compatible; the dashboard endpoint is an additional
aggregate/read model, not a replacement for job list/detail APIs.

Prefer explicit response types and ISO date strings. IDs must match the IDs
accepted by the existing job detail route `GET /api/jobs/:id`.

## Errors and access control

- Require authentication and derive the user ID from the authenticated
  session/token, never from a client-supplied user ID.
- Ensure every aggregate and returned job is scoped to that user.
- Return the repository's standard unauthorized and server-error responses.
- Avoid leaking whether another user's job ID exists.
- Keep GET requests read-only and safe to retry.

## Acceptance criteria

1. A signed-in user receives dashboard totals based on all their jobs, not just
   page one.
2. A job becomes a follow-up candidate at the seven-day boundary; a job under
   seven days old does not.
3. Follow-up candidates are excluded when they have an interview date or are
   no longer in `applied` status.
4. Follow-up items are oldest-first; `total` can exceed the number of returned
   items.
5. Upcoming reminders exclude past dates and are earliest-first.
6. A user cannot retrieve another user's metrics, follow-ups, or reminders.
7. Missing, malformed, or nullable dates do not crash the endpoint.
8. Dates are serialized as ISO-8601 UTC values, and counts are non-negative
   integers.
9. The current jobs list and detail endpoints remain compatible.

## Frontend integration after backend delivery

Replace client-side dashboard derivation with a React Query hook for
`GET /api/dashboard`. Render API loading, error, and empty states explicitly.
Keep job detail links using `jobId`; use the API's summary totals for dashboard
stats and the reminder count for the notification badge.

No mutation endpoint is needed for the current follow-up prompt: the UI only
links to the application detail page. If dismiss/snooze or “mark contacted”
behavior is added later, design a separate persisted follow-up resource and
mutation API rather than silently changing the job status.
