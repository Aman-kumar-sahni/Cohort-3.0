import express from "express";
import appRouter from "../routes/auth.routes.js";
import cookieParser from "cookie-parser";
import productRoute from "../routes/product.routes.js"
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",appRouter);
app.use("/api/product/",productRoute)


export default app;