import { Link } from "react-router-dom";
import { Linkedin, Github, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";

const footerLinks = [
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Skills", href: "/skills" },
  { label: "Certifications", href: "/certifications" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground" role="contentinfo">
      <div className="h-[2px] bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="container-wide py-12">
        <div className="flex flex-col sm:flex-row justify-between gap-10">
          <div className="space-y-4">
            <Link to="/" className="inline-block group">
              <h3 className="font-display text-2xl group-hover:text-accent transition-colors duration-300">
                {profile.displayName}
              </h3>
            </Link>
            <p className="text-xs text-primary-foreground/30 tracking-wide mt-1">
              Turning complex change into clear decisions, stronger requirements, and better delivery outcomes.
            </p>
            <div className="flex gap-2">
              {profile.socialLinks.linkedin && (
                <a
                  href={profile.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/icon p-2 border border-primary-foreground/[0.08] hover:border-accent/40 hover:bg-accent/5 transition-all duration-300"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin className="h-3.5 w-3.5 text-primary-foreground/30 group-hover/icon:text-accent transition-colors" />
                </a>
              )}
              {profile.socialLinks.github && (
                <a
                  href={profile.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/icon p-2 border border-primary-foreground/[0.08] hover:border-accent/40 hover:bg-accent/5 transition-all duration-300"
                  aria-label="GitHub profile"
                >
                  <Github className="h-3.5 w-3.5 text-primary-foreground/30 group-hover/icon:text-accent transition-colors" />
                </a>
              )}
            </div>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-2" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-[13px] text-primary-foreground/40 hover:text-accent transition-colors inline-flex items-center gap-1 group"
              >
                {link.label}
                <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="border-t border-primary-foreground/[0.06]">
        <div className="container-wide py-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-[11px] text-primary-foreground/20 tracking-wide">
            Copyright {currentYear} {profile.displayName}. All rights reserved.
          </p>
          <Link
            to="/privacy"
            className="text-[11px] text-primary-foreground/20 hover:text-primary-foreground/40 transition-colors tracking-wide"
          >
            Privacy Notice
          </Link>
        </div>
      </div>
    </footer>
  );
};
