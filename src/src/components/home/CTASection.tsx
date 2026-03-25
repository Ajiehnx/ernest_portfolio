import { FileDown, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";
import { Reveal } from "@/hooks/useScrollReveal";

export const CTASection = () => {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground py-32 md:py-40">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-accent/[0.04] rounded-full blur-[160px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-0 left-[20%] w-[1px] h-full bg-gradient-to-b from-transparent via-primary-foreground/[0.04] to-transparent" />
        <div className="absolute top-0 right-[20%] w-[1px] h-full bg-gradient-to-b from-transparent via-primary-foreground/[0.04] to-transparent" />
      </div>
      <div className="relative container-wide text-center">
        <Reveal direction="scale">
          <span className="text-xs font-medium tracking-[0.25em] uppercase text-accent">Get in Touch</span>
          <h2 className="font-display text-display md:text-display-lg mt-6 mb-8 leading-[1.05]">
            Bring clarity to your next <em className="italic">delivery challenge</em>
          </h2>
          <p className="text-primary-foreground/50 max-w-lg mx-auto mb-12 text-lg leading-relaxed">
            If you need a Business Analyst who can shape requirements, align stakeholders, and keep delivery moving, let's start the conversation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2.5 rounded-none px-10 h-14 text-sm font-medium tracking-wide uppercase shadow-lg shadow-accent/15 active:scale-[0.97] transition-all"
              asChild
            >
              <a href={profile.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                Start a conversation
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/15 text-primary-foreground hover:bg-primary-foreground/5 gap-2.5 rounded-none px-10 h-14 text-sm font-medium tracking-wide uppercase active:scale-[0.97] transition-all"
              asChild
            >
              <a href={profile.cvDownloadUrl} target="_blank" rel="noopener noreferrer">
                <FileDown className="h-4 w-4" />
                View CV
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
