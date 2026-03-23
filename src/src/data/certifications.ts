export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  status: "completed" | "in-progress";
  badge?: string;
  credentialUrl?: string;
  description?: string;
  progress?: number; // 0-100 for in-progress certs
}

export const certifications: Certification[] = [
  {
    id: "salesforce-ba",
    name: "Salesforce Certified Business Analyst",
    issuer: "Salesforce",
    date: "2026",
    status: "completed",
    description: "Certification validating expertise in Salesforce business analysis, requirements gathering, and solution design"
  },
  {
    id: "psm-i",
    name: "Professional Scrum Master (PSM-I)",
    issuer: "Scrum.org",
    date: "2026",
    status: "completed",
    description: "Industry-recognised certification demonstrating mastery of Scrum framework and servant-leadership principles"
  },
  {
    id: "pspo-i",
    name: "Professional Scrum Product Owner (PSPO-I)",
    issuer: "Scrum.org",
    date: "2026",
    status: "completed",
    description: "Certification proving proficiency in product ownership, backlog management, and value maximisation"
  },
  {
    id: "prince2-practitioner",
    name: "PRINCE2 Practitioner",
    issuer: "PeopleCert / Axelos",
    date: "2025",
    status: "completed",
    description: "Advanced project management certification demonstrating the ability to apply PRINCE2 methodology in real-world scenarios"
  },
  {
    id: "prince2-foundation",
    name: "PRINCE2 Foundation",
    issuer: "PeopleCert / Axelos",
    date: "2025",
    status: "completed",
    description: "Foundation-level certification in PRINCE2 project management methodology"
  },
  {
    id: "lean-six-sigma-green",
    name: "Lean Six Sigma Green Belt",
    issuer: "IASSC / Recognised Body",
    date: "2025",
    status: "completed",
    description: "Process improvement certification demonstrating proficiency in Lean Six Sigma tools and DMAIC methodology"
  },
  {
    id: "bcs-ba-practitioner",
    name: "BCS Practitioner Certificate in Business Analysis Practice",
    issuer: "BCS, The Chartered Institute for IT",
    date: "2024",
    status: "completed",
    description: "Professional certification validating advanced business analysis skills and knowledge"
  },
  {
    id: "certda",
    name: "ACCA Certificate in Data Analytics (CertDA)",
    issuer: "ACCA",
    date: "2024",
    status: "completed",
    description: "Certification in data analysis techniques, tools, and best practices"
  },
  {
    id: "salesforce-admin",
    name: "Salesforce Certified Platform Administrator",
    issuer: "Salesforce",
    date: "Expected 2026",
    status: "in-progress",
    progress: 65,
    description: "Platform administration certification covering configuration, security, and data management in Salesforce"
  },
  {
    id: "bcs-diploma",
    name: "BCS International Diploma in Business Analysis",
    issuer: "BCS, The Chartered Institute for IT",
    date: "In Progress",
    status: "in-progress",
    progress: 80,
    description: "Comprehensive qualification covering the full range of business analysis competencies"
  }
];

export const getCompletedCertifications = (): Certification[] => {
  return certifications.filter(c => c.status === "completed");
};

export const getInProgressCertifications = (): Certification[] => {
  return certifications.filter(c => c.status === "in-progress");
};
