import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SkillCategoryCard } from "@/components/skills/SkillCategoryCard";
import { skillCategories } from "@/data/skills";
import { Reveal } from "@/hooks/useScrollReveal";

export const SkillsSnapshot = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container-wide">
        <Reveal direction="up">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
            <div>
              <span className="text-xs font-medium tracking-[0.25em] uppercase text-accent">Expertise</span>
              <h2 className="font-display text-title-lg md:text-display mt-4 leading-[1.1]">
                Core <em className="italic">Capabilities</em>
              </h2>
            </div>
            <Link
              to="/skills"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:gap-3 transition-all group"
            >
              View full matrix
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.slice(0, 6).map((category, index) => (
            <Reveal key={category.id} delay={index * 100} direction={index < 3 ? "left" : "right"}>
              <SkillCategoryCard category={category} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
