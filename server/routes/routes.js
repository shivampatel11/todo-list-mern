const express = require("express");

const router = express.Router();
const{Addtodo , Updatetodo , Deletetodo, getsingletodo, Gettodo}  = require('../controller/todo.js')

router.get("/",Gettodo);
router.post("/add" , Addtodo)
router.get("/:id" ,getsingletodo);
router.put("/:id" , Updatetodo);
router.delete("/:id" , Deletetodo)

module.exports = router