const express = require('express')
const app = express()
const  morgan = require('morgan')
const port = 3000

 app.use (morgan('dev'))

app.use((req,res,next)=>{
    console.log("This is middleware")
})

 
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/About', (req, res) => {
    res.send('Hello')
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})