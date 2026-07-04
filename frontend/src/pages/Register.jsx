import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";
import { useAuth } from "../context/AuthContext";

const styles = {
  wrapper: { minHeight: "90vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#F5F8FF" },
  card: { background: "#fff", padding: "40px", borderRadius: "12px", boxShadow: "0 4px 16px rgba(0,0,0,0.1)", width: "100%", maxWidth: "420px" },
  title: { fontSize: "26px", fontWeight: "bold", color: "#1A73E8", marginBottom: "8px", textAlign: "center" },
  sub: { color: "#888", textAlign: "center", marginBottom: "28px", fontSize: "14px" },
  label: { display: "block", marginBottom: "6px", fontWeight: "600", color: "#333", fontSize: "14px" },
  input: { width: "100%", padding: "11px 14px", borderRadius: "8px", border: "1px solid #ddd", fontSize: "15px", marginBottom: "18px", boxSizing: "border-box" },
  select: { width: "100%", padding: "11px 14px", borderRadius: "8px", border: "1px solid #ddd", fontSize: "15px", marginBottom: "18px", boxSizing: "border-box", background: "#fff" },
  btn: { width: "100%", padding: "13px", background: "#1A73E8", color: "#fff", border: "none", borderRadius: "8px", fontSize: "16px", fontWeight: "bold", cursor: "pointer" },
  error: { background: "#FFE9E9", color: "#c0392b", padding: "10px", borderRadius: "8px", marginBottom: "16px", fontSize: "14px" },
  foot: { textAlign: "center", marginTop: "20px", fontSize: "14px", color: "#666" },
  link: { color: "#1A73E8", fontWeight: "bold", textDecoration: "none" },
};

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "patient", phone: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const { data } = await api.post("/auth/register", form);
      login(data);
      navigate("/doctors");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 style={styles.title}>Create Account</h2>
        <p style={styles.sub}>Join DoctorApp and book appointments easily</p>
        {error && <div style={styles.error}>{error}</div>}
        <form onSubmit={handleSubmit}>
          <label style={styles.label}>Full Name</label>
          <input style={styles.input} name="name" placeholder="John Doe" value={form.name} onChange={handleChange} required />
          <label style={styles.label}>Email</label>
          <input style={styles.input} name="email" type="email" placeholder="john@email.com" value={form.email} onChange={handleChange} required />
          <label style={styles.label}>Phone</label>
          <input style={styles.input} name="phone" placeholder="03001234567" value={form.phone} onChange={handleChange} />
          <label style={styles.label}>Password</label>
          <input style={styles.input} name="password" type="password" placeholder="••••••••" value={form.password} onChange={handleChange} required />
          <label style={styles.label}>Role</label>
          <select style={styles.select} name="role" value={form.role} onChange={handleChange}>
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
          </select>
          <button style={styles.btn} type="submit" disabled={loading}>
            {loading ? "Creating account..." : "Register"}
          </button>
        </form>
        <p style={styles.foot}>Already have an account? <Link to="/login" style={styles.link}>Login</Link></p>
      </div>
    </div>
  );
}
