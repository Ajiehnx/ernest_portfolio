import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/layout/PageHeader";
import { ProjectsHub } from "@/components/projects/ProjectsHub";
import { Reveal } from "@/hooks/useScrollReveal";

const Projects = () => {
  return (
    <Layout>
      <PageHeader
        title="Projects"
        description="Detailed case studies demonstrating business analysis craft from discovery through requirements to delivery and outcomes."
      />

      <section className="py-20 md:py-28">
        <div className="container-wide">
          <Reveal>
            <ProjectsHub />
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
