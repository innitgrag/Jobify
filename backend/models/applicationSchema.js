import mongoose from "mongoose";
import validator from "validator";

const applicationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"],
        minLength: [3 , "Name must contain atleast 3 character"],
        maxLength: [30 , "Name cannot exceed 30 character"],
    },

    email: {
        type: String,
        required: [true , "Please provide a email"],
        validator: [validator.isEmail, "Please provide a valid email"],
        },

        coverLetter: {
            type:String,
            required: [true, "Please provide your cover letter"],

        },

        phone:{
            type: Number,
            required: [true, "Please provide your Phone Number"],
        },

        address:{
            type: String,
            required: [true, "Please provide your address "],
            minLength: [20 , "Address must contain at least 20 character"],
        },

        resume:{
            public_id:{
                type: String,
                required: true
            },

            url:{
                type: String,
                required: true
            }
        },

        applicantID:{
            user:{
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
                required: true
            },
            role:{
                type: String,
                enum: ["Job Seeker"],
                required: true

            }
        },

        employerID:{
            user:{
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
                required: true
            },
            role:{
                type: String,
                enum: ["Employer"],
                required: true

            }
        },

});

export const Application = mongoose.model("Application", applicationSchema);