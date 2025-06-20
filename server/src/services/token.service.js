import jwt from "jsonwebtoken";
import config from "../config/config.js";

const generateToken = (userId) => {
  const token = jwt.sign({ id: userId }, config.jwtSecret, {
    expiresIn: config.jwtExpire,
  });
  return token;
};

export default generateToken;
