import { createFileRoute } from "@tanstack/react-router";
import { ScrollScrub } from "@/components/scroll-scrub/scroll-scrub";
import { scrollScrubScenes, scrollScrubTheme } from "@/scroll-scrub-scenes";
import "../lpcb-styles.css";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main>
      {/* ── Nav ── */}
      <nav className="lpcb-nav">
        <div className="lpcb-nav-logo">
          <Logo />
          <span
            className="font-semibold tracking-wide"
            style={{ fontFamily: "Georgia, serif", color: "var(--lpcb-cream)" }}
          >
            Luna Pool Care Bermuda
          </span>
        </div>
        <a href="#contact" className="lpcb-nav-cta">
          Get a Free Quote
        </a>
      </nav>

      {/* ── Hero: scroll-scrub journey ── */}
      <section id="hero">
        <ScrollScrub scenes={scrollScrubScenes} theme={scrollScrubTheme} />
      </section>

      {/* ── Services (cream bg) ── */}
      <section className="lpcb-section" id="services" style={{ background: "var(--lpcb-cream)" }}>
        <div className="mx-auto max-w-6xl">
          <p className="lpcb-eyebrow lpcb-eyebrow--dark">What we do</p>
          <h2 className="lpcb-h2 lpcb-h2--dark mt-3 mb-12">
            Complete pool care, covered.
          </h2>
          <div className="lpcb-services-grid">
            {[
              {
                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Weekly Maintenance",
                desc: "Regular cleaning, skimming, vacuuming and water level checks to keep your pool pristine every week.",
              },
              {
                icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
                title: "Chemical Balancing",
                desc: "Professional water testing and precise adjustments — pH, chlorine, alkalinity — for safe, crystal-clear water.",
              },
              {
                icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.786.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.786-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.786-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
                title: "Filter & Equipment",
                desc: "Full pump, filter and heater inspection and service to keep equipment running efficiently year-round.",
              },
              {
                icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Opening & Closing",
                desc: "Seasonal pool opening and closing services to protect your investment through Bermuda's mild winters.",
              },
              {
                icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
                title: "Pre-Event Prep",
                desc: "Pool preparation for special events, guest arrivals, or important occasions — so your pool is always show-ready.",
              },
              {
                icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
                title: "Water Testing",
                desc: "Detailed water quality analysis and reporting for peace of mind — tracking balance over time.",
              },
            ].map((s) => (
              <div className="lpcb-service-card" key={s.title}>
                <div className="lpcb-service-icon">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                  </svg>
                </div>
                <h3 className="lpcb-h3 lpcb-h3--dark">{s.title}</h3>
                <p className="lpcb-body lpcb-body--dark">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why LPCB (navy bg) ── */}
      <section className="lpcb-section" id="why" style={{ background: "var(--lpcb-navy)" }}>
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="lpcb-eyebrow">Why LPCB</p>
              <h2 className="lpcb-h2 mt-3">
                Bermuda's pools deserve expert care.
              </h2>
              <p className="lpcb-body mt-4">
                We are a locally-owned business with certified technicians who understand Bermuda's unique climate, salt systems, and water chemistry. Every pool we service gets detailed, personal attention.
              </p>
              <div className="mt-8 flex flex-col gap-4">
                {([
                  { label: "Certified & Insured", detail: "Fully certified technicians with comprehensive liability coverage." },
                  { label: "All Bermuda Covered", detail: "From St. George's to Somerset — service across every parish." },
                  { label: "Same-Week Response", detail: "Equipment issues don't wait, and neither do we." },
                ] as const).map((item) => (
                  <div className="lpcb-pill-check" key={item.label}>
                    <div className="lpcb-pill-dot">
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="var(--lpcb-navy)"
                        strokeWidth={3}
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="lpcb-pill-label">{item.label}</p>
                      <p className="lpcb-pill-detail">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lpcb-editorial-img">
              <img
                src="/assets/board-why.png"
                alt="LPCB professional pool maintenance"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Bermuda Editorial (cream bg) ── */}
      <section className="lpcb-section" id="bermuda" style={{ background: "var(--lpcb-cream)" }}>
        <div className="mx-auto max-w-6xl">
          <div className="lpcb-editorial-img--wide">
            <img
              src="/assets/board-bermuda.png"
              alt="Bermuda infinity pool at golden hour"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div
              className="absolute inset-0 flex items-end p-10 md:p-16"
              style={{
                background: "linear-gradient(to top, color-mix(in srgb, var(--lpcb-navy) 65%, transparent) 0%, transparent 60%)",
              }}
            >
              <blockquote>
                <p
                  className="text-xl md:text-2xl"
                  style={{ fontFamily: "Georgia, serif", color: "var(--lpcb-cream)" }}
                >
                  "Serving all of Bermuda with care, expertise, and a genuine love for pools."
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact (teal band) ── */}
      <section className="lpcb-section lpcb-contact-band" id="contact">
        <div className="mx-auto max-w-3xl text-center">
          <p className="lpcb-eyebrow lpcb-eyebrow--dark">Get started</p>
          <h2 className="lpcb-h2 lpcb-h2--dark mt-3">
            Ready for a pool that's always ready?
          </h2>
          <p className="lpcb-body lpcb-body--dark mt-4 text-lg">
            Get a free quote for your property. No obligation — just crystal-clear water.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+144****0000" className="lpcb-contact-cta">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call Us
            </a>
            <a href="mailto:info@lpcb.bermuda" className="lpcb-contact-cta">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Email Us
            </a>
          </div>
          <p className="mt-6 text-sm lpcb-body lpcb-body--dark">
            Or email us directly at{" "}
            <a
              href="mailto:info@lpcb.bermuda"
              style={{ color: "var(--lpcb-navy)", textDecoration: "underline" }}
            >
              info@lpcb.bermuda
            </a>
          </p>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="lpcb-footer">
        <div className="flex flex-col items-center gap-3">
          <Logo />
          <p className="font-serif text-sm" style={{ color: "color-mix(in srgb, var(--lpcb-cream) 60%, transparent)" }}>
            Luna Pool Care Bermuda
          </p>
          <p className="text-xs" style={{ color: "color-mix(in srgb, var(--lpcb-cream) 40%, transparent)" }}>
            © {new Date().getFullYear()} LPCB. All rights reserved. · All of Bermuda
          </p>
        </div>
      </footer>
    </main>
  );
}

function Logo() {
  return (
    <svg height="32" viewBox="0 0 80 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" fill="var(--lpcb-navy)" />
      <circle cx="16" cy="16" r="10" fill="var(--lpcb-teal)" opacity="0.3" />
      <path
        d="M10 20 Q16 10 22 20"
        stroke="var(--lpcb-teal)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="16" cy="12" r="2" fill="var(--lpcb-cream)" />
      <text x="36" y="22" fontFamily="Georgia, serif" fontSize="13" fontWeight="bold" fill="var(--lpcb-cream)">
        LPCB
      </text>
      <text x="36" y="30" fontFamily="Georgia, serif" fontSize="7" fill="color-mix(in srgb, var(--lpcb-cream) 50%, transparent)">
        Bermuda
      </text>
    </svg>
  );
}
