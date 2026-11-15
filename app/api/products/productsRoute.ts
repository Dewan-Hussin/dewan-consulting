export type Product = {
  id: string;
  title: string;
  description: string;
  href: string;
};

export const servicesCard = [
  {
    id: "pCard01",
    title: "Freight Account System",
    description:
      "Freight account system is designed to simplify almost all the freight forwarders business operations.",
    href: "/products/freight-account-system",
  },
  {
    id: "pCard02",
    title: "Payroll System",
    description:
      "System is designed to facilitate Salary Components, Social Insurance, and Salary Tax calculations.",
    href: "/products/payroll-system",
  },
  {
    id: "pCard03",
    title: "Time Attendance System",
    description:
      "A program that enables you to deal more efficintly with time attendance machines and register attendance directly.",
    href: "/products/time-attendance-system",
  },
  {
    id: "pCard04",
    title: "Withholding Tax System",
    description:
      "Withholding tax system allows for entering the various invoices of the vendors, as well as calculating the withholding tax.",
    href: "/products/withholding-tax-system",
  },
] as const satisfies readonly Product[];
