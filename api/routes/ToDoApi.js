import express from "express"
import { ToDoModel } from "../models/Todo.js";

export const ToDoApi=express.Router();

ToDoApi.get('/getTasks',async(req,res)=>{
    const {id}=req.body;

    try {
        const tasks=await ToDoModel.find({author:id});
        res.json(tasks);
    } catch (error) {
        console.log(error);
    }
});

ToDoApi.post('/newtask/:id',async(req,res)=>{
    const {id}=req.params;
    const {task}=req.body;
    console.log("hit");
    console.log(task);

    try {
        const updateToDo=await ToDoModel.updateOne({_id:id},{
            $push:{"tasks":task},
        })
        res.json(updateToDo);
    } catch (error) {
        console.log(error);
    }
});

ToDoApi.post('/newtodo',async(req,res)=>{
    const{title,todos,author}=req.body;
    console.log(todos);

    const newtodo=await ToDoModel.create({
        title,
        "tasks":todos,
        author
    });
    res.json(newtodo);
});

ToDoApi.delete('/delete/:id/:i',async(req,res)=>{
    //find the todo list with that id
    const {id,i}=req.params;
    const number=Number(i);
    console.log(i);
    const Todo=await ToDoModel.findById(id);

    let tasks=Todo.tasks;
    tasks=tasks.filter((task,index)=>{
        return number!==index;
    });
    // console.log(tasks);
    // res.json(tasks);
    //now update in database
    const updatedToDo=await ToDoModel.updateOne({_id:id},{
        "tasks":tasks,
    });
    res.json(updatedToDo);
})

ToDoApi.delete('/deleteToDo/:id',async(req,res)=>{
    const {id}=req.params;

    const deletedToDO=await ToDoModel.findByIdAndDelete(id);
    res.json(deletedToDO);
});



