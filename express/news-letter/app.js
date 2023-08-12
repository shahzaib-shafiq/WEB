const express = require("express");

const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const { Console } = require("console");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {
  const fname = req.body.fname;
  const lname = req.body.lname;
  const email = req.body.email;

  var data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: fname,
          LNAME: lname,
        },
      },
    ],
  };
  var JSONDATA = JSON.stringify(data);

const url=  "https://us17.api.mailchimp.com/3.0/lists/e0038fd105"

const options={
    method:"POST",
    auth:"Shahzaib:533ef50048f483caeab7cd71a4780dee-us17"
}

const request=https.request(url,options,function(responce){


  if(responce.send("hhhhhhhhhh"))
  {
    res.sendFile
  
  }
  else{
    res.send("An Error Occured")
  
  }

res.on("data",function(data){
    console.log(JSON.parse(data));
    
    //console.error(JSON.parse(error));


  })

})
request.write(JSONDATA);
request.end();
});

app.listen(3000, function () {
  console.log("Server started");
});

//Apikey
// 533ef50048f483caeab7cd71a4780dee-us17
//list ID e0038fd105
