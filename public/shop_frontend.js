$(function(){
	let productlist=$('#pl')
	
	fetchproducts(function(products){
		productlist.empty();
		for(product of products)
			productlist.append(createProducts(product))
	})

})