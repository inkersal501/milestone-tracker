import { apiEndpoint } from "./config";
import axios from "axios";
import { toast } from "react-toastify";

const handleLogin = async (email, password) => {
  try {
    const result = await axios.post(`${apiEndpoint}/users/signin`, {
      email,
      password,
    });
    if (result.status === 200) {
      toast.success("Loggedin Successully.");
      return result.data;
    }
  } catch (error) {
    toast.error(error.response.data.error);
    return false;
  }
};
const handleRegister = async (req) => {
  try {
    const result = await axios.post(`${apiEndpoint}/users/signup`, { ...req });
    if (result.status === 201) {
      toast.success(result.data.message);
      return true;
    }
  } catch (error) {
    toast.error(error.response.data.error);
    return false;
  }
};

export { handleLogin, handleRegister };
