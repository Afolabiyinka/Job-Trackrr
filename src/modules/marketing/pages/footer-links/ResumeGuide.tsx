import {
  BadgeCheck,
  FileText,
  LayoutTemplate,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

const steps: Array<{ title: string; body: string[]; icon: LucideIcon }> = [
  {
    title: "Start with a clear story",
    icon: FileText,
    body: [
      "Your resume should quickly answer: what kind of work do you do, what results have you delivered, and what kind of role are you targeting next? Keep the story focused and easy to scan.",
    ],
  },
  {
    title: "Prioritize outcomes",
    icon: BadgeCheck,
    body: [
      "Use bullet points that highlight results, not just tasks. For example, 'Improved onboarding completion by 28%' is more persuasive than 'Responsible for onboarding tasks'.",
    ],
  },
  {
    title: "Keep formatting clean",
    icon: LayoutTemplate,
    body: [
      "Use consistent headings, simple font styling, and enough spacing to make scanning easy. Recruiters usually skim in seconds, so clarity matters more than fancy design.",
    ],
  },
  {
    title: "Match the role",
    icon: Sparkles,
    body: [
      "Adjust keywords, skills, and examples to reflect the role you are applying for. This is especially helpful when a company uses automated filters before a recruiter ever reads your resume.",
    ],
  },
];

export default function ResumeGuide() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
        <h1 className="mt-2 text-3xl font-semibold text-foreground sm:text-4xl">
          Resume Guide
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          A good resume helps hiring managers understand your impact quickly.
          Keep it relevant, measurable, and easy to scan.
        </p>

        <div className="mt-12 space-y-10">
          {steps.map(({ title, body, icon: Icon }) => (
            <section key={title} className="rounded-2xl  p-6">
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
