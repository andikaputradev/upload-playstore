import type { Metadata } from "next";
import { ArrowUpRight, FolderGit2 } from "lucide-react";
import { TrackedCta } from "@/components/tracked-cta";
import { brand, waLink } from "@/lib/brand";
import { Breadcrumb } from "@/components/breadcrumb";

export const metadata: Metadata = {
  title: "Studi Kasus Publikasi Aplikasi Play Store",
  description:
    "Daftar studi kasus dan rekam jejak publikasi aplikasi Android ke Google Play Store bersama andikaputradev.",
  alternates: { canonical: "/studi-kasus" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: brand.name,
    url: "/studi-kasus",
    title: `Studi Kasus Publikasi Aplikasi Play Store | ${brand.name}`,
    description:
      "Daftar studi kasus dan rekam jejak publikasi aplikasi Android ke Google Play Store bersama andikaputradev.",
  },
  twitter: {
    card: "summary_large_image",
    title: `Studi Kasus Publikasi Aplikasi Play Store | ${brand.name}`,
    description:
      "Daftar studi kasus dan rekam jejak publikasi aplikasi Android ke Google Play Store bersama andikaputradev.",
  },
};

export default function StudiKasusPage() {
  const breadcrumbItems = [
    { label: "Beranda", href: "/" },
    { label: "Studi Kasus", href: "/studi-kasus" },
  ];

  return (
    <div className="relative isolate overflow-hidden bg-bg pb-20 pt-14 md:pb-28 md:pt-20">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="bg-grid absolute inset-0" />
      </div>
      <div className="mx-auto max-w-[1200px] px-6 md:px-16">
        <Breadcrumb items={breadcrumbItems} />
        <div className="max-w-[720px] mb-12">
          <h1 className="font-display text-[2.5rem] font-semibold leading-[1.03] tracking-[-0.035em] md:text-[4rem]">
            <span className="gold-text">Studi Kasus</span> <span className="fade-text">publikasi aplikasi</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-text-muted md:text-xl">
            Dokumentasi dan rekam jejak proses publikasi aplikasi Android ke Google Play Store bersama {brand.name}.
          </p>
        </div>

        <div className="frame p-10 md:p-14 text-center flex flex-col items-center justify-center max-w-2xl mx-auto">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-bg-elevated text-accent-text mb-5 shadow-inner">
            <FolderGit2 className="h-7 w-7" aria-hidden="true" />
          </div>
          <h2 className="text-xl md:text-2xl font-semibold font-display text-text mb-3">
            Studi kasus sedang dirangkum
          </h2>
          <p className="text-text-muted max-w-md mx-auto mb-8 text-base leading-relaxed">
            Halaman ini disiapkan untuk merangkum hasil kerja nyata dan dokumentasi rilis secara transparan tanpa klaim berlebihan. Jika kamu ingin berdiskusi langsung seputar aplikasimu, hubungi kami via WhatsApp.
          </p>
          <TrackedCta
            source="case_studies_empty"
            href={waLink("Halo, saya tertarik dengan layanan di uploadplaystore.my.id")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            Konsultasi Proyek via WhatsApp
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </TrackedCta>
        </div>
      </div>
    </div>
  );
}
