// PayrollOutsourcing
import {
  Banknote,
  Building2,
  CalendarDays,
  ClipboardCheck,
  Files,
  FileSpreadsheet,
  Landmark,
  LucideIcon,
  ReceiptText,
  ShieldCheck,
  Users,
} from "lucide-react";

export type PayrollReport = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type PayrollStep = {
  number: string;
  title: string;
  description: string;
};

export type PayrollOutsourcingService = {
  payrollReports: PayrollReport[];
  benefits: string[];
  payrollSteps: PayrollStep[];
};

export const payrollOutsourcingService: PayrollOutsourcingService = {
  payrollReports: [
    {
      number: "01",
      title: "Review Reports",
      description:
        "Review employee data entries and verify the accuracy of payroll information.",
      icon: ClipboardCheck,
    },
    {
      number: "02",
      title: "Monthly Transactions",
      description:
        "A comprehensive overview of all employee transactions processed during the month.",
      icon: FileSpreadsheet,
    },
    {
      number: "03",
      title: "Detailed Salary Reports",
      description:
        "Detailed salary breakdowns organized by department, section, cost center, and job.",
      icon: Users,
    },
    {
      number: "04",
      title: "Salary Summary",
      description:
        "A consolidated monthly summary of payroll expenses and employee salaries.",
      icon: Banknote,
    },
    {
      number: "05",
      title: "Employee Pay Slips",
      description:
        "Individual salary statements prepared for clear and accurate employee communication.",
      icon: ReceiptText,
    },
    {
      number: "06",
      title: "Social Insurance Details",
      description:
        "Detailed social insurance reports organized by social insurance office.",
      icon: ShieldCheck,
    },
    {
      number: "07",
      title: "Social Insurance Summary",
      description:
        "A consolidated view of social insurance contributions and related obligations.",
      icon: Building2,
    },
    {
      number: "08",
      title: "Bank Transfer Reports",
      description:
        "Structured bank transfer reports to support accurate and efficient salary payments.",
      icon: Landmark,
    },
    {
      number: "09",
      title: "Bank Letters",
      description:
        "Payroll-related bank letters prepared to support your salary administration process.",
      icon: Files,
    },
    {
      number: "10",
      title: "Annual Leave Tracking",
      description:
        "Track employee annual leave balances and follow up on leave records.",
      icon: CalendarDays,
    },
    {
      number: "11",
      title: "Year-to-Date Reports",
      description:
        "Detailed and summarized salary reports covering the year-to-date period.",
      icon: FileSpreadsheet,
    },
  ],

  benefits: [
    "Confidential handling of payroll data",
    "Accurate and efficient salary calculations",
    "Reports tailored to your requirements",
  ],

  payrollSteps: [
    {
      number: "01",
      title: "Submit your data",
      description: "Provide the required employee and transaction data.",
    },
    {
      number: "02",
      title: "We process payroll",
      description: "Our team calculates salaries and prepares the reports.",
    },
    {
      number: "03",
      title: "Receive your reports",
      description: "Get organized payroll outputs tailored to your needs.",
    },
  ],
};
