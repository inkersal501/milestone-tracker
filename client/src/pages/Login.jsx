import { useState } from "react"; 
import { toast } from "react-toastify";
import { handleLogin } from "../services/auth";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";
import { useNavigate } from 'react-router-dom'; 

function Login() {

  const navigate = useNavigate();
  const dispatch = useDispatch(); 
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(email === "") 
      toast.error("Email is empty.");
    else if(password === "") 
      toast.error("Password is empty.");
    else{
      const user = await handleLogin(email, password);
      if (user) {
        dispatch(login({ ...user }));
        navigate("/dashboard");
      }
    }
  }   

  return (
    <div className='bg-[#fff] h-screen w-full flex justify-center items-center'>
      <div className="w-[40%]">
        <h2 className='text-3xl mb-5'>Welcome to</h2>
        <h3 className='text-5xl text-primary'>Milestone Tracker & Community Tips</h3>
      </div>
      <div className="w-[30%]">
        <div className="p-10 border-primary rounded-4xl">
          <h2 className='text-4xl mb-10 text-primary'>Login Here.</h2>
          <form onSubmit={handleSubmit}>
            <div className='flex flex-col gap-1'>
              <label htmlFor="email">Email</label>
              <input type="text" id="email" onChange={(e)=>setEmail(e.target.value)} value={email} className='input'/>
            </div>
            <div className='flex flex-col gap-1 my-4'>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" onChange={(e)=>setPassword(e.target.value)} value={password} className='input'/>
            </div>
            <div className="text-end">
              <a href="#" className='text-primary'>Forget Password ?</a>
            </div>
            <div>
              <button type="submit" className='btn'>Login</button>
            </div>
          </form>
        </div>
      </div> 
    </div>
  )
}

export default Login