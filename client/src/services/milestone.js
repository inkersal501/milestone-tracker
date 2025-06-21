import { apiEndpoint } from "./config";
import axios from "axios";
import { toast } from "react-toastify";

const handleAddMilestone = async (title, date, notes, userToken ) => {
    try {
        const result = await axios.post(`${apiEndpoint}/milestones`, { title, date, notes }, {
            headers: {
                Authorization: `Bearer ${userToken}`
            }
        });
        if (result.status === 201) {
            toast.success("Milestone created Successully.");
            return result.data;
        }
    } catch (error) {
        toast.error(error.response.data.message);
        return false;
    }
}
const getMilestones = async (userToken) => { 
    try {
        const result = await axios.get(`${apiEndpoint}/milestones`, {
            headers: {
                Authorization: `Bearer ${userToken}`
            }
        });
        if (result.status === 200) { 
            return result.data;
        }
    } catch (error) {
        toast.error(error.response.data.message);
        return false;
    }
};

export { handleAddMilestone, getMilestones }; 