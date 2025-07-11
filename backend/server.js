const express = require("express");
const connectDB = require("./src/config/DB");
// const connectDB = require("./src/config/DB")
const app = express();
const cors = require("cors");
app.use(cors());
connectDB();
app.use(express.json());
const noteRoute = require("./src/routes/noteRoute");

app.use("/note", noteRoute);



app.listen(5001, () => {
  console.log("Server is running on port: 5001");
});
