import { Sparkles, TrendingUp, ShieldCheck, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
import { Reveal } from "@/hooks/useScrollReveal";

const icons = [TrendingUp, ShieldCheck, Sparkles];

export const ValueProposition = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container-wide">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
          <Reveal direction="left">
            <div>
              <span className="text-xs font-medium tracking-[0.25em] uppercase text-accent">Why Work With Me</span>
              <h2 className="font-display text-title-lg md:text-display mt-4 leading-[1.1]">
                Bridging <em className="italic text-accent">business</em> & technology
              </h2>
            </div>
          </Reveal>
          <div className="space-y-0 divide-y divide-border/50">
            {profile.valueProposition.map((value, index) => {
              const Icon = icons[index % icons.length];
              return (
                <Reveal key={index} delay={index * 120} direction="right">
                  <div className="group flex items-start gap-6 py-7 first:pt-0 last:pb-0 cursor-default">
                    <div className="shrink-0 mt-1 p-2.5 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
                      <Icon className="h-4 w-4 text-accent" />
                    </div>
                    <div className="flex-1">
                      <p className="text-foreground/80 leading-relaxed">{value}</p>
                    </div>
                    <ArrowUpRight className="shrink-0 h-4 w-4 text-muted-foreground/30 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 mt-1" />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
