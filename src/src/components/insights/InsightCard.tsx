import { Link } from "react-router-dom";
import { Insight, InsightCategory } from "@/data/insights";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Timer } from "lucide-react";
import { cn } from "@/lib/utils";

interface InsightCardProps {
  insight: Insight;
}

const categoryStyles: Record<InsightCategory, string> = {
  "AI & Automation": "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300",
  "Business Analysis": "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  "Digital Transformation": "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
  "Process Improvement": "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
  "Data & Analytics": "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300",
};

export const InsightCard = ({ insight }: InsightCardProps) => {
  return (
    <Link to={`/insights/${insight.slug}`} className="block h-full">
      <Card className="h-full group cursor-pointer transition-all duration-300 hover:shadow-medium hover:-translate-y-1 border-border/30 rounded-xl overflow-hidden">
        <div className="h-1 bg-gradient-to-r from-accent to-accent/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <CardHeader className="pb-3">
          <Badge className={cn("w-fit rounded-full text-xs", categoryStyles[insight.category])}>
            {insight.category}
          </Badge>
        </CardHeader>
        <CardContent className="space-y-3">
          <h3 className="text-lg font-semibold leading-tight group-hover:text-accent transition-colors duration-200">
            {insight.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-3">
            {insight.summary}
          </p>
          <div className="flex items-center justify-between pt-2">
            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
              <Timer className="h-3.5 w-3.5" />
              {insight.readTime}
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent group-hover:gap-2.5 transition-all duration-200">
              Read
              <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
