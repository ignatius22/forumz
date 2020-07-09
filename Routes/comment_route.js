const express = require('express')
const router = express.Router()
const Comment = require('../model/comment')
const Post = require('../model/post')


router.post('/comment',(req,res)=>{
	const comment = new Comment({ 
		content:req.body.content
	 })

	

		console.log(comment)
	 comment.save((err,comment)=>{
		 if(err){
			 res.status(500).json({msg:'an error has occured'})
		 }
		 else{
			 res.status(200).send(comment)
			 
		 }
	 })
})

router.get('/comment',(req,res)=>{
	Comment.find((err,comments)=>{
		if (err) {
			res.status(404).json({msg:'not found'})
			console.log(err)
		}else{
		
			res.render('comments',{
				title:'comment page',
				comments:comments
			})
		}
	})
})



module.exports = router