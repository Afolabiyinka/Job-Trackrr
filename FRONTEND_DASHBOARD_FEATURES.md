# Frontend handoff: dashboard data and reminders

## Goal

Use the authenticated dashboard API as the source of truth for dashboard
metrics, follow-up prompts, and interview reminders. Do not derive these
features from the current page of the paginated jobs list or fetch every job
just to calculate dashboard data.

## API

```http
GET /api/dashboard
```

The endpoint uses the existing authenticated session cookie. Send requests
through the configured API client with credentials enabled, following the
same convention used by the rest of the application.

The response has this shape:

```ts
type DashboardResponse = {
  summary: {
    totalApplications: number;
    totalInterviews: number;
    upcomingInterviews: number;
  };
  followUps: {
    thresholdDays: number;
    total: number;
    items: Array<{
      jobId: string;
      company: string;
      role: string;
      status: "applied";
      appliedAt: string;
    }>;
  };
  interviewReminders: {
    total: number;
    items: Array<{
      jobId: string;
      company: string;
      role: string;
      interviewAt: string;
      interviewType: "Virtual" | "In_Person" | null;
    }>;
  };
};
```

All date fields are ISO-8601 UTC strings. Parse them as dates and format them
for the user's locale at render time. Job IDs are the same IDs accepted by
`GET /api/jobs/:id`.

## Dashboard content

### Summary cards

- Show `summary.totalApplications` as the total tracked applications.
- Show `summary.totalInterviews` as the number of jobs with an interview date,
  including past interviews.
- Show `summary.upcomingInterviews` as the number of interviews scheduled for
  now or later.
- These values are server totals, not values calculated from loaded job pages.

### Follow-up prompts

- Render `followUps.items` as the follow-up list.
- Show company, role, and a localized relative application date.
- Link each row to `/jobs/:jobId`.
- Show at most the items supplied by the API (currently three). `followUps.total`
  is the full match count and may be greater than the displayed list length.
- Use `followUps.thresholdDays` for copy about when a follow-up is due; do not
  duplicate the seven-day calculation on the client.
- If there are no items, show the empty state: “No applications need follow-up.”
- This is a read-only prompt. Do not change job status or add dismiss/snooze
  behavior without a separate product and API decision.

### Interview notifications

- Use `interviewReminders.items` for the notification popover; the server has
  already filtered past interviews and sorted the remaining items earliest
  first.
- Show company, role, and a localized interview date/time. Show the interview
  type when present and omit it when `null`.
- Link to `/interviews`.
- Use `interviewReminders.total` for the notification badge. The API currently
  returns at most ten reminder items, so the total may be higher than the
  visible list length. Do not imply the popover contains every reminder when
  the total exceeds the number of items.
- Show a clear empty state when there are no upcoming reminders.

## Query and state handling

- Add a typed React Query hook for `GET /api/dashboard`, following existing API
  client, query-key, and credential conventions in the frontend.
- Fetch dashboard data independently from the paginated jobs query. Do not
  fetch all jobs to recreate the API response.
- Render explicit loading, error, and success states. Avoid rendering zero
  metrics as if they were loaded data while the request is pending or failed.
- For an error, use the frontend's standard error UI and offer its normal retry
  behavior; a retry is safe because this endpoint is read-only.
- Refresh or invalidate the dashboard query after a job is created, edited, or
  deleted so the summary and reminder lists remain current.

## UX and accessibility

- Keep the existing dashboard information hierarchy and navigation unless the
  product design specifies otherwise.
- Ensure each section has a visible heading and that notification and empty
  states are understandable without relying on color alone.
- Make reminder and follow-up links keyboard accessible, with descriptive
  names that include enough context to distinguish repeated company or role
  names.
- Use locale-aware date/time formatting, including the user's time zone for
  interview dates. Keep the API timestamp as the source value.
- Preserve responsive behavior: summary cards and lists should remain readable
  on narrow screens without horizontal scrolling.

## Out of scope

- Do not change the existing jobs list or detail API.
- Do not add a mutation for dismissing or completing a follow-up prompt.
- Do not fetch additional pages solely to calculate dashboard totals.
- Do not treat past interviews as upcoming notifications. Past scheduled
  interviews are included only in `summary.totalInterviews`.

## Acceptance criteria

1. Dashboard metrics display the API totals, including jobs outside the
   currently loaded jobs page.
2. Follow-up prompts link to the matching job detail and use the server's
   threshold and item ordering.
3. Interview notifications exclude past dates and display the earliest
   upcoming interview first.
4. Badge counts use API totals even when the corresponding item list is capped.
5. Loading, error, empty, and populated states are distinct and accessible.
6. Creating, editing, or deleting a job refreshes dashboard data.
7. The existing paginated jobs list and job detail flows continue to work.
