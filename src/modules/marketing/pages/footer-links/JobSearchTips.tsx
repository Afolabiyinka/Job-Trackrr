import {
  BriefcaseBusiness,
  ClipboardList,
  Target,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

const tips: Array<{ title: string; body: string[]; icon: LucideIcon }> = [
  {
    title: "Define a focused search",
    icon: Target,
    body: [
      "Instead of applying to everything, choose 2–3 job titles, industries, and types of companies that match your goals. A tighter search gives you better-fit roles and more energy for quality applications.",
    ],
  },
  {
    title: "Track your applications",
    icon: ClipboardList,
    body: [
      "Keep a simple record of where you applied, who you contacted, and the status of each role. This prevents double-applying and helps you follow up at the right time.",
    ],
  },
  {
    title: "Tailor each application",
    icon: BriefcaseBusiness,
    body: [
      "Read the job description carefully and mirror a few of the keywords, tools, or responsibilities that matter most. Small edits to your resume and cover note can dramatically improve response rates.",
    ],
  },
  {
    title: "Build a repeatable routine",
    icon: TrendingUp,
    body: [
      "Set aside 30–60 minutes a day for outreach, applications, and follow-ups. Consistency matters more than intensity when you are job searching for months.",
    ],
  },
];

export default function JobSearchTips() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
        <h1 className="mt-2 text-3xl font-semibold text-foreground sm:text-4xl">
          Job Search Tips
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          A steady search strategy beats random applications. Use these habits
          to stay organized, improve your targeting, and keep momentum while you
          look for the right role.
        </p>

        <div className="mt-12 space-y-10">
          {tips.map(({ title, body, icon: Icon }) => (
            <section key={title} className="rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="text-xl font-medium text-foreground">{title}</h2>
              </div>
              <div className="mt-4 space-y-3">
                {body.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-[15px] leading-relaxed text-muted-foreground"
                  >
                    {paragraph}
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
