import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { serviceMetadata } from "@/lib/service-metadata";

export const metadata: Metadata = serviceMetadata("pembuatan-aplikasi");

export default function PembuatanAplikasiPage() {
  return <ServicePage slug="pembuatan-aplikasi" />;
}
