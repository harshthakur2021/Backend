// const express = require('express')
// const app = express()
// const port = 3000

// const item= require ('./routes/item')
// app.use('/api',item);
// app.listen(port, () => {
//   console.log("Application Started");
// })
const express = require('express')
const app = express()
const port = 4001;


app.use(function(req,res,next){
  console.log("Middleware chla");
  next();
});
app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});