import Logo from "@/components/logo/Logo";
import { Github, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="">
      <div className="max-w-7xl mx-auto px-6 py-4">
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4">
          {/* BRAND */}
          <div className="p-2 mr-1">
            <Logo />

            <p className="text-lg text-foreground mb-5">
              The ultimate tool to organize and track your job applications.
            </p>

            <div className="flex gap-4">
              <Twitter className="w-5 h-5 cursor-pointer" />
              <Linkedin className="w-5 h-5 cursor-pointer" />
              <Github className="w-5 h-5 cursor-pointer" />
            </div>
          </div>

          {/* PRODUCT */}
          <div className="">
            <h3 className="text-white font-semibold ">Product</h3>
            <ul className="space-y-3 text-lg">
              <li>
                <Link to="#">Features</Link>
              </li>
              <li>
                <Link to="#">Pricing</Link>
              </li>
              <li>
                <Link to="#">Use Cases</Link>
              </li>
              <li>
                <Link to="#">Roadmap</Link>
              </li>
            </ul>
          </div>

          {/* COMPANY */}
          <div className="">
            <h3 className="text-white font-semibold">Company</h3>
            <ul className="space-y-3 text-lg">
              <li>
                <Link to="#">About</Link>
              </li>
              <li>
                <Link to="#">Blog</Link>
              </li>
              <li>
                <Link to="#">Careers</Link>
              </li>
              <li>
                <Link to="#">Contact</Link>
              </li>
            </ul>
          </div>

          {/* RESOURCES */}
          <div className="">
            <h3 className="text-white font-semibold">Resources</h3>
            <ul className="space-y-3 text-lg">
              <li>
                <Link to="#">Help Center</Link>
              </li>
              <li>
                <Link to="#">API Documentation</Link>
              </li>
              <li>
                <Link to="#">Community</Link>
              </li>
              <li>
                <Link to="#">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t  mt-12 pt-6 text-lg text-center">
          © {new Date().getFullYear()} JobTrackr. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
