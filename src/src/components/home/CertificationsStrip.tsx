import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { CertificationCard } from "@/components/certifications/CertificationCard";
import { getCompletedCertifications } from "@/data/certifications";
import { Reveal } from "@/hooks/useScrollReveal";

export const CertificationsStrip = () => {
  const certifications = getCompletedCertifications().slice(0, 4);

  return (
    <section className="py-24 md:py-32 section-alt">
      <div className="container-wide">
        <Reveal direction="up">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
            <div>
              <span className="text-xs font-medium tracking-[0.25em] uppercase text-accent">Credentials</span>
              <h2 className="font-display text-title-lg md:text-display mt-4 leading-[1.1]">
                Professional <em className="italic">Certifications</em>
              </h2>
            </div>
            <Link
              to="/certifications"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:gap-3 transition-all group"
            >
              View all certifications
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <Reveal key={cert.id} delay={index * 120} direction="scale">
              <CertificationCard certification={cert} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
