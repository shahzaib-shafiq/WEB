const express = require("express")
const https = require("https")
const app = express()
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}))

app.get("/", function (req, res) {


    

    const url = "https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=4bc629f0b3877c570222cf5818cf50e5"
    https.get(url, function (responce) {


        console.log(responce)
        responce.on("data", function (data) {
            const weatherdata = JSON.parse(data)
            const temp = weatherdata.main.temp
            const longitude = weatherdata.coord.lon
            const latitude = weatherdata.coord.lat
            const description = weatherdata.weather[0].description
            const feels_like = weatherdata.main.feels_like
            const mintemp = weatherdata.main.temp_min
            const maxtemp = weatherdata.main.temp_max
            const icon = weatherdata.weather[0].icon
            const imageURL = "https://openweathermap.org/img/wn/" + icon + "@4x.png"

            res.write("<h1>The Temperature is " + temp + " Degree Celcius</h1>")

            res.write("<h1>The Weather Description " + description + " <h1>")

            res.write("<h1>The Min Temperature is " + mintemp + " Degree Celcius</h1>")

            res.write("<h1>The Max Temperature is " + maxtemp + " Degree Celcius</h1>")


            res.write("<img src=" + imageURL +">")


            res.write("<h1>The Temperature Feels " + feels_like + " Degree Celcius</h1>")


            res.write("<h1>The location Latitude " + latitude + " Degree </h1>")


            res.write("<h1>The location Longitude " + longitude + " Degree </h1>")

            res.send()
        })

    })

})


app.listen(3000, function () {
    console.log("Server  start")
})