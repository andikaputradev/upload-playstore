import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { serviceMetadata } from "@/lib/service-metadata";

export const metadata: Metadata = serviceMetadata("upload-play-store");

export default function UploadPlayStorePage() {
  return <ServicePage slug="upload-play-store" />;
}
