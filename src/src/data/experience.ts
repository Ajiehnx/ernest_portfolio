export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  dates: string;
  type: "full-time" | "contract" | "consulting";
  summary: string;
  achievements: Achievement[];
  skills: string[];
  tools: string[];
}

export interface Achievement {
  text: string;
  metric?: string;
}

export const experiences: Experience[] = [
  {
    id: "innoedge",
    title: "Business Analyst",
    company: "InnoEdge Limited",
    location: "United Kingdom",
    dates: "Sep 2024 – Present",
    type: "full-time",
    summary: "Spearheading the analysis and delivery of AI-powered automation initiatives, partnering with cross-functional teams to align solutions with business priorities.",
    achievements: [
      {
        text: "Spearheaded the analysis and delivery of 4+ AI-powered automation initiatives, partnering with cross-functional teams to align solutions with business priorities",
        metric: "4+ initiatives"
      },
      {
        text: "Produced user stories and process maps (BPMN), enabling development teams to deliver solutions with strong requirements traceability and minimal rework across sprints"
      },
      {
        text: "Managed delivery using Azure DevOps, maintaining 3 active product backlogs and supporting consistent sprint execution with clear change traceability",
        metric: "3 active backlogs"
      },
      {
        text: "Led 10+ workshops to identify opportunities and assess solution feasibility, resulting in qualified use cases progressing into delivery",
        metric: "10+ workshops"
      },
      {
        text: "Coordinated UAT with 15+ users, managing test scenarios, defect triage, and sign-off to support smooth deployments and adoption",
        metric: "15+ UAT participants"
      },
      {
        text: "Delivered change communications and onboarding materials, supporting a transition to improved digital workflows"
      },
      {
        text: "Contributed to internal guidance on AI ethics, data handling, and GDPR-aligned practices to support responsible delivery"
      }
    ],
    skills: [
      "AI Use Case Identification",
      "Requirements Elicitation",
      "BPMN Process Mapping",
      "UAT Coordination",
      "Agile Delivery",
      "Change Management"
    ],
    tools: ["Azure DevOps", "BPMN", "Miro", "Power Platform"]
  },
  {
    id: "intellinavix",
    title: "Business Data Analyst",
    company: "Intellinavix Limited",
    location: "United Kingdom",
    dates: "Jan 2024 – Aug 2024",
    type: "full-time",
    summary: "Designed and deployed real-time Power BI dashboards and standardised cross-functional performance reporting to enable data-driven decisions.",
    achievements: [
      {
        text: "Designed and deployed real-time Power BI dashboards for HR, Finance, and Operations, improving visibility of KPIs and enabling more informed, data-driven decisions",
        metric: "3 function dashboards"
      },
      {
        text: "Developed automated data validation and reconciliation checks that improved data quality and reduced reporting errors"
      },
      {
        text: "Standardised cross-functional performance reporting (definitions, templates, cadence), enabling earlier identification of delivery risks and dependency issues"
      },
      {
        text: "Provided analytical support for resource planning, forecasting, and scenario analysis, helping leaders respond more quickly to changing demand and priorities"
      }
    ],
    skills: [
      "Data Analysis",
      "Dashboard Design",
      "KPI Frameworks",
      "Data Validation",
      "Reporting Automation"
    ],
    tools: ["Power BI", "Excel", "SQL", "Tableau"]
  },
  {
    id: "aeriksoft",
    title: "Business Analyst",
    company: "Aeriksoft Solutions Limited",
    location: "United Kingdom",
    dates: "Mar 2023 – Dec 2023",
    type: "full-time",
    summary: "Supported delivery of enterprise digital projects by maintaining project artefacts and facilitating requirements workshops.",
    achievements: [
      {
        text: "Supported delivery of enterprise digital projects by maintaining key project artefacts, including RAID logs, stakeholder registers, and weekly status reports"
      },
      {
        text: "Facilitated requirements workshops and one-to-one sessions, translating insights into user stories and acceptance criteria to support accurate backlog planning"
      },
      {
        text: "Produced stakeholder-facing dashboards and narrative reports that increased transparency and supported timely decisions at key milestones"
      },
      {
        text: "Led coordination of user acceptance testing (test scenarios, defect tracking, sign-off), achieving strong defect resolution prior to go-live"
      }
    ],
    skills: [
      "Requirements Workshops",
      "User Stories",
      "RAID Management",
      "UAT Coordination",
      "Stakeholder Reporting"
    ],
    tools: ["Jira", "Excel", "SharePoint", "Visio"]
  },
  {
    id: "stresert",
    title: "Management Consultant",
    company: "StreSERT Integrated Limited (SIL)",
    location: "Nigeria / United Kingdom",
    dates: "Feb 2018 – Jun 2023",
    type: "consulting",
    summary: "Delivered consulting assignments focused on organisational change, business process improvement, and performance management across public and private sector clients.",
    achievements: [
      {
        text: "Delivered consulting assignments focused on organisational change, business process improvement, and performance management across public and private sector clients"
      },
      {
        text: "Coordinated multi-stakeholder initiatives in healthcare, education, and housing, aligning plans, risks, and communications with service delivery objectives"
      },
      {
        text: "Created reporting templates, dashboards, and performance scorecards adopted across the organisation, improving consistency and clarity of updates"
      },
      {
        text: "Supported leadership teams with audit preparation, programme evaluation, and lessons-learned reviews, feeding insights into improvement and implementation plans"
      },
      {
        text: "Contributed to cost–benefit analysis and organisational redesign work that improved service efficiency and user outcomes"
      }
    ],
    skills: [
      "Organisational Change",
      "Process Improvement",
      "Performance Management",
      "Stakeholder Engagement",
      "Programme Evaluation"
    ],
    tools: ["Excel", "PowerPoint", "Visio", "MS Project"]
  }
];

export interface Education {
  degree: string;
  institution: string;
  location: string;
  date: string;
  description?: string;
}

export const education: Education[] = [
  {
    degree: "Master of Business Administration",
    institution: "Quantic School of Business & Technology",
    location: "Washington, DC",
    date: "Nov 2021",
    description: "Executive MBA programme focused on business strategy and leadership"
  },
  {
    degree: "MSc – Human Physiology",
    institution: "University of Ibadan",
    location: "Nigeria",
    date: "Oct 2015"
  },
  {
    degree: "BSc – Biomedical Technology",
    institution: "Delta State University",
    location: "Nigeria",
    date: "Nov 2011"
  }
];
