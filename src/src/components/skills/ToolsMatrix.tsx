import { tools, toolCategories, getToolsByCategory } from "@/data/skills";

const proficiencyBorder: Record<string, string> = {
  expert: "border-accent bg-accent/5 text-accent",
  advanced: "border-foreground/30 bg-foreground/5 text-foreground",
  intermediate: "border-border bg-muted/50 text-muted-foreground",
  foundational: "border-border/50 bg-transparent text-muted-foreground/60",
};

export const ToolsMatrix = () => {
  return (
    <div className="space-y-12">
      {toolCategories.map((category) => {
        const categoryTools = getToolsByCategory(category);

        return (
          <div key={category}>
            <h3 className="font-display text-xl mb-5 pb-3 border-b border-border/30">
              {category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {categoryTools.map((tool) => (
                <div
                  key={tool.name}
                  className={`inline-flex items-center px-4 py-2.5 text-sm font-medium border transition-colors duration-300 hover:border-accent/50 ${
                    proficiencyBorder[tool.proficiency]
                  }`}
                >
                  {tool.name}
                </div>
              ))}
            </div>
          </div>
        );
      })}

      {/* Legend */}
      <div className="border-t border-border/30 pt-6">
        <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground/50 mb-4">Proficiency</p>
        <div className="flex flex-wrap gap-4">
          {(["expert", "advanced", "intermediate", "foundational"] as const).map((level) => (
            <div key={level} className="flex items-center gap-2">
              <div className={`w-3 h-3 border ${proficiencyBorder[level]}`} />
              <span className="text-xs text-muted-foreground capitalize">{level}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
