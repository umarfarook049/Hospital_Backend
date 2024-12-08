const db = require('../config/db');

// Add a new appointment
exports.addAppointment = (req, res) => {
  const {
    patientName, appointmentNo, appointmentDate,
    phone, gender, doctor, priority, fee
  } = req.body;

  const query = `
    INSERT INTO appointments (patientName, appointmentNo, appointmentDate, phone, gender, doctor, priority, fee)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;
  db.query(query, [patientName, appointmentNo, appointmentDate, phone, gender, doctor, priority, fee], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).json({ error: 'Failed to add appointment' });
    }
    res.status(201).json({ message: 'Appointment added successfully', id: result.insertId });
  });
};

// // Get all appointments
// exports.getAppointments = (req, res) => {
//   const query = 'SELECT * FROM appointments';
//   db.query(query, (err, results) => {
//     if (err) {
//       console.error('Error fetching appointments:', err);
//       return res.status(500).json({ error: 'Failed to fetch appointments' });
//     }
//     res.status(200).json(results);
//   });
// };

exports.getAppointments = (req, res) => {
    AppointmentModel.getAppointments((err, results) => {
      if (err) {
        console.error('Error fetching appointments:', err);
        return res.status(500).json({ error: 'Failed to fetch appointments' });
      }
      res.status(200).json(results);
    });
  };
  
