const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
// dotenv.config();

// const connectDB = () => {
//     mongoose
//       .connect(process.env.REACT_APP_MONGODB)
//       .then(() => {
//         console.log("Connected to DB");
//       })
//       .catch((err) => {
//         throw err;
//       });
//   };

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// connectDB();
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1', require('./src/v1/routes'));

// app.use((err, req, res, next) => {
//     const status = err.status || 500;
//     const message = err.message || "something was wrong!";
  
//     return res.status(status).json({
//       success: false,
//       status,
//       message,
//     });
//   });
  
//   // -------------------Deployment------------------
//   // const __dirname1 = path.resolve();
  
//   if (process.env.NODE_ENV === "production") {
//     app.use(express.static("frontend/build"));
//     app.get("*", (req, res) => {
//       res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
//     });
//     // app.get("*", (req, res) => {
//     //   res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"));
//     // });
//     // } else {
//     //   app.get("/", (req, res) => {
//     //     res.send("API is Running Successfully")
//     //   })
//   }

module.exports = app;