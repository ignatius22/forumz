const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//_id  is automatically generated
const CommentSchema = Schema({
  comment:String, // this is the comment we want
  // relational fields below
  user_id:String, //this is the user that made the comment
  post_id:String, //this is the post the comment belongs to	
},{
  timestamps: true//this will automatically add the createdAt and the updatedAt field for us
});


/*
for example:
your comment on facebook belongs to a post
it also belongs to you, that is why it must be related to the user and the post also

*/ 

const Comment = mongoose.model('Comment', CommentSchema);


module.exports = Comment;