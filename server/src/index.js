import express from "express";
import cors from "cors";
import config from "./config/config.js";
import route from "./routes/index.js";
import mongoose from "mongoose";

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});

app.get("/", (req, res) => {
  res.send("Building Milestone Tracker & Community Tips");
});

app.use(route);

app.listen(config.PORT, () => {
  console.log(`Milestone tracker app listening on port ${config.PORT}`);
});

mongoose
  .connect(config.DB_URI)
  .then(() => console.log("DB Connected.", mongoose.connection.name))
  .catch((error) => console.log("DB connection failed."));
