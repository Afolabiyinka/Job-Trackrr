import { Target, BarChart3, TrendingUp, Users, Sparkles, Bell } from "lucide-react";

// Temporary placeholder screenshots. Replace with real imports later.
const placeholder = (label: string, mode: "light" | "dark") => {
  const bg = mode === "light" ? "#f4f4f5" : "#18181b";
  const bar = mode === "light" ? "#e4e4e7" : "#27272a";
  const fg = mode === "light" ? "#52525b" : "#a1a1aa";

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000" viewBox="0 0 1600 1000">
      <rect width="1600" height="1000" fill="${bg}"/>
      <rect x="0" y="0" width="1600" height="64" fill="${bar}"/>
      <rect x="0" y="64" width="240" height="936" fill="${bar}"/>
      <rect x="300" y="120" width="1240" height="140" rx="16" fill="${bar}"/>
      <rect x="300" y="300" width="600" height="300" rx="16" fill="${bar}"/>
      <rect x="940" y="300" width="600" height="300" rx="16" fill="${bar}"/>
      <rect x="300" y="640" width="1240" height="300" rx="16" fill="${bar}"/>
      <text x="800" y="520" font-family="sans-serif" font-size="56" font-weight="700"
        fill="${fg}" text-anchor="middle">${label}</text>
    </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

const img = (label: string) => ({
  light: placeholder(label, "light"),
  dark: placeholder(label, "dark"),
});

export const features = [
  {
    title: "Application Tracking",
    description:
      "Keep track of every application with detailed status updates and custom stages.",
    icon: Target,
    image: img("Application Tracking"),
  },
  {
    title: "Smart Reminders",
    description:
      "Never miss a follow-up with automated reminders and notifications.",
    icon: Bell,
    image: img("Smart Reminders"),
  },
  {
    title: "Analytics & Insights",
    description:
      "Visualize your job search progress with powerful analytics and metrics.",
    icon: BarChart3,
    image: img("Analytics & Insights"),
  },
  {
    title: "AI Document Insights",
    description:
      "Get AI-powered analysis of your CV and job documents with improvement suggestions and application scoring.",
    icon: Sparkles,
    image: img("AI Document Insights"),
  },
  {
    title: "Progress Tracking",
    description:
      "Monitor your job search success rate and identify areas for improvement.",
    icon: TrendingUp,
    image: img("Progress Tracking"),
  },
  {
    title: "Contact Management",
    description:
      "Keep track of recruiters, hiring managers, and networking connections.",
    icon: Users,
    image: img("Contact Management"),
  },
];