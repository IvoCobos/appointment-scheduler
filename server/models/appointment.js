const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    title: { type: String, required: true },
    date: { type: Date, required: true },
    description: { type: String },
    status: { type: String, default: 'pending' },
});

module.exports = mongoose.model('Appointment', appointmentSchema);
