import { ReactNode } from "react";
import { Reveal } from "@/hooks/useScrollReveal";

interface PageHeaderProps {
  title: string;
  description: string;
  children?: ReactNode;
}

export const PageHeader = ({ title, description, children }: PageHeaderProps) => {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/[0.04] rounded-full blur-[140px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute top-0 left-[30%] w-[1px] h-full bg-gradient-to-b from-transparent via-primary-foreground/[0.04] to-transparent" />
      </div>
      <div className="relative container-wide">
        <Reveal>
          <span className="text-xs font-medium tracking-[0.25em] uppercase text-accent mb-6 block">
            {title}
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-display leading-[1.05] mb-6">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/50 max-w-2xl leading-relaxed">
            {description}
          </p>
          {children}
        </Reveal>
      </div>
    </section>
  );
};
