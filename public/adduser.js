$(function(){
	let fn=$('#firstName')
	let em=$('#Email')
	let un=$('#username')
	let pw=$('#password')
	let btn=$('#btn')

	btn.click(function(){
		adduser(fn.val(),em.val(),un.val(),pw.val(),function(addeduser){
			window.alert("user "+addeduser.firstname+" added successfully")
		})
	})
})