import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";
import { useAuth } from "../context/AuthContext";

const styles = {
  page: { padding: "40px 30px", background: "#F5F8FF", minHeight: "90vh" },
  card: { background: "#fff", borderRadius: "12px", padding: "32px", maxWidth: "500px", margin: "0 auto", boxShadow: "0 4px 16px rgba(0,0,0,0.09)" },
  title: { fontSize: "24px", fontWeight: "bold", color: "#1A73E8", marginBottom: "6px" },
  sub: { color: "#888", marginBottom: "28px", fontSize: "14px" },
  doctorBox: { background: "#F5F8FF", borderRadius: "10px", padding: "16px", marginBottom: "24px" },
  doctorName: { fontWeight: "bold", fontSize: "16px", color: "#222" },
  doctorSpec: { color: "#1A73E8", fontSize: "14px" },
  label: { display: "block", marginBottom: "6px", fontWeight: "600", color: "#333", fontSize: "14px" },
  input: { width: "100%", padding: "11px 14px", borderRadius: "8px", border: "1px solid #ddd", fontSize: "15px", marginBottom: "18px", boxSizing: "border-box" },
  textarea: { width: "100%", padding: "11px 14px", borderRadius: "8px", border: "1px solid #ddd", fontSize: "15px", marginBottom: "18px", boxSizing: "border-box", height: "90px", resize: "vertical" },
  btn: { width: "100%", padding: "13px", background: "#1A73E8", color: "#fff", border: "none", borderRadius: "8px", fontSize: "16px", fontWeight: "bold", cursor: "pointer" },
  success: { background: "#E6F9EF", color: "#27ae60", padding: "14px", borderRadius: "8px", marginBottom: "16px", textAlign: "center", fontWeight: "bold" },
  error: { background: "#FFE9E9", color: "#c0392b", padding: "10px", borderRadius: "8px", marginBottom: "16px", fontSize: "14px" },
  loginMsg: { textAlign: "center", color: "#c0392b", fontSize: "16px", padding: "60px" },
};

export default function BookAppointment() {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState(null);
  const [form, setForm] = useState({ date: "", time: "", notes: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    api.get(`/doctors/${id}`).then(({ data }) => setDoctor(data)).catch(console.error);
  }, [id]);

  if (!user) return (
    <div style={styles.loginMsg}>
      Please <a href="/login" style={{ color: "#1A73E8" }}>login</a> to book an appointment.
    </div>
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await api.post("/appointments", {
        patient: user._id,
        doctor: id,
        date: form.date,
        time: form.time,
        notes: form.notes,
      });
      setSuccess(true);
      setTimeout(() => navigate("/my-appointments"), 2000);
    } catch (err) {
      setError(err.response?.data?.message || "Booking failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  // Get today's date for min date input
  const today = new Date().toISOString().split("T")[0];

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Book Appointment</h2>
        <p style={styles.sub}>Fill in your preferred date and time</p>

        {doctor && (
          <div style={styles.doctorBox}>
            <div style={styles.doctorName}>👨‍⚕️ Dr. {doctor.user?.name}</div>
            <div style={styles.doctorSpec}>{doctor.specialization} — Rs. {doctor.consultationFee}</div>
          </div>
        )}

        {success && <div style={styles.success}>✅ Appointment booked! Redirecting...</div>}
        {error && <div style={styles.error}>{error}</div>}

        {!success && (
          <form onSubmit={handleSubmit}>
            <label style={styles.label}>Date</label>
            <input style={styles.input} type="date" min={today} value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })} required />
            <label style={styles.label}>Time</label>
            <input style={styles.input} type="time" value={form.time}
              onChange={(e) => setForm({ ...form, time: e.target.value })} required />
            <label style={styles.label}>Notes (optional)</label>
            <textarea style={styles.textarea} placeholder="Describe your symptoms or reason for visit..."
              value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} />
            <button style={styles.btn} type="submit" disabled={loading}>
              {loading ? "Booking..." : "Confirm Appointment"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
