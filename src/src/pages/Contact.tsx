import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { MapPin, Linkedin } from "lucide-react";
import { profile } from "@/data/profile";
import { Reveal } from "@/hooks/useScrollReveal";

const Contact = () => {
  return (
    <Layout>
      <PageHeader
        title="Contact"
        description="Open to conversations about Business Analyst, Senior BA, and transformation-focused opportunities."
      />

      <section className="py-20 md:py-28">
        <div className="container-wide max-w-2xl mx-auto text-center">
          <Reveal>
            <span className="text-xs font-medium tracking-[0.25em] uppercase text-accent">Get in Touch</span>
            <h2 className="font-display text-title-lg mt-4 leading-[1.1]">
              Let's <em className="italic">connect</em>
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex items-center justify-center gap-2 mt-6 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-accent" />
              {profile.location}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-8 text-foreground/70 leading-relaxed max-w-lg mx-auto">
              I welcome conversations about permanent, contract, and consulting opportunities where strong business analysis can improve delivery outcomes. LinkedIn is the best place to reach me directly.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2.5 rounded-none px-10 h-14 text-sm font-medium tracking-wide uppercase shadow-lg shadow-accent/15 active:scale-[0.97] transition-all"
                asChild
              >
                <a href={profile.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                  Message me on LinkedIn
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-12 border border-accent/20 bg-accent/[0.03] p-6 text-left">
              <p className="text-sm text-foreground/70 leading-relaxed">
                <strong className="text-foreground">Best fit:</strong> Business Analyst, Senior BA, digital transformation, service improvement, and AI-enabled change initiatives in the UK.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
