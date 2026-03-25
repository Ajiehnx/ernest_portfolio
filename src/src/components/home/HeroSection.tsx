import { Link } from "react-router-dom";
import { ArrowRight, FileDown, ArrowDownRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";
import { ProfileImageTransition } from "./ProfileImageTransition";
import { CustomCursor } from "./CustomCursor";
import { useEffect, useState } from "react";

export const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const reveal = (delay: number) =>
    `transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
      mounted ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-6 blur-[6px]"
    }`;

  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground min-h-[100vh] flex items-center cursor-none" data-custom-cursor>
      <CustomCursor />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary to-primary/90" />
        <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-accent/[0.04] rounded-full blur-[160px]" />
        <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-accent/[0.03] rounded-full blur-[120px]" />
        <div className="absolute top-0 right-[30%] w-[1px] h-[200vh] bg-gradient-to-b from-transparent via-accent/10 to-transparent rotate-[20deg] origin-top" />
        <div className="absolute top-0 right-[60%] w-[1px] h-[200vh] bg-gradient-to-b from-transparent via-primary-foreground/[0.03] to-transparent rotate-[20deg] origin-top" />
      </div>

      <div className="relative container-wide w-full pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="grid lg:grid-cols-[1.2fr_1fr] items-center gap-12 lg:gap-8">
          <div className="order-2 lg:order-1">
            <div className={`${reveal(0)} mb-6`} style={{ transitionDelay: "200ms" }}>
              <span className="text-xs font-medium tracking-[0.25em] uppercase text-accent">
                {profile.title}
              </span>
            </div>

            <h1
              className={`font-display text-5xl sm:text-6xl md:text-7xl lg:text-display-xl leading-[0.95] ${reveal(1)}`}
              style={{ transitionDelay: "350ms" }}
            >
              <span className="block">{profile.displayName.split(" ")[0]}</span>
              <span className="block italic text-accent">{profile.displayName.split(" ").slice(1).join(" ")}</span>
            </h1>

            <div
              className={`h-[1px] bg-accent/30 my-8 origin-left ${mounted ? "animate-line-grow" : "scale-x-0"}`}
              style={{ maxWidth: "200px", animationDelay: "600ms" }}
            />

            <p
              className={`text-lg md:text-xl text-primary-foreground/55 leading-relaxed max-w-xl ${reveal(3)}`}
              style={{ transitionDelay: "700ms", textWrap: "pretty" } as React.CSSProperties}
            >
              {profile.headline}
            </p>

            <div
              className={`flex gap-10 sm:gap-12 mt-10 ${reveal(4)}`}
              style={{ transitionDelay: "850ms" }}
            >
              {[
                { value: "7+", label: "Years" },
                { value: "10+", label: "Certifications" },
                { value: "15+", label: "Projects" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-3xl md:text-4xl text-accent tabular-nums leading-none">
                    {stat.value}
                  </div>
                  <div className="text-[10px] text-primary-foreground/30 font-medium tracking-[0.2em] uppercase mt-2">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div
              className={`flex flex-wrap gap-4 mt-12 ${reveal(5)}`}
              style={{ transitionDelay: "1000ms" }}
            >
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2.5 rounded-none px-10 h-14 text-sm font-medium tracking-wide uppercase shadow-lg shadow-accent/15 active:scale-[0.97] transition-all"
                asChild
              >
                <Link to="/projects">
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent/60 text-accent hover:bg-accent/10 gap-2.5 rounded-none px-10 h-14 text-sm font-medium tracking-wide uppercase active:scale-[0.97] transition-all"
                asChild
              >
                <a href={profile.cvDownloadUrl} target="_blank" rel="noopener noreferrer">
                  <FileDown className="h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-start lg:self-start lg:mt-8">
            <ProfileImageTransition mounted={mounted} />
          </div>
        </div>

        <div
          className={`mt-16 lg:mt-12 hidden lg:flex items-center gap-2 text-primary-foreground/20 ${reveal(6)}`}
          style={{ transitionDelay: "1200ms" }}
        >
          <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
          <ArrowDownRight className="h-4 w-4" />
        </div>
      </div>
    </section>
  );
};
