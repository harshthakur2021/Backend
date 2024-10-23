// ye file saare item specific routes ko store karegi

const express = require('express')
const router = express.Router()



router.get('/', (req, res) => {
  res.send('got a get Request')
})
router.post('/items', (req,res)=>{
  res.send('got a post request');
})
router.put('/items/:id', (req,res)=>{
  res.send('got a put requests');
})
router.delete('/items/:id', (req,res)=>{
  res.send('got a Delete requests');
})

module.exports = router
