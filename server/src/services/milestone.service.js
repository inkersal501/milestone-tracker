import { milestoneModel, tipsModel } from "../models/index.js";

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
const addTips = async (data) => {
    try {
        const tips = await tipsModel.create(data);
        return { tips };
    } catch (error) {
        throw new Error("Failed to add tips. Try again.");
    }
};

const getTips = async (milestoneId, userId) => {
    try {
        const tips = await tipsModel.find({ milestoneId, userId }); 
        return [...tips];
    } catch (error) {
        throw new Error("Erro fetching tips.");
    }
};

export default { create, getAll, addTips, getTips };
