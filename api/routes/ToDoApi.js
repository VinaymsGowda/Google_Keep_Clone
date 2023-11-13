import express from "express"
import { TaskModel } from "../models/Todo.js";

export const ToDoApi=express.Router();

ToDoApi.get('/getTasks/:id',async(req,res)=>{
    const {id}=req.params;

    try {
        const tasks=await TaskModel.find({author:id});
        res.json(tasks);
    } catch (error) {
        console.log(error);
    }
});


ToDoApi.post('/newtodo',async(req,res)=>{
    const{tasks,author}=req.body;
    // console.log(todos);

    const newtodo=await TaskModel.create({
        "tasks":tasks,
        author
    });
    res.json(newtodo);
});

ToDoApi.put('/changecheck/:id',async(req,res)=>{
    const {id}=req.params;
    const {status}=req.body;

    const response=await TaskModel.updateOne({_id:id},{
        "checked":(!status),
    });

    const updatedTask = await TaskModel.findOne({ _id: id });

    res.json(updatedTask);
})


ToDoApi.delete('/deleteToDo/:id',async(req,res)=>{
    const {id}=req.params;

    const deletedToDO=await TaskModel.findByIdAndDelete(id);
    res.json(deletedToDO);
});



