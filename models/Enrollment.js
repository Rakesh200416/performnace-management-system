const mongoose = require('mongoose');

const EnrollmentSchema = new mongoose.Schema({
  fullName: String,
  fatherName: String,
  enrollmentId: String,
  startsOn: Date,
  endsOn: Date,
}, { timestamps: true });

module.exports = mongoose.model('Enrollment', EnrollmentSchema);
