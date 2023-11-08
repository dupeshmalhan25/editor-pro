const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async (url) => {
  try {
    console.log(process.env.MONGO_URL);
    const URL = url || process.env.MONGO_URL;
    if (!URL) throw new Error("MONGO_URL is not defined");
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DEBUG: MongoDB connected");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;
