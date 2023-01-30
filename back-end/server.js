const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("../back-end/routes/userRoutes");

dotenv.config();
connectDB();
const app = express();

app.get("/", (req, res) => {
  res.send("Success");
});

app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server start on port: ${PORT}`.yellow.bold));
