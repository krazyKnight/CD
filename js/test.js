// methode ajax
$.ajax({
	method: "POST",
	url: "load.php",
	dataType:"json"
	//data: { name:"John", location: "Boston"}
	}).done(function(tab){
	CDtheque = tab;	
	}).fail(function(tab){
		alert("error");
	});
