const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = Schema({
  content: String,
  user: { type: Schema.Types.ObjectId, ref: 'User' }
	
});


const Comment = mongoose.model('Comment', postSchema);


module.exports = Comment;