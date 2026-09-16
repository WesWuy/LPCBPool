import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef } from "react";
import "../lpcb-styles.css";

const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL?.trim() || "";
const CONTACT_PHONE = import.meta.env.VITE_CONTACT_PHONE?.trim() || "";
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
        {/* Hero image — replace src with actual photo before launch */}
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
          Pool care,<br />thoughtfully handled.
        </h1>
        <p className="luna-hero-sub">
          Pool maintenance and attentive care for Bermuda homes.
        </p>
        <div className="luna-hero-btns">
          <a href="#enquire" className="luna-btn luna-btn--primary">
            Request a Quote
          </a>
          <a href="#services" className="luna-btn luna-btn--secondary">
            Explore Our Services
          </a>
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
      title: "Routine Cleaning",
      desc: "Regular skimming, vacuuming, brushing and water level checks to keep your pool clean and inviting every week.",
    },
    {
      icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
      title: "Water Testing & Chemicals",
      desc: "Professional water testing with precise adjustments to pH, chlorine and alkalinity, keeping your water safe and clear.",
    },
    {
      icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.786.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.786-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.786-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
      title: "Filter & Pump Checks",
      desc: "Regular inspection and backwashing of filters and pump equipment to maintain proper circulation and water quality.",
    },
    {
      icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
      title: "Pre-Event Preparation",
      desc: "Pool tuning ahead of special occasions, guest arrivals or gatherings — so your pool is always ready when you need it.",
    },
    {
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
      title: "Equipment Troubleshooting",
      desc: "Diagnosis of pump, filter and circulation issues — with clear communication about what needs attention and what options are available.",
    },
  ];

  return (
    <section id="services" className="luna-section luna-section--cream" aria-labelledby="services-heading">
      <div className="luna-container">
        <p className="luna-eyebrow">What we do</p>
        <h2 id="services-heading" className="luna-h2 luna-h2--dark mt-3">
          Pool care, covered.
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
              Clear process.<br />Honest communication.
            </h2>
            <p className="luna-body mt-4">Tell us about your pool, the care you need and your preferred schedule so we can discuss a suitable service.</p>
          </div>
          <div className="luna-how-steps" role="list">
            {[
              { step: "01", title: "Your Pool", desc: "Tell us about your pool and equipment." },
              { step: "02", title: "Your Needs", desc: "Let us know which services you are interested in." },
              { step: "03", title: "Your Schedule", desc: "Share your preferred timing and frequency." },
              { step: "04", title: "Next Steps", desc: "Discuss the options and agree on the scope before work begins." },
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
              Thank you for your enquiry.
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
    <section id="enquire" className="luna-section luna-section--teal" aria-labelledby="enquiry-heading">
      <div className="luna-container">
        <div className="luna-enquiry-grid">
          <div className="luna-enquiry-intro">
            <p className="luna-eyebrow luna-eyebrow--dark">Get in touch</p>
            <h2 id="enquiry-heading" className="luna-h2 luna-h2--dark mt-3">
              Tell us about your pool.
            </h2>
            <p className="luna-body luna-body--dark mt-4">
{FORM_ENABLED ? "Fill in the form to discuss what your pool needs." : "Online enquiries are not available yet."}
            </p>
            <div className="luna-contact-chips mt-8" role="list">
              {CONTACT_PHONE && <a href={`tel:${CONTACT_PHONE.replace(/[^+0-9]/g, "")}`} className="luna-chip" role="listitem">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call {CONTACT_PHONE}
              </a>}
              {CONTACT_EMAIL && <a href={`mailto:${CONTACT_EMAIL}`} className="luna-chip" role="listitem">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {CONTACT_EMAIL}
              </a>}
            </div>
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
                <label className="luna-label" htmlFor="name">Your name <span aria-hidden="true">*</span></label>
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
                <legend className="luna-label">Preferred contact method <span aria-hidden="true">*</span></legend>
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
                <label className="luna-label" htmlFor={contactId}>
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
                <label className="luna-label" htmlFor="parish">Parish <span aria-hidden="true">*</span></label>
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
                  {["Devonshire", "Hamilton", "Paget", "Pembroke", "St. George's", "Sandys", "Smiths", "Southampton", "Warwick"].map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
                {errors.parish && <p id="parish-error" className="luna-field-error" role="alert">{errors.parish}</p>}
              </div>
              <div className="luna-field">
                <label className="luna-label" htmlFor="service">Service needed <span aria-hidden="true">*</span></label>
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
                  <option value="other">Other / Not sure</option>
                </select>
                {errors.service && <p id="service-error" className="luna-field-error" role="alert">{errors.service}</p>}
              </div>
            </div>

            <div className="luna-form-row">
              <div className="luna-field">
                <label className="luna-label" htmlFor="message">
                  Anything else we should know? <span className="luna-optional">(optional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="luna-textarea"
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
              {status === "submitting" ? "Sending…" : "Send Enquiry"}
            </button>
          </form>}
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
        <p className="luna-footer-copy">
          &copy; {year} Luna Pool Co. All rights reserved.
        </p>
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
