const express = require("express");
const connectDB = require("./src/config/DB");
const path = require("path");

const app = express();

if (process.env.NODE_ENV !== "production") {
  const cors = require("cors");
  app.use(cors());
}

connectDB();
app.use(express.json());

const noteRoute = require("./src/routes/noteRoute");
app.use("/note", noteRoute);

// Serve frontend build (for Vite)
app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
});

app.listen(5001, () => {
  console.log("Server is running on port: 5001");
});
