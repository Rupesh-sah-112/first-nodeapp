const express = require("express");
const path = require("path");
const app = express();

const mongoose = require('mongoose');
const bodyparser = require('body-parser')

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/enquiry',{useNewUrlParser:true});
}

const port = 8000;

//Define mongoose schema
const callSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phone: String,
    message: String,
  });

  const calluss = mongoose.model('calluss', callSchema);
  

// app.use(express.static('static',options))
app.use('/static', express.static('static')) //FOR SERVING STATIC FILES
app.use(express.urlencoded())

//PUG SPECIFIC STUFF
app.set('view engine','pug') //Set the template engine at pug 
app.set('views',path.join(__dirname,'views')) //Set the views directory

//ENDPOINTS
app.get('/',(req,res)=>{
    const params = {}
    res.status(200).render('index.pug',params);
})

app.post('/',(req,res)=>{
    var mydata = new calluss(req.body);
    mydata.save().then(()=>{
      res.send("submitted successfuly go back")
    }).catch(()=>{
      res.status(400).send("Not found")
    })
  
                                        
  
  })
  

//START THE SERVER 
app.listen(port, ()=>{
    console.log(`the server is running at port ${port}`);
})
