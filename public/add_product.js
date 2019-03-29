$(function(){
	let pn=$('#pn')
	let pm=$('#pm')
	let pp=$('#pp')
	let btn=$('#btn')

	btn.click(function(){
		addProduct(
			pn.val(),
			pm.val(),
			pp.val(),
			function(addedProduct){
				window.alert("Added "+addedProduct.name+" to the database successfully")
			}
			)
	})
})