import express from "express";
import cookieParser from "cookie-parser";
import { connectDatabase } from "./connectDB.js";
import Entry from "./model.js";
import cors from 'cors'

const app = express();

app.use(express.json());


app.use(cookieParser());
connectDatabase();
app.use(cors({origin:'*'}))
app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});

app.get("/", async (req, res) => {
  res.status(200).json({
    message: "hello world"
  })
});
app.get("/api/entries", async (req, res) => {
  try {
    const entries = await Entry.find();
    res.json(entries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
