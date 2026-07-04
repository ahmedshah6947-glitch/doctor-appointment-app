const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
dotenv.config();

const User = require("./models/User");
const Doctor = require("./models/Doctor");

const seed = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Connected to MongoDB");

  // Clear existing doctors/users (only seed data)
  await Doctor.deleteMany({});
  await User.deleteMany({ role: "doctor" });

  const doctorsData = [
    { name: "Ahmed Khan", email: "ahmed@doctor.com", specialization: "Cardiologist", city: "Lahore", qualifications: "MBBS, FCPS", experienceYears: 10, consultationFee: 2000 },
    { name: "Sara Ali", email: "sara@doctor.com", specialization: "Dermatologist", city: "Karachi", qualifications: "MBBS, MCPS", experienceYears: 7, consultationFee: 1500 },
    { name: "Usman Malik", email: "usman@doctor.com", specialization: "Neurologist", city: "Islamabad", qualifications: "MBBS, PhD", experienceYears: 15, consultationFee: 3000 },
    { name: "Fatima Sheikh", email: "fatima@doctor.com", specialization: "Pediatrician", city: "Lahore", qualifications: "MBBS, DCH", experienceYears: 8, consultationFee: 1200 },
    { name: "Bilal Raza", email: "bilal@doctor.com", specialization: "Orthopedic Surgeon", city: "Karachi", qualifications: "MBBS, MS Ortho", experienceYears: 12, consultationFee: 2500 },
  ];

  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash("doctor123", salt);

  for (const d of doctorsData) {
    const user = await User.create({ name: d.name, email: d.email, password, role: "doctor" });
    await Doctor.create({
      user: user._id,
      specialization: d.specialization,
      city: d.city,
      qualifications: d.qualifications,
      experienceYears: d.experienceYears,
      consultationFee: d.consultationFee,
    });
    console.log(`Created doctor: Dr. ${d.name}`);
  }

  console.log("\n✅ Seed complete! 5 doctors added.");
  process.exit(0);
};

seed().catch((err) => { console.error(err); process.exit(1); });
