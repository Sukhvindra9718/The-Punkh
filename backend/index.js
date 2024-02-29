// index.js
const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const commonRoutes = require('./routes/commonRoutes');
const config = require('./config/config');
const app = express();
const PORT = config.PORT;

app.use(bodyParser.json());
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/common', commonRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
