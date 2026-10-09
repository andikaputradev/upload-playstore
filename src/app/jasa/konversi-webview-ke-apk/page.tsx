import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { serviceMetadata } from "@/lib/service-metadata";

export const metadata: Metadata = serviceMetadata("konversi-webview-ke-apk");

export default function KonversiWebviewKeApkPage() {
  return <ServicePage slug="konversi-webview-ke-apk" />;
}
