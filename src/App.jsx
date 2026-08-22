import React, { useState } from "react";
import {
  GraduationCap,
  CalendarClock,
  ClipboardCheck,
  Wallet,
  MessageSquare,
  BarChart3,
  BookOpen,
  Users,
  Bell,
  CheckCircle2,
  ArrowRight,
  Star,
  ShieldCheck,
  Clock,
  Menu,
  X,
  Palette,
} from "lucide-react";

// Each theme keeps the same structural roles (dark ink, headline text,
// muted body text, two paper backgrounds, an accent, an accent-dark for
// eyebrows, an alert/stamp color, and a hairline rule) so swapping themes
// never breaks layout, only mood.
const THEMES = {
  chalkboard: {
    label: "Chalkboard",
    ink: "#1F3B2C",
    inkText: "#1B2A19",
    textBase: "#22301E",
    paper: "#F6F1E4",
    paperAlt: "#EDE7D6",
    accent: "#C89B3C",
    accentDark: "#8C6A1E",
    alert: "#C1584B",
    rule: "#D8CFB8",
  },
  fountainPen: {
    label: "Fountain Pen",
    ink: "#1E2A47",
    inkText: "#141C33",
    textBase: "#232C46",
    paper: "#F3F1EA",
    paperAlt: "#E8E3F1",
    accent: "#C9A227",
    accentDark: "#8C6A1E",
    alert: "#B5484F",
    rule: "#DCD6E8",
  },
  terracotta: {
    label: "Terracotta",
    ink: "#3B2A1F",
    inkText: "#2B1D14",
    textBase: "#3B2A1F",
    paper: "#F7EEE1",
    paperAlt: "#EFE0CB",
    accent: "#C1584B",
    accentDark: "#8A3F34",
    alert: "#5B7A5B",
    rule: "#E3D2BB",
  },
  seaAndChalk: {
    label: "Sea & Chalk",
    ink: "#173B3F",
    inkText: "#0F2A2C",
    textBase: "#173B3F",
    paper: "#EFF4EF",
    paperAlt: "#E1EBE6",
    accent: "#3E8E7E",
    accentDark: "#2C6357",
    alert: "#C1584B",
    rule: "#D3E2DC",
  },
};

export default function SchoolManagementLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [themeKey, setThemeKey] = useState("chalkboard");
  const t = THEMES[themeKey];

  const nav = [
    { label: "Platform", href: "#platform" },
    { label: "How it works", href: "#how" },
    { label: "Pricing", href: "#pricing" },
    { label: "Stories", href: "#stories" },
  ];

  const features = [
    {
      tab: "Homeroom",
      icon: Users,
      title: "Attendance & roll call",
      desc: "One tap marks the register. Absences notify parents automatically, no phone calls needed.",
    },
    {
      tab: "Grade book",
      icon: ClipboardCheck,
      title: "Grading & report cards",
      desc: "Teachers score assignments in the app; report cards assemble themselves at term's end.",
    },
    {
      tab: "Timetable",
      icon: CalendarClock,
      title: "Scheduling & bells",
      desc: "Build the term timetable once. Room clashes and teacher overlaps are flagged before they happen.",
    },
    {
      tab: "Bursar's office",
      icon: Wallet,
      title: "Fees & invoicing",
      desc: "Send term invoices, track part-payments, and remind families without an awkward conversation.",
    },
    {
      tab: "Staff room",
      icon: MessageSquare,
      title: "Parent messaging",
      desc: "Announcements, permission slips, and one-to-one notes reach parents on the app they already use.",
    },
    {
      tab: "Headteacher's desk",
      icon: BarChart3,
      title: "Reports & oversight",
      desc: "Attendance trends, grade distributions, and fee collection in one view, updated as the day happens.",
    },
  ];

  const steps = [
    {
      n: "01",
      title: "Enrol your school",
      desc: "Import your student and staff register from a spreadsheet in one sitting. No IT department required.",
    },
    {
      n: "02",
      title: "Set the timetable",
      desc: "Lay out terms, periods, and classrooms once. It carries forward every year with a click.",
    },
    {
      n: "03",
      title: "Open the gates",
      desc: "Teachers, parents, and office staff log in the same morning. Attendance starts on day one.",
    },
  ];

  const plans = [
    {
      name: "Primary",
      audience: "Up to 300 students",
      price: "₹4,999",
      per: "/month",
      features: ["Attendance & timetable", "Grade book", "Parent messaging", "Email support"],
    },
    {
      name: "Secondary",
      audience: "Up to 1,200 students",
      price: "₹11,999",
      per: "/month",
      features: ["Everything in Primary", "Fee invoicing", "Custom report cards", "Priority support"],
      featured: true,
    },
    {
      name: "District",
      audience: "Multiple campuses",
      price: "Talk to us",
      per: "",
      features: ["Everything in Secondary", "Cross-campus reporting", "Single sign-on", "Dedicated onboarding"],
    },
  ];

  const ThemeSwitcher = ({ compact }) => (
    <div className={`flex items-center gap-2 ${compact ? "" : ""}`}>
      {!compact && (
        <Palette className="h-3.5 w-3.5" style={{ color: `${t.textBase}99` }} />
      )}
      {Object.entries(THEMES).map(([key, theme]) => (
        <button
          key={key}
          onClick={() => setThemeKey(key)}
          title={theme.label}
          aria-label={`Use ${theme.label} theme`}
          className="h-6 w-6 rounded-full transition-transform hover:-translate-y-0.5"
          style={{
            background: `linear-gradient(135deg, ${theme.ink} 50%, ${theme.accent} 50%)`,
            boxShadow:
              themeKey === key
                ? `0 0 0 2px ${t.paper}, 0 0 0 4px ${theme.accent}`
                : `0 0 0 1px ${t.rule}`,
          }}
        />
      ))}
    </div>
  );

  return (
    <div
      className="min-h-screen w-full font-[Inter,sans-serif] transition-colors duration-300"
      style={{ backgroundColor: t.paper, color: t.textBase, ["--accent"]: t.accent, ["--rule"]: t.rule }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap');
        .font-display { font-family: 'Fraunces', serif; }
        .font-mono-school { font-family: 'IBM Plex Mono', monospace; }
        .notch::before {
          content: "";
          position: absolute;
          top: -1px; left: 22px;
          width: 34px; height: 10px;
          background: var(--accent);
          border-radius: 0 0 4px 4px;
        }
        .perforated {
          background-image: radial-gradient(circle, var(--rule) 2.5px, transparent 2.5px);
          background-size: 16px 16px;
          background-position: 8px 0;
        }
      `}</style>

      {/* NAV */}
      <header
        className="sticky top-0 z-40 border-b backdrop-blur"
        style={{ borderColor: t.rule, backgroundColor: `${t.paper}E6` }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div
              className="flex h-9 w-9 items-center justify-center rounded-md"
              style={{ backgroundColor: t.ink }}
            >
              <GraduationCap className="h-5 w-5" style={{ color: t.paper }} />
            </div>
            <span className="font-display text-lg font-semibold tracking-tight">Chalkline</span>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium transition-colors hover:opacity-100"
                style={{ color: `${t.textBase}B3` }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-5 md:flex">
            <ThemeSwitcher />
            <a href="#" className="text-sm font-medium" style={{ color: `${t.textBase}B3` }}>
              Sign in
            </a>
            <a
              href="#pricing"
              className="rounded-md px-4 py-2 text-sm font-semibold transition-colors"
              style={{ backgroundColor: t.ink, color: t.paper }}
            >
              Book a demo
            </a>
          </div>

          <button className="md:hidden" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t px-6 py-4 md:hidden" style={{ borderColor: t.rule }}>
            <div className="flex flex-col gap-4">
              {nav.map((item) => (
                <a key={item.label} href={item.href} className="text-sm font-medium">
                  {item.label}
                </a>
              ))}
              <div className="mt-1">
                <ThemeSwitcher />
              </div>
              <a
                href="#pricing"
                className="mt-2 rounded-md px-4 py-2 text-center text-sm font-semibold"
                style={{ backgroundColor: t.ink, color: t.paper }}
              >
                Book a demo
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <span
              className="font-mono-school inline-block rounded-full border px-3 py-1 text-xs font-medium tracking-wide"
              style={{ borderColor: `${t.accent}66`, backgroundColor: `${t.accent}1A`, color: t.accentDark }}
            >
              NOW ENROLLING FOR TERM 2026-27
            </span>
            <h1
              className="font-display mt-5 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl"
              style={{ color: t.inkText }}
            >
              Run the whole school year from one register.
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed" style={{ color: `${t.textBase}BF` }}>
              Attendance, grading, fees, and parent notes, kept in the same
              place a school actually keeps them: one shared record, updated
              the moment something happens in the classroom.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5"
                style={{ backgroundColor: t.accent, color: t.inkText }}
              >
                Start free trial
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#how"
                className="inline-flex items-center gap-2 text-sm font-semibold underline decoration-2 underline-offset-4"
                style={{ color: t.ink, textDecorationColor: t.accent }}
              >
                See how it works
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm" style={{ color: `${t.textBase}99` }}>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" style={{ color: t.ink }} />
                Used in 400+ schools
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4" style={{ color: t.accent }} />
                4.8 average rating
              </div>
            </div>
          </div>

          {/* SIGNATURE ELEMENT: hall-pass style schedule card */}
          <div className="relative mx-auto w-full max-w-sm rotate-2">
            <div
              className="perforated absolute left-0 top-6 h-[calc(100%-3rem)] w-6 rounded-l-xl"
              style={{ backgroundColor: t.paper }}
            />
            <div
              className="relative rounded-xl border pl-10 pr-6 py-6 shadow-[0_18px_40px_-15px_rgba(0,0,0,0.25)]"
              style={{ borderColor: t.rule, backgroundColor: "#FFFFFF" }}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono-school text-xs tracking-widest" style={{ color: t.accentDark }}>
                  HALL PASS
                </span>
                <span
                  className="flex h-9 w-9 rotate-[-8deg] items-center justify-center rounded-full border-2 text-[10px] font-bold"
                  style={{ borderColor: t.alert, color: t.alert }}
                >
                  OK
                </span>
              </div>
              <div className="font-display mt-4 text-xl font-semibold" style={{ color: t.inkText }}>
                Today, Period 4
              </div>
              <div className="mt-1 flex items-center gap-2 text-sm" style={{ color: `${t.textBase}99` }}>
                <Clock className="h-3.5 w-3.5" />
                11:10 &ndash; 11:55
              </div>

              <div className="mt-5 space-y-3 border-t border-dashed pt-4" style={{ borderColor: t.rule }}>
                {[
                  { label: "Class", value: "Grade 9 &middot; Section B" },
                  { label: "Subject", value: "Chemistry" },
                  { label: "Room", value: "Lab 2" },
                  { label: "Present", value: "31 / 33" },
                ].map((row) => (
                  <div key={row.label} className="flex items-center justify-between text-sm">
                    <span style={{ color: `${t.textBase}8C` }}>{row.label}</span>
                    <span
                      className="font-mono-school font-medium"
                      style={{ color: t.inkText }}
                      dangerouslySetInnerHTML={{ __html: row.value }}
                    />
                  </div>
                ))}
              </div>

              <div
                className="mt-5 flex items-center gap-2 rounded-md px-3 py-2 text-xs"
                style={{ backgroundColor: `${t.ink}0D`, color: t.ink }}
              >
                <Bell className="h-3.5 w-3.5" />
                Next bell rings in 41 minutes
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STRIP */}
      <section className="border-y" style={{ borderColor: t.rule, backgroundColor: t.ink }}>
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-8 text-center sm:grid-cols-4">
          {[
            { value: "400+", label: "Schools onboard" },
            { value: "2.1M", label: "Attendance marks / term" },
            { value: "99.95%", label: "Uptime last year" },
            { value: "3 min", label: "Avg. onboarding per teacher" },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-mono-school text-2xl font-semibold sm:text-3xl" style={{ color: t.paper }}>
                {s.value}
              </div>
              <div className="mt-1 text-xs" style={{ color: `${t.paper}99` }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section id="platform" className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-xl">
          <span className="font-mono-school text-xs tracking-widest" style={{ color: t.accentDark }}>
            THE PLATFORM
          </span>
          <h2 className="font-display mt-3 text-3xl font-semibold sm:text-4xl" style={{ color: t.inkText }}>
            Every desk in the building, one system.
          </h2>
          <p className="mt-4" style={{ color: `${t.textBase}B3` }}>
            Built around how a school day actually runs, from the homeroom
            register to the headteacher&rsquo;s end-of-term report.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="notch relative rounded-lg border p-6 pt-8"
              style={{ borderColor: t.rule, backgroundColor: "#FFFFFFB3" }}
            >
              <span className="font-mono-school text-[10px] tracking-widest" style={{ color: `${t.textBase}66` }}>
                {f.tab.toUpperCase()}
              </span>
              <div
                className="mt-3 flex h-10 w-10 items-center justify-center rounded-md"
                style={{ backgroundColor: `${t.ink}14` }}
              >
                <f.icon className="h-5 w-5" style={{ color: t.ink }} />
              </div>
              <h3 className="font-display mt-4 text-lg font-semibold" style={{ color: t.inkText }}>
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: `${t.textBase}A6` }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20" style={{ backgroundColor: t.paperAlt }} id="how">
        <div className="mx-auto max-w-6xl px-6">
          <span className="font-mono-school text-xs tracking-widest" style={{ color: t.accentDark }}>
            GETTING STARTED
          </span>
          <h2 className="font-display mt-3 max-w-lg text-3xl font-semibold sm:text-4xl" style={{ color: t.inkText }}>
            Three periods to go live.
          </h2>

          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {steps.map((s, i) => (
              <div key={s.n} className="relative">
                <span className="font-display text-5xl font-semibold" style={{ color: `${t.ink}26` }}>
                  {s.n}
                </span>
                <h3 className="font-display -mt-4 text-xl font-semibold" style={{ color: t.inkText }}>
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: `${t.textBase}A6` }}>
                  {s.desc}
                </p>
                {i < steps.length - 1 && (
                  <div className="mt-6 hidden h-px w-full md:block" style={{ backgroundColor: t.rule }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section id="stories" className="mx-auto max-w-4xl px-6 py-20">
        <div
          className="relative mx-auto max-w-2xl rounded-md border bg-white p-8 shadow-sm"
          style={{ borderColor: t.rule }}
        >
          <div
            className="absolute -top-3 left-10 h-6 w-16 -rotate-6"
            style={{ backgroundColor: `${t.accent}4D` }}
          />
          <BookOpen className="h-6 w-6" style={{ color: t.accent }} />
          <p className="font-display mt-4 text-xl leading-relaxed" style={{ color: t.inkText }}>
            &ldquo;Attendance used to take my staff room twenty minutes every
            morning. Now it takes one tap, and I actually trust the
            numbers.&rdquo;
          </p>
          <div className="mt-6 flex items-center gap-3">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold"
              style={{ backgroundColor: t.ink, color: t.paper }}
            >
              RM
            </div>
            <div>
              <div className="text-sm font-semibold" style={{ color: t.inkText }}>
                Radhika Menon
              </div>
              <div className="text-xs" style={{ color: `${t.textBase}8C` }}>
                Principal, Lakeview Public School
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20" style={{ backgroundColor: t.ink }}>
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-lg">
            <span className="font-mono-school text-xs tracking-widest" style={{ color: t.accent }}>
              PRICING
            </span>
            <h2 className="font-display mt-3 text-3xl font-semibold sm:text-4xl" style={{ color: t.paper }}>
              Priced by the size of your register.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {plans.map((p) => (
              <div
                key={p.name}
                className="rounded-lg border p-7"
                style={
                  p.featured
                    ? { borderColor: t.accent, backgroundColor: t.paper, color: t.inkText }
                    : { borderColor: `${t.paper}26`, backgroundColor: t.ink, color: t.paper }
                }
              >
                {p.featured && (
                  <span
                    className="font-mono-school inline-block rounded-full px-3 py-1 text-[10px] font-semibold"
                    style={{ backgroundColor: t.accent, color: t.inkText }}
                  >
                    MOST CHOSEN
                  </span>
                )}
                <h3 className="font-display mt-3 text-xl font-semibold">{p.name}</h3>
                <p className="mt-1 text-sm" style={{ color: p.featured ? `${t.textBase}99` : `${t.paper}99` }}>
                  {p.audience}
                </p>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="font-mono-school text-3xl font-semibold">{p.price}</span>
                  <span className="text-sm" style={{ color: p.featured ? `${t.textBase}80` : `${t.paper}80` }}>
                    {p.per}
                  </span>
                </div>
                <ul className="mt-6 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0"
                        style={{ color: p.featured ? t.ink : t.accent }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className="mt-7 w-full rounded-md py-2.5 text-sm font-semibold transition-transform hover:-translate-y-0.5"
                  style={
                    p.featured
                      ? { backgroundColor: t.ink, color: t.paper }
                      : { backgroundColor: t.accent, color: t.inkText }
                  }
                >
                  {p.price === "Talk to us" ? "Contact sales" : "Choose plan"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="font-display mx-auto max-w-xl text-3xl font-semibold sm:text-4xl" style={{ color: t.inkText }}>
          Ready to open the register on day one?
        </h2>
        <p className="mx-auto mt-4 max-w-md" style={{ color: `${t.textBase}B3` }}>
          Bring your student list. We&rsquo;ll have your first timetable and
          attendance sheet ready before the bell.
        </p>
        <a
          href="#"
          className="mt-8 inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5"
          style={{ backgroundColor: t.accent, color: t.inkText }}
        >
          Start free trial
          <ArrowRight className="h-4 w-4" />
        </a>
      </section>

      {/* FOOTER */}
      <footer className="border-t" style={{ borderColor: t.rule, backgroundColor: t.paperAlt }}>
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md" style={{ backgroundColor: t.ink }}>
              <GraduationCap className="h-4 w-4" style={{ color: t.paper }} />
            </div>
            <span className="font-display text-sm font-semibold">Chalkline</span>
          </div>
          <p className="text-xs" style={{ color: `${t.textBase}80` }}>
            &copy; {new Date().getFullYear()} Chalkline School Systems. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}