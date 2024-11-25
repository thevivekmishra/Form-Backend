import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/Database.js";
import formRouter from "./routes/FormRoutes.js";
import cors from 'cors'


dotenv.config();

const app = express();
app.use(cors())

// Middleware
app.use(express.json());

app.use("/api/form",formRouter)
// Routes
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Connect Database
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
