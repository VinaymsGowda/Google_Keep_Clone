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

export default noteapi;