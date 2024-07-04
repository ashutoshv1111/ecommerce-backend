require('dotenv').config();
const mongoose = require("mongoose")

const mongoDbUrl=process.env.MONGO_DB
const connectDb=()=>{
    return mongoose.connect(mongoDbUrl)
}

module.exports={connectDb}