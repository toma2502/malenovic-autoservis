"use client";
import Image from "next/image";
import { useState } from "react";

const NAV = ["Naslovnica", "Usluge", "O nama", "Galerija", "Kontakt"];

const SERVICES = [
  { icon: "🔧", label: "Automehanika" },
  { icon: "⚡", label: "Auto elektronika" },
  { icon: "❄️", label: "Punjenje klime" },
  { icon: "🔩", label: "Popravak klime" },
  { icon: "📊", label: "Dijagnostika" },
  { icon: "🌿", label: "Eco-test" },
];

const STATS = [
  { num: "2000+", label: "servisiranih vozila" },
  { num: "98%", label: "zadovoljnih klijenata" },
  { num: "15+", label: "godina iskustva" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ background: "#0d0d0d", color: "#f1f5f9", fontFamily: "system-ui, sans-serif" }}>

      {/* ── NAV ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "rgba(13,13,13,0.95)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(192,57,43,0.25)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 5%", height: 68,
      }}>
        <Image src="/logo.png" alt="Malenović logo" width={130} height={50} style={{ objectFit: "contain" }} priority />

        {/* Desktop nav */}
        <ul style={{ display: "flex", gap: 32, listStyle: "none", margin: 0, padding: 0 }}
          className="desktop-nav">
          {NAV.map(n => (
            <li key={n}>
              <a href={`#${n.toLowerCase().replace(" ", "-")}`}
                style={{ color: "#cbd5e1", textDecoration: "none", fontSize: 14, fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#c0392b")}
                onMouseLeave={e => (e.currentTarget.style.color = "#cbd5e1")}>
                {n}
              </a>
            </li>
          ))}
        </ul>

        <a href="tel:+38532123456" style={{
          background: "#c0392b", color: "#fff", padding: "8px 20px",
          borderRadius: 4, fontWeight: 700, fontSize: 14, textDecoration: "none",
          letterSpacing: "0.03em", whiteSpace: "nowrap",
        }}>
          032 / 123-456
        </a>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: "none", background: "none", border: "none", color: "#f1f5f9", fontSize: 24, cursor: "pointer" }}
          className="hamburger">
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: "fixed", top: 68, left: 0, right: 0, zIndex: 99,
          background: "#111", padding: "20px 5%", borderBottom: "1px solid #c0392b",
        }}>
          {NAV.map(n => (
            <a key={n} href={`#${n.toLowerCase().replace(" ", "-")}`}
              onClick={() => setMenuOpen(false)}
              style={{ display: "block", padding: "12px 0", color: "#f1f5f9", textDecoration: "none", fontSize: 16, fontWeight: 600, borderBottom: "1px solid #1e1e1e" }}>
              {n}
            </a>
          ))}
        </div>
      )}

      {/* ── HERO ── */}
      <section id="naslovnica" style={{
        minHeight: "100vh", display: "flex", alignItems: "center",
        background: `linear-gradient(135deg, rgba(13,13,13,0.97) 0%, rgba(30,10,10,0.92) 50%, rgba(13,13,13,0.85) 100%),
          url('https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=1600&q=80') center/cover no-repeat`,
        padding: "100px 5% 60px",
        position: "relative", overflow: "hidden",
      }}>
        {/* Red accent line */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 4, background: "linear-gradient(180deg, transparent, #c0392b 30%, #c0392b 70%, transparent)" }} />

        <div style={{ maxWidth: 680 }}>
          <p className="fade-up" style={{ color: "#c0392b", fontWeight: 700, letterSpacing: "0.2em", fontSize: 13, textTransform: "uppercase", marginBottom: 16 }}>
            ✦ Županja · Slavonija
          </p>
          <h1 className="fade-up delay-1" style={{ fontSize: "clamp(2.4rem, 6vw, 4.2rem)", fontWeight: 900, lineHeight: 1.1, marginBottom: 12, letterSpacing: "-0.02em" }}>
            POUZDAN SERVIS.<br />
            <span style={{ color: "#c0392b" }}>SIGURNA VOŽNJA.</span>
          </h1>
          <p className="fade-up delay-2" style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", color: "#94a3b8", lineHeight: 1.7, marginBottom: 40, maxWidth: 480 }}>
            Stručne usluge, moderna dijagnostika i brza rješenja za vaš automobil — sve na jednom mjestu.
          </p>
          <div className="fade-up delay-3" style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="#kontakt" style={{
              background: "#c0392b", color: "#fff", padding: "14px 36px",
              borderRadius: 4, fontWeight: 800, fontSize: 15, textDecoration: "none",
              letterSpacing: "0.08em", textTransform: "uppercase",
              boxShadow: "0 4px 24px rgba(192,57,43,0.4)", transition: "all 0.2s",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#e74c3c"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#c0392b"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
              ZAKAŽI TERMIN
            </a>
            <a href="#usluge" style={{
              border: "2px solid rgba(192,57,43,0.6)", color: "#f1f5f9", padding: "14px 36px",
              borderRadius: 4, fontWeight: 700, fontSize: 15, textDecoration: "none",
              letterSpacing: "0.08em", textTransform: "uppercase", transition: "all 0.2s",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#c0392b"; (e.currentTarget as HTMLElement).style.background = "rgba(192,57,43,0.1)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(192,57,43,0.6)"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}>
              NAŠE USLUGE
            </a>
          </div>
        </div>
      </section>

      {/* ── USLUGE ── */}
      <section id="usluge" style={{ padding: "100px 5%", background: "#111" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ color: "#c0392b", fontWeight: 700, letterSpacing: "0.2em", fontSize: 12, textTransform: "uppercase", textAlign: "center", marginBottom: 12 }}>
            ŠTO VAM NUDIMO
          </p>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, textAlign: "center", marginBottom: 60, letterSpacing: "-0.02em" }}>
            Naše usluge
          </h2>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: 24,
          }}>
            {SERVICES.map(s => (
              <div key={s.label} style={{
                background: "#1a1a1a", border: "1px solid #2a2a2a",
                borderRadius: 8, padding: "36px 20px",
                textAlign: "center", cursor: "default",
                transition: "all 0.3s",
              }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "#c0392b";
                  el.style.background = "rgba(192,57,43,0.07)";
                  el.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "#2a2a2a";
                  el.style.background = "#1a1a1a";
                  el.style.transform = "translateY(0)";
                }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{s.icon}</div>
                <p style={{ fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", color: "#e2e8f0" }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── O NAMA ── */}
      <section id="o-nama" style={{ padding: "100px 5%", background: "#0d0d0d" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <p style={{ color: "#c0392b", fontWeight: 700, letterSpacing: "0.2em", fontSize: 12, textTransform: "uppercase", marginBottom: 12 }}>
              O NAMA
            </p>
            <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 800, marginBottom: 24, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
              Kvaliteta na koju<br />možete računati
            </h2>
            <p style={{ color: "#94a3b8", lineHeight: 1.8, marginBottom: 20, fontSize: 16 }}>
              Autoservis Malenović pruža profesionalne usluge servisiranja svih vrsta vozila s više od 15 godina iskustva.
              Koristimo isključivo originalne i certificirane rezervne dijelove.
            </p>
            <p style={{ color: "#94a3b8", lineHeight: 1.8, marginBottom: 40, fontSize: 16 }}>
              Naš tim stručnih mehaničara i autoelesktričara spreman je riješiti svaki kvar brzo i pouzdano.
            </p>

            {/* Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
              {STATS.map(s => (
                <div key={s.label} style={{ borderLeft: "3px solid #c0392b", paddingLeft: 16 }}>
                  <p style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 900, color: "#fff", lineHeight: 1 }}>{s.num}</p>
                  <p style={{ color: "#64748b", fontSize: 12, marginTop: 6, textTransform: "uppercase", letterSpacing: "0.08em" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            borderRadius: 8, overflow: "hidden",
            background: `url('https://images.unsplash.com/photo-1632823469850-2f77dd9c7f93?w=800&q=80') center/cover`,
            aspectRatio: "4/3",
            border: "1px solid #2a2a2a",
            position: "relative",
          }}>
            <div style={{
              position: "absolute", bottom: 0, left: 0, right: 0, height: "40%",
              background: "linear-gradient(transparent, rgba(13,13,13,0.8))",
            }} />
          </div>
        </div>
      </section>

      {/* ── GALERIJA ── */}
      <section id="galerija" style={{ padding: "100px 5%", background: "#111" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ color: "#c0392b", fontWeight: 700, letterSpacing: "0.2em", fontSize: 12, textTransform: "uppercase", textAlign: "center", marginBottom: 12 }}>
            GALERIJA
          </p>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, textAlign: "center", marginBottom: 60, letterSpacing: "-0.02em" }}>
            Naš rad
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
            {[
              "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&q=80",
              "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
              "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&q=80",
              "https://images.unsplash.com/photo-1537984822441-cff330075342?w=600&q=80",
              "https://images.unsplash.com/photo-1599256872237-5dcc0fbe9668?w=600&q=80",
              "https://images.unsplash.com/photo-1607603750909-408681227af0?w=600&q=80",
            ].map((src, i) => (
              <div key={i} style={{
                borderRadius: 8, overflow: "hidden", aspectRatio: "4/3",
                background: `url('${src}') center/cover`,
                border: "1px solid #2a2a2a", transition: "transform 0.3s",
              }}
                onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.02)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")} />
            ))}
          </div>
        </div>
      </section>

      {/* ── KONTAKT ── */}
      <section id="kontakt" style={{ padding: "100px 5%", background: "#0d0d0d" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ color: "#c0392b", fontWeight: 700, letterSpacing: "0.2em", fontSize: 12, textTransform: "uppercase", textAlign: "center", marginBottom: 12 }}>
            POSJETITE NAS
          </p>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, textAlign: "center", marginBottom: 60, letterSpacing: "-0.02em" }}>
            Kontakt
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>
            {/* Info */}
            <div>
              {[
                { icon: "📍", label: "Adresa", value: "Braće Radića 4, 32100 Županja" },
                { icon: "📞", label: "Telefon", value: "032 / 123-456", href: "tel:+38532123456" },
                { icon: "✉️", label: "Email", value: "asmalenovic@gmail.com", href: "mailto:asmalenovic@gmail.com" },
                { icon: "🕐", label: "Radno vrijeme", value: "Pon–Pet: 07:00–18:00 | Sub: 08:00–13:00" },
              ].map(item => (
                <div key={item.label} style={{ display: "flex", gap: 20, marginBottom: 32, alignItems: "flex-start" }}>
                  <div style={{
                    background: "rgba(192,57,43,0.15)", border: "1px solid rgba(192,57,43,0.3)",
                    borderRadius: 8, width: 48, height: 48, display: "flex", alignItems: "center",
                    justifyContent: "center", fontSize: 20, flexShrink: 0,
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <p style={{ color: "#64748b", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>{item.label}</p>
                    {item.href
                      ? <a href={item.href} style={{ color: "#f1f5f9", fontWeight: 600, fontSize: 16, textDecoration: "none" }}
                          onMouseEnter={e => (e.currentTarget.style.color = "#c0392b")}
                          onMouseLeave={e => (e.currentTarget.style.color = "#f1f5f9")}>
                          {item.value}
                        </a>
                      : <p style={{ color: "#f1f5f9", fontWeight: 600, fontSize: 16 }}>{item.value}</p>
                    }
                  </div>
                </div>
              ))}

              <a href="tel:+38532123456" style={{
                display: "inline-block", background: "#c0392b", color: "#fff",
                padding: "14px 40px", borderRadius: 4, fontWeight: 800,
                fontSize: 15, textDecoration: "none", letterSpacing: "0.08em",
                textTransform: "uppercase", marginTop: 8,
                boxShadow: "0 4px 24px rgba(192,57,43,0.35)",
              }}>
                ZAKAŽI TERMIN
              </a>
            </div>

            {/* Map */}
            <div style={{ borderRadius: 8, overflow: "hidden", border: "1px solid #2a2a2a" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11267.234!2d18.803!3d45.282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDE2JzU1LjIiTiAxOMKwNDgnMTAuOCJF!5e0!3m2!1shr!2shr!4v1"
                width="100%" height="380" style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg)" }}
                loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        background: "#080808", borderTop: "1px solid rgba(192,57,43,0.2)",
        padding: "48px 5% 32px",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 48, marginBottom: 48 }}>
            <div>
              <Image src="/logo.png" alt="Malenović" width={120} height={46} style={{ objectFit: "contain", marginBottom: 16 }} />
              <p style={{ color: "#64748b", lineHeight: 1.7, fontSize: 14, maxWidth: 300 }}>
                Pouzdan partner za servisiranje vašeg vozila. Brzo, stručno i povoljno.
              </p>
            </div>
            <div>
              <p style={{ fontWeight: 700, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16, color: "#c0392b" }}>Usluge</p>
              {["Automehanika", "Auto elektronika", "Punjenje klime", "Popravak klime", "Dijagnostika", "Eco-test"].map(u => (
                <p key={u} style={{ color: "#64748b", fontSize: 14, marginBottom: 8 }}>{u}</p>
              ))}
            </div>
            <div>
              <p style={{ fontWeight: 700, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16, color: "#c0392b" }}>Kontakt</p>
              <p style={{ color: "#64748b", fontSize: 14, marginBottom: 8 }}>Braće Radića 4, Županja</p>
              <p style={{ color: "#64748b", fontSize: 14, marginBottom: 8 }}>032 / 123-456</p>
              <p style={{ color: "#64748b", fontSize: 14, marginBottom: 8 }}>asmalenovic@gmail.com</p>
              <p style={{ color: "#64748b", fontSize: 14 }}>Pon–Pet: 07–18h</p>
            </div>
          </div>
          <div style={{ borderTop: "1px solid #1e1e1e", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <p style={{ color: "#334155", fontSize: 13 }}>© 2025 Autoservis Malenović. Sva prava pridržana.</p>
            <p style={{ color: "#1e2940", fontSize: 12 }}>Izradio <a href="https://simplexdigital.agency" target="_blank" rel="noopener noreferrer" style={{ color: "#334155", textDecoration: "none" }}>Simplex Digital</a></p>
          </div>
        </div>
      </footer>

      {/* Mobile styles */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
          section > div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
          section > div[style*="grid-template-columns: 2fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
