import { Certification } from "@/data/certifications";
import { Badge } from "@/components/ui/badge";
import {
  CalendarDays,
  ExternalLink,
  Crown,
  Workflow,
  BarChartBig,
  SearchCode,
  GraduationCap,
  ShieldCheck,
  Users,
  PackageCheck,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface CertificationCardProps {
  certification: Certification;
}

const certIconMap: Record<string, LucideIcon> = {
  "prince2-practitioner": Crown,
  "prince2-foundation": Crown,
  "lean-six-sigma-green": Workflow,
  "bcs-ba-practitioner": SearchCode,
  "certda": BarChartBig,
  "bcs-diploma": GraduationCap,
  "salesforce-ba": ShieldCheck,
  "salesforce-admin": ShieldCheck,
  "psm-i": Users,
  "pspo-i": PackageCheck,
};

export const CertificationCard = ({ certification }: CertificationCardProps) => {
  const isInProgress = certification.status === "in-progress";
  const Icon = certIconMap[certification.id] || GraduationCap;
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    if (isInProgress && certification.progress) {
      const timer = setTimeout(() => {
        setAnimatedProgress(certification.progress!);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isInProgress, certification.progress]);

  return (
    <div className={cn(
      "group h-full border bg-card p-6 md:p-8 transition-all duration-500",
      isInProgress
        ? "border-dashed border-border/50 hover:border-accent/30"
        : "border-border/40 border-l-[3px] border-l-accent hover:border-accent/40 hover:shadow-medium"
    )}>
      <div className="flex items-start gap-5">
        <div className={cn(
          "shrink-0 p-3 border transition-colors duration-300",
          isInProgress
            ? "border-border/40 bg-muted/50"
            : "border-accent/20 bg-accent/5 group-hover:bg-accent/10"
        )}>
          <Icon className={cn(
            "h-5 w-5",
            isInProgress ? "text-muted-foreground" : "text-accent"
          )} />
        </div>
        <div className="flex-1 space-y-2.5 min-w-0">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-lg leading-tight">{certification.name}</h3>
            {isInProgress ? (
              <Badge variant="secondary" className="rounded-none text-[10px] tracking-wider uppercase shrink-0 border border-border/50">
                In Progress
              </Badge>
            ) : (
              <Badge className="rounded-none text-[10px] tracking-wider uppercase shrink-0 bg-accent/10 text-accent border border-accent/20">
                Completed
              </Badge>
            )}
          </div>
          <p className="text-sm text-muted-foreground">{certification.issuer}</p>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground/50">
            <CalendarDays className="h-3 w-3" />
            {certification.date}
          </div>
          {certification.description && (
            <p className="text-sm text-muted-foreground/70 leading-relaxed pt-1">
              {certification.description}
            </p>
          )}

          {/* Progress bar */}
          {isInProgress && certification.progress != null && (
            <div className="pt-3 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground/50 tracking-wide uppercase text-[10px]">Progress</span>
                <span className="font-medium text-foreground tabular-nums">
                  {certification.progress}%
                </span>
              </div>
              <div className="relative h-1.5 w-full overflow-hidden bg-border/30">
                <div
                  className="h-full bg-accent transition-all duration-1000 ease-out"
                  style={{ width: `${animatedProgress}%` }}
                />
              </div>
            </div>
          )}

          {certification.credentialUrl && (
            <a
              href={certification.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline mt-2"
            >
              View credential
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
