const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  posts: [{ type: Schema.Types.ObjectId}]
});


const User = mongoose.model('User', userSchema);

module.exports = User