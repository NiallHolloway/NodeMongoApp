let mongoose = require('mongoose');

//User Schema
let UserSchema = mongoose.Schema({
  name:{
    type: String
  },
  email:{
    type: String
  },
  username:{
    type: String
  },
  password:{
    type: String
  },
  facebook : {
    id           : String,
    token        : String,
    emails       : String,
    name         : String
  }
});

const User = module.exports = mongoose.model('User', UserSchema);
