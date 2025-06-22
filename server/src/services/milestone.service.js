import { milestoneModel, tipsModel, userModel } from "../models/index.js";

const create = async (data) => {
    try {
        const milestone = await milestoneModel.create(data);
        const {_id, title, date, notes, userId} = milestone;
        const {username} = await userModel.findById(userId);
        return {_id, title, date, notes, userId: {username} };
    } catch (error) {
        throw new Error("Milestone creation failed.");
    }
};
const getAll = async (userId, type) => {
    try {
        let milestones;
        if(type === 'all'){
            milestones = await milestoneModel.find().populate("userId", "username").sort({date: 1});
        } else{
            milestones = await milestoneModel.find({ userId }).populate("userId", "username").sort({date: 1});
        }
        return [...milestones];
    } catch (error) {
        throw new Error("Erro fetching milestones.");
    }
};

const addTips = async (data) => {
    try {
        const tips = await tipsModel.create(data); 
        const {_id, content, milestoneId, userId} = tips;
        const {username} = await userModel.findById(userId);
        return {_id, content, milestoneId, userId: {username} }; 
    } catch (error) {
        throw new Error("Failed to add tips. Try again.");
    }
};

const getTips = async (milestoneId) => {
    try {
        const tips = await tipsModel.find({ milestoneId }).populate("userId", "username").sort({createdAt:-1}); 
        return [...tips];
    } catch (error) {
        throw new Error("Erro fetching tips.");
    }
};

export default { create, getAll, addTips, getTips };
