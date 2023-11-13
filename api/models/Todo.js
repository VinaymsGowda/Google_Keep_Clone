import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema({
    tasks: {
        type: String,
        required: true,
    },
    checked: {
        type: Boolean,
        default: false,
    },
    author:{
        type:Schema.Types.ObjectId,
        ref:"User",
    },
});


export const TaskModel=mongoose.model('Task',taskSchema);
