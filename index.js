//console.log("Hello World")
const express = require('express')
const app = express()
require('dotenv').config()

const PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
  //res.send('Min Thein Khant Khway Thar')
  res.json({
    msg: "this is api",
    data: "hello",
    status: true

  })
})

app.listen(PORT, (req,res) => {
    console.log(`sever is running on PORT ${PORT}`)
})