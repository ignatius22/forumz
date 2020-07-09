const express = require('express')
const mongoose = require('mongoose');
const router = express.Router()
const User = require('../model/user')


router.post('/posts',(req,res)=>{
	const user = new User({
		_id: new mongoose.Types.ObjectId(),
		name: req.body.name
	 })

	 user.save((err,users)=>{
		 if(err){
			res.status(500).send({msg:'an error has occured'})
		 }
		 else{
			 res.send(users)
		 }
	 })
})

router.get('/users',(req,res)=>{
	User.find((err,user)=>{
		if(err){
			console.log(err)
			res.status(401).json('bad request')
		}else{
			res.render('users_page',{
				title:"users page",
				user:user
			})
		}
	})
})



router.get('/user',(req,res)=>{
	User.findOne((err,user)=>{
		if(err){
			console.log(err)
			res.status(401).json('bad request')
		}else{
			res.render('user_page',{
				title:"user page",
				user:user
			})
		}
	})
})

router.get('/contact',(req,res)=>{
	res.render('contact',{
		title:'Contact'
	})
})



module.exports = router