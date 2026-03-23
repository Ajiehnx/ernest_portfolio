import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ValueProposition } from "@/components/home/ValueProposition";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { SkillsSnapshot } from "@/components/home/SkillsSnapshot";
import { CertificationsStrip } from "@/components/home/CertificationsStrip";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ValueProposition />
      <FeaturedProjects />
      <SkillsSnapshot />
      <CertificationsStrip />
      <CTASection />
    </Layout>
  );
};

export default Index;
