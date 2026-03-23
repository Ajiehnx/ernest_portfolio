import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/layout/PageHeader";
import { CertificationCard } from "@/components/certifications/CertificationCard";
import { getCompletedCertifications, getInProgressCertifications } from "@/data/certifications";
import { Reveal } from "@/hooks/useScrollReveal";

const Certifications = () => {
  const completed = getCompletedCertifications();
  const inProgress = getInProgressCertifications();

  return (
    <Layout>
      <PageHeader
        title="Certifications"
        description="Professional qualifications demonstrating commitment to continuous learning and industry best practices."
      />

      {/* Completed */}
      <section className="py-20 md:py-28">
        <div className="container-wide">
          <Reveal>
            <div className="mb-14">
              <span className="text-xs font-medium tracking-[0.25em] uppercase text-accent">Achieved</span>
              <h2 className="font-display text-title-lg md:text-display mt-4 leading-[1.1]">
                Completed <em className="italic">Certifications</em>
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {completed.map((cert, index) => (
              <Reveal key={cert.id} delay={index * 80}>
                <CertificationCard certification={cert} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* In Progress */}
      {inProgress.length > 0 && (
        <section className="py-20 md:py-28 border-t border-border/30">
          <div className="container-wide">
            <Reveal>
              <div className="mb-14">
                <span className="text-xs font-medium tracking-[0.25em] uppercase text-accent">In Progress</span>
                <h2 className="font-display text-title-lg md:text-display mt-4 leading-[1.1]">
                  Currently <em className="italic">Pursuing</em>
                </h2>
              </div>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {inProgress.map((cert, index) => (
                <Reveal key={cert.id} delay={index * 80}>
                  <CertificationCard certification={cert} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default Certifications;
