const Doctor = require("../models/Doctor");

// @desc   Get all doctors (optional filters: specialization, city)
// @route  GET /api/doctors
const getDoctors = async (req, res) => {
  try {
    const { specialization, city } = req.query;
    const filter = {};
    if (specialization) filter.specialization = new RegExp(specialization, "i");
    if (city) filter.city = new RegExp(city, "i");

    const doctors = await Doctor.find(filter).populate("user", "name email phone");
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc   Get single doctor by id
// @route  GET /api/doctors/:id
const getDoctorById = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id).populate("user", "name email phone");
    if (!doctor) return res.status(404).json({ message: "Doctor not found" });
    res.json(doctor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc   Create doctor profile (linked to a user with role 'doctor')
// @route  POST /api/doctors
const createDoctor = async (req, res) => {
  try {
    const { user, specialization, qualifications, experienceYears, consultationFee, city } = req.body;

    const doctor = await Doctor.create({
      user,
      specialization,
      qualifications,
      experienceYears,
      consultationFee,
      city,
    });

    res.status(201).json(doctor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getDoctors, getDoctorById, createDoctor };
