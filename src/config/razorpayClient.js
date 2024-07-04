require('dotenv').config();
const Razorpay = require('razorpay');



const razorpay = new Razorpay({
    key_id: process.env.apiKey,
    key_secret: process.env.apiSecret,
  });


  module.exports=razorpay;