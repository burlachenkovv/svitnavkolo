window.onload = function() {
	var navBar = document.getElementById("topnav");

	window.onscroll = function() {
		if(window.pageYOffset > 15 && navBar.classList.length === 1) {
			navBar.className += " fixed";
		} else if (window.pageYOffset < 10 && navBar.classList.length === 2) {
			navBar.classList.remove("fixed");
		}
	}
}