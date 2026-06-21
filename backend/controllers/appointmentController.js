const Appointment = require("../models/Appointment");

// @desc   Create a new appointment
// @route  POST /api/appointments
const createAppointment = async (req, res) => {
  try {
    const { patient, doctor, date, time, notes } = req.body;

    if (!patient || !doctor || !date || !time) {
      return res.status(400).json({ message: "Please provide all required fields" });
    }

    const appointment = await Appointment.create({ patient, doctor, date, time, notes });
    res.status(201).json(appointment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc   Get appointments (optionally filter by patient or doctor)
// @route  GET /api/appointments
const getAppointments = async (req, res) => {
  try {
    const { patient, doctor } = req.query;
    const filter = {};
    if (patient) filter.patient = patient;
    if (doctor) filter.doctor = doctor;

    const appointments = await Appointment.find(filter)
      .populate("patient", "name email")
      .populate({ path: "doctor", populate: { path: "user", select: "name email" } });

    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc   Update appointment status
// @route  PUT /api/appointments/:id
const updateAppointmentStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const appointment = await Appointment.findById(req.params.id);

    if (!appointment) return res.status(404).json({ message: "Appointment not found" });

    appointment.status = status || appointment.status;
    await appointment.save();

    res.json(appointment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createAppointment, getAppointments, updateAppointmentStatus };
