const express = require("express");
const router = express.Router();
const { getDoctors, getDoctorById, createDoctor } = require("../controllers/doctorController");
const { protect } = require("../middleware/authMiddleware");

router.get("/", getDoctors);
router.get("/:id", getDoctorById);
router.post("/", protect, createDoctor);

module.exports = router;
