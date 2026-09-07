import Logo from "@/components/logo/Logo";
import { Github, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { footerSections } from "../utils/footer";

const Footer = () => {
  return (
    <footer className="border-t mt-10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-4">
        <div>
          <Logo />

          <p className="text-sm text-muted-foreground mt-4 mb-6">
            The ultimate tool to organize and track your job applications.
          </p>

          <div className="flex gap-4">
            <Twitter className="w-5 h-5 cursor-pointer hover:text-primary" />
            <Linkedin className="w-5 h-5 cursor-pointer hover:text-primary" />
            <Github className="w-5 h-5 cursor-pointer hover:text-primary" />
          </div>
        </div>

        {footerSections.map((section) => (
          <div key={section.title}>
            <h3 className="font-semibold mb-4">{section.title}</h3>

            <ul className="space-y-2 text-sm text-muted-foreground">
              {section.links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="hover:text-foreground transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
