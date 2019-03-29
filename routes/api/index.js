const route=require('express').Router()

route.use('/users',require('./users'))
route.use('/products',require('./products'))
route.use('/consumers',require('./consumer'))

exports=module.exports={
	route
}