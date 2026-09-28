import express from "express";

const app = express();

// Middleware
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server is running",
  });
});

export default app;