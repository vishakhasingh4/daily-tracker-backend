import express from "express";
import { createUser } from "../controllers/user.js";

const router = express.Router();

router.route("/user/hello").get((req, res) => {
  res.send("hello user!");
});

router.route("/user/create").post(createUser);

export default router;
