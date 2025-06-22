import { userModel } from "../models/index.js";
import generateToken from "./token.service.js";

const signUp = async (req) => {
  const { username, email, password } = req;

  const existing1 = await userModel.findOne({ username });
  if (existing1) throw new Error("Username already exists.");

  const existing2 = await userModel.findOne({ email });
  if (existing2) throw new Error("Email already exists.");
  
  try {
    const user = await userModel.create({ username, email, password }); 
    const token = generateToken(user._id);
    return { email, username: user.username, token };
  } catch (err) {
    throw new Error("User creation failed: " + err.message);
  }
};

const signIn = async ({ email, password }) => {
  const user = await userModel.findOne({ email });
  if (!user) throw new Error("User not found.");

  const isMatch = await user.isPasswordsMatch(password);
  if (!isMatch) throw new Error("Incorrect password.");
  const token = generateToken(user._id);

  return { email, username: user.username, token };
};

const getUser = async (userId) => {
  const user = await userModel.findById(userId).lean();
  if (!user) throw new Error("User not found.");
  return user;
};

export default { signUp, signIn, getUser };
