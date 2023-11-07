import { Router } from "express";
import express from "express";
import NoteModel from "../models/Note.js";
import jwt from"jsonwebtoken";
import  dotenv from "dotenv"
dotenv.config();

const noteapi=express.Router();
const secret=process.env.JWT_SECRET;

noteapi.get("/getnote",async(req,res)=>{
    const {token}=req.cookies;
    jwt.verify(token,secret,{},async(err,info)=>{
        if(err)
            throw err;
        const notes=await NoteModel.find({author:info.id});
        res.json(notes);
    })
});

noteapi.get("/getnote/:id",async(req,res)=>{
    const {id}=req.params;

    const notedoc=await NoteModel.findOne({_id:id});
    res.json(notedoc);
})

noteapi.post("/addnote",async(req,res)=>{
    const {title,content}=req.body;
    const {token}=req.cookies;

    jwt.verify(token,secret,{},async(err,info)=>{
        if(err)
            throw err;
        const userid=info.id;
        const notedoc=await NoteModel.create({
            title,content,
            author:userid,
        });
        res.json(notedoc);
    })
});

noteapi.put("/updatenote/:id",async(req,res)=>{
    try {
        const {title,content}=req.body;
        const {id}=req.params;
        const {token}=req.cookies;
        jwt.verify(token,secret,{},async(err,info)=>{
            if(err)
                throw err;
            const userid=info.id;
            const updatenote=await NoteModel.updateOne({_id:id},{
                title:title,
                content:content,
                author:userid,
            });
            res.json(updatenote);
            console.log(updatenote);
        });
    } catch (error) {
        res.status(404).json("Notes not found");
    }
})

noteapi.delete("/deletenote/:id",async(req,res)=>{
    try {
        const {id}=req.params;
        const deletenote=await NoteModel.deleteOne({_id:id});
        if(deletenote.deletedCount==1){
            res.json({deletenote,msg:"Deleted Note Successfully"});
        }
        else{
            res.status(404).json("Invalid Note id doesnt exist");
        }
    } catch (error) {
        res.status(404).json("Invalid Note id doesnt exist");
    }
})

export default noteapi;