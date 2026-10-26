// TailoredProjectDevelopment

export type ProjectFeature = string;
export type SquashFeature = string;
export type InvoicingFeature = string;
export type challengesStep = {
  number: string;
  title: string;
  description: string;
};

export type TailoredProjectDevelopmentServices = {
  projectFeatures: ProjectFeature[];
  squashFeatures: SquashFeature[];
  invoicingFeatures: InvoicingFeature[];
  challengesSteps: challengesStep[];
};

export const tailoredProjectDevelopmentServices: TailoredProjectDevelopmentServices = {
  projectFeatures: [
    "Business requirements analysis",
    "Custom system design and development",
    "Workflow automation",
    "Data management and reporting",
  ],
  squashFeatures: [
    "Championship and tournament management",
    "Player registration and draw generation",
    "Player results and performance tracking",
    "Club transfers and disciplinary records",
    "Complete player history",
    "Performance analysis and reports",
  ],
  invoicingFeatures: [
    "Configurable service pricing and calculation rules",
    "Airline and aircraft-specific pricing",
    "Contract-based rates and discount percentages",
    "Airport-specific service configurations",
    "Multi-level operational reporting",
  ],
  challengesSteps: [
    {
      number: "01",
      title: "Understand",
      description: "Identify your operational needs and business challenges.",
    },
    {
      number: "02",
      title: "Design",
      description:
        "Define a solution that fits your processes and requirements.",
    },
    {
      number: "03",
      title: "Develop",
      description: "Build a system around your specific business workflows.",
    },
    {
      number: "04",
      title: "Deliver",
      description:
        "Provide a practical solution that supports daily operations.",
    },
  ],
};
