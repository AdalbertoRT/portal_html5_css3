var slideItem = 0;
window.onload = function() {

setInterval (passarSlide, 7000);

	var slideWidth = document.getElementById("slideshow").offsetWidth;
	var objs = document.getElementsByClassName("slide");
	document.getElementById("slideshowArea").style.width = slideWidth*objs.length+'px';
	for (var i in objs) {
		objs[i].style.width = slideWidth + "px";
	}
}

function passarSlide() {
	var slideWidth = document.getElementById("slideshow").offsetWidth;

	if(slideItem >= 3) {
		slideItem = 0;
	}
	else {
		slideItem++;
	}

	document.getElementsByClassName("slideshowArea")[0].style.marginLeft = "-" + (slideWidth * slideItem) + "px";

	corBolinha();
	
}

function mudarSlide(pos) {
	slideItem = pos;
	var slideWidth = document.getElementById("slideshow").offsetWidth;
	document.getElementsByClassName("slideshowArea")[0].style.marginLeft = "-" + (slideWidth * slideItem) + "px";

	corBolinha();
}

function corBolinha() {
		for(var b = 0; b <= 3; b++) {
			document.getElementsByClassName("bolinha")[b].style.boxShadow = "none";
			document.getElementsByClassName("bolinha")[b].style.background = "radial-gradient(white, grey, black)";
			if(b == slideItem){
			document.getElementsByClassName("bolinha")[slideItem].style.boxShadow = "0 0 5px 3px lightblue";
			document.getElementsByClassName("bolinha")[slideItem].style.background = "radial-gradient(lightblue, dodgerblue, blue)";
			}
		}
}

// SCRIPT PARA O BOTAO VOLTAR AO TOPO
	// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	var tela = window.innerWidth;

	if (tela > 320) {
    	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			document.getElementById("top").style.display = "block";	
    	}
    	else {
        	document.getElementById("top").style.display = "none";
    	}
	}
	else {
		document.getElementById("top").style.display = "none";
	}
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function toggleMenu() {
	var menu = document.getElementById("menu");

	if(menu.style.display == "none" || menu.style.display == "") {
		document.getElementById("menu").style.display = "block";
	}
	else {
		document.getElementById("menu").style.display = "none";
	}
}