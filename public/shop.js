function fetchproducts(done){
	$.get('/api/products',function(data){
		done(data)
	})
}

function addProduct(name,manuf,price,done){
	$.post('/api/products',{
		name:name,
		manufacturer:manuf,
		price:price
	},function(data){
		done(data)
	})
}

function adduser(fn,em,un,pw,done){
	$.post('/api/users',{
		firstname:fn,
		email:em,
		username:un,
		password:pw
	},function(data){
			done(data)
	})
}

function createProducts(product){
	return $(`
		<div id="p" class="col-5 card p-4">
			<h4 id="logo1" >${product.name}</h4>
			<div id="logo1">${product.manufacturer}</div>
			<div class="row">
				<div class="col m-3 p-3">
					<b>Rs. ${product.price}</b>
				</div>
				<button class="col btn btn-primary m-3">Buy</button>
			</div>
		</div>
		`)
}