import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { toast } from "react-toastify";
import { handleAddTips } from "../services/milestone";
import { logout } from "../store/authSlice";

function AddTips() {

    const { id } = useParams(); 
    const {isLoggedin, user} = useSelector((state) => state.auth); 
    const [tip, setTip] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(()=> {
        if(!isLoggedin) {
            dispatch(logout());
            navigate("/");
        }
        //eslint-disable-next-line
    }, [isLoggedin]);

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        if (!tip.trim()) {
            return toast.error("Tip cannot be empty");
        }else{
            await handleAddTips(tip, id, user.token);
            // dispatch(updateMilestones([...milestones, result]));
            // navigate("/dashboard"); 
        }   
    };

    return (
        <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-primary">Add a Tip</h2>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={tip}
                    onChange={(e) => setTip(e.target.value)}
                    placeholder="Write your tip here..."
                    className="w-full p-3 border border-gray-300 rounded mb-3"
                    rows={4}
                />
                <button type="submit" className="btn bg-primary text-white w-full">
                    Submit Tip
                </button>
            </form>
        </div>
    );
}

export default AddTips;
