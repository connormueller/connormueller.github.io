function validateForm(){ 
	var a=document.forms["contactform"]["firstname"];
	var b=document.forms["contactform"]["lastname"];
	var c=document.forms["contactform"]["emailaddress"];

	if (a=null || a="" || b=null || b="" || c=null || c="") {
		alert("All fields need to be filled out");
		return false;
	}
}

var d = new Date();
document.getElementById("date").innerHTML = d;
