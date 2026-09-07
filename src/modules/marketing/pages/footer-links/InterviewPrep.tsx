import {
  BrainCircuit,
  Building2,
  MessageSquareText,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

const topics: Array<{ title: string; body: string[]; icon: LucideIcon }> = [
  {
    title: "Prepare your story",
    icon: MessageSquareText,
    body: [
      "Practice a short explanation of your background, what you are looking for, and why the role fits your next step. Clear stories make the first few minutes of interviews feel natural.",
    ],
  },
  {
    title: "Research the company",
    icon: Building2,
    body: [
      "Review the role, the company’s mission, and recent updates. Good preparation helps you ask better questions and show genuine interest during the interview.",
    ],
  },
  {
    title: "Practice common questions",
    icon: BrainCircuit,
    body: [
      "Be ready for behavioral questions using the STAR method: situation, task, action, and result. This helps you give structured, memorable answers instead of rambling.",
    ],
  },
  {
    title: "Close with confidence",
    icon: Sparkles,
    body: [
      "Prepare 2–3 thoughtful questions for the interviewer. This shows curiosity and helps you learn whether the role and team are a strong match.",
    ],
  },
];

export default function InterviewPrep() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
        <h1 className="mt-2 text-3xl font-semibold text-foreground sm:text-4xl">
          Interview Prep
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Strong interviews come from preparation, clarity, and realistic
          practice. Focus on your story, your examples, and your questions.
        </p>

        <div className="mt-12 space-y-10">
          {topics.map(({ title, body, icon: Icon }) => (
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
