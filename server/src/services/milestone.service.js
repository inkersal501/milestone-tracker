import { milestoneModel } from "../models/index.js";

const create = async (data) => {
    try {
        const milestone = await milestoneModel.create(data);
        return { milestone };
    } catch (error) {
        throw new Error("Milestone creation failed.");
    }
};
const getAll = async (userId) => {
    try {
        const milestones = await milestoneModel.find({ userId }); 
        return [...milestones];
    } catch (error) {
        throw new Error("Erro fetching milestones.");
    }
};
const addTips = async () => {
      
};

export default { create, getAll, addTips };
