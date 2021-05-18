import connectDatabase from "./src/configs/db.configs.js";
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";
import todoRoute from "./src/routes/router.js";
var app = express();
const port = 3000;
const isProduciton = process.env.NODE_END === "production";
dotenv.config();
app.use(helmet());
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.use("/api", todoRoute);
app.get("/", (req, res) => {
  return res.send("hello");
});

connectDatabase();
app.listen(port, () => {
  console.log("server is started");
});
