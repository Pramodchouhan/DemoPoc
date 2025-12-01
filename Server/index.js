import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import route from "./Routes/userRoutes.js";

dotenv.config();

const app = express();
app.use(bodyParser.json());

app.use('/api', route);

const PORT = process.env.PORT || 8000;
const MONGOURL = process.env.MONGO_URL;
console.log("DB HOST:", process.env.DB_HOST);

mongoose.connect(MONGOURL)
  .then(() => {
    console.log("Connected Successfully");
    app.listen(PORT, () => {
      console.log("Server listening on", PORT);
    });
  })
  .catch(() => {
    console.log("DB connection error");
  });
