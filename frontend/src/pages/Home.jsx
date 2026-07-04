import React from "react";
import { Link } from "react-router-dom";

const styles = {
  hero: {
    textAlign: "center",
    padding: "80px 20px",
    background: "linear-gradient(135deg, #E8F0FE, #fff)",
    minHeight: "80vh",
  },
  title: { fontSize: "42px", color: "#1A73E8", marginBottom: "16px" },
  subtitle: { fontSize: "18px", color: "#555", marginBottom: "40px", maxWidth: "500px", margin: "0 auto 40px" },
  btnRow: { display: "flex", gap: "16px", justifyContent: "center", marginTop: "30px" },
  btnPrimary: {
    background: "#1A73E8", color: "#fff", padding: "14px 32px",
    borderRadius: "8px", textDecoration: "none", fontSize: "16px", fontWeight: "bold",
  },
  btnSecondary: {
    background: "#fff", color: "#1A73E8", padding: "14px 32px",
    borderRadius: "8px", textDecoration: "none", fontSize: "16px", fontWeight: "bold",
    border: "2px solid #1A73E8",
  },
  cards: {
    display: "flex", gap: "24px", justifyContent: "center",
    flexWrap: "wrap", padding: "60px 20px", background: "#fff",
  },
  card: {
    background: "#F5F8FF", borderRadius: "12px", padding: "30px",
    width: "220px", textAlign: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
  },
  icon: { fontSize: "40px", marginBottom: "12px" },
  cardTitle: { fontWeight: "bold", color: "#1A73E8", marginBottom: "8px" },
  cardText: { color: "#666", fontSize: "14px" },
};

export default function Home() {
  return (
    <div>
      <div style={styles.hero}>
        <h1 style={styles.title}>Book a Doctor Appointment</h1>
        <p style={styles.subtitle}>
          Find trusted doctors, check their availability, and book your appointment — all in one place.
        </p>
        <div style={styles.btnRow}>
          <Link to="/doctors" style={styles.btnPrimary}>Browse Doctors</Link>
          <Link to="/register" style={styles.btnSecondary}>Get Started</Link>
        </div>
      </div>

      <div style={styles.cards}>
        {[
          { icon: "🔍", title: "Find Doctors", text: "Search by specialty or city" },
          { icon: "📅", title: "Book Instantly", text: "Choose a slot and confirm" },
          { icon: "📋", title: "Track Appointments", text: "View and manage your bookings" },
          { icon: "🔒", title: "Secure & Private", text: "Your data is always protected" },
        ].map((c) => (
          <div key={c.title} style={styles.card}>
            <div style={styles.icon}>{c.icon}</div>
            <div style={styles.cardTitle}>{c.title}</div>
            <div style={styles.cardText}>{c.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
