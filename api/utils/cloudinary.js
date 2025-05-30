import {v2 as cloudinary} from "cloudinary"
import fs from "fs"
import dotenv from 'dotenv'

dotenv.config();
 

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
         console.log('1');
        if (!localFilePath) return null
        console.log('2');
        console.log(localFilePath)
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
       
        console.log("Cloudinary response:", response);
        fs.unlinkSync(localFilePath)
      //  console.log(response);
        return response;

    } catch (error) {
        console.log(error.message);
        fs.unlinkSync(localFilePath) 
        console.log("eor")
        return null;
    }
}



export {uploadOnCloudinary}