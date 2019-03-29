const express=require('express')
const path=require('path')
const srv=express();
const route_api=require('./routes/api').route//it will try to find x.js or x.json or a folder with index.js

srv.use(express.json())
srv.use(express.urlencoded({extended:true}))

srv.use('/',express.static(path.join(__dirname,'public')))
srv.use('/api',route_api)

srv.listen(1234);