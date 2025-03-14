const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("db connected");
  } catch (error) {
    console.error("Error connecting DB", error);
    process.exit(1);
  }
};

module.exports = { connectDB };
