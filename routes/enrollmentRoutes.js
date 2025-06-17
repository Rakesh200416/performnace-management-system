const express = require('express');
const router = express.Router();
const Enrollment = require('../models/Enrollment');

router.post('/add', async (req, res) => {
  try {
    const newEntry = new Enrollment(req.body);
    await newEntry.save();
    res.status(201).json({ message: "Enrollment saved successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
