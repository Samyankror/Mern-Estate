import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config();

const app = express();
const DbName='mern-estate'
mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log('connected to mongodb successfully');
})
.catch((err)=>{
    console.log(err);
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})