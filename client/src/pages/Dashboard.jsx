import React, {useEffect} from 'react' 
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/authSlice";
import { useState } from 'react';
import { getMilestones } from '../services/milestone';
import { updateMilestones } from '../store/milestoneSlice';
import MilestoneCard from '../components/MilestoneCard';
import { MdAddCircle } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

function Dashboard() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {isLoggedin, user} = useSelector((state) => state.auth); 
  const milestoneData = useSelector((state) => state.milestone.data);
  const [milestones, setMilestones] = useState(milestoneData || []);
  const [search, setSearch] = useState('');

  useEffect(()=> { 
    if(!isLoggedin) {
      dispatch(logout());
      navigate("/");
    }
    //eslint-disable-next-line
  }, [isLoggedin]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getMilestones(user.token);
      if(result) {
        setMilestones(result);
        dispatch(updateMilestones([...result]));
      }
    };

    fetchData();
    //eslint-disable-next-line
  }, []);
  

  return (
    <div className='p-5 md:p-7'>
      <div className="flex justify-between items-center mb-5">
        <h3 className='text-3xl'>Milestones</h3>
        <input type='text' id='search' className='input w-1/4' onClick={(e)=>setSearch(e.target.value)} value={search} placeholder='Search...' />
        <button className='btn flex items-center gap-2' onClick={()=>navigate("/milestone/add")}><MdAddCircle size={16}/> New Milestone</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
        {milestones.length > 0 && milestones.map((milestone, index) => (
            <MilestoneCard key={index} milestone={milestone} />
        ))}
      </div>   
    </div>
  )
}

export default Dashboard