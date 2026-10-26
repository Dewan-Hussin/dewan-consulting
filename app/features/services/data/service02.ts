// ProjectManagement

export type ProjectStep = {
  number: string;
  title: string;
  description: string;
};

export type ManagedArea = string;

export type ProjectManagementService = {
  projectSteps: ProjectStep[];
  managedAreas: ManagedArea[];
};

export const projectManagementService: ProjectManagementService = {
  projectSteps: [
    {
      number: "01",
      title: "Select",
      description: "Find the right solution and evaluate suitable offers.",
    },
    {
      number: "02",
      title: "Plan",
      description:
        "Coordinate the implementation plan and project requirements.",
    },
    {
      number: "03",
      title: "Monitor",
      description: "Track progress, deadlines, and implementation activities.",
    },
    {
      number: "04",
      title: "Deliver",
      description:
        "Coordinate training sessions and ensure a successful handover.",
    },
  ],
  managedAreas: [
    "System & solution selection",
    "Implementation planning",
    "Project deadlines",
    "Implementation progress",
    "Training coordination",
    "Final delivery & handover",
  ],
};
