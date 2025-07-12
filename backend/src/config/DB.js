const { default: mongoose } = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("db connect successfully");
  } catch (err) {
    console.error("db connection error:", err);
  }
};

module.exports = connectDB;
