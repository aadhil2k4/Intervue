import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.Route.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.use("/api/auth/", authRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
