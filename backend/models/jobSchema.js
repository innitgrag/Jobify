import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({

title:{
    type: String,
    required: [true, "Please provide job title"],
    minLength: [3 , "Job title must contain at least 3 character"],
    maxLength: [50 , "Job title cannot exceed 50 characters!"],
},

description:{
    type: String,
    required: [true, "Please provide job description"],
    minLength: [50 , "Job description must contain at least 50 character"],
    maxLength: [350 , "Job description cannot exceed 350 characters!"],
},
category:{
    type: String,
    required: [true, "Job category is required"],
},
country:{
    type: String,
    required: [true, "Job country is required"],
},
state:{
    type: String,
    required: [true, "Job state is required"],
},
location:{
    type: String,
    required: [true, "Job location is required"],
    minLength: [20 , "Address must contain at least 20 character"],
},
fixedSalary:{
    type: Number,
    minLength: [4 , "Salary must contain at least 4 digits"],
    maxLength: [9 , "Salary title cannot exceed 9 digits!"],
},
salaryFrom:{
    type: Number,
    minLength: [4 , "Salary must contain at least 4 digits"],
    maxLength: [9 , "Salary title cannot exceed 9 digits!"],
},
salaryTo:{
    type: Number,
    minLength: [4 , "Salary must contain at least 4 digits"],
    maxLength: [9 , "Salary title cannot exceed 9 digits!"],
},
expired:{
    type: Boolean,
    default: false,
},
jobPostedOn: {
    type: Date,
    default: Date.now,
},
postedBy:{
    type: mongoose.Schema.ObjectId,
    ref: "user",
    required: true,
},


});

export const Job = mongoose.model("Job",jobSchema);