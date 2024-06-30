import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true , "Please provide a name"],
        minLength: [3, "Name must contain atleast 3 character"],
        maxLength: [30, "Name should not contain more than 30 character"],
        },

        email: {
            type: String,
            required: [true , "Please provide a email"],
            validator: [validator.isEmail, "Please provide a valid email"],
            },

        phone:{
            type: Number,
            required: [true, "Please provide your Phone Number"],
        },

        password:{
            type: String,
            required: [true, "Please provide a password"],
            minLength: [8, "Password must contain atleast 8 character"],
        maxLength: [50, "Password should not contain more than 30 character"],
        select: false,

        },

        role:{
            type: String,
            required: [true, "Please provide your role"],
            enum: ["Job Seeker" , "Employer"],
        },
        createdAt:{
            type: Date,
            default: Date.now,
        },

});

//Hashing the password
userSchema.pre("save",async function(next){
        if(!this.isModified("password")){
            next();
        }
this.password = await bcrypt.hash(this.password,10);

});

//Comparing the password
userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
};

//Generating a jwt token for authentication
userSchema.methods.getJWTToken = function(){

    return jwt.sign({id: this._id}, process.env.JWT_SECRET_KEY,{
        expiresIn: process.env.JWT_EXPIRES,
    });
};

export const User = mongoose.model("User", userSchema);