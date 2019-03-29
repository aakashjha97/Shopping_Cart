const Consumer=require('../../db').Consumer
const route=require('express').Router()

route.get('/',(res,req)=>{
Consumer.findAll()
	.then((consumers)=>{
		res.status(200).send(consumers)
	})
	.catch((err)=>{
		res.status(500).send({
			error:"could not retrive the consumers"
		})
	})
})

route.post('/',(req,res)=>{
	Consumer.create({
		name:req.body.name,
		email:req.body.email,
		username:req.body.username,
		password:req.body.password
	})
	.then((user)=>{
		res.status(201).send(user)
	})
	.catch((err)=>{
		res.status(501).send({
			error:"could not add consumer to the database"
		})
	})
})

exports=module.exports=route