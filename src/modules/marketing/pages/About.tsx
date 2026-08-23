const sections = [
  {
    title: "Why Job Trackrr",
    body: [
      "Job hunting is already stressful \u2014 tracking it shouldn't be. Most people end up managing applications in a messy spreadsheet or losing track of who they've followed up with. Job Trackrr exists to make that part simple: one place to log applications, store contacts, keep your resume handy, and see where things stand at a glance.",
    ],
  },
  {
    title: "What it does",
    body: [
      "Track every application from \u201capplied\u201d to \u201coffer\u201d (or anywhere in between), keep notes and contacts tied to each one, and store your resume for quick access \u2014 without the clutter of tools built for recruiters instead of job seekers.",
    ],
  },
  {
    title: "How it's built",
    body: [
      "Job Trackrr is an independent project, built and maintained by a solo developer. It's still evolving \u2014 new features ship based on what actually helps people job hunting, not a big roadmap deck.",
    ],
  },
  {
    title: "Get in touch",
    body: [
      "Feedback, bug reports, or feature ideas are always welcome \u2014 head to the Contact page to reach out.",
    ],
  },
];

export default function About() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
        <p className="text-sm uppercase tracking-wide text-neutral-500">
          Job Trackrr
        </p>
        <h1 className="mt-2 text-3xl sm:text-4xl font-semibold text-white">
          About
        </h1>

        <div className="mt-12 space-y-10">
          {sections.map((s) => (
            <section key={s.title}>
              <h2 className="text-lg font-medium text-white">{s.title}</h2>
              <div className="mt-3 space-y-3">
                {s.body.map((p, i) => (
                  <p
                    key={i}
                    className="text-[15px] leading-relaxed text-neutral-400"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
