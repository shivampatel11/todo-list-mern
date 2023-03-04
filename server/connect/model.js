const mongoose = require("mongoose");

const mongooseSchema = new mongoose.Schema({
    text:{
        type:String,
        required:true
    }
})

const todolist = mongoose.model("todolist" , mongooseSchema);
module.exports = todolist;