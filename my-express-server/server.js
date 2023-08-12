
const express=require("express")
const ejs = require('ejs');
const bodyParser=require("body-parser")

const app=express()
var inps=[]

app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    var today=new Date();

    
  res.render('index', {foo: "gg",foo2:inps});

});

app.post("/",function(req,res){
    var inp=req.body.intu;
     inps.push(inp)
    res.redirect("/")


})


app.get("/work",function(req,res){
        
    res.render('index', {foo: "Work Page",foo2:inps});
      
})

app.post("/work",function(req,res){
    var inp=req.body.intu;
     inps.push(inp)
    res.redirect("/")

})



app.listen(3000,function(req,res){
    console.log("server started")
})