import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { serviceMetadata } from "@/lib/service-metadata";

export const metadata: Metadata = serviceMetadata("pembuatan-website");

export default function PembuatanWebsitePage() {
  return <ServicePage slug="pembuatan-website" />;
}
