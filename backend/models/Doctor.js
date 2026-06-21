const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    specialization: { type: String, required: true },
    qualifications: { type: String },
    experienceYears: { type: Number, default: 0 },
    consultationFee: { type: Number, default: 0 },
    city: { type: String },
    availableSlots: [
      {
        date: { type: String },
        time: { type: String },
        isBooked: { type: Boolean, default: false },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Doctor", doctorSchema);
