export interface Project {
  slug: string;
  title: string;
  summary: string;
  domain: Domain;
  role: string;
  dates: string;
  duration: string;
  teamSize: string;
  tools: string[];
  methods: string[];
  problem: string;
  objectives: Objective[];
  responsibilities: string[];
  discovery: DiscoverySection;
  approach: ApproachSection;
  deliverables: string[];
  outcomes: Outcome[];
  artefacts: Artefact[];
  tags: string[];
  featured: boolean;
  improvements: string[];
}

export interface Objective {
  objective: string;
  measure: string;
}

export interface DiscoverySection {
  stakeholders: string[];
  workshops: string;
  painPoints: string[];
  dataSources: string[];
}

export interface ApproachSection {
  asIs: string;
  toBe: string;
  prioritisation: string;
  governance: string;
}

export interface Outcome {
  metric: string;
  value: string;
  context?: string;
}

export interface Artefact {
  name: string;
  type: ArtefactType;
  description: string;
  downloadUrl?: string;
}

export type Domain =
  | "Banking"
  | "Public Sector"
  | "Consulting"
  | "Data/BI"
  | "LMS"
  | "Automation"
  | "Change";

export type ArtefactType =
  | "BPMN"
  | "User Stories"
  | "UAT"
  | "Dashboards"
  | "Operating Model"
  | "Change"
  | "Requirements"
  | "Blueprint";

export const projects: Project[] = [
  {
    slug: "digital-onboarding-improvement",
    title: "Digital Onboarding Improvement",
    summary:
      "End-to-end transformation of a commercial bank's customer onboarding journey, addressing ID&V pain points, exception handling, and stage messaging to reduce rework and improve customer experience.",
    domain: "Banking",
    role: "AI Business Analyst",
    dates: "Sep 2024 - Present",
    duration: "Ongoing",
    teamSize: "Cross-functional banking squad",
    tools: ["Azure DevOps", "BPMN", "Miro", "Visio"],
    methods: ["Agile", "Process Mapping", "Requirements Elicitation", "UAT Planning"],
    problem:
      "The existing digital onboarding journey suffered from multiple pain points: upload failures requiring customer retries, ID&V verification issues causing abandonment, unclear stage updates leaving customers confused about their application status, and rework loops between automated screening and manual review teams. These issues resulted in poor customer experience and operational inefficiency.",
    objectives: [
      {
        objective: "Reduce customer drop-off during onboarding",
        measure: "Success tracked through stronger funnel conversion and lower abandonment across key onboarding stages",
      },
      {
        objective: "Decrease ID&V retry rates",
        measure: "Judged by stronger first-time verification success and fewer customer retry attempts",
      },
      {
        objective: "Improve stage transparency for customers",
        measure: "Reflected in clearer stage visibility, fewer status-related enquiries, and better customer confidence",
      },
      {
        objective: "Reduce manual review rework",
        measure: "Success measured by fewer avoidable handoffs, reduced duplicate checks, and smoother progression through manual review",
      },
    ],
    responsibilities: [
      "Mapped the end-to-end onboarding journey (As-Is) across customer, platform, automated checks/rules, onboarding ops/KYC, compliance/fraud, and customer support touchpoints",
      "Identified pain points and rework loops (e.g., upload failures, ID&V retries, unclear stage updates)",
      "Translated findings into prioritised requirements and user stories",
      "Defined To-Be process improvements including clearer stage messaging and exception handling",
      "Produced a delivery-ready requirements pack aligned to GDPR data minimisation",
    ],
    discovery: {
      stakeholders: [
        "Onboarding Operations Team",
        "KYC/Compliance Team",
        "Fraud Prevention Team",
        "Customer Support Team",
        "Digital Product Team",
        "Technology/Platform Team",
      ],
      workshops:
        "Facilitated workshops across operational and technology teams to map current state and identify improvement opportunities",
      painPoints: [
        "Document upload failures requiring multiple customer attempts",
        "ID&V verification errors causing high retry rates",
        "Unclear application stage updates leading to customer confusion",
        "Handoff issues between automated screening and manual review",
        "Inconsistent exception handling across different failure scenarios",
      ],
      dataSources: [
        "Customer journey analytics",
        "Drop-off rate data",
        "ID&V success/failure logs",
        "Customer support ticket analysis",
        "Manual review queue metrics",
      ],
    },
    approach: {
      asIs:
        "Documented the complete As-Is journey covering six swim lanes: Customer, Digital Platform, Automated Checks/Rules Engine, Onboarding Ops/KYC, Compliance/Fraud, and Customer Support. Identified handoff points, decision gates, and failure scenarios at each stage.",
      toBe:
        "Designed To-Be process incorporating clearer stage messaging for customers, structured exception handling pathways, improved handoffs between automated and manual processes, and GDPR-compliant data handling. Defined clear escalation routes and SLA expectations.",
      prioritisation:
        "MoSCoW prioritisation applied to requirements, with critical path items such as ID&V improvements and stage messaging treated as Must Have for the initial release.",
      governance:
        "Delivery tracked through Azure DevOps with regular stakeholder reviews, RAID log maintenance, and sprint ceremonies.",
    },
    deliverables: [
      "As-Is and To-Be process maps (BPMN)",
      "Epics and user stories with acceptance criteria",
      "Data requirements and control considerations",
      "GDPR-aligned customer communication templates",
      "Exception handling decision trees",
    ],
    outcomes: [
      {
        metric: "Swim lanes mapped",
        value: "6",
        context: "The onboarding journey was mapped across customer, platform, automated checks, operations, compliance, and support touchpoints.",
      },
      {
        metric: "Stakeholder groups aligned",
        value: "6",
        context: "Discovery brought together the operational, product, compliance, fraud, support, and technology teams behind a shared improvement view.",
      },
      {
        metric: "Key pain points prioritised",
        value: "5",
        context: "The most critical onboarding friction points were translated into delivery-ready requirements and improvement priorities.",
      },
    ],
    artefacts: [
      {
        name: "As-Is Journey Map (BPMN)",
        type: "BPMN",
        description: "Complete end-to-end mapping of current onboarding process across all touchpoints",
      },
      {
        name: "To-Be Journey Design",
        type: "BPMN",
        description: "Redesigned process with improvements and exception handling",
      },
      {
        name: "User Stories & Acceptance Criteria",
        type: "User Stories",
        description: "Prioritised backlog of requirements organised by epic",
      },
      {
        name: "Data Requirements Document",
        type: "Requirements",
        description: "GDPR-aligned data handling and control requirements",
      },
    ],
    tags: ["Banking", "Digital Transformation", "Customer Journey", "KYC", "ID&V", "BPMN", "Agile"],
    featured: true,
    improvements: [
      "Implement real-time analytics dashboard to monitor onboarding funnel performance",
      "Explore AI-powered document verification to reduce manual review burden",
      "Develop A/B testing framework for stage messaging optimisation",
      "Create proactive customer communication triggers based on journey analytics",
    ],
  },
  {
    slug: "banking-onboarding-chatbot",
    title: "Banking Onboarding Support Chatbot",
    summary:
      "Designed a menu-led customer support chatbot to guide users through common onboarding queries, with structured knowledge base, escalation rules, and compliance guardrails.",
    domain: "Banking",
    role: "AI Business Analyst",
    dates: "Sep 2024 - Present",
    duration: "Ongoing",
    teamSize: "Cross-functional service and product team",
    tools: ["Azure DevOps", "Miro", "Knowledge Base Tools"],
    methods: ["Conversational Design", "User Research", "UAT Planning", "Compliance Review"],
    problem:
      "Customers navigating the digital onboarding journey frequently encountered issues requiring support - upload problems, ID&V troubleshooting, status queries - leading to high call volumes and inconsistent responses across support channels. There was no structured self-service option to resolve common queries quickly.",
    objectives: [
      {
        objective: "Reduce support call volume for common onboarding queries",
        measure: "Demonstrated by lower avoidable call volumes and fewer repeat support contacts",
      },
      {
        objective: "Ensure consistent, compliant customer responses",
        measure: "Confirmed through response quality assurance, policy alignment, and compliance sign-off",
      },
      {
        objective: "Improve customer self-service success rate",
        measure: "Shown by more customers resolving common issues without needing an agent handoff",
      },
    ],
    responsibilities: [
      "Designed customer support chatbot experience for onboarding queries",
      "Structured knowledge base and response patterns for consistency and compliance",
      "Built escalation rules for out-of-scope queries, repeated failures, and risk flags",
      "Created test scenarios and UAT checks covering happy paths, error states, and escalation routes",
    ],
    discovery: {
      stakeholders: ["Customer Support Team", "Digital Product Team", "Compliance Team", "Operations Team"],
      workshops: "Analysed common support queries and failure patterns to inform chatbot design",
      painPoints: [
        "High volume of repetitive queries about onboarding status",
        "Inconsistent responses across different support agents",
        "Lack of structured escalation for complex issues",
        "Customer frustration with wait times for simple queries",
      ],
      dataSources: [
        "Customer support ticket analysis",
        "Call centre query categorisation",
        "Common failure pattern data",
        "Customer feedback and complaints",
      ],
    },
    approach: {
      asIs:
        "Reviewed existing support channels and identified most common query types: upload help, ID&V troubleshooting, progress-stage guidance, and contact options. Mapped current escalation paths and identified gaps.",
      toBe:
        "Designed a menu-led chatbot experience with structured response patterns, compliance guardrails, and clear escalation pathways for complex or sensitive queries. Incorporated safe handover to human agents for risk flags or repeated failures.",
      prioritisation:
        "Prioritised high-volume, low-complexity queries for automation, with clear escalation for anything requiring human judgement.",
      governance: "Compliance review of all responses and regular review cycles for knowledge base accuracy.",
    },
    deliverables: [
      "Chatbot conversation flows and decision trees",
      "Knowledge base structure and response templates",
      "Escalation rules and handoff protocols",
      "UAT test scenarios (happy paths, errors, escalations)",
      "Compliance review documentation",
    ],
    outcomes: [
      {
        metric: "Core query paths designed",
        value: "4",
        context: "The chatbot experience was structured around the highest-volume onboarding support journeys, including upload help, ID&V troubleshooting, status guidance, and escalation routes.",
      },
      {
        metric: "Stakeholder teams aligned",
        value: "4",
        context: "Customer support, product, compliance, and operations teams were aligned around chatbot scope, content, and escalation rules.",
      },
      {
        metric: "Conversation artefacts produced",
        value: "4",
        context: "The delivery pack included flow designs, knowledge structures, escalation rules, and a full UAT test pack.",
      },
    ],
    artefacts: [
      {
        name: "Chatbot Conversation Flows",
        type: "Blueprint",
        description: "Visual decision trees for all supported query types",
      },
      {
        name: "Knowledge Base Structure",
        type: "Requirements",
        description: "Organised content taxonomy with response templates",
      },
      {
        name: "Escalation Rules Document",
        type: "Requirements",
        description: "Criteria and pathways for human handoff",
      },
      {
        name: "UAT Test Pack",
        type: "UAT",
        description: "Comprehensive test scenarios covering all conversation paths",
      },
    ],
    tags: ["Banking", "Conversational AI", "Customer Support", "Chatbot", "Compliance", "UAT"],
    featured: true,
    improvements: [
      "Implement sentiment analysis to proactively escalate frustrated customers",
      "Add multi-language support for diverse customer base",
      "Integrate with CRM for personalised context in conversations",
      "Develop analytics dashboard for continuous improvement insights",
    ],
  },
  {
    slug: "learning-management-system",
    title: "Learning Management System (LMS)",
    summary:
      "Comprehensive requirements elicitation and discovery for a training delivery platform, covering learner journeys, course taxonomy, assessments, and admin workflows.",
    domain: "LMS",
    role: "AI Business Analyst",
    dates: "Sep 2024 - Present",
    duration: "Ongoing",
    teamSize: "Business, L&D, and technology stakeholders",
    tools: ["Azure DevOps", "Miro", "Jira"],
    methods: ["Requirements Elicitation", "User Story Mapping", "Process Mapping", "Vendor Evaluation Support"],
    problem:
      "The organisation required a structured approach to training delivery but lacked a cohesive system for managing learner journeys, course content, assessments, and completion tracking. Existing processes were fragmented and difficult to audit.",
    objectives: [
      {
        objective: "Establish clear learner journey framework",
        measure: "Visible in smoother learner journeys, fewer manual workarounds, and better completion oversight",
      },
      {
        objective: "Enable consistent course delivery and tracking",
        measure: "Reflected in more reliable completion tracking, reporting accuracy, and audit readiness",
      },
      {
        objective: "Support phased delivery and vendor evaluation",
        measure: "Demonstrated by strong requirements coverage and clearer evaluation of vendor fit against priority needs",
      },
    ],
    responsibilities: [
      "Elicited and documented LMS requirements covering learner journeys, course catalogue/taxonomy, enrolment rules, assessments, completion tracking, reporting, and admin workflows",
      "Defined roles and permissions (e.g., learner, facilitator, admin)",
      "Captured non-functional requirements (security, access, performance, auditability, data protection)",
      "Produced user stories, acceptance criteria, and a prioritised backlog to support phased delivery",
    ],
    discovery: {
      stakeholders: [
        "Learning & Development Team",
        "HR/People Team",
        "IT/Technology Team",
        "Compliance Team",
        "Business Unit Representatives",
      ],
      workshops:
        "Facilitated requirements workshops to understand learner needs, admin workflows, and compliance requirements",
      painPoints: [
        "Fragmented training records across multiple systems",
        "Difficulty tracking mandatory training completion",
        "Limited reporting and audit capabilities",
        "Inconsistent course delivery and quality",
      ],
      dataSources: [
        "Existing training records",
        "Compliance requirements",
        "User feedback from current processes",
        "Industry best practices",
      ],
    },
    approach: {
      asIs:
        "Documented the current state of training delivery including manual processes, system gaps, and pain points across learner, facilitator, and admin perspectives.",
      toBe:
        "Defined comprehensive LMS requirements including course catalogue taxonomy, enrolment automation, assessment frameworks, completion tracking, and reporting dashboards.",
      prioritisation:
        "User stories were prioritised to support phased delivery, with core learner journeys and compliance tracking treated as Phase 1 priorities.",
      governance:
        "Requirements were managed through Azure DevOps with regular stakeholder reviews and traceability maintained throughout discovery.",
    },
    deliverables: [
      "Requirements specification document",
      "User stories with acceptance criteria",
      "Role and permission matrix",
      "Non-functional requirements (NFRs)",
      "Prioritised product backlog",
      "Vendor evaluation criteria (where applicable)",
    ],
    outcomes: [
      {
        metric: "Stakeholder groups engaged",
        value: "5",
        context: "Requirements were shaped with input from learning, people, technology, compliance, and business representatives.",
      },
      {
        metric: "Delivery artefacts prepared",
        value: "6",
        context: "The LMS discovery produced a structured specification, backlog, role matrix, NFRs, vendor criteria, and supporting documentation.",
      },
    ],
    artefacts: [
      {
        name: "Requirements Specification",
        type: "Requirements",
        description: "Comprehensive LMS requirements document",
      },
      {
        name: "User Stories & Acceptance Criteria",
        type: "User Stories",
        description: "Detailed backlog with clear acceptance criteria",
      },
      {
        name: "Role & Permission Matrix",
        type: "Requirements",
        description: "RACI-style matrix for system roles",
      },
      {
        name: "Non-Functional Requirements",
        type: "Requirements",
        description: "Security, performance, and compliance NFRs",
      },
    ],
    tags: ["LMS", "Training", "Requirements", "User Stories", "Process Mapping"],
    featured: true,
    improvements: [
      "Develop learning analytics framework for insights into learner progress",
      "Explore integration with HR systems for automated enrolment",
      "Consider mobile learning experience for on-the-go access",
      "Plan gamification features to improve engagement",
    ],
  },
  {
    slug: "ai-automation-initiatives",
    title: "AI-Powered Automation Initiatives",
    summary:
      "Led analysis and delivery of multiple AI automation projects, from use case identification through to UAT and deployment, with strong requirements traceability and stakeholder engagement.",
    domain: "Automation",
    role: "AI Business Analyst",
    dates: "Sep 2024 - Present",
    duration: "Ongoing",
    teamSize: "Cross-functional teams",
    tools: ["Azure DevOps", "Power Platform", "BPMN", "Miro"],
    methods: ["Agile", "Use Case Analysis", "Feasibility Assessment", "UAT Coordination"],
    problem:
      "The organisation needed to identify and deliver AI-powered automation opportunities that aligned with business priorities while ensuring responsible AI practices and strong delivery governance.",
    objectives: [
      {
        objective: "Identify and qualify high-value AI use cases",
        measure: "4+ initiatives progressed to delivery",
      },
      {
        objective: "Ensure strong requirements traceability",
        measure: "Minimal rework across sprints",
      },
      {
        objective: "Coordinate effective UAT",
        measure: "15+ users engaged in testing",
      },
    ],
    responsibilities: [
      "Spearheaded analysis and delivery of 4+ AI-powered automation initiatives",
      "Produced user stories and process maps (BPMN) with strong requirements traceability",
      "Managed delivery using Azure DevOps, maintaining 3 active product backlogs",
      "Led 10+ workshops to identify opportunities and assess solution feasibility",
      "Coordinated UAT with 15+ users, managing test scenarios, defect triage, and sign-off",
      "Delivered change communications and onboarding materials",
      "Contributed to internal guidance on AI ethics, data handling, and GDPR-aligned practices",
    ],
    discovery: {
      stakeholders: ["Business Unit Leaders", "Technology Team", "Data Team", "Compliance/Legal", "End Users"],
      workshops: "Led 10+ workshops to identify automation opportunities and assess feasibility",
      painPoints: [
        "Manual processes consuming significant staff time",
        "Inconsistent process execution",
        "Limited visibility into process performance",
        "Need for faster, more accurate decision support",
      ],
      dataSources: [
        "Process performance data",
        "User feedback",
        "Industry benchmarks",
        "Technology capability assessments",
      ],
    },
    approach: {
      asIs:
        "Documented current manual processes and identified automation opportunities through structured feasibility analysis.",
      toBe:
        "Designed AI-powered solutions with clear requirements, responsible AI guardrails, and measurable success criteria.",
      prioritisation: "Use cases were prioritised based on business value, feasibility, and data readiness.",
      governance:
        "Delivery was managed through Azure DevOps with sprint planning, backlog management, and regular stakeholder reviews.",
    },
    deliverables: [
      "Use case documentation and feasibility assessments",
      "Process maps (BPMN)",
      "User stories and acceptance criteria",
      "UAT test scenarios and defect logs",
      "Change communications and training materials",
      "AI ethics and data handling guidance",
    ],
    outcomes: [
      {
        metric: "Initiatives delivered",
        value: "4+",
        context: "AI-powered automation projects progressed through delivery.",
      },
      {
        metric: "Workshops facilitated",
        value: "10+",
        context: "Sessions to identify and assess automation opportunities.",
      },
      {
        metric: "UAT participants",
        value: "15+",
        context: "Users engaged in testing and validation.",
      },
    ],
    artefacts: [
      {
        name: "Use Case Documentation",
        type: "Requirements",
        description: "Structured analysis of AI automation opportunities",
      },
      {
        name: "Process Maps (BPMN)",
        type: "BPMN",
        description: "Current and future state process documentation",
      },
      {
        name: "UAT Pack",
        type: "UAT",
        description: "Test scenarios, defect logs, and sign-off documentation",
      },
      {
        name: "AI Ethics Guidance",
        type: "Change",
        description: "Internal guidance on responsible AI practices",
      },
    ],
    tags: ["Automation", "AI", "Agile", "Azure DevOps", "UAT", "Change Management"],
    featured: true,
    improvements: [
      "Develop AI use case assessment framework for consistent evaluation",
      "Create automation benefits tracking dashboard",
      "Establish community of practice for AI delivery",
      "Expand responsible AI training across the organisation",
    ],
  },
  {
    slug: "power-bi-dashboards",
    title: "Real-Time Power BI Dashboards",
    summary:
      "Designed and deployed real-time dashboards for HR, Finance, and Operations, improving visibility of KPIs and enabling data-driven decisions.",
    domain: "Data/BI",
    role: "Business Data Analyst",
    dates: "Jan 2024 - Aug 2024",
    duration: "8 months",
    teamSize: "Multi-function reporting stakeholders",
    tools: ["Power BI", "Excel", "SQL"],
    methods: ["Data Analysis", "Dashboard Design", "Stakeholder Engagement", "KPI Definition"],
    problem:
      "Business leaders lacked timely visibility into key performance indicators across HR, Finance, and Operations. Reporting was manual, inconsistent, and often delayed, making it difficult to identify issues early or respond to changing priorities.",
    objectives: [
      {
        objective: "Improve KPI visibility across functions",
        measure: "Reflected in active stakeholder usage and recurring reliance on the dashboards for decision-making",
      },
      {
        objective: "Reduce reporting lag",
        measure: "Shown by faster reporting turnaround and more up-to-date KPI visibility",
      },
      {
        objective: "Improve data quality",
        measure: "Demonstrated by cleaner reconciliation results and fewer reporting discrepancies",
      },
    ],
    responsibilities: [
      "Designed and deployed real-time Power BI dashboards for HR, Finance, and Operations",
      "Developed automated data validation and reconciliation checks",
      "Standardised cross-functional performance reporting (definitions, templates, cadence)",
      "Provided analytical support for resource planning, forecasting, and scenario analysis",
    ],
    discovery: {
      stakeholders: ["HR Leadership", "Finance Team", "Operations Management", "IT/Data Team"],
      workshops: "Worked with each function to define KPIs, data sources, and reporting requirements",
      painPoints: [
        "Manual, time-consuming reporting processes",
        "Inconsistent KPI definitions across teams",
        "Delayed visibility into performance issues",
        "Data quality concerns impacting trust in reports",
      ],
      dataSources: [
        "HR systems",
        "Finance systems",
        "Operational databases",
        "Excel spreadsheets (consolidated)",
      ],
    },
    approach: {
      asIs:
        "Assessed current reporting processes and data sources across HR, Finance, and Operations. Identified gaps in data quality, consistency, and timeliness.",
      toBe:
        "Designed integrated Power BI dashboards with standardised KPI definitions, automated data refresh, and drill-down capabilities for each function.",
      prioritisation:
        "Prioritised high-impact KPIs with available data sources for the initial release.",
      governance:
        "Established reporting standards and data validation processes to maintain quality.",
    },
    deliverables: [
      "Power BI dashboards (HR, Finance, Operations)",
      "KPI definitions and data dictionaries",
      "Automated data validation checks",
      "Reporting standards documentation",
      "User training materials",
    ],
    outcomes: [
      {
        metric: "Dashboard deployment",
        value: "3 functions",
        context: "HR, Finance, and Operations dashboards delivered.",
      },
      {
        metric: "Functions covered",
        value: "3",
        context: "The reporting rollout delivered cross-functional visibility for HR, Finance, and Operations.",
      },
      {
        metric: "Reporting confidence strengthened",
        value: "Improved",
        context: "Validation checks and reconciliation routines increased trust in the reported figures and reduced reliance on manual correction.",
      },
    ],
    artefacts: [
      {
        name: "Power BI Dashboards",
        type: "Dashboards",
        description: "Real-time dashboards for HR, Finance, and Operations",
      },
      {
        name: "KPI Definitions",
        type: "Requirements",
        description: "Standardised KPI definitions and data dictionary",
      },
      {
        name: "Data Validation Framework",
        type: "Requirements",
        description: "Automated checks and reconciliation processes",
      },
    ],
    tags: ["Data/BI", "Power BI", "Dashboards", "KPIs", "Reporting", "Data Quality"],
    featured: false,
    improvements: [
      "Expand dashboard coverage to additional functions",
      "Implement predictive analytics for forecasting",
      "Develop self-service reporting capabilities",
      "Create executive summary dashboard with cross-functional view",
    ],
  },
  {
    slug: "consulting-assignments",
    title: "Management Consulting Assignments",
    summary:
      "Delivered consulting projects focused on organisational change, process improvement, and performance management across public and private sector clients.",
    domain: "Consulting",
    role: "Management Consultant",
    dates: "Feb 2018 - Jun 2023",
    duration: "5+ years",
    teamSize: "Varied by assignment",
    tools: ["Excel", "PowerPoint", "Visio", "MS Project"],
    methods: ["Business Process Improvement", "Organisational Change", "Performance Management", "Stakeholder Engagement"],
    problem:
      "Clients across healthcare, education, and housing sectors faced challenges with organisational efficiency, service delivery, and performance visibility. Many lacked structured approaches to change management and continuous improvement.",
    objectives: [
      {
        objective: "Improve organisational efficiency",
        measure: "Seen in leaner operating models, reduced waste, and stronger delivery performance",
      },
      {
        objective: "Enhance service delivery outcomes",
        measure: "Reflected in service improvement feedback, better stakeholder confidence, and clearer delivery outcomes",
      },
      {
        objective: "Establish performance management frameworks",
        measure: "Demonstrated by adoption of reporting frameworks and stronger use of performance insights in decision-making",
      },
    ],
    responsibilities: [
      "Delivered consulting assignments focused on organisational change, business process improvement, and performance management",
      "Coordinated multi-stakeholder initiatives in healthcare, education, and housing",
      "Created reporting templates, dashboards, and performance scorecards",
      "Supported leadership teams with audit preparation, programme evaluation, and lessons-learned reviews",
      "Contributed to cost-benefit analysis and organisational redesign work",
    ],
    discovery: {
      stakeholders: [
        "Executive Leadership",
        "Service Delivery Teams",
        "HR/People Teams",
        "Finance Teams",
        "External Partners",
      ],
      workshops:
        "Facilitated workshops and interviews to understand organisational challenges and improvement opportunities",
      painPoints: [
        "Fragmented service delivery processes",
        "Limited visibility into performance",
        "Resistance to organisational change",
        "Inefficient resource allocation",
      ],
      dataSources: [
        "Organisational data and reports",
        "Staff interviews and surveys",
        "Service delivery metrics",
        "Industry benchmarks",
      ],
    },
    approach: {
      asIs:
        "Assessed current organisational structures, processes, and performance frameworks to identify improvement opportunities.",
      toBe:
        "Designed improved processes, organisational structures, and performance management frameworks tailored to client needs.",
      prioritisation:
        "Recommendations were prioritised based on impact, feasibility, and stakeholder readiness.",
      governance:
        "Structured project governance with regular steering committees and progress reporting.",
    },
    deliverables: [
      "Organisational assessments and recommendations",
      "Process improvement documentation",
      "Performance scorecards and dashboards",
      "Change management plans",
      "Programme evaluation reports",
    ],
    outcomes: [
      {
        metric: "Sectors supported",
        value: "3+",
        context: "Assignments spanned healthcare, education, housing, and broader public-sector transformation work.",
      },
      {
        metric: "Engagement span",
        value: "5+ years",
        context: "Consulting work covered multi-year assignments across organisational change, process improvement, and performance management.",
      },
      {
        metric: "Performance frameworks embedded",
        value: "Multiple",
        context: "Scorecards, dashboards, and reporting frameworks were introduced to support more consistent performance management.",
      },
    ],
    artefacts: [
      {
        name: "Organisational Assessment",
        type: "Requirements",
        description: "Analysis and recommendations documentation",
      },
      {
        name: "Performance Scorecards",
        type: "Dashboards",
        description: "Templates adopted for performance tracking",
      },
      {
        name: "Change Management Plan",
        type: "Change",
        description: "Structured approach to organisational change",
      },
    ],
    tags: ["Consulting", "Public Sector", "Change Management", "Process Improvement", "Performance Management"],
    featured: false,
    improvements: [
      "Develop reusable assessment frameworks for common client challenges",
      "Create digital tools for performance scorecard management",
      "Establish knowledge sharing platform for consulting insights",
      "Expand sector-specific expertise and case study library",
    ],
  },
];

export const domains: Domain[] = [
  "Banking",
  "Public Sector",
  "Consulting",
  "Data/BI",
  "LMS",
  "Automation",
  "Change",
];

export const methods = [
  "Agile",
  "Waterfall",
  "Hybrid",
  "Scrum",
  "PRINCE2",
];

export const artefactTypes: ArtefactType[] = [
  "BPMN",
  "User Stories",
  "UAT",
  "Dashboards",
  "Operating Model",
  "Change",
  "Requirements",
  "Blueprint",
];

export const getFeaturedProjects = (): Project[] => {
  return projects.filter((p) => p.featured);
};

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((p) => p.slug === slug);
};

export const filterProjects = (
  domain?: Domain,
  method?: string,
  artefactType?: ArtefactType,
  searchQuery?: string
): Project[] => {
  return projects.filter((project) => {
    if (domain && project.domain !== domain) return false;
    if (method && !project.methods.includes(method)) return false;
    if (artefactType && !project.artefacts.some((a) => a.type === artefactType)) return false;
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        project.title.toLowerCase().includes(query) ||
        project.summary.toLowerCase().includes(query) ||
        project.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }
    return true;
  });
};
