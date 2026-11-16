import FreightAccountSystem from "@/public/images/products/FreightAccountSystem.webp";
import PayrollSystem from "@/public/images/products/PayrollSystem.webp";
import TimeAttendanceSystem from "@/public/images/products/TimeAttendanceSystem.webp";
import WithholdingTaxSystem from "@/public/images/products/WithholdingTaxSystem.webp";
import HRSystem from "@/public/images/products/HRSystem.webp";
import TailoredProjects from "@/public/images/products/TailoredProjects.webp";
import ProjectManagement from "@/public/images/products/ProjectManagement.webp";
import GeneralLedger from "@/public/images/products/GeneralLedger.webp";

export type Product = {
  id: string;
  title: string;
  href: string;
  description: string;
  longDescription?: string;
  pdfUrl?: string;
  imgUrl: string;
  listTitle?: string;
  list?: string[];
};

export const productsCard: Product[] = [
  {
    id: "pCard01",
    title: "Freight Account System",
    description:
      "Freight account system is designed to simplify almost all the freight forwarders business operations.",
    longDescription:
      "Freight account system is a system designed to simplify almost all the freight forwarders business operations. This system enables the users to eliminate paper work and organize all of the data used in all the freight/clearance operations and produce all the data in a well-designed progressive analytical format.",
    href: "/products/freight-account-system",
    imgUrl: FreightAccountSystem.src,
    pdfUrl: "/pdfs/freight.pdf",
    listTitle: "Features",
    list: [
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
    longDescription:
      "Payroll system is designed to facilitate Salary Components, Social Insurance, and Salary Tax calculations with all the details needed for the monthly transactions done. The payroll system also provides a wide set of reports that are needed for all the payroll procedures; these reports are also tailored to fit each client separately.",
    href: "/products/payroll-system",
    imgUrl: PayrollSystem.src,
    pdfUrl: "/pdfs/payroll.pdf",
    listTitle: "Reports",
    list: [
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
    longDescription:
      "The Time Attendance System is a program that enables you to deal more efficiently with time attendance machines and register attendance directly through the computer system. This system is a powerful tool for recording daily attendance (two clicks in a calendar and you’re done) and monitoring time-off balances all from the convenience of your desktop. With this information, you can spot attendance issues before they become a problem, and you have solid evidence for employee discipline or termination.",
    href: "/products/time-attendance-system",
    imgUrl: TimeAttendanceSystem.src,
    pdfUrl: "/pdfs/time.pdf",
    listTitle: "Features",
    list: [
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
    longDescription:
      "This system allows for entering the various invoices of the vendors, as well as calculating the withholding tax on the level of the various vendors’ activities and also summing all the invoices on the level of the different tax authorities.",
    href: "/products/withholding-tax-system",
    imgUrl: WithholdingTaxSystem.src,
    pdfUrl: "/pdfs/tax.pdf",
    listTitle: "Levels",
    list: [
      "The activity and the vendor.",
      " The company and the tax period.",
      "The monthly and yearly reports.",
      "As well as issuing the 40-41 tax forms.",
    ],
  },
  {
    id: "pCard05",
    title: "HR System",
    description:
      "The HR system enables you to implement effective competency-based management across the full spectrum of HR.",
    href: "/products/hr-system",
    imgUrl: HRSystem.src,
    longDescription:
      "From Pre-Hire to Retire; a Strategic Human Resource Management that works. The HR System enables you to implement effective competency-based management across the full spectrum of HR, from recruitment, selection and assessment processes, through learning and career development, performance management and succession planning systems. As, the rest of our systems, the HR system is designed as agile as possible and is highly customizable in order to fit our client’s needs.",
  },
  {
    id: "pCard06",
    title: "Tailored Projects",
    description: "Service provides you a tailored system for your business.",
    href: "/products/tailored-projects",
    imgUrl: TailoredProjects.src,
    longDescription:
      "Our Tailored Project Implementation Service provides you a tailored system for your business. Simply you come to us and tell us what your needs and your problems while undergoing your business operations and we use our knowledge to make the system that makes your life easier.",
    listTitle: "Features",
    list: [
      "Championship Management",
      "Player Registration & Management",
      "Tournament Draw Generation",
      "Player Performance Evaluation",
      "Match Results Tracking",
      "Player Transfers Between Clubs",
      "Player Penalties Management",
      "Complete Player History",
      "Performance Analytics",
      "Comprehensive Reports",
    ],
  },
  {
    id: "pCard07",
    title: "Project Management",
    description:
      "From finding a good offer, to monitoring the implemintation plan.",
    longDescription:
      "Implementing a project or buying a system and it’s a little out of your area of expertise, and scared of not being able to control the project! Don’t worry we provide a project management service. This is where we step in and manage the whole project. From finding a good offer, to monitoring the implementation plan and the deadlines of the project delivery and the training sessions required. Thus we relive you from the hazards of monitoring a newly acquired system while guaranteeing satisfactory results in the end.",
    href: "/products/project-management",
    imgUrl: ProjectManagement.src,
  },
  {
    id: "pCard08",
    title: "General Ledger",
    description:
      "The general ledger system manages the procedures for accurately entering, tracking, and maintaining information.",
    longDescription:
      "The General Ledger System manages the procedures for accurately entering, tracking, and maintaining information related to an organization’s financial operations. The system is suitable for any organization that needs a general ledger or cashbook provides unparalleled flexibility. All in account balances are calculated dynamically so that the standard accounting reports can be created for any arbitrary date or period without the need for a period close or roll over. General ledger tracks budget and actual financial data to produce financial statements such as an income statement, balance sheet, trial balance and the general ledger detailed report. It also has the ability to be linked to the Freight Account System in order to further simplify the work done by Freight companies.",
    href: "/products/general-ledger",
    imgUrl: GeneralLedger.src,
  },
];
