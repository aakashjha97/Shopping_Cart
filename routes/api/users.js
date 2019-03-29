const User=require('../../db').User
const route=require('express').Router()

route.get('/',(req,res)=>{
	//we want to send an array of all users from database,
	User.findAll()
	.then((users)=>{
		res.status(200).send(users)
	})
	.catch((err)=>{
		res.status(500).send({
			error:"Could not rettrive users"
		})
	})
})

route.post('/',(req,res)=>{
	User.create({
		firstname:req.body.firstname,
		email:req.body.email,
		username:req.body.username,
		password:req.body.password
	})
	.then((user)=>{
		res.status(201).send(user)
	})
	.catch((err)=>{
		res.status(501).send({
			error:"could not create user"
		})
	})
})

exports=module.exports=route