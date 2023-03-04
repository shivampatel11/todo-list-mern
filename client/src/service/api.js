
import react from 'react';
import axios from 'axios';


let url = "http://localhost:5000";

export const Gettodo = async()=>{
    try{ 
         let res = await axios.get(`${url}`);
         return res
    }catch(err){
        console.log(err)
    }
};

export const Posttodo = async(post)=>{
    try{
        return await axios.post(`${url}/add`,post)
    }catch(err){
        console.log(err)
    }
}

export const Getsingletodo=async(id)=>{
    try{
          return await axios.get(`${url}/${id}`);
      }catch(err){
       console.log(err)
      }
}

export const Updatetodoapi = async(id,text)=>{
    
    try{
        await axios.put(`${url}/${id}`,text);
      }catch(err){
       console.log(err)
      }
}

export const Deletetodoapi = async(id)=>{
    try{
        await axios.delete(`${url}/${id}`);
    }catch(err){
        console.log(err)
    }
}