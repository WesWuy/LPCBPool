import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef } from "react";
import "../lpcb-styles.css";

const CONTACT_EMAIL = "hello@lunapool.co";
const CONTACT_PHONE = "+1 441 705-7742";
const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT?.trim() || "";
const FORM_ENABLED = /^https:\/\/formspree\.io\/f\/[a-z0-9]+$/i.test(FORM_ENDPOINT);

export const Route = createFileRoute("/")({
  component: Index,
});

/* ─────────────────────────────────────────
   Route split: client-only (needs browser)
   ───────────────────────────────────────── */
function Index() {
  return (
    <main>
      <Nav />
      <Hero />
      <Services />
      <HowWeWork />
      <BuiltForBermuda />
      <PlansPricing />
      <Testimonial />
      <Enquiry />
      <Footer />
    </main>
  );
}

/* ─── Navigation ─── */
function Nav() {
  return (
    <nav className="luna-nav" role="banner">
      <a href="#" className="luna-nav-logo" aria-label="Luna Pool Co. — home">
        <BrandLogo />
      </a>
      <div className="luna-nav-right">
        <a href="#services" className="luna-nav-link">Services</a>
        <a href="#how-we-work" className="luna-nav-link">How We Work</a>
        <a href="#plans" className="luna-nav-link">Plans & Pricing</a>
        <a href="#enquire" className="luna-nav-cta">Request a Quote</a>
      </div>
    </nav>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="luna-hero" aria-labelledby="hero-headline">
      <div className="luna-hero-bg">
        <img
          src={`${import.meta.env.BASE_URL}assets/hero.webp`}
          alt=""
          className="luna-hero-img"
          loading="eager"
          fetchPriority="high"
        />
        <div className="luna-hero-overlay" aria-hidden="true" />
      </div>
      <div className="luna-hero-content">
        <p className="luna-hero-location">Bermuda</p>
        <h1 id="hero-headline" className="luna-hero-h1">
          Your pool, at its best.<br />Every week of the year.
        </h1>
        <p className="luna-hero-sub">
          Private and estate pool maintenance across Bermuda.<br />
          Weekly service, honest chemistry, equipment kept running.
        </p>
        <div className="luna-hero-btns">
          <a href="#enquire" className="luna-btn luna-btn--primary">
            Book a Free Assessment
          </a>
          <a href="#services" className="luna-btn luna-btn--secondary">
            See Service Plans
          </a>
        </div>
      </div>
      {/* Stats bar */}
      <div className="luna-hero-stats" aria-label="Key facts">
        <div className="luna-hero-stat">
          <span className="luna-hero-stat-value">Fully insured</span>
        </div>
        <div className="luna-hero-stat-divider" aria-hidden="true" />
        <div className="luna-hero-stat">
          <span className="luna-hero-stat-value">Weekly visits</span>
          <span className="luna-hero-stat-label">A fixed day, logged every time</span>
        </div>
        <div className="luna-hero-stat-divider" aria-hidden="true" />
        <div className="luna-hero-stat">
          <span className="luna-hero-stat-value">Same technician</span>
          <span className="luna-hero-stat-label">Every visit, by name</span>
        </div>
      </div>
    </section>
  );
}

/* ─── Services ─── */
function Services() {
  const services = [
    {
      icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
      title: "Weekly Pool Maintenance",
      desc: "Skim, brush, vacuum, empty baskets, check flow and water level. The full routine, every week, same day.",
    },
    {
      icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
      title: "Water Chemistry & Balancing",
      desc: "Chlorine, pH, total alkalinity, calcium hardness, stabiliser and salt — tested on site and corrected before we leave.",
    },
    {
      icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.786.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.786-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.786-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
      title: "Filtration, Pumps & Salt Systems",
      desc: "Filter cleans and backwashes, pump and timer checks, salt cell inspection and descaling, leak and pressure diagnostics.",
    },
    {
      icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
      title: "Green-to-Clean Recovery",
      desc: "Neglected or storm-hit pool? A fixed-scope recovery: shock treatment, filtration cycles, vacuum-to-waste and re-balance.",
    },
    {
      icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Vacation & Rental Property Care",
      desc: "For owners overseas and short-term rentals: guest-ready checks, turnover timing, and a report that reaches your manager too.",
    },
    {
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      title: "Hurricane Prep & Reopening",
      desc: "Pre-storm shutdown and equipment protection, then a priority reopening visit: debris removal, re-prime, re-balance.",
    },
  ];

  return (
    <section id="services" className="luna-section luna-section--cream" aria-labelledby="services-heading">
      <div className="luna-container">
        <p className="luna-eyebrow">What we do</p>
        <h2 id="services-heading" className="luna-h2 luna-h2--dark mt-3">
          Everything a Bermuda pool actually needs.
        </h2>
        <p className="luna-subtext luna-subtext--dark mt-3 mb-12">
          Regular maintenance and attentive service so your pool is always ready.
        </p>
        <div className="luna-services-grid" role="list">
          {services.map((s) => (
            <div className="luna-service-card" key={s.title} role="listitem">
              <div className="luna-service-icon" aria-hidden="true">
                <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                </svg>
              </div>
              <h3 className="luna-h3 luna-h3--dark">{s.title}</h3>
              <p className="luna-body luna-body--dark">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── How We Work ─── */
function HowWeWork() {
  return (
    <section id="how-we-work" className="luna-section luna-section--navy" aria-labelledby="how-heading">
      <div className="luna-container">
        <div className="luna-how-grid">
          <div className="luna-how-text">
            <p className="luna-eyebrow">How we work</p>
            <h2 id="how-heading" className="luna-h2 mt-3">
              Pool care that doesn't need chasing.
            </h2>
            <p className="luna-body mt-4">
              Most pool problems on the island aren't dramatic. They're a skipped week, a drifting pH, a salt cell nobody looked at. We built Luna around removing those three.
            </p>
            <a href="#enquire" className="luna-btn luna-btn--outline-light mt-6">
              See How It Works
            </a>
          </div>
          <div className="luna-how-steps" role="list">
            {[
              {
                step: "01",
                title: "We show up on the day",
                desc: "Your service day is fixed. If weather moves it, you hear from us before you notice.",
              },
              {
                step: "02",
                title: "We test, we don't guess",
                desc: "Chlorine, pH, alkalinity, stabiliser and salt — read at the pool, corrected at the pool.",
              },
              {
                step: "03",
                title: "You see what we saw",
                desc: "A short report after every visit: readings, what was done, anything worth watching.",
              },
              {
                step: "04",
                title: "Reports, not chasing",
                desc: "After each visit you get readings, what was done, and anything we think is worth watching.",
              },
            ].map((item) => (
              <div className="luna-how-step" key={item.step} role="listitem">
                <span className="luna-how-step-num" aria-hidden="true">{item.step}</span>
                <div>
                  <h3 className="luna-how-step-title">{item.title}</h3>
                  <p className="luna-how-step-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Built for Bermuda ─── */
function BuiltForBermuda() {
  return (
    <section id="bermuda" className="luna-section luna-section--cream" aria-labelledby="bermuda-heading">
      <div className="luna-container">
        <p className="luna-eyebrow">Built for Bermuda</p>
        <h2 id="bermuda-heading" className="luna-h2 luna-h2--dark mt-3">
          An island pool is not a mainland pool.
        </h2>
        <div className="luna-bermuda-grid mt-10">
          <div className="luna-bermuda-card">
            <div className="luna-bermuda-icon" aria-hidden="true">
              <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="luna-h3 luna-h3--dark">Hard water, limestone dust</h3>
            <p className="luna-body luna-body--dark">
              Tank and well top-ups push calcium hardness up fast. Left alone it scales heaters, cells and tile lines. We track it as a standing reading, not an afterthought.
            </p>
          </div>
          <div className="luna-bermuda-card">
            <div className="luna-bermuda-icon" aria-hidden="true">
              <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <h3 className="luna-h3 luna-h3--dark">Salt air on equipment</h3>
            <p className="luna-body luna-body--dark">
              Pumps, unions and control boards live outdoors, metres from the Atlantic. We inspect the pad every visit and flag corrosion before it becomes a replacement.
            </p>
          </div>
          <div className="luna-bermuda-card">
            <div className="luna-bermuda-icon" aria-hidden="true">
              <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="luna-h3 luna-h3--dark">Storm season, every year</h3>
            <p className="luna-body luna-body--dark">
              From June, prep is part of the plan — not an emergency call. Clients on a plan get a scheduled shutdown and a priority slot on the reopening list.
            </p>
          </div>
        </div>
        <div className="luna-parishes" aria-label="Service areas">
          <p className="luna-parishes-label">Private and estate pool maintenance across all nine parishes</p>
          <p className="luna-parishes-list">
            Sandys &middot; Southampton &middot; Warwick &middot; Paget &middot; Pembroke &middot; Devonshire &middot; Smith&rsquo;s &middot; Hamilton &middot; St. George&rsquo;s
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Plans & Pricing ─── */
function PlansPricing() {
  const plans = [
    {
      name: "Essential",
      price: "$XXX",
      period: "/ month",
      tagline: "Residential pools kept steady and swimmable.",
      featured: false,
      features: [
        "Weekly service visit",
        "Full water testing & balancing",
        "Chemicals included",
        "Baskets, skim, brush, vacuum",
        "Visit report by email",
      ],
      cta: "Get a Quote",
    },
    {
      name: "Signature",
      price: "$XXX",
      period: "/ month",
      tagline: "Everything in Essential, plus the equipment side.",
      featured: true,
      features: [
        "Everything in Essential",
        "Filter cleans & backwashing",
        "Salt cell inspection & descaling",
        "Pump, timer & pad check",
        "Hurricane prep & priority reopening",
        "Photo report after every visit",
      ],
      cta: "Get a Quote",
    },
    {
      name: "Estate",
      price: "On request",
      period: "",
      tagline: "Large pools, rentals and properties managed from abroad.",
      featured: false,
      features: [
        "Everything in Signature",
        "Twice-weekly visits available",
        "Guest-turnover & arrival checks",
        "Reports to owner and manager",
        "Named account contact",
      ],
      cta: "Talk to Us",
    },
  ];

  return (
    <section id="plans" className="luna-section luna-section--navy" aria-labelledby="plans-heading">
      <div className="luna-container">
        <p className="luna-eyebrow">Service Plans</p>
        <h2 id="plans-heading" className="luna-h2 mt-3">
          Three ways to be looked after.
        </h2>
        <p className="luna-body mt-4">
          Monthly, no long contract. Chemicals included on every plan — no surprise line items.
        </p>
        <div className="luna-plans-grid" role="list">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`luna-plan-card${plan.featured ? " luna-plan-card--featured" : ""}`}
              role="listitem"
            >
              {plan.featured && (
                <div className="luna-plan-badge">Most Chosen</div>
              )}
              <h3 className="luna-plan-name">{plan.name}</h3>
              <p className="luna-plan-tagline">{plan.tagline}</p>
              <div className="luna-plan-price">
                <span className="luna-plan-amount">{plan.price}</span>
                {plan.period && <span className="luna-plan-period">{plan.period}</span>}
              </div>
              <ul className="luna-plan-features" aria-label={`${plan.name} features`}>
                {plan.features.map((f) => (
                  <li key={f} className="luna-plan-feature">
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#enquire" className={`luna-btn luna-btn--full mt-auto${plan.featured ? " luna-btn--primary" : " luna-btn--outline-light"}`}>
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
        <p className="luna-plans-note">
          All plans include a free pool assessment before you commit. Prices shown are indicative — exact cost depends on pool size and equipment.
        </p>
      </div>
    </section>
  );
}

/* ─── Testimonial ─── */
function Testimonial() {
  return (
    <section className="luna-section luna-section--teal" aria-labelledby="testimonial-heading">
      <div className="luna-container">
        <div className="luna-testimonial">
          <blockquote className="luna-testimonial-quote">
            <p>
              [Client quote — two lines on reliability and water quality. Replace with a real testimonial once you have written permission to use it.]
            </p>
          </blockquote>
          <p className="luna-testimonial-attribution">
            [Client Name] &middot; [Parish]
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Enquiry Form ─── */
function Enquiry() {
  const [form, setForm] = useState({
    name: "",
    contactMethod: "email",
    email: "",
    phone: "",
    parish: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const formRef = useRef<HTMLFormElement>(null);

  const contactId = form.contactMethod === "email" ? "email" : "phone";
  const contactType = form.contactMethod === "email" ? "email" : "tel";
  const contactLabel = form.contactMethod === "email" ? "Email address" : "Phone number";

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.parish) e.parish = "Please select a parish.";
    if (!form.service) e.service = "Please select a service.";
    if (form.contactMethod === "email") {
      if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
        e.email = "Please enter a valid email address.";
    } else {
      if (!form.phone.trim() || form.phone.replace(/\D/g, "").length < 7)
        e.phone = "Please enter a valid phone number.";
    }
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!FORM_ENABLED || status === "submitting") return;
    const gotcha = String(new FormData(formRef.current!).get("_gotcha") || "");
    if (gotcha) return;
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setStatus("submitting");

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        signal: AbortSignal.timeout(15000),
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _gotcha: gotcha,
          email: form.contactMethod === "email" ? form.email : undefined,
          contactMethod: form.contactMethod,
          name: form.name,
          contact: form.contactMethod === "email" ? form.email : form.phone,
          parish: form.parish,
          service: form.service,
          message: form.message,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", contactMethod: "email", email: "", phone: "", parish: "", service: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <section id="enquire" className="luna-section luna-section--teal" aria-labelledby="enquiry-heading">
        <div className="luna-container">
          <div className="luna-form-success" role="alert">
            <svg width="40" height="40" fill="none" stroke="var(--luna-navy)" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h2 id="enquiry-heading" className="luna-h2 luna-h2--dark mt-4">Message received.</h2>
            <p className="luna-body luna-body--dark mt-2">
              Thank you for your enquiry. We'll be in touch shortly.
            </p>
            <button className="luna-btn luna-btn--outline-dark mt-6" onClick={() => setStatus("idle")}>
              Send another message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="enquire" className="luna-section luna-section--cream" aria-labelledby="enquiry-heading">
      <div className="luna-container">
        <div className="luna-enquiry-grid">
          <div className="luna-enquiry-intro">
            <p className="luna-eyebrow luna-eyebrow--dark">Get in Touch</p>
            <h2 id="enquiry-heading" className="luna-h2 luna-h2--dark mt-3">
              Ready for a pool you stop thinking about?
            </h2>
            <p className="luna-body luna-body--dark mt-4">
              Tell us where the pool is and roughly what size. We'll come and look at it, free, and give you a straight answer on what it needs.
            </p>
            <div className="luna-contact-chips mt-8" role="list">
              {CONTACT_PHONE && <a href={`tel:${CONTACT_PHONE.replace(/[^+0-9]/g, "")}`} className="luna-chip luna-chip--dark" role="listitem">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {CONTACT_PHONE}
              </a>}
              {CONTACT_EMAIL && <a href={`mailto:${CONTACT_EMAIL}`} className="luna-chip luna-chip--dark" role="listitem">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {CONTACT_EMAIL}
              </a>}
            </div>
            <p className="luna-body luna-body--dark mt-6" style={{ fontSize: "0.875rem" }}>
              Mon–Fri, 8am–5pm · Emergency callouts for plan clients
            </p>
          </div>

          {FORM_ENABLED && <form
            ref={formRef}
            onSubmit={handleSubmit}
            noValidate
            className="luna-form"
            aria-label="Pool enquiry form"
          >
            {/* Honeypot */}
            <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} autoComplete="off" aria-hidden="true" />

            <div className="luna-form-row">
              <div className="luna-field">
                <label className="luna-label luna-label--dark" htmlFor="name">Your name <span aria-hidden="true">*</span></label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className={`luna-input${errors.name ? " luna-input--error" : ""}`}
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  autoComplete="name"
                  required
                  aria-required="true"
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && <p id="name-error" className="luna-field-error" role="alert">{errors.name}</p>}
              </div>
            </div>

            <div className="luna-form-row">
              <fieldset className="luna-fieldset">
                <legend className="luna-label luna-label--dark">Preferred contact method <span aria-hidden="true">*</span></legend>
                <div className="luna-radio-group" role="group">
                  <label className={`luna-radio${form.contactMethod === "email" ? " luna-radio--checked" : ""}`}>
                    <input
                      type="radio"
                      name="contactMethod"
                      value="email"
                      checked={form.contactMethod === "email"}
                      onChange={() => setForm((f) => ({ ...f, contactMethod: "email" }))}
                      className="luna-radio-input"
                    />
                    Email
                  </label>
                  <label className={`luna-radio${form.contactMethod === "phone" ? " luna-radio--checked" : ""}`}>
                    <input
                      type="radio"
                      name="contactMethod"
                      value="phone"
                      checked={form.contactMethod === "phone"}
                      onChange={() => setForm((f) => ({ ...f, contactMethod: "phone" }))}
                      className="luna-radio-input"
                    />
                    Phone
                  </label>
                </div>
              </fieldset>
            </div>

            <div className="luna-form-row">
              <div className="luna-field">
                <label className="luna-label luna-label--dark" htmlFor={contactId}>
                  {contactLabel} <span aria-hidden="true">*</span>
                </label>
                <input
                  id={contactId}
                  type={contactType}
                  name={contactId}
                  className={`luna-input${errors[form.contactMethod] ? " luna-input--error" : ""}`}
                  value={form.contactMethod === "email" ? form.email : form.phone}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, [form.contactMethod]: e.target.value }))
                  }
                  autoComplete={form.contactMethod === "email" ? "email" : "tel"}
                  required
                  aria-required="true"
                  aria-describedby={errors[form.contactMethod] ? `${contactId}-error` : undefined}
                />
                {errors[form.contactMethod] && (
                  <p id={`${form.contactMethod}-error`} className="luna-field-error" role="alert">{errors[form.contactMethod]}</p>
                )}
              </div>
            </div>

            <div className="luna-form-row luna-form-row--2col">
              <div className="luna-field">
                <label className="luna-label luna-label--dark" htmlFor="parish">Parish <span aria-hidden="true">*</span></label>
                <select
                  id="parish"
                  name="parish"
                  className={`luna-select${errors.parish ? " luna-input--error" : ""}`}
                  value={form.parish}
                  onChange={(e) => setForm((f) => ({ ...f, parish: e.target.value }))}
                  required
                  aria-required="true"
                  aria-describedby={errors.parish ? "parish-error" : undefined}
                >
                  <option value="">Select parish…</option>
                  {["Devonshire", "Hamilton", "Paget", "Pembroke", "St. George's", "Sandys", "Smith's", "Southampton", "Warwick"].map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
                {errors.parish && <p id="parish-error" className="luna-field-error" role="alert">{errors.parish}</p>}
              </div>
              <div className="luna-field">
                <label className="luna-label luna-label--dark" htmlFor="service">Service needed <span aria-hidden="true">*</span></label>
                <select
                  id="service"
                  name="service"
                  className={`luna-select${errors.service ? " luna-input--error" : ""}`}
                  value={form.service}
                  onChange={(e) => setForm((f) => ({ ...f, service: e.target.value }))}
                  required
                  aria-required="true"
                  aria-describedby={errors.service ? "service-error" : undefined}
                >
                  <option value="">Select service…</option>
                  <option value="regular-maintenance">Regular maintenance</option>
                  <option value="water-testing">Water testing & chemicals</option>
                  <option value="equipment">Equipment troubleshooting</option>
                  <option value="event-prep">Pre-event preparation</option>
                  <option value="green-to-clean">Green-to-clean recovery</option>
                  <option value="other">Other / Not sure</option>
                </select>
                {errors.service && <p id="service-error" className="luna-field-error" role="alert">{errors.service}</p>}
              </div>
            </div>

            <div className="luna-form-row">
              <div className="luna-field">
                <label className="luna-label luna-label--dark" htmlFor="message">
                  About the pool <span className="luna-optional">(optional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="luna-textarea"
                  placeholder="Rough size, equipment you have, anything you'd like us to know…"
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                />
              </div>
            </div>

            {status === "error" && (
              <div className="luna-form-error-global" role="alert">
                Your enquiry could not be sent. Please try again.
              </div>
            )}

            <button
              type="submit"
              className="luna-btn luna-btn--primary luna-btn--full"
              disabled={status === "submitting"}
              aria-busy={status === "submitting"}
            >
              {status === "submitting" ? "Sending…" : "Request My Free Assessment"}
            </button>
          </form>}

          {!FORM_ENABLED && (
            <div className="luna-form-placeholder">
              <p className="luna-body luna-body--dark">Fill in the form to discuss what your pool needs — or reach us directly.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="luna-footer" role="contentinfo">
      <div className="luna-footer-inner">
        <BrandLogo full />
        <nav className="luna-footer-nav" aria-label="Footer navigation">
          <div className="luna-footer-nav-col">
            <p className="luna-footer-nav-heading">Services</p>
            <a href="#services" className="luna-footer-link">Weekly maintenance</a>
            <a href="#services" className="luna-footer-link">Water chemistry</a>
            <a href="#services" className="luna-footer-link">Equipment & salt systems</a>
            <a href="#services" className="luna-footer-link">Green-to-clean</a>
            <a href="#services" className="luna-footer-link">Hurricane prep</a>
          </div>
          <div className="luna-footer-nav-col">
            <p className="luna-footer-nav-heading">Company</p>
            <a href="#bermuda" className="luna-footer-link">Built for Bermuda</a>
            <a href="#how-we-work" className="luna-footer-link">How it works</a>
            <a href="#plans" className="luna-footer-link">Plans & pricing</a>
            <a href="#enquire" className="luna-footer-link">Contact</a>
          </div>
        </nav>
        <div className="luna-footer-contact">
          <p className="luna-footer-nav-heading">Get in Touch</p>
          <a href={`tel:${CONTACT_PHONE.replace(/[^+0-9]/g, "")}`} className="luna-footer-link">{CONTACT_PHONE}</a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="luna-footer-link">{CONTACT_EMAIL}</a>
          <p className="luna-footer-address">[Street address], [Parish], Bermuda</p>
        </div>
      </div>
      <div className="luna-footer-bottom">
        <p>&copy; {year} Luna Pool Co. All rights reserved.</p>
        <div className="luna-footer-legal">
          <a href="#" className="luna-footer-legal-link">Privacy</a>
          <a href="#" className="luna-footer-legal-link">Terms</a>
        </div>
      </div>
    </footer>
  );
}

/* The supplied artwork stays intact; CSS frames its emblem and lettering for the header. */
function BrandLogo({ full = false }: { full?: boolean }) {
  const src = import.meta.env.BASE_URL + "assets/luna-pool-co-approved.jpg";
  if (full) return <img className="luna-brand-full" src={src} width={280} height={211} alt="Luna Pool Co. Bermuda" />;
  return (
    <span className="luna-brand" aria-hidden="true">
      <span className="luna-brand-emblem"><img src={src} alt="" width={1024} height={773} /></span>
      <span className="luna-brand-wordmark"><img src={src} alt="" width={1024} height={773} /></span>
    </span>
  );
}
