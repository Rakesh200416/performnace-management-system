const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const enrollmentRoutes = require('./routes/enrollmentRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/mern_enrollments', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/enrollment', enrollmentRoutes);

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
