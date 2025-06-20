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
    toast.error(error.response.data.message);
    return false;
  }
};
const handleRegister = async (username, email, password) => {
  try {
    const result = await axios.post(`${apiEndpoint}/users/signup`, { username, email, password });
    if (result.status === 201) {
      toast.success(result.data.message);
      return true;
    }
  } catch (error) {
    toast.error(error.response.data.message);
    return false;
  }
};

export { handleLogin, handleRegister };
