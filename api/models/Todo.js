import mongoose, { Schema } from "mongoose";

const TOdoschema=mongoose.Schema({
    "title":{
        type:String,
        required:true,
    },
    tasks:{
        type:[String],
        default: [],
    },
    author:{
        type:Schema.Types.ObjectId,
        ref:"User",
    },
},{timestamps:true});

export const ToDoModel=mongoose.model('Todo',TOdoschema);
