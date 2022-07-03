import mongoose from "mongoose";

const user = mongoose.Schema({
  email: String,
  name: String,
  type: { type: String, default: "user" },
});

var UserSignup = mongoose.model("user", user);

export default UserSignup;
