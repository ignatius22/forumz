const mongoose = require('mongoose');
const Schema =  mongoose.Schema;


//no need to include _id, it is automatically generated

const PostSchema = Schema({
  title: String,
  body: String,
  //relational fields below
  author: String //this is the user that made the post
},{
  timestamps: true//this will automatically add the createdAt and the updatedAt field for us
});


const Post = mongoose.model('Post', PostSchema);

module.exports = Post;