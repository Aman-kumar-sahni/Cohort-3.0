
const express = require("express");
const appRoutes = require("./routes/authRoutes");

const app = express();

app.use(express.json());

app.use("/auth", appRoutes);

module.exports = app;