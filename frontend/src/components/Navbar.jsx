import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const styles = {
  nav: {
    background: "#1A73E8",
    padding: "14px 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  brand: { color: "#fff", fontWeight: "bold", fontSize: "20px", textDecoration: "none" },
  links: { display: "flex", gap: "20px", alignItems: "center" },
  link: { color: "#fff", textDecoration: "none", fontSize: "15px" },
  btn: {
    background: "#fff",
    color: "#1A73E8",
    border: "none",
    padding: "7px 16px",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "14px",
  },
};

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.brand}>🏥 DoctorApp</Link>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/doctors" style={styles.link}>Doctors</Link>
        {user ? (
          <>
            <Link to="/my-appointments" style={styles.link}>My Appointments</Link>
            <span style={{ color: "#fff", fontSize: "14px" }}>Hi, {user.name}</span>
            <button style={styles.btn} onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" style={styles.link}>Login</Link>
            <Link to="/register" style={{ ...styles.btn, padding: "7px 16px", borderRadius: "6px", fontWeight: "bold", fontSize: "14px", background: "#fff", color: "#1A73E8", textDecoration: "none" }}>Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}
