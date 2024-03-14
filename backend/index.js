// index.js
const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const commonRoutes = require('./routes/commonRoutes');
const config = require('./config/config');
const app = express();
const PORT = config.PORT;
const {readdirSync} = require('fs');
const path = require('path');
const cors = require('cors');


readdirSync('./routes').map((route) => app.use('/api', require('./routes/' + route)))
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/common', commonRoutes);
app.use('/api',require('./routes/videoRoutes'));
app.use('/api',require('./routes/imagesRoutes'));


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// const express = require("express");
// const cookieParser = require("cookie-parser");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const app = express();
// var os = require("os");
// var host = os.hostname();

// // Handle uncaught exceptions
// process.on("uncaughtException", (err) => {
//   console.log(`ERROR: ${err.stack}`);
//   console.log("Shutting down due to uncaught exception");
//   process.exit(1);
// });

// // Use Middlewares
// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cookieParser());



// const server = app.listen(3001,(req,res)=>{
//   console.log(`Server is working on ${host}:${3001}`);
// })

// // unhandled promise rejection
// process.on("unhandledRejection",err => {
//   console.log(`Error : ${err.message}`);
//   console.log("Shuting down the server due to unhandled Promise Rejection");
//   server.close(()=>{
//       process.exit(1);
//   });
// });
// process.once("SIGUSR2", function () {
//   console.log("nodemon restart");
//   process.kill(process.pid, "SIGUSR2");
// });

// process.on("SIGINT", function () {
//   console.log("App terminated");
//   process.kill(process.pid, "SIGINT");
// });


