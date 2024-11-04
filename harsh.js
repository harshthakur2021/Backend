const express= require('express');
const app= express();


app.get('/', (req,res)=>{
    res.send("hey harsh")
})
app.listen(4000);