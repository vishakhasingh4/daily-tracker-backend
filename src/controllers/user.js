import UserSignup from "../models/user.js";

export const createUser = async (req, res) => {
  let user = req.body;

  const newUser = new UserSignup(user);
  try {
    await newUser.save();
	res.status(200).json({message: "User Created Succesfully!"})
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
