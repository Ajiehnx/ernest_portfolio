import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { getFeaturedProjects } from "@/data/projects";
import { Reveal } from "@/hooks/useScrollReveal";

export const FeaturedProjects = () => {
  const featuredProjects = getFeaturedProjects();

  return (
    <section className="py-24 md:py-32 section-alt">
      <div className="container-wide">
        <Reveal direction="up">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
            <div>
              <span className="text-xs font-medium tracking-[0.25em] uppercase text-accent">Portfolio</span>
              <h2 className="font-display text-title-lg md:text-display mt-4 leading-[1.1]">
                Featured <em className="italic">Projects</em>
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:gap-3 transition-all group"
            >
              View all projects
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.slice(0, 6).map((project, index) => (
            <Reveal key={project.slug} delay={index * 100} direction={index % 2 === 0 ? "up" : "scale"}>
              <ProjectCard project={project} variant="featured" />
            </Reveal>
          ))}
        </div>

        <div className="sm:hidden mt-10 text-center">
          <Button variant="outline" className="rounded-none h-12 px-8 text-sm tracking-wide uppercase" asChild>
            <Link to="/projects">
              View all projects
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
