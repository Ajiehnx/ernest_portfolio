import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/layout/PageHeader";
import { SkillCategoryCard } from "@/components/skills/SkillCategoryCard";
import { ToolsMatrix } from "@/components/skills/ToolsMatrix";
import { skillCategories } from "@/data/skills";
import { Reveal } from "@/hooks/useScrollReveal";

const Skills = () => {
  return (
    <Layout>
      <PageHeader
        title="Skills & Tools"
        description="Comprehensive capability matrix spanning business analysis, data analytics, AI automation, and stakeholder engagement."
      />

      {/* Skill Categories */}
      <section className="py-20 md:py-28">
        <div className="container-wide">
          <Reveal>
            <div className="mb-14">
              <span className="text-xs font-medium tracking-[0.25em] uppercase text-accent">Expertise</span>
              <h2 className="font-display text-title-lg md:text-display mt-4 leading-[1.1]">
                Core <em className="italic">Competencies</em>
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Reveal key={category.id} delay={index * 80}>
                <SkillCategoryCard category={category} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Matrix */}
      <section className="py-20 md:py-28 border-t border-border/30">
        <div className="container-wide">
          <Reveal>
            <div className="mb-14">
              <span className="text-xs font-medium tracking-[0.25em] uppercase text-accent">Toolkit</span>
              <h2 className="font-display text-title-lg md:text-display mt-4 leading-[1.1]">
                Tools & <em className="italic">Technologies</em>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <ToolsMatrix />
          </Reveal>
        </div>
      </section>

      {/* Legend bar */}
      <section className="py-10 border-t border-border/30">
        <div className="container-wide flex items-center justify-center gap-8 text-xs text-muted-foreground/40">
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[1,2,3,4].map(n => <div key={n} className="w-1.5 h-4 bg-accent" />)}
            </div>
            <span>Expert</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[1,2,3,4].map(n => <div key={n} className={`w-1.5 h-4 ${n <= 3 ? 'bg-accent' : 'bg-border/30'}`} />)}
            </div>
            <span>Advanced</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[1,2,3,4].map(n => <div key={n} className={`w-1.5 h-4 ${n <= 2 ? 'bg-accent' : 'bg-border/30'}`} />)}
            </div>
            <span>Intermediate</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[1,2,3,4].map(n => <div key={n} className={`w-1.5 h-4 ${n <= 1 ? 'bg-accent' : 'bg-border/30'}`} />)}
            </div>
            <span>Foundational</span>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Skills;
