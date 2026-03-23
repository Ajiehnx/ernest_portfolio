export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: "expert" | "advanced" | "intermediate" | "foundational";
  description?: string;
}

export const skillCategories: SkillCategory[] = [
  {
    id: "ai-automation",
    name: "AI, Automation & Digital Delivery",
    icon: "Cpu",
    skills: [
      { name: "AI Use Case Identification", level: "advanced", description: "Identifying and qualifying high-value AI opportunities" },
      { name: "Feasibility Analysis", level: "advanced", description: "Assessing technical and business viability" },
      { name: "Power Platform", level: "advanced", description: "Power Automate, Power Apps for workflow automation" },
      { name: "Data Readiness Assessment", level: "advanced", description: "Evaluating data quality and availability" },
      { name: "Responsible AI", level: "intermediate", description: "AI ethics, bias considerations, and governance" }
    ]
  },
  {
    id: "business-analysis",
    name: "Business Analysis & Change",
    icon: "FileSearch",
    skills: [
      { name: "Requirements Elicitation", level: "expert", description: "Workshops, interviews, and documentation" },
      { name: "User Stories & Acceptance Criteria", level: "expert", description: "Clear, testable requirements" },
      { name: "BPMN & Process Mapping", level: "expert", description: "As-is/to-be documentation" },
      { name: "UAT Planning & Coordination", level: "expert", description: "Test scenarios, defect triage, sign-off" },
      { name: "Change Management", level: "advanced", description: "Communications, training, adoption support" },
      { name: "Service Improvement", level: "advanced", description: "Continuous improvement frameworks" }
    ]
  },
  {
    id: "digital-onboarding",
    name: "Digital Onboarding & Conversational Support",
    icon: "MessageSquare",
    skills: [
      { name: "Digital Onboarding Journeys", level: "advanced", description: "End-to-end customer journey design" },
      { name: "ID&V/KYC Support Requirements", level: "advanced", description: "Identity verification and compliance" },
      { name: "Customer Help Flows", level: "advanced", description: "Self-service and escalation design" },
      { name: "Knowledge Base Structuring", level: "advanced", description: "Content taxonomy and response patterns" },
      { name: "Human Handoff & Escalation", level: "advanced", description: "Safe handover pathways" }
    ]
  },
  {
    id: "data-insight",
    name: "Data & Insight Delivery",
    icon: "BarChart3",
    skills: [
      { name: "Power BI Dashboarding", level: "expert", description: "Real-time dashboards and visualisations" },
      { name: "KPI Frameworks & ROI Tracking", level: "advanced", description: "Metrics definition and monitoring" },
      { name: "Data Validation", level: "advanced", description: "Quality checks and reconciliation" },
      { name: "Reporting Automation", level: "advanced", description: "Streamlined reporting workflows" },
      { name: "Excel & SQL Basics", level: "intermediate", description: "Data analysis and queries" }
    ]
  },
  {
    id: "project-delivery",
    name: "Project & Delivery Support",
    icon: "Kanban",
    skills: [
      { name: "Agile Delivery", level: "expert", description: "Azure DevOps, Jira workflow management" },
      { name: "Sprint Planning & Backlog Management", level: "expert", description: "Story refinement and prioritisation" },
      { name: "RAID/Action Logs", level: "expert", description: "Risk and issue tracking" },
      { name: "Status Reports & Governance Packs", level: "expert", description: "Stakeholder updates and steering" }
    ]
  },
  {
    id: "stakeholder",
    name: "Stakeholder Engagement",
    icon: "Users",
    skills: [
      { name: "Cross-Functional Facilitation", level: "expert", description: "Workshops across business and tech" },
      { name: "Senior Stakeholder Communication", level: "expert", description: "Executive updates and steering" },
      { name: "Workshop Leadership", level: "expert", description: "Discovery and requirements sessions" },
      { name: "Clear, Concise Documentation", level: "expert", description: "Professional deliverables" }
    ]
  }
];

export interface Tool {
  name: string;
  category: ToolCategory;
  proficiency: "expert" | "advanced" | "intermediate" | "foundational";
}

export type ToolCategory = 
  | "Analytics & Reporting"
  | "Process Mapping & Modelling"
  | "Automation & Workflows"
  | "Delivery & Collaboration"
  | "Methodologies"
  | "AI Awareness";

export const tools: Tool[] = [
  // Analytics & Reporting
  { name: "Power BI", category: "Analytics & Reporting", proficiency: "expert" },
  { name: "Excel", category: "Analytics & Reporting", proficiency: "expert" },
  { name: "SQL", category: "Analytics & Reporting", proficiency: "intermediate" },
  { name: "Tableau", category: "Analytics & Reporting", proficiency: "intermediate" },
  { name: "Python", category: "Analytics & Reporting", proficiency: "foundational" },
  { name: "R", category: "Analytics & Reporting", proficiency: "foundational" },
  
  // Process Mapping & Modelling
  { name: "BPMN", category: "Process Mapping & Modelling", proficiency: "expert" },
  { name: "Visio", category: "Process Mapping & Modelling", proficiency: "expert" },
  { name: "Lucidchart", category: "Process Mapping & Modelling", proficiency: "advanced" },
  { name: "Miro", category: "Process Mapping & Modelling", proficiency: "advanced" },
  
  // Automation & Workflows
  { name: "Power Automate", category: "Automation & Workflows", proficiency: "advanced" },
  { name: "Power Apps", category: "Automation & Workflows", proficiency: "advanced" },
  
  // Delivery & Collaboration
  { name: "Azure DevOps", category: "Delivery & Collaboration", proficiency: "expert" },
  { name: "Jira", category: "Delivery & Collaboration", proficiency: "advanced" },
  { name: "SharePoint", category: "Delivery & Collaboration", proficiency: "advanced" },
  { name: "MS Teams", category: "Delivery & Collaboration", proficiency: "expert" },
  { name: "Planner", category: "Delivery & Collaboration", proficiency: "advanced" },
  
  // Methodologies
  { name: "Agile", category: "Methodologies", proficiency: "expert" },
  { name: "Scrum", category: "Methodologies", proficiency: "advanced" },
  { name: "Waterfall", category: "Methodologies", proficiency: "advanced" },
  { name: "PRINCE2", category: "Methodologies", proficiency: "advanced" },
  
  // AI Awareness
  { name: "AI Use Case Scoping", category: "AI Awareness", proficiency: "advanced" },
  { name: "Ethical AI Considerations", category: "AI Awareness", proficiency: "intermediate" },
  { name: "AI Success Metrics", category: "AI Awareness", proficiency: "advanced" },
  { name: "Data Governance", category: "AI Awareness", proficiency: "advanced" }
];

export const toolCategories: ToolCategory[] = [
  "Analytics & Reporting",
  "Process Mapping & Modelling",
  "Automation & Workflows",
  "Delivery & Collaboration",
  "Methodologies",
  "AI Awareness"
];

export const getToolsByCategory = (category: ToolCategory): Tool[] => {
  return tools.filter(t => t.category === category);
};
