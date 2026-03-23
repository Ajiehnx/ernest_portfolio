export interface Insight {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: InsightCategory;
  readTime: string;
  date: string;
  content: string[];
  keyTakeaways: string[];
  relatedProjects?: string[];
}

export type InsightCategory = 
  | "AI & Automation"
  | "Business Analysis"
  | "Digital Transformation"
  | "Process Improvement"
  | "Data & Analytics";

export const insights: Insight[] = [
  {
    id: "ai-use-case-identification",
    slug: "ai-use-case-identification",
    title: "Identifying High-Value AI Use Cases: A Practical Framework",
    summary: "How to move from AI enthusiasm to qualified opportunities that deliver real business value, based on experience across multiple automation initiatives.",
    category: "AI & Automation",
    readTime: "5 min read",
    date: "2024",
    content: [
      "The challenge with AI initiatives is not finding ideas—it's finding the right ones. With hype around AI at an all-time high, organisations often struggle to distinguish between genuinely valuable automation opportunities and those that sound impressive but deliver little return.",
      "Through experience leading workshops and feasibility assessments, I've found that successful AI use cases share common characteristics: they address genuine pain points, have accessible data, and offer measurable outcomes.",
      "The key is structured discovery. Rather than starting with technology, start with business problems. Map processes, quantify inefficiencies, and then assess where AI could genuinely add value. This approach consistently surfaces higher-quality opportunities than technology-first thinking."
    ],
    keyTakeaways: [
      "Start with business problems, not technology solutions",
      "Assess data readiness before committing to AI approaches",
      "Quantify the problem to ensure measurable outcomes",
      "Consider responsible AI implications from the outset"
    ],
    relatedProjects: ["ai-automation-initiatives"]
  },
  {
    id: "digital-onboarding-pain-points",
    slug: "digital-onboarding-pain-points",
    title: "Common Digital Onboarding Pain Points and How to Address Them",
    summary: "Lessons from mapping end-to-end onboarding journeys in banking, including ID&V challenges, stage messaging, and exception handling.",
    category: "Digital Transformation",
    readTime: "6 min read",
    date: "2024",
    content: [
      "Digital onboarding should be seamless, but in practice, it's often where customer frustration peaks. Document upload failures, unclear status updates, and ID&V verification issues are common pain points that lead to abandonment and negative brand perception.",
      "Through detailed As-Is journey mapping across multiple touchpoints—customer, platform, operations, compliance—patterns emerge. Most issues stem from poor exception handling, unclear customer communications, and fragmented handoffs between automated and manual processes.",
      "The solution isn't always more technology. Often, it's clearer messaging, better error guidance, and structured escalation pathways. When customers understand what's happening and what they need to do, completion rates improve dramatically."
    ],
    keyTakeaways: [
      "Map journeys across all touchpoints, not just the customer-facing ones",
      "Focus on exception handling—that's where most friction occurs",
      "Clear stage messaging reduces anxiety and support calls",
      "Design handoffs between automated and manual processes explicitly"
    ],
    relatedProjects: ["digital-onboarding-improvement"]
  },
  {
    id: "requirements-traceability",
    slug: "requirements-traceability",
    title: "Why Requirements Traceability Matters for Agile Delivery",
    summary: "Maintaining clear links between business needs, user stories, and delivered features to reduce rework and improve stakeholder confidence.",
    category: "Business Analysis",
    readTime: "4 min read",
    date: "2024",
    content: [
      "In fast-moving Agile environments, it's tempting to skip traceability in favour of speed. But experience shows that clear links between business requirements, user stories, and delivered features significantly reduce rework and improve stakeholder confidence.",
      "Traceability doesn't mean bureaucracy. It means knowing why each story exists, what acceptance criteria matter, and how to verify that the delivered solution meets the original need. This clarity benefits developers, testers, and stakeholders alike.",
      "Tools like Azure DevOps and Jira make traceability manageable when set up thoughtfully. The investment pays off in reduced confusion, faster defect resolution, and clearer release communications."
    ],
    keyTakeaways: [
      "Link user stories to business requirements explicitly",
      "Use acceptance criteria that are testable and unambiguous",
      "Maintain traceability through to UAT and deployment",
      "Leverage tooling to reduce manual overhead"
    ],
    relatedProjects: ["ai-automation-initiatives", "learning-management-system"]
  },
  {
    id: "uat-best-practices",
    slug: "uat-best-practices",
    title: "Coordinating Effective UAT: Lessons from 15+ User Testing Sessions",
    summary: "Practical approaches to user acceptance testing that catch real issues and build stakeholder confidence before go-live.",
    category: "Business Analysis",
    readTime: "5 min read",
    date: "2024",
    content: [
      "User acceptance testing is often treated as a formality, but it's actually one of the most valuable quality gates in delivery. When coordinated well, UAT surfaces real-world issues that other testing misses and builds stakeholder confidence.",
      "Success depends on preparation: clear test scenarios that cover happy paths and edge cases, engaged users who understand what they're testing, and efficient defect triage that prioritises what matters for go-live.",
      "Communication is key. Users need context about what's changed, what to test, and how to report issues. A well-run UAT session is collaborative, not adversarial—everyone shares the goal of a successful deployment."
    ],
    keyTakeaways: [
      "Design test scenarios that cover real user journeys, including exceptions",
      "Brief users on context and expectations before testing",
      "Triage defects quickly—not everything blocks go-live",
      "Document outcomes and sign-off clearly for governance"
    ],
    relatedProjects: ["banking-onboarding-chatbot", "ai-automation-initiatives"]
  },
  {
    id: "power-bi-kpi-frameworks",
    slug: "power-bi-kpi-frameworks",
    title: "Building KPI Frameworks That Drive Decisions, Not Just Reports",
    summary: "Moving from data visualisation to actionable insights by focusing on the right metrics and stakeholder needs.",
    category: "Data & Analytics",
    readTime: "4 min read",
    date: "2024",
    content: [
      "A dashboard is only as useful as the decisions it enables. Too often, Power BI implementations focus on technical capability rather than business impact, resulting in impressive visualisations that no one uses.",
      "Effective KPI frameworks start with stakeholder needs: What decisions do they make? What information do they lack? What would help them act faster? The answers shape which metrics matter and how to present them.",
      "Consistency matters too. Standardised definitions across functions prevent confusion and enable meaningful comparison. When everyone agrees on what 'on-time delivery' means, the numbers become actionable."
    ],
    keyTakeaways: [
      "Start with decisions, not data—what actions should dashboards enable?",
      "Standardise KPI definitions across functions",
      "Design for the right audience—executives need different views than operators",
      "Build in data quality checks to maintain trust"
    ],
    relatedProjects: ["power-bi-dashboards"]
  },
  {
    id: "stakeholder-workshop-facilitation",
    slug: "stakeholder-workshop-facilitation",
    title: "Facilitating Workshops That Surface Real Requirements",
    summary: "Techniques for running discovery sessions that capture genuine needs rather than assumptions and wish lists.",
    category: "Business Analysis",
    readTime: "5 min read",
    date: "2024",
    content: [
      "Requirements workshops can easily become echo chambers where the loudest voices dominate and real needs get lost. Effective facilitation creates space for diverse perspectives and surfaces requirements that actually matter.",
      "Structure helps: clear objectives, time-boxed activities, and visual techniques like process mapping or affinity grouping keep sessions productive. But so does the facilitator's ability to probe, clarify, and challenge assumptions respectfully.",
      "The goal isn't just to capture what people say they want—it's to understand the underlying problems. Often, the first solution proposed isn't the right one. Good facilitation helps stakeholders explore alternatives before committing."
    ],
    keyTakeaways: [
      "Set clear objectives and share the agenda in advance",
      "Use visual techniques to engage different thinking styles",
      "Probe beyond initial requests to understand underlying needs",
      "Summarise and validate understanding before closing"
    ],
    relatedProjects: ["learning-management-system", "ai-automation-initiatives"]
  }
];

export const insightCategories: InsightCategory[] = [
  "AI & Automation",
  "Business Analysis",
  "Digital Transformation",
  "Process Improvement",
  "Data & Analytics"
];

export const getInsightBySlug = (slug: string): Insight | undefined => {
  return insights.find(i => i.slug === slug);
};

export const getInsightsByCategory = (category: InsightCategory): Insight[] => {
  return insights.filter(i => i.category === category);
};
