const db = require('../config/db');

const AppointmentModel = {
  create: (data, callback) => {
    const query = `
      INSERT INTO appointments (patientName, appointmentNo, appointmentDate, phone, gender, doctor, priority, fee)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    db.query(query, data, callback);
  },

  findAll: (callback) => {
    const query = 'SELECT * FROM appointments';
    db.query(query, callback);
  },
};

module.exports = AppointmentModel;
