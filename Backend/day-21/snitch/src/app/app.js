import express from "express";
import appRoute from "../routes/auth.routes.js"
const app = express()

app.use(express.json());
app.use("/api/auth",appRoute)

export default app;