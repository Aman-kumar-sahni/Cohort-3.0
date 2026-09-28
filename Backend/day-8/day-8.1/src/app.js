
const fileRoute = require("./routes/file.routes")
const express = require("express")
const cors = require("cors")

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());
app.use("/file",fileRoute);

module.exports = app;
