import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, updateIsLogin } from '../store/authSlice';
import { FiLogIn, FiLogOut } from "react-icons/fi"; 
import { FaSignInAlt } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

function Navbar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth); 

    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    };

  return (
    <nav className="shadow border-b border-[#eee] py-4 px-8 flex items-center justify-between">
      <div>
        <Link to="/dashboard" className="text-2xl font-bold text-primary">
          Milestone Tracker
        </Link>
      </div>

      <div className="flex items-center gap-6">
        {user ? (
          <>
            <Link to="/dashboard" className="text-gray-700 hover:text-primary">
              My Milestones
            </Link> 
            <p className='text-primary flex items-center gap-2'><FaUserCircle size={18}/> Welcome, {user.username}</p>
            <button
              onClick={handleLogout}
              className="btn flex items-center gap-2"
            >
              <FiLogOut /> Logout
            </button>
          </>
        ) : (
          <>
            <button onClick={()=>{dispatch(updateIsLogin(true));navigate("/")}} className="btn flex items-center gap-2">
              <FiLogIn /> Login
            </button>
            <button onClick={()=>{dispatch(updateIsLogin(false));navigate("/")}} className="btn flex items-center gap-2">
              <FaSignInAlt /> Register
            </button> 
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
