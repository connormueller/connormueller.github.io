function validateForm(){ 
	var a=document.forms["contactform"]["firstname"];
	var b=document.forms["contactform"]["lastname"];
	var c=document.forms["contactform"]["emailaddress"];

	if (a==null || a=="" || b==null || b=="" || c==null || c=="") {alert("All fields need to be filled out");return false;
	}
}

var d = new Date();
document.getElementById("date").innerHTML = d;

var showing = false;

function productMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
}



window.onclick = function (event) {
    if (!event.target.matches('.dropbtn2')) {
        
        var dropdowns = document.getElementsByClassName("dropdown-content2");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}
