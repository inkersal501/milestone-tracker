import { useState, useEffect } from "react";
import { toast } from "react-toastify";  
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/authSlice";
import {handleAddMilestone} from "../services/milestone";
import { useNavigate } from "react-router-dom";
import { updateMilestones } from "../store/milestoneSlice";

function Addmilestone() {

    const {isLoggedin, user} = useSelector((state) => state.auth); 
    const milestones = useSelector((state) => state.milestone.data || []);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [notes, setNotes] = useState("");

    useEffect(()=> {
        if(!isLoggedin) {
          dispatch(logout());
          navigate("/");
        }
        //eslint-disable-next-line
    }, [isLoggedin]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !date) {
            return toast.error("Title and Date are required");
        }else{
            const result =  await handleAddMilestone(title, date, notes, user.token);
            dispatch(updateMilestones([...milestones, result]));
            navigate("/dashboard"); 
        }  
    };

    return (  
        <div className="max-w-md mx-auto mt-10 p-10 shadow border-primary rounded-4xl">
            <h2 className="text-3xl font-bold mb-10 text-primary">New Milestone</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                <label htmlFor="title" className="block font-medium mb-1">Title</label>
                <input
                    type="text"
                    id="title"
                    className="input w-full"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g., First Ultrasound"
                />
                </div>
                <div>
                <label htmlFor="date" className="block font-medium mb-1">Date</label>
                <input
                    type="date"
                    id="date"
                    className="input w-full"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                </div>
                <div>
                <label htmlFor="notes" className="block font-medium mb-1">Notes</label>
                <textarea
                    id="notes"
                    className="input w-full"
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Optional notes about this milestone..."
                ></textarea>
                </div>
                <button type="submit" className="btn bg-primary text-white w-full">
                Save Milestone
                </button>
            </form>
        </div> 
    )
}

export default Addmilestone