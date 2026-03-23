import { Experience as ExperienceType } from "@/data/experience";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPinned } from "lucide-react";

interface ExperienceCardProps {
  experience: ExperienceType;
  isLast?: boolean;
}

export const ExperienceCard = ({ experience, isLast }: ExperienceCardProps) => {
  return (
    <div className="relative pl-10 pb-12 last:pb-0">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[7px] top-3 bottom-0 w-[1px] bg-border/40" />
      )}

      {/* Timeline dot */}
      <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-[3px] border-accent bg-background" />

      {/* Card */}
      <div className="border border-border/40 border-l-[3px] border-l-accent bg-card p-6 md:p-8 hover:border-accent/30 hover:shadow-medium transition-all duration-500">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
          <div>
            <h3 className="font-display text-xl leading-tight">{experience.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{experience.company}</p>
          </div>
          <div className="flex flex-col sm:items-end gap-1 text-xs text-muted-foreground/60 shrink-0">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="h-3 w-3" />
              {experience.dates}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPinned className="h-3 w-3" />
              {experience.location}
            </span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed mb-5">
          {experience.summary}
        </p>

        {/* Achievements */}
        <ul className="space-y-3 mb-6">
          {experience.achievements.map((achievement, index) => (
            <li key={index} className="text-sm flex gap-3">
              <span className="shrink-0 w-[3px] bg-accent/30 rounded-full mt-1" />
              <span className="text-foreground/80 leading-relaxed">
                {achievement.text}
                {achievement.metric && (
                  <Badge variant="secondary" className="ml-2 text-[10px] tracking-wide uppercase rounded-none border border-accent/20 bg-accent/5 text-accent">
                    {achievement.metric}
                  </Badge>
                )}
              </span>
            </li>
          ))}
        </ul>

        {/* Tools */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-border/30">
          {experience.tools.map((tool) => (
            <span
              key={tool}
              className="text-[11px] text-muted-foreground border border-border/50 px-2.5 py-1"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
