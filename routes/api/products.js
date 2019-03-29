const Product=require('../../db').Product
const route=require('express').Router()

route.get('/',(req,res)=>{
Product.findAll()
.then((products)=>{
	res.status(200).send(products)
})
.catch((err)=>{
	res.status(500).send({
		error:"could not retrive products"
	})
})
})

route.post('/',(req,res)=>{
	//check the type of price
	if(isNaN(req.body.price)){
		return res.status(403).send({
			error:"Price not valid"
		})
	}
	//adding a new product
	Product.create({
		name:req.body.name,
		manufacturer:req.body.manufacturer,
		price:parseFloat(req.body.price)
	})
	.then((product)=>{
		res.status(201).send(product)
	})
	.catch((err)=>{
		res.status(501).send({
			error:"could not create product"
		})
	})
})

exports=module.exports=route