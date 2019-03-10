
function scroll_to(clicked_link, nav_height) {
	var element_class = clicked_link.attr('href').replace('#', '.');
	var scroll_to = 0;
	if(element_class != '.home') {
		element_class += '-container';
		scroll_to = $(element_class).offset().top - nav_height;
	}
	if($(window).scrollTop() != scroll_to) {
		$('html, body').stop().animate({scrollTop: scroll_to}, 1000);
		if(element_class == '.contato-container'){
			$("#nome").focus();
		}
	}
}

jQuery(document).ready(function() {
	
	/*
	    Navigation
	*/
	$('a.scroll-link').on('click', function(e) {
		e.preventDefault();
		scroll_to($(this), $('nav').outerHeight());
	});
	// toggle "navbar-no-bg" class
	$('.home .carousel-text').waypoint(function() {
		$('nav').toggleClass('navbar-no-bg');
	});    
    /*
        Wow
    */
    new WOW().init();
	
});

function sendMail() {
    var link = "mailto:me@example.com"
             + "?cc=" + escape("")
             + "&subject=" + escape("Assunto cliente")
             + "&body=" + "Olá,%0D%0A%0D%0A"
             + document.getElementById('mensagemCliente').value
             + "%0D%0A%0D%0AAtenciosamente,%0D%0A%0D%0A" + document.getElementById("nome").value + "%0D%0A%0D%0A"
    window.location.href = link;
}