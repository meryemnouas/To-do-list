const express = require('express');
const Task = require('../models/task');

const router = express.Router();

// get tasks 
router.get("/tasks", async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    }catch(err){
        res.status(500).json({error : err.message});
    }    
    });

// post tasks
router.post("/tasks", async (req,res)=> {
    try {
        const task = new Task (req.body);
        await task.save();
        res.status(200).json( {message : "Added successfuly!",task});
    } catch (err) {
        res.status(500).json({error : err.message});
    }
});

// Update tasks by id
router.put("/tasks/:id",async (req,res)=>{
    try {
        const {id}= req.params;
        const dataToUpdate = req.body;
        const task = await Task.findByIdAndUpdate(id, dataToUpdate, { new: true });
        res.status(200).json({message : "Updated Successfully!", task});
    }catch(err){
        res.status(500).json({error : err.message});
    }
   
});

// Delete tasks by id
router.delete("/tasks/:id", async (req,res)=>{
    try {
        const {id} = req.params;
        const task = await Task.findByIdAndDelete(id);
        res.status(200).json({message : "Deleted Successfully!", task});
    }catch (err){
        res.status(500).json({error : err.message});
    }
});

module.exports = router;