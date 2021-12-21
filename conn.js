const mongoose = require("mongoose");
const bodyparser = require('body-parser');
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://localhost:27017/rupeshform');
  }

  // Define Mongoose schema
  const connectSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    number: String,
    address: String,
  });
  
  const contactform = mongoose.model('contact', connectSchema);