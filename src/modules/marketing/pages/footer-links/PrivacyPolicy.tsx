import Logo from "@/components/logo/Logo";

const LAST_UPDATED = "August 13, 2026";
const CONTACT_EMAIL = "support@jobtrackrr.com";

const sections = [
  {
    title: "1. Introduction",
    body: [
      'This Privacy Policy explains how Job Trackrr ("we", "us") collects, uses, and protects your information when you use our job application tracking service (the "Service"). We process personal data in line with the Nigeria Data Protection Act (NDPA) 2023 and applicable regulations.',
    ],
  },
  {
    title: "2. Information We Collect",
    body: [
      "Account information: name, email address, and password (stored as a secure hash) when you register.",
      "Application data you enter: job listings, application statuses, notes, and contacts you add for your own tracking.",
      "Uploaded files: resumes and related documents you choose to upload.",
      "Usage data: log data, device/browser information, and cookies used to keep you signed in and to understand how the Service is used.",
    ],
  },
  {
    title: "3. How We Use Your Information",
    body: [
      "To provide and maintain the Service \u2014 storing and displaying your job applications, contacts, and resumes.",
      "To authenticate you and keep your account secure.",
      "To send transactional emails (e.g. account verification, password resets) via our email delivery provider.",
      "To diagnose issues, improve performance, and develop new features.",
      "We do not sell your personal data, and we do not use your resume or application content for advertising.",
    ],
  },
  {
    title: "4. Legal Basis for Processing",
    body: [
      "We process your data based on your consent (when you register and agree to these terms), and our legitimate interest in operating and improving the Service.",
    ],
  },
  {
    title: "5. Cookies",
    body: [
      "We use essential cookies to maintain your login session (including cross-site cookie handling required by some browsers' tracking protections). We don't use third-party advertising or tracking cookies.",
    ],
  },
  {
    title: "6. Third-Party Service Providers",
    body: [
      "We share data only with providers necessary to run the Service, under their own data protection terms:",
      "\u2022 Hosting & infrastructure (backend and database hosting)",
      "\u2022 Frontend hosting/CDN",
      "\u2022 Transactional email delivery (Resend)",
      "These providers process data on our behalf and are not permitted to use it for their own purposes.",
    ],
  },
  {
    title: "7. Data Retention",
    body: [
      "We retain your account data and content for as long as your account is active. If you delete your account, we delete or anonymize your personal data within a reasonable period, except where retention is required by law.",
    ],
  },
  {
    title: "8. Your Rights",
    body: [
      "Under the NDPA, you have the right to access, correct, or delete your personal data, object to or restrict certain processing, and request a copy of your data in a portable format. To exercise any of these rights, contact us at " +
        CONTACT_EMAIL +
        ".",
    ],
  },
  {
    title: "9. Data Security",
    body: [
      "We use industry-standard measures to protect your data, including password hashing, access controls, and secure transmission (HTTPS). No system is completely secure, so we can't guarantee absolute security.",
    ],
  },
  {
    title: "10. Children's Privacy",
    body: [
      "The Service is not directed at children under 16, and we don't knowingly collect data from them. If you believe a child has provided us data, contact us and we'll remove it.",
    ],
  },
  {
    title: "11. International Data Transfers",
    body: [
      "Some of our service providers may process or store data outside Nigeria. Where this occurs, we take reasonable steps to ensure your data receives an equivalent level of protection.",
    ],
  },
  {
    title: "12. Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. Material changes will be communicated via email or an in-app notice before they take effect.",
    ],
  },
  {
    title: "13. Contact Us",
    body: [
      `For privacy questions or data requests, email us at ${CONTACT_EMAIL}.`,
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
        <Logo linkTo="/" />
        <h1 className="mt-2 text-3xl sm:text-4xl font-semibold">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Last updated: {LAST_UPDATED}
        </p>

        <div className="mt-12 space-y-10">
          {sections.map((s) => (
            <section key={s.title}>
              <h2 className="text-lg font-medium">{s.title}</h2>
              <div className="mt-3 space-y-3">
                {s.body.map((p, i) => (
                  <p
                    key={i}
                    className="text-[15px] leading-relaxed text-muted-foreground"
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
