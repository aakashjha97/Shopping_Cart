const Sequelize=require('sequelize') 

const db=new Sequelize('shopdb1','shopper1','Aakash9@',{
	host:'localhost',
	dialect:'mysql',
	pool:{
		min:0,
		max:5,
	}
})

const User=db.define('users',{
	id:{
		type:Sequelize.INTEGER,
		autoIncrement:true,
		primaryKey:true
	},
	firstname:{
		type:Sequelize.STRING,
		allowNull:false,
	},
	email:{
        type: Sequelize.STRING,
        validate: {
          isEmail: true,
        }
      },
	username:{
		type:Sequelize.STRING,
		allowNull:false,
	},
	password:{
		type:Sequelize.STRING,
		allowNull:false,
	}
})

const Product=db.define('products',{
	id:{
		type:Sequelize.INTEGER,
		autoIncrement:true,
		primaryKey:true
	},
	name:{
		type:Sequelize.STRING,
		allowNull:false
	},
	manufacturer:Sequelize.STRING,
	price:{
		type:Sequelize.FLOAT,
		allowNull:false,
		defaultValue:0.0
	}
})

const Consumer=db.define('consumers',{
	id:{
		type:Sequelize.INTEGER,
		autoIncrement:true,
		primaryKey:true
	},
	name:{
		type:Sequelize.STRING,
		allowNull:false
	},
	email:{
		tyep:Sequelize.STRING,
		validate:{
			isEmail:true
		}
	},
	username:{
		type:Sequelize.STRING,
		allowNull:false
	},
	password:{
		type:Sequelize.STRING,
		allowNull:false
	}
})

db.sync()
.then(()=>console.log("database has been synced"))
.catch((err)=>console.error("error creating database"))

exports=module.exports={
	User,Product
}