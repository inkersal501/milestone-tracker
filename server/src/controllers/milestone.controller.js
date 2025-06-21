import {milestoneService} from "../services/index.js";

const create = async(req, res) => {
    const {title, date, notes} = req.body;
    try {
        console.log({title, date, notes, userId: req.user.id})
        const result = await milestoneService.create({title, date, notes, userId: req.user.id}); 
        res.status(201).send(result); 
    } catch (error) {
        res.status(500).send({message: error.message});
    }    
};

const getAll = async (req, res) => {
    try {
        const result = await milestoneService.getAll(req.user.id); 
        res.status(200).send(result); 
    } catch (error) {
        res.status(500).send({message: error.message});
    }  
};
const addTips = async (req, res) => {

};

export default { create, getAll, addTips };
