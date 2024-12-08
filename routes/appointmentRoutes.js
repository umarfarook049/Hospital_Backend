const express = require('express');
const { addAppointment, getAppointments } = require('../controllers/appointmentController');

const router = express.Router();

// Route to add a new appointment
router.post('/', addAppointment);

// Route to get all appointments
router.get('/', appointmentController.getAppointments);


module.exports = router;
