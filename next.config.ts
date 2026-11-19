import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ["126.0.0.106", "126.0.0.102", "192.168.1.3", "192.168.1.4"],
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
