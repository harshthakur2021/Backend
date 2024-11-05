const mongoose = require ("mongoose");
 mongoose.connect ("mongodb://127.0.0.1:27017/Practicekaro");


 // Schema matlab aapko ye batana waala har document mein kya kya hoga


  const userschema= mongoose.Schema({
  username: String,
  name: String,
  age:Number

 })

module.exports=  mongoose.model ("user",userschema);