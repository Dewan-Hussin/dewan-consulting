import FreightAccountSystem from "@/public/images/products/FreightAccountSystem.jpg";
import PayrollSystem from "@/public/images/products/PayrollSystem.jpg";
import TimeAttendanceSystem from "@/public/images/products/TimeAttendanceSystem.jpg";
import WithholdingTaxSystem from "@/public/images/products/WithholdingTaxSystem.jpg";
import HRSystem from "@/public/images/products/HRSystem.jpg";
import TailoredProjects from "@/public/images/products/TailoredProjects.jpg";
import ProjectManagement from "@/public/images/products/ProjectManagement.jpg";
import GeneralLedger from "@/public/images/products/GeneralLedger.jpg";

export type Product = {
  id: string;
  title: string;
  description: string;
  href: string;
  pdfUrl: string;
  imgUrl: string;
  features: string[];
  subFeatures?: string[];
};

export const productsCard = [
  {
    id: "pCard01",
    title: "Freight Account System",
    description:
      "Freight account system is designed to simplify almost all the freight forwarders business operations.",
    href: "/products/freight-account-system",
    imgUrl: FreightAccountSystem.src,
    pdfUrl: "1",
    features: [
      "It enables the creation of data directories that includes the entire firm’s data of clients, agents, airlines, shipping lines, ports data, creditors, etc...",
      "The usage and analyzing of all the data directly.",
      "The Processing of all the company activities starting from the offer ending with the invoices’ collection/payment.",
      "Handles all the activities between company and four major forwarding and clearance partners (Clients, Agents, Carriers, and Other Creditors).",
      "Undergo all the business transactions such as; the offers, the operations, the invoices, the payments and a direct follow up of the process while it is still on action and after it is done",
      "Tracking and producing a professional documentation of each step of the operation",
      "It also generates a wide set of reports.",
    ],
  },
  {
    id: "pCard02",
    title: "Payroll System",
    description:
      "System is designed to facilitate Salary Components, Social Insurance, and Salary Tax calculations.",
    href: "/products/payroll-system",
    imgUrl: PayrollSystem.src,
    pdfUrl: "2",
    features: [
      "Review reports is a set of reports to review all the data entry for each employee.",
      "Monthly transactions report including all employees transactions.",
      "Monthly Salary Detailed Reports printed according to organization structure groups ( Sections, Department, Cost center, Jobs …)",
      "Monthly Salary Summary.",
      "Pay Slips.",
      "Social Insurance Detailed By Social Insurance Office.",
      "Social Insurance Summary.",
      "Bank Transfer Report",
      "Bank Letters",
      "Annual leave follow up",
      "Year to date Salary Detailed Year to date Salary Summary",
    ],
  },
  {
    id: "pCard03",
    title: "Time Attendance System",
    description:
      "A program that enables you to deal more efficintly with time attendance machines and register attendance directly.",
    href: "/products/time-attendance-system",
    imgUrl: TimeAttendanceSystem.src,
    pdfUrl: "3",
    features: [
      "The ability to apply multiple shifts, defining classes and overtime.",
      "The ability to use more than one working calendar.",
      "Specify compensation for each overtime types.",
      "Compiles Trend Information for Performance Evaluation by: Individual, Department or Division or Section, Category & Grade, Supervisor",
      "Time attendance system can be linked with any type of attendance machines; Magnetic card, Proximity card, Finger print, Face recognition and much more.",
      "Produces a wide set of reports that are crucial to the business process.",
    ],
  },
  {
    id: "pCard04",
    title: "Withholding Tax System",
    description:
      "Withholding tax system allows for entering the various invoices of the vendors, as well as calculating the withholding tax.",
    href: "/products/withholding-tax-system",
    imgUrl: WithholdingTaxSystem.src,
    pdfUrl: "4",
    features: [""],
  },
  {
    id: "pCard05",
    title: "HR System",
    description:
      "The HR system enables you to implement effective competency-based management across the full spectrum of HR.",
    href: "/products/hr-system",
    imgUrl: HRSystem.src,
    pdfUrl: "",
    features: [""],
  },
  {
    id: "pCard06",
    title: "Tailored Projects",
    description: "Service provides you a tailored system for your business.",
    href: "/products/tailored-projects",
    imgUrl: TailoredProjects.src,
    pdfUrl: "",
    features: [""],
  },
  {
    id: "pCard07",
    title: "Project Management",
    description:
      "From finding a good offer, to monitoring the implemintation plan.",
    href: "/products/project-management",
    imgUrl: ProjectManagement.src,
    pdfUrl: "",
    features: [""],
  },
  {
    id: "pCard08",
    title: "General Ledger",
    description:
      "The general ledger system manages the procedures for accurately entering, tracking, and maintaining information.",
    href: "/products/general-ledger",
    imgUrl: GeneralLedger.src,
    pdfUrl: "",
    features: [""],
  },
] as const satisfies readonly Product[];
