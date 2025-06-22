import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/authSlice";
import { getTips, handleAddTips } from "../services/milestone";
import { updateTips } from "../store/milestoneSlice";
import { toast } from "react-toastify"; 
import { FaUserCircle } from "react-icons/fa";

function Tips() {

  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoggedin, user } = useSelector((state) => state.auth);
  const { allMilestones, userMilestones, tips } = useSelector((state) => state.milestone);

  const milestone = allMilestones.find((m) => m._id === id) || userMilestones.find((m) => m._id === id);
  const [newTip, setNewTip] = useState("");

  useEffect(() => {
    if (!isLoggedin) {
      dispatch(logout());
      navigate("/");
    }
    //eslint-disable-next-line
  }, [isLoggedin]);

  useEffect(() => {
    const fetchTips = async () => {
      const result = await getTips(id, user.token);
      if (result) {
        dispatch(updateTips([...result]));
      }
    };

    fetchTips();
    //eslint-disable-next-line
  }, [user.token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newTip.trim()) return toast.error("Tip cannot be empty");

    const result = await handleAddTips(id, newTip, user.token);
    if (result) {
      dispatch(updateTips([...tips, result]));
      setNewTip(""); 
    }  
  };

  const filteredTips = tips.filter((tip) => tip.milestoneId === id);

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow rounded-xl">
      {milestone ? (
        <>  
          <p className="flex gap-1 items-center m-0 mb-2"><FaUserCircle size={18} color="#888"/> {milestone.userId.username}</p>
          <h2 className="text-2xl text-primary mb-2">
            {milestone.title}
          </h2>
          <p className="text-sm text-gray-500 mb-1">
            Date: {new Date(milestone.date).toLocaleDateString("en-IN")}
          </p>
          {milestone.notes && (
            <p className="text-sm text-gray-700 mb-4">
              Notes: {milestone.notes}
            </p>
          )}
        </>
      ) : (
        <p className="text-red-500">Milestone not found</p>
      )}

      <form onSubmit={handleSubmit} className="mb-6">
        <textarea
          value={newTip}
          onChange={(e) => setNewTip(e.target.value)}
          placeholder="Share your tip for this milestone..."
          className="w-full p-3 border border-gray-300 rounded mb-2"
          rows={4}
        />
        <button type="submit" className="btn bg-primary text-white w-full">
          Submit
        </button>
      </form>

      <h3 className="text-lg font-semibold mb-2 text-primary">
        Community Tips
      </h3>
      {filteredTips.length === 0 ? (
        <p className="text-gray-500">No tips yet. Be the first to add one.!</p>
      ) : (
        <ul className="space-y-3">
          {filteredTips.map((tip) => (
            <li key={tip._id} className="bg-gray-100 p-3 rounded text-sm border border-[#ccc]">
              <p className="flex gap-1 items-center m-0 mb-2"><FaUserCircle size={18} color="#888"/> {tip.userId.username}</p>
              {tip.content}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Tips;
