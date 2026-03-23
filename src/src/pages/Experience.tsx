import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/layout/PageHeader";
import { ExperienceCard } from "@/components/experience/ExperienceCard";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { experiences, education } from "@/data/experience";
import { Reveal } from "@/hooks/useScrollReveal";

const Experience = () => {
  return (
    <Layout>
      <PageHeader
        title="Experience"
        description="7+ years of business analysis and consulting experience across banking, public sector, and enterprise digital transformation."
      />

      {/* Work Experience */}
      <section className="py-20 md:py-28">
        <div className="container-wide">
          <Reveal>
            <div className="mb-14">
              <span className="text-xs font-medium tracking-[0.25em] uppercase text-accent">Career</span>
              <h2 className="font-display text-title-lg md:text-display mt-4 leading-[1.1]">
                Work <em className="italic">Experience</em>
              </h2>
            </div>
          </Reveal>
          <div className="max-w-4xl">
            {experiences.map((experience, index) => (
              <Reveal key={experience.id} delay={index * 100}>
                <ExperienceCard
                  experience={experience}
                  isLast={index === experiences.length - 1}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 md:py-28 border-t border-border/30">
        <div className="container-wide">
          <Reveal>
            <div className="mb-14">
              <span className="text-xs font-medium tracking-[0.25em] uppercase text-accent">Academic</span>
              <h2 className="font-display text-title-lg md:text-display mt-4 leading-[1.1]">
                Education
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <Reveal key={index} delay={index * 80}>
                <div className="group border border-border/40 bg-card p-6 md:p-8 hover:border-accent/40 hover:shadow-medium transition-all duration-500">
                  <div className="flex items-center gap-3 mb-5 pb-4 border-b border-border/30">
                    <div className="p-2 border border-accent/20 bg-accent/5">
                      <GraduationCap className="h-5 w-5 text-accent" />
                    </div>
                    <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground/50">
                      {edu.date}
                    </span>
                  </div>
                  <h3 className="font-display text-lg leading-tight mb-2">{edu.degree}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{edu.institution}</p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground/50">
                    <MapPin className="h-3 w-3" />
                    {edu.location}
                  </div>
                  {edu.description && (
                    <p className="text-sm text-muted-foreground/70 mt-4 pt-4 border-t border-border/20">
                      {edu.description}
                    </p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Experience;
