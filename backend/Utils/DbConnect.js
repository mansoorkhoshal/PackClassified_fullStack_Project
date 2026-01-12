require("dotenv").config();

const mongoose = require("mongoose");

exports.connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION_STRING);
    console.log("DB connected successfuly");
  } catch (error) {
    console.log(error.message);
  }
};
