// app/api/home/services/route.ts

import servicesCard from "@/app/store/services.json";

export async function GET() {
  return Response.json(servicesCard);
}
