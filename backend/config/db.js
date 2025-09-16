const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongoose Connected");
  } catch (error) {
    console.error(`Error in DB: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
