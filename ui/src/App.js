import { useEffect, useState } from "react";
import { client, PROFILE_OBJECT_ID } from "./sui";


export default function App() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    async function loadProfile() {
      const res = await client.getObject({
        id: PROFILE_OBJECT_ID,
        options: { showContent: true },
      });
      setProfile(res.data.content.fields);
    }
    loadProfile();
  }, []);

  return (
    <div style={styles.page}>
      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.heroLeft}>
          <img
            src="/ali.jpg"
            alt="Profile"
            style={styles.avatar}
          />
        </div>

        <div style={styles.heroRight}>
          <h1 style={styles.name}>Allyza Marielle Goyon</h1>
          <p style={styles.tagline}>
            I am an innovator that loves to explore new technologies and create
            impactful solutions.
          </p>

          <div style={styles.block}>
            <strong>About Me:</strong>
            <p>{profile ? profile.bio : "Loading on-chain data…"}</p>
          </div>

          <div style={styles.block}>
            <strong>DEVCON Affiliations:</strong>
            <ul>
              <li>DEVCON PM & QA Intern – 2025</li>
              <li>SHEisDEVCON Volunteer – 2025</li>
            </ul>
          </div>

          <div style={styles.block}>
            <strong>Other Affliations</strong>
            <ul>
              <li>TiCaP 20 Officer – 2025</li>
              <li>DevKada Lead Volunteer – 2025</li>
            </ul>
          </div>

          <div style={styles.socials}>
  <a href="https://www.linkedin.com/in/allyzagoyon/" style={{ color: "#38bdf8" }}>LinkedIn</a>
  <a href="https://github.com/alimarielle" style={{ color: "#38bdf8" }}>GitHub</a>
</div>
        </div>
      </section>

      {/* ABOUT SUI CARD */}
      <section style={styles.icpWrapper}>
  <div style={styles.icpCard}>
    <div style={styles.icpLeft}>
      <img src="/sui-sui-logo.png" alt="Sui" style={styles.icpLogo} />
    </div>

    <div style={styles.icpRight}>
      <h2>About Sui</h2>

      <p>
        Sui is a next-generation Layer 1 blockchain designed for high
        performance, instant finality, and secure digital asset ownership.
        It is built using the Move programming language.
      </p>

      <ul>
        <li>
          <strong>Object-centric model:</strong> Assets are first-class objects
          instead of account-based balances.
        </li>
        <li>
          <strong>Parallel execution:</strong> Independent transactions run
          simultaneously for massive scalability.
        </li>
        <li>
          <strong>Move language:</strong> Strong safety guarantees for smart
          contracts.
        </li>
      </ul>

      <a
  href="https://docs.sui.io"
  target="_blank"
  rel="noreferrer"
  style={{ textDecoration: "none" }}
>
  <button style={styles.button}>Learn More</button>
</a>
    </div>
  </div>
</section>

      {/* FOOTER */}
      <footer style={styles.footer}>
  <p>Powered by Sui and DEVCON</p>

  <div style={styles.footerLogos}>
    <img src="/sui-sui-logo.png" alt="Sui" style={styles.footerLogoImg} />
    <img src="/devcon.png" alt="DEVCON" style={styles.footerLogoImg} />
  </div>
</footer>
    </div>
  );
}

/* ================= STYLES ================= */

const styles = {
  page: {
    minHeight: "100vh",
    background: "#00060f",
    color: "#fff",
    fontFamily: "'Inter', sans-serif",
  },

   hero: {
    display: "flex",
    flexWrap: "wrap",
    gap: 40,
    padding: "80px 24px 60px",
    maxWidth: 1200,
    margin: "auto",
  },

  heroLeft: {
    flex: "0 0 160px",
    display: "flex",
    justifyContent: "center",
  },

  avatar: {
    width: 150,
    height: 150,
    borderRadius: "50%",
    objectFit: "cover",
    boxShadow:
      "0 0 0 4px rgba(56,189,248,0.4), 0 20px 40px rgba(0,0,0,0.4)",
  },

  heroRight: {
    flex: 1,
    minWidth: 260,
  },

  name: {
    fontSize: "clamp(2.2rem, 5vw, 3rem)",
    fontWeight: 800,
    letterSpacing: "-0.02em",
    marginBottom: 12,
  },

  tagline: {
    fontSize: "1.05rem",
    opacity: 0.85,
    marginBottom: 28,
    lineHeight: 1.6,
  },

  block: {
    marginBottom: 26,
    lineHeight: 1.7,
  },

  socials: {
    display: "flex",
    gap: 18,
    marginTop: 18,
  },

  icpWrapper: {
    display: "flex",
    justifyContent: "center",
    padding: "40px 20px 80px",
  },

  icpCard: {
    display: "flex",
    flexWrap: "wrap",
    gap: 32,
    maxWidth: 960,
    width: "100%",
    padding: "36px",
    borderRadius: 24,
    background:
      "linear-gradient(135deg, rgba(56,189,248,0.15), rgba(2,6,23,0.6))",
    backdropFilter: "blur(12px)",
    boxShadow: "0 30px 60px rgba(0,0,0,0.45)",
  },

  icpLeft: {
    flex: "0 0 180px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  icpLogo: {
    width: 150,
    filter: "drop-shadow(0 0 12px rgba(56,189,248,0.6))",
  },

  icpRight: {
    flex: 1,
    lineHeight: 1.7,
  },

  button: {
    marginTop: 24,
    padding: "12px 26px",
    borderRadius: 999,
    border: "none",
    background: "linear-gradient(135deg, #38bdf8, #22d3ee)",
    color: "#020617",
    fontWeight: 600,
    cursor: "pointer",
    boxShadow: "0 10px 25px rgba(56,189,248,0.4)",
  },

  footer: {
    marginTop: 40,
    padding: "30px 20px",
    textAlign: "center",
    opacity: 0.8,
  },

  footerLogos: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
    marginTop: 12,
  },

  footerLogoImg: {
    height: 34,
    opacity: 0.85,
  },
};