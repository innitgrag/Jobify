import app from "./app.js";
import cloudinary from "cloudinary";

cloudinary.v2.config({
    cloud_name: process.env.CLOUNDINARY_CLIENT_NAME,
    api_key: process.env.CLOUNDINARY_CLIENT_API,
    api_secret: process.env.CLOUNDINARY_CLIENT_SECRET,
});



app.listen(process.env.PORT, ()=>{

    console.log(`Server running on port ${process.env.PORT}`);
});