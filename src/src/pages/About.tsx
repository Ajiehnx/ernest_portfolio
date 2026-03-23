import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/layout/PageHeader";
import { profile } from "@/data/profile";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Crosshair, HeartHandshake, Lightbulb, BadgeCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import profileHeadshot from "@/assets/profile-headshot-2.png";
import { Reveal } from "@/hooks/useScrollReveal";

const About = () => {
  return (
    <Layout>
      <PageHeader title="About Me" description={profile.headline} />

      {/* Summary with Photo */}
      <section className="py-16 md:py-24">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
            <Reveal direction="left">
              <div className="shrink-0 mx-auto md:mx-0">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden ring-1 ring-border/50 shadow-medium">
                  <img
                    src={profileHeadshot}
                    alt="Ernest Ajieh – Business Analyst"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="flex-1">
                <p className="text-sm font-semibold text-accent tracking-wide uppercase mb-2">Overview</p>
                <h2 className="text-title font-bold mb-6">Professional Summary</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {profile.summary}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="section-alt py-16 md:py-24">
        <div className="container-wide">
          <Reveal>
            <p className="text-sm font-semibold text-accent tracking-wide uppercase mb-2">Strengths</p>
            <h2 className="text-title font-bold mb-10">What I Bring</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {profile.strengths.map((strength, index) => {
              const icons = [Crosshair, Lightbulb, BadgeCheck, HeartHandshake];
              const Icon = icons[index % icons.length];

              return (
                <Reveal key={index} delay={index * 80}>
                  <Card className="border-border/30 rounded-xl shadow-soft hover:shadow-medium transition-[box-shadow] duration-300">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="shrink-0 p-3 rounded-xl bg-accent/10">
                          <Icon className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">{strength.title}</h3>
                          <p className="text-sm text-muted-foreground">{strength.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Domains */}
      <section className="py-16 md:py-24">
        <div className="container-wide">
          <Reveal>
            <p className="text-sm font-semibold text-accent tracking-wide uppercase mb-2">Sectors</p>
            <h2 className="text-title font-bold mb-6">Domains & Sectors</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl">
              Experience across diverse sectors, with particular depth in financial services,
              public sector, and enterprise digital transformation.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="flex flex-wrap gap-3">
              {profile.domains.map((domain) => (
                <Badge key={domain} variant="secondary" className="text-base px-5 py-2.5 rounded-full">
                  {domain}
                </Badge>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Approach */}
      <section className="section-alt py-16 md:py-24">
        <div className="container-wide">
          <Reveal>
            <p className="text-sm font-semibold text-accent tracking-wide uppercase mb-2">Philosophy</p>
            <h2 className="text-title font-bold mb-10">My Approach</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
            {[
              {
                title: "Clarity Over Complexity",
                text: "Requirements should be clear enough for developers to build and testers to verify. If it's not testable, it's not a requirement.",
              },
              {
                title: "Outcomes Over Outputs",
                text: "Delivering features isn't success—delivering value is. I focus on what the business actually needs, not just what was asked for.",
              },
              {
                title: "Collaboration Over Handoffs",
                text: "The best solutions emerge from genuine partnership between business and technology, not throwing documents over the wall.",
              },
            ].map((item, index) => (
              <Reveal key={index} delay={index * 100}>
                <div>
                  <h3 className="font-semibold mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container-wide text-center">
          <Reveal>
            <h2 className="text-title font-bold mb-4">Interested in Working Together?</h2>
            <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
              I'm open to UK-based Business Analyst opportunities. Let's discuss how I can
              contribute to your team.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="rounded-full gap-2 active:scale-[0.97] transition-all" asChild>
                <Link to="/contact">
                  Get in Touch
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full active:scale-[0.97] transition-all" asChild>
                <Link to="/projects">View My Work</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default About;
