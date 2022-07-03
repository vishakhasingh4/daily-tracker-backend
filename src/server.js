import express from "express";
import dotenv from "dotenv";
import router from "./routes/index.js";
import connectDB from "./config/db.js";
import bodyParser from "body-parser";

const app = express();

(function server() {
  dotenv.config();
  connectDB();
  const PORT = process.env.PORT;
  app.use(bodyParser.json({ limit: "30mb", extended: true }));
  app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
  app.use("/api", router);

  app.listen(PORT, function () {
    console.log(`server listening on port ${PORT}`);
  });
})();
