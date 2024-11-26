const express= require('express');
const app= express();

const userModel= require("./usermodel")
app.get('/', (req,res)=>{
    res.send("hey harsh")
})
app.get('/create', async (req,res)=>{
   const createuser= await  userModel.create({
     username: "Harsh",
     age:21, 
     name: "harsh"  
    })
    res.send(createuser);
}) 


app.listen(4000);