"use client";

import Link from "next/link";

export default function Home() {
    return (
        <main className="wrap">
            <header className="bar">
                <div className="brand">Zim’s Cleaning</div>
                <div className="status">Under Construction</div>
            </header>

            <section className="hero">
                <div className="copy">
                    <h1>Professional Cleaning Services</h1>
                    <p className="lead">
                        We’re already taking bookings while we finish the new site.
                    </p>

                    <div className="ctaRow">
                        <Link href="https://wa.me/447000000000" className="btn btnPrimary">
                            WhatsApp Us
                        </Link>
                        <Link href="mailto:hello@zimsclean.co.uk" className="btn btnGhost">
                            Email Us
                        </Link>
                    </div>

                    <div className="glass">
                        <div className="trust">
                            <IconShield /> <span>Licensed &amp; insured</span>
                        </div>
                        <div className="trust">
                            <IconCheck /> <span>DBS-checked staff</span>
                        </div>
                        <div className="trust">
                            <IconClock /> <span>On-time, every time</span>
                        </div>
                    </div>

                    <form
                        className="subscribe"
                        action="https://formspree.io/f/yourid" // ← replace with your Formspree ID
                        method="POST"
                    >
                        <input
                            required
                            type="email"
                            name="email"
                            placeholder="Enter your email to get notified"
                        />
                        <button className="btn btnPrimary">Notify Me</button>
                    </form>

                    <p className="fine">
                        We’ll only email you about this launch.
                    </p>

                    <p className="foot">© {new Date().getFullYear()} Zim’s Cleaning Services</p>
                </div>
            </section>

            <style jsx>{`
        /* ---- Base ---- */
        :global(html), :global(body) { height: 100%; }
        :global(body) {
          margin: 0;
          background: #0b0b0c; /* fallback behind gradient */
          color: #0f1222;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, "Apple Color Emoji", "Segoe UI Emoji";
        }

        .wrap {
          min-height: 100dvh;
          display: grid;
          grid-template-rows: auto 1fr;
          background:
            radial-gradient(1200px 600px at 50% -10%, rgba(10,104,255,.18), transparent 60%),
            radial-gradient(800px 500px at 90% 10%, rgba(255,194,26,.12), transparent 60%),
            linear-gradient(180deg, #f8fafc, #ffffff);
        }

        /* ---- Top bar ---- */
        .bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1120px;
          margin: 0 auto;
          height: 56px;
          padding: 0 20px;
        }
        .brand { font-weight: 600; letter-spacing: .2px; }
        .status {
          font-size: 12px;
          color: #6b7280;
          padding: 6px 10px;
          border: 1px solid rgba(15,23,42,.12);
          border-radius: 999px;
          background: rgba(255,255,255,.7);
          backdrop-filter: saturate(140%) blur(6px);
        }

        /* ---- Hero ---- */
        .hero {
          display: grid;
          place-items: center;
          padding: 40px 20px 64px;
        }
        .copy {
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
        }
        h1 {
          margin: 10px 0 8px;
          font-size: clamp(36px, 6vw, 64px);
          line-height: 1.06;
          letter-spacing: -0.02em;
          color: #0b0f1a;
        }
        .lead {
          margin: 8px auto 0;
          max-width: 680px;
          color: #485266;
          font-size: clamp(16px, 2.4vw, 18px);
        }

        /* ---- CTAs ---- */
        .ctaRow {
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
          margin: 24px 0 0;
        }
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 48px;
          padding: 0 20px;
          border-radius: 999px;
          font-weight: 600;
          font-size: 15px;
          letter-spacing: .2px;
          text-decoration: none;
          transition: background .2s ease, border-color .2s ease, color .2s ease, box-shadow .2s ease;
          user-select: none;
          border: 1px solid transparent;
        }
        .btnPrimary {
          background: #0a68ff;
          color: #fff;
          box-shadow: 0 6px 20px rgba(10,104,255,.25);
        }
        .btnPrimary:hover { background: #0858d8; }
        .btnGhost {
          background: rgba(255,255,255,.8);
          color: #0b0f1a;
          border-color: rgba(15,23,42,.15);
          backdrop-filter: saturate(140%) blur(6px);
        }
        .btnGhost:hover { background: rgba(255,255,255,.95); }

        /* ---- Glass trust card ---- */
        .glass {
          margin: 28px auto 0;
          max-width: 860px;
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
          padding: 18px 18px 12px;
          border-radius: 22px;
          background: rgba(255,255,255,.8);
          border: 1px solid rgba(15,23,42,.12);
          box-shadow: 0 12px 40px rgba(0,0,0,.08);
          backdrop-filter: saturate(140%) blur(8px);
        }
        @media (min-width: 768px) {
          .glass { grid-template-columns: repeat(3, 1fr); padding: 22px 28px 16px; }
        }
        .trust {
          display: flex;
          gap: 10px;
          align-items: center;
          justify-content: center;
          color: #0b0f1a;
          font-weight: 600;
          font-size: 14px;
        }
        .trust :global(svg) { width: 22px; height: 22px; color: #0a68ff; }

        /* ---- Email capture ---- */
        .subscribe {
          display: flex;
          gap: 10px;
          justify-content: center;
          flex-wrap: wrap;
          margin: 24px auto 0;
          max-width: 700px;
        }
        .subscribe input {
          flex: 1 1 380px;
          height: 48px;
          border-radius: 999px;
          padding: 0 18px;
          border: 1px solid rgba(15,23,42,.12);
          background: rgba(255,255,255,.9);
          outline: none;
          font-size: 15px;
        }
        .subscribe input:focus {
          border-color: #0a68ff;
          box-shadow: 0 0 0 4px rgba(10,104,255,.16);
        }

        .fine {
          margin-top: 10px;
          color: #6b7280;
          font-size: 12px;
        }
        .foot {
          margin-top: 26px;
          color: #8a90a0;
          font-size: 12px;
        }
      `}</style>
        </main>
    );
}

/* Inline icons so no deps */
function IconShield(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3z" stroke="currentColor" strokeWidth="1.6" />
            <path d="M9.5 12l1.8 1.8L15 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}
function IconCheck(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
            <path d="M8.5 12.5l2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}
function IconClock(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
            <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}