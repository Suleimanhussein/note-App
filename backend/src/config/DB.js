const { default: mongoose } = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.connect("mongodb://localhost:27017/note-App");
    console.log("db connect successfully");
  } catch (error) {
      console.log("not conntect db",error)
  }
};


module.exports=connectDB