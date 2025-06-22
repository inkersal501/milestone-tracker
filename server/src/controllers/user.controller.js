import { userService } from "../services/index.js";

const signUp = async (req, res) => {
  try {
    const newUser = await userService.signUp(req.body);
    res.status(201).send({ message: "SignUp Successfull.", user: newUser});
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const signIn = async (req, res) => {
  try {
    const user = await userService.signIn({ ...req.body });
    res.status(200).send({...user });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await userService.getUser(req.params.userId);
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
export default { signUp, signIn, getUser };
