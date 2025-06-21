import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { handleLogin, handleRegister } from "../services/auth";
import { useDispatch, useSelector } from "react-redux";
import { login, updateIsLogin } from "../store/authSlice";
import { useNavigate } from 'react-router-dom';
 
function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedin = useSelector((state) => state.auth.isLoggedin);
  const isLogin  = useSelector((state) => state.auth.isLogin);
  
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(()=> {
    if(isLoggedin) {
      navigate("/dashboard");
    }
    //eslint-disable-next-line
  }, [isLoggedin])

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) return toast.error("Email is required");
    if (!password) return toast.error("Password is required");
    if (!isLogin && !username) return toast.error("Username is required");

    try {
      let user;
      if (isLogin) {
        user = await handleLogin(email, password);
      } else {
        user = await handleRegister(username, email, password);
      }

      if (user) {
        dispatch(login({ ...user }));
        navigate("/dashboard");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    }
  };

  return (
     
      <div className='h-screen w-full flex justify-center items-center'>      
        <div className="w-[40%]">
          <h2 className='text-3xl mb-5'>Welcome to</h2>
          <h3 className='text-5xl text-primary'>Milestone Tracker & Community Tips</h3>
        </div>
        <div className="w-[30%]">
          <div className="p-10 border-primary rounded-4xl">
            <h2 className='text-4xl mb-6 text-primary'>
              {isLogin ? "Login" : "Register"} Here
            </h2>
            <form onSubmit={handleSubmit}>
              {!isLogin && (
                <div className='flex flex-col mb-4'>
                  <label htmlFor="username" className="block font-medium mb-1">Username</label>
                  <input
                    type="text"
                    id="username"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    className='input'
                  />
                </div>
              )}
              <div className='flex flex-col mb-4'>
                <label htmlFor="email" className="block font-medium mb-1">Email</label>
                <input
                  type="text"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className='input'
                />
              </div>
              <div className='flex flex-col mb-6'>
                <label htmlFor="password" className="block font-medium mb-1">Password</label>
                <input
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className='input'
                />
              </div>
              <div className="text-sm text-end mb-3">
                <a href="#" className='text-primary'>
                  {isLogin && "Forgot password?"}
                </a>
              </div>
              <button type="submit" className='btn w-full'>
                {isLogin ? "Login" : "Register"}
              </button>
              <div className="text-center mt-4">
                <span>
                  {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                </span>
                <button
                  type="button"
                  className='text-primary underline ml-1'
                  onClick={() => dispatch(updateIsLogin(!isLogin))}
                >
                  {isLogin ? "Register" : "Login"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
  
  );
}

export default Login;
