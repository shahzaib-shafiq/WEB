const express = require('express')
const app = express()

const RouterRoute = require("./routes/index");
app.use(RouterRoute);


app.listen(3000,function(){
  console.log("D")
})

