const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Health check route — confirms the server is running
app.get("/", (req, res) => {
  res.json({ message: "Doctor Appointment App API is running" });
});

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/doctors", require("./routes/doctorRoutes"));
app.use("/api/appointments", require("./routes/appointmentRoutes"));

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  if (process.env.MONGO_URI) {
    await connectDB();
  } else {
    console.warn("No MONGO_URI found in .env — server will start but DB routes will fail.");
  }
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
};

startServer();
