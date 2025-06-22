import {milestoneService} from "../services/index.js";

const create = async(req, res) => {
    const {title, date, notes} = req.body;
    try {
        const result = await milestoneService.create({title, date, notes, userId: req.user.id}); 
        res.status(201).send(result); 
    } catch (error) {
        res.status(500).send({message: error.message});
    }    
};

const getAll = async (req, res) => {
    try {
        const type = req.params.type; 
        const result = await milestoneService.getAll(req.user.id, type); 
        res.status(200).send(result); 
    } catch (error) {
        res.status(500).send({message: error.message});
    }  
};

const addTips = async (req, res) => {
    const { content } = req.body;
    const milestoneId = req.params.id;
    const userId = req.user.id;
    try { 
        const result = await milestoneService.addTips({content, milestoneId, userId}); 
        res.status(201).send(result); 
    } catch (error) {
        res.status(500).send({message: error.message});
    }  
};

const getTips = async (req, res) => { 
    const milestoneId = req.params.id;
    const userId = req.user.id;
    try {
        const result = await milestoneService.getTips(milestoneId, userId); 
        res.status(200).send(result); 
    } catch (error) {
        res.status(500).send({message: error.message});
    }  
};

export default { create, getAll, addTips, getTips };
