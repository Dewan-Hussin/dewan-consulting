import {
  ClipboardCheck,
  FileSearch,
  Gauge,
  LucideIcon,
  SearchCheck,
} from "lucide-react";

export type AuditArea = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type AuditStage = {
  number: string;
  title: string;
  description: string;
};

export type ImplementationProjectAuditServices = {
  auditAreas: AuditArea[];
  auditStages: AuditStage[];
};

export const implementationProjectAuditServices: ImplementationProjectAuditServices = {
  auditAreas: [
    {
      icon: SearchCheck,
      title: "System Evaluation",
      description:
        "Evaluate available systems and identify the solution that best fits your company.",
    },
    {
      icon: ClipboardCheck,
      title: "Implementation Audit",
      description:
        "Review implementation activities to ensure every task follows the agreed plan.",
    },
    {
      icon: Gauge,
      title: "Milestone Monitoring",
      description:
        "Monitor deadlines, milestones, and the progress of each implementation stage.",
    },
    {
      icon: FileSearch,
      title: "Detailed Reporting",
      description:
        "Provide detailed reports covering the efficiency and completion of implemented tasks.",
    },
  ],
  auditStages: [
    {
      number: "01",
      title: "Evaluate",
      description:
        "Assess available systems against your company's requirements.",
    },
    {
      number: "02",
      title: "Audit",
      description:
        "Review the implementation plan, requirements, and project activities.",
    },
    {
      number: "03",
      title: "Monitor",
      description: "Follow every task and milestone to ensure timely delivery.",
    },
    {
      number: "04",
      title: "Report",
      description:
        "Deliver detailed findings and progress reports for informed decisions.",
    },
  ],
};
