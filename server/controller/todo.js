const todo = require("../connect/model.js")

const Addtodo = async (req, res) => {
    try {
        let newtodo = new todo(req.body);
        let data = await newtodo.save();
        res.status(200).json(data);
        console.log(data);

    } catch (err) {
        res.status(404).json(err)
    }
}

const Gettodo = async (req, res) => {
    try {
        const gettodo = await todo.find();
        res.status(200).json(gettodo);
        console.log(gettodo);
    } catch (err) {
        res.status(500).json(err)
    }
}

 const getsingletodo = async(req,res)=>{
   try{
         const gettodo = await todo.find({_id:req.params.id});
         res.status(200).json(gettodo);
   }catch(err){
    res.status(402).json(err)
   }
};

 const Updatetodo = async(req,res)=>{
    try{
       let newtodo = await todo.updateOne({_id :req.params.id} , {$set:req.body});
       res.status(200).json(newtodo)
    }
    catch(err){
        res.status(403).json(err)
    }
}

 const Deletetodo = async(req,res)=>{
    try{
       let deletetodo = await todo.deleteOne({_id:req.params.id},{new:true});
        res.status(200).json(deletetodo)
    }catch(err){
        res.status(403).json(err)
    }
}

module.exports = {Addtodo,Gettodo,getsingletodo,Updatetodo,Deletetodo}