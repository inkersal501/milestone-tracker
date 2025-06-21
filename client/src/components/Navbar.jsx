import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, updateIsLogin } from '../store/authSlice';

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
            <p className='text-primary'>Welcome, {user.username}</p>
            <button
              onClick={handleLogout}
              className="btn"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button onClick={()=>{dispatch(updateIsLogin(true));navigate("/")}} className="btn">
              Login
            </button>
            <button onClick={()=>{dispatch(updateIsLogin(false));navigate("/")}} className="btn">
              Register
            </button> 
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
