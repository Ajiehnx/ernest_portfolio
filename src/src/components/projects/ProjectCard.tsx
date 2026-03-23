import { Link } from "react-router-dom";
import { ArrowUpRight, FolderKanban } from "lucide-react";
import { Project, Domain } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  variant?: "default" | "featured";
}

const domainAccents: Record<Domain, string> = {
  Banking: "border-l-[hsl(217,91%,60%)]",
  "Public Sector": "border-l-[hsl(160,84%,39%)]",
  Consulting: "border-l-[hsl(271,91%,65%)]",
  "Data/BI": "border-l-[hsl(199,89%,48%)]",
  LMS: "border-l-[hsl(25,95%,53%)]",
  Automation: "border-l-[hsl(346,77%,50%)]",
  Change: "border-l-accent",
};

export const ProjectCard = ({ project, variant = "default" }: ProjectCardProps) => {
  return (
    <Link to={`/projects/${project.slug}`} className="block h-full group">
      <div
        className={cn(
          "h-full relative border border-border/40 bg-card p-6 md:p-8",
          "border-l-[3px] transition-all duration-500",
          "hover:border-accent/40 hover:shadow-medium",
          domainAccents[project.domain]
        )}
      >
        {/* Top row */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-accent">
            {project.domain}
          </span>
          <ArrowUpRight className="h-4 w-4 text-muted-foreground/30 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
        </div>

        {/* Title */}
        <h3 className="font-display text-xl md:text-2xl leading-tight mb-3 group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>

        {/* Summary */}
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-6">
          {project.summary}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-3 text-xs text-muted-foreground/60 mb-4">
          <span>{project.role}</span>
          <span className="w-1 h-1 rounded-full bg-border" />
          <span>{project.dates}</span>
        </div>

        {/* Tools */}
        <div className="flex flex-wrap gap-2">
          {project.tools.slice(0, 4).map((tool) => (
            <span
              key={tool}
              className="text-[11px] text-muted-foreground border border-border/50 px-2.5 py-1"
            >
              {tool}
            </span>
          ))}
          {project.tools.length > 4 && (
            <span className="text-[11px] text-muted-foreground/50 px-1 py-1">
              +{project.tools.length - 4}
            </span>
          )}
        </div>

        {/* Bottom accent line on hover */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
      </div>
    </Link>
  );
};
