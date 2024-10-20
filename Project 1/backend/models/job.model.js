// import { type } from "express/lib/response";
import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    jobType:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    company:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'company',
        required:true
    },
    created_by:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    applications:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Application',
    }
]
},{timestamps:true});
export const Job = mongoose.model("Job",jobSchema);