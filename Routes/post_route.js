const express = require('express')
const router = express.Router()
const mongoose = require('mongoose');
const Post = require('../model/post')


router.post('/posts',(req,res)=>{

	const post = new Post({
		_id: new mongoose.Types.ObjectId(), 
		title: req.body.title,
		body:req.body.body,
	 })

	 post.save((err,post)=>{
		 if(err){
			 res.status(500).json({msg:'an error has occured'})
		 }
		 else{
			 res.status(200).send(post)
		 }
	 })

})

router.get('/posts',(req,res)=>{
	Post.find((err,post)=>{
		if(err){
			console.log(err)
			res.status(401).json('bad request')
		}else{
			// res.send(post)
			res.render('posts',{
			
			post:post
			});
		}
	})
})



router.get('/',(req,res)=>{
	Post.find((err,post)=>{
		if(err){
			console.log(err)
			res.status(401).json('bad request')
		}else{
			// res.send(post)
			res.render('home',{
			
			post:post
			});
		}
	})
})

router.get('/post/:id',(req,res)=>{
	Post.findById(req.params.id,(err,post)=>{
			res.render('post',{
					post:post,
					title:"Article"
			})
			
console.log(req.params.id)
	})   
});

module.exports = router