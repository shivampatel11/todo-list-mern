const express = require("express")
const app = express();
const PORT = 5000;
const mongoose = require("mongoose");
const connectDB = require("./connect/connect.js");
const router = require("./routes/routes.js");
const cors = require("cors")

app.use(cors())
app.use(express.json())
app.use("/",router);


mongoose.connection.on("connected",()=>{
    console.log("connected")
})

mongoose.connection.on("disconnected",()=>{
    console.log("disconnected")
})

app.listen(PORT,()=>{
    connectDB()
    console.log("app is running on Port" , PORT)
})