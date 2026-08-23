import Logo from "@/components/logo/Logo";

const LAST_UPDATED = "August 13, 2026";
// TODO: replace with your real support/contact email before publishing
const CONTACT_EMAIL = "support@jobtrackrr.com";

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: [
      `These Terms of Service ("Terms") govern your access to and use of Job Trackrr (the "Service"), a job application tracking tool. By creating an account or using the Service, you agree to be bound by these Terms. If you do not agree, do not use the Service.`,
    ],
  },
  {
    title: "2. Eligibility",
    body: [
      "You must be at least 16 years old to use Job Trackrr. By using the Service, you confirm that you meet this requirement and that any information you provide is accurate.",
    ],
  },
  {
    title: "3. Description of Service",
    body: [
      "Job Trackrr lets you track job applications, store related contacts and notes, and upload your resume for organizational purposes. The Service is currently offered free of charge. We may introduce paid plans or features in the future, and we'll update these Terms and notify users before doing so.",
    ],
  },
  {
    title: "4. Your Account",
    body: [
      "You're responsible for maintaining the confidentiality of your login credentials and for all activity under your account. Notify us immediately if you suspect unauthorized access. You agree to provide accurate information when registering.",
    ],
  },
  {
    title: "5. Your Content",
    body: [
      'You retain ownership of the information you submit \u2014 job entries, contacts, notes, resumes, and other files ("User Content"). By uploading User Content, you grant us a limited license to store, process, and display it back to you solely to operate the Service.',
      "You're responsible for the accuracy and legality of the content you upload, including resumes and contact details of third parties you add for your own tracking purposes.",
    ],
  },
  {
    title: "6. Acceptable Use",
    body: [
      "You agree not to: use the Service for unlawful purposes; attempt to gain unauthorized access to our systems or other users' data; upload malware or harmful code; scrape or reverse-engineer the Service; or interfere with its normal operation.",
    ],
  },
  {
    title: "7. Intellectual Property",
    body: [
      "The Service, including its design, code, and branding, is owned by Job Trackrr and protected by applicable intellectual property laws. These Terms don't grant you any rights to our trademarks, logos, or underlying software beyond what's needed to use the Service normally.",
    ],
  },
  {
    title: "8. Third-Party Services",
    body: [
      "Job Trackrr relies on third-party providers to operate \u2014 including hosting, database, and transactional email providers. Your use of the Service is also subject to the extent those providers process your data on our behalf, as described in our Privacy Policy.",
    ],
  },
  {
    title: "9. Termination",
    body: [
      "You may stop using the Service and delete your account at any time. We may suspend or terminate accounts that violate these Terms or pose a security risk. Upon termination, your right to use the Service ends, though certain provisions (ownership, liability, governing law) survive.",
    ],
  },
  {
    title: "10. Disclaimers",
    body: [
      'The Service is provided "as is" and "as available," without warranties of any kind, express or implied. We don\u2019t guarantee the Service will be uninterrupted, error-free, or that it will help you secure employment.',
    ],
  },
  {
    title: "11. Limitation of Liability",
    body: [
      "To the fullest extent permitted by law, Job Trackrr and its operator will not be liable for any indirect, incidental, or consequential damages arising from your use of the Service, including loss of data or missed job opportunities.",
    ],
  },
  {
    title: "12. Governing Law",
    body: [
      "These Terms are governed by the laws of the Federal Republic of Nigeria, without regard to conflict-of-law principles. Any disputes arising from these Terms will be subject to the exclusive jurisdiction of the courts of Nigeria.",
    ],
  },
  {
    title: "13. Changes to These Terms",
    body: [
      "We may update these Terms from time to time. If changes are material, we'll notify you via email or an in-app notice. Continued use of the Service after changes take effect constitutes acceptance of the updated Terms.",
    ],
  },
  {
    title: "14. Contact",
    body: [`Questions about these Terms? Reach us at ${CONTACT_EMAIL}.`],
  },
];

export default function TermsOfService() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
        <Logo linkTo="/" />
        <h1 className="mt-2 text-3xl sm:text-4xl font-semibold text-white">
          Terms of Service
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
