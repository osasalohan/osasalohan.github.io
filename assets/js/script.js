$('.nav-link').mouseenter(function(){
	$(this).addClass('current');
}).mouseleave(function(){
	$(this).removeClass('current');
});


function scrollNav() {
  $('.nav a').click(function(){  
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 160
    }, 400);
    return false;
  });
  $('.scrollTop a').scrollTop();
}
scrollNav();


$('document').ready(function(){
	var typed = new Typed('#typed',{
		stringsElement: '#typed-strings',
		startDelay: 700,
		backDelay: 700,
		backSpeed: 50,
		typeSpeed: 60,
		// loop: true,
		// loopCount: Infinity
	});
});


var startDate = new Date(2019, 8, 22);
var today = new Date();
function codingSince(a, b){
	return Math.round((b - a)/(1000*60*60*24));
}
$('#codingSince').html(codingSince(startDate, today));
