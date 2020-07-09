const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const postSchema = Schema({
  _id: Schema.Types.ObjectId,
  title: String,
  body: String,
  comments: [{ type:Schema.Types.ObjectId, ref: 'Comment' }]

});


const Post = mongoose.model('Post', postSchema);

module.exports = Post;