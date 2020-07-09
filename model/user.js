const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//the user is a standalone person, its people that related to him
const userSchema = Schema({
  firstName: String,
  lastName: String,
  dob: Date, //means Date of Birth
  occupation: String,
  isAdmin:{type:Boolean, default:false}//this is static role based mgt system, not fit for big apps

},{
  timestamps: true//this will automatically add the createdAt and the updatedAt field for us
});


const User = mongoose.model('User', userSchema);

module.exports = User