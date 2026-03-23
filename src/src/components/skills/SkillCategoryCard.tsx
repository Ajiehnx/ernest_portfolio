import { SkillCategory } from "@/data/skills";
import {
  BrainCircuit,
  SearchCode,
  Handshake,
  BarChart3,
  LayoutDashboard,
  UsersRound
} from "lucide-react";

interface SkillCategoryCardProps {
  category: SkillCategory;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Cpu: BrainCircuit,
  FileSearch: SearchCode,
  MessageSquare: Handshake,
  BarChart3,
  Kanban: LayoutDashboard,
  Users: UsersRound,
};

const levelBars: Record<string, number> = {
  expert: 4,
  advanced: 3,
  intermediate: 2,
  foundational: 1,
};

export const SkillCategoryCard = ({ category }: SkillCategoryCardProps) => {
  const Icon = iconMap[category.icon] || SearchCode;

  return (
    <div className="h-full group border border-border/40 bg-card p-6 md:p-8 hover:border-accent/40 hover:shadow-medium transition-all duration-500">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6 pb-5 border-b border-border/30">
        <div className="p-2.5 border border-accent/20 bg-accent/5 group-hover:bg-accent/10 transition-colors duration-300">
          <Icon className="h-5 w-5 text-accent" />
        </div>
        <h3 className="font-display text-lg leading-tight">{category.name}</h3>
      </div>

      {/* Skills list */}
      <ul className="space-y-4">
        {category.skills.map((skill) => (
          <li key={skill.name} className="flex items-center justify-between gap-3">
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{skill.name}</p>
            </div>
            {/* Level bars */}
            <div className="flex gap-1 shrink-0">
              {[1, 2, 3, 4].map((n) => (
                <div
                  key={n}
                  className={`w-2 h-5 transition-colors duration-300 ${
                    n <= levelBars[skill.level]
                      ? "bg-accent"
                      : "bg-border/30"
                  }`}
                />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
