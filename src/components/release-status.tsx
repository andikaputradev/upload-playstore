import { Check } from "lucide-react";

const steps = ["Berkas rilis diverifikasi", "Diunggah ke Play Console", "Dikirim untuk ditinjau Google"] as const;

export function ReleaseStatus() {
  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-[radial-gradient(closest-side,color-mix(in_srgb,var(--accent)_14%,transparent),transparent)]"
        aria-hidden="true"
      />
      <div className="frame mx-auto w-full max-w-[420px] p-6 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.6)]">
        <div className="flex items-center justify-between">
          <p className="text-base font-semibold text-text">Alur rilis</p>
          <span className="rounded-full border border-border px-2.5 py-0.5 text-xs text-text-muted">Ilustrasi</span>
        </div>
        <ol className="mt-5 space-y-1">
          {steps.map((step, index) => (
            <li
              key={step}
              className="status-row flex items-center gap-3 rounded-xl px-3 py-3 text-[0.9375rem] text-text"
              style={{ animationDelay: `${0.4 + index * 0.5}s` }}
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-success/15 text-success">
                <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
              </span>
              {step}
            </li>
          ))}
          <li
            className="status-row flex items-center gap-3 rounded-xl border border-border bg-bg/60 px-3 py-3 text-[0.9375rem] font-medium text-text"
            style={{ animationDelay: "1.9s" }}
          >
            <span className="relative flex h-6 w-6 shrink-0 items-center justify-center" aria-hidden="true">
              <span className="absolute h-2.5 w-2.5 animate-ping rounded-full bg-accent/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-accent" />
            </span>
            Menunggu peninjauan Google
          </li>
        </ol>
      </div>
      <p className="mt-4 text-center text-sm text-text-faint">Ilustrasi alur, bukan tampilan Play Console asli.</p>
    </div>
  );
}
