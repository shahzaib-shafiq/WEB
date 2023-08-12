const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/fruitsdb');

const fruitSchema=new mongoose.Schema({
  name:String,
  rating:Number,
  review:String

})

const Fruit=mongoose.model("Fruit",fruitSchema);

// const fruit=new Fruit({
//   name:"Apple",
//   rating:8,
//   review:"Good"
// });

//fruit.save();



// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/persondb');

// const personSchema = new mongoose.Schema({
//   name: String,
//   age: Number
// });

// const Person = mongoose.model('Person', personSchema);

// Person.insertMany([
//   { name: 'Gourav', age: 20},
//   { name: 'Kartik', age: 20},
//   { name: 'Niharika', age: 20}
// ]).then(function(){
//   console.log("Data inserted");  // Success
// }).catch(function(error){
//   console.log(error);      // Failure
// });

// Fruit.find(function(error,fruits){
//   if(error){
//     console.log("error")
//   }
//   else
//   {
//     console.log(fruits)
//   }
// })

// Fruit.find().then((data) => {
//   console.log(data[0].name);

//  })


Fruit.updateOne({_id:"64b20d58e3110025f31c9b93"},{name:"pear"},function(error){
  if(error){
    console.log("error")
  }
  else
  {
    console.log("upd")
  }


})