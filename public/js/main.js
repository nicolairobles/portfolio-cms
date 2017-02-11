$(window).load(function() {
    $(".preloader").fadeOut("slow", function(){
      	$(".preloader-left").addClass("slide-left");
      	$(".preloader-right").addClass("slide-right");
      	$("#portfolio-case").addClass("full-portfolio");
    });
});

// Portfolio Filter Activated on menu-item click
$('.menu-item').on( 'click', function() {
	
    //Portfolio masonry
    var $container = $('#projects');
    $container.isotope({
      masonry: {
       columnWidth: 0
      },
      itemSelector: '.project'
    });

    //Portfolio filters
    $('#filters').on( 'click', 'li', function() {
      $('#filters li').removeClass('active');
      $(this).addClass('active');
      var filterValue = $(this).attr('data-filter');
      $container.isotope({ filter: filterValue });
    });	
	
});

// Portfolio Filter Activated on portfolio page
if (/portfolio/.test(window.location.href)) {
    //Portfolio masonry
    var $container = $('#projects');
    $container.isotope({
      masonry: {
       columnWidth: 0
      },
      itemSelector: '.project'
    });

    //Portfolio filters
    $('#filters').on( 'click', 'li', function() {
      $('#filters li').removeClass('active');
      $(this).addClass('active');
      var filterValue = $(this).attr('data-filter');
      $container.isotope({ filter: filterValue });
    });	
	
};
	
	//Portfolio Modal
	$('.open-project').on('click', function(){     
		var projectUrl = $(this).attr("href");

		var project = '<div class="modal fade" id="project-modal"><div class="inline-menu-container"><a id="modal-close" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span></a></div><div class="modal-dialog"><div class="modal-content"></div></div></div>';

		$(project).modal({
		  remote: projectUrl + ' #project'
		})
		
		return false;
	  
	});
	
	//Blog post Modal
	$('.open-post').on('click', function(){     
		var postUrl = $(this).attr("href");

		var post = '<div class="modal" id="post-modal"><div class="inline-menu-container"><a id="modal-close" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span></a></div><div class="modal-dialog"><div class="modal-content"></div></div></div>';

		$(post).modal({
		  remote: postUrl + ' #post'
		})
		
		return false;
	  
	});
	
	//On Click Open Menu Items
	$('.menu-item').on( 'click', function() {
      $('.name-block').addClass('reverse');
	  $('.name-block-container').addClass('reverse');
	  $('.menu-blocks').addClass('hidex');
	  $('.inline-menu-container').removeClass('hidex');
	  $('.inline-menu-container').addClass('showx');	  
    });
	//On Click Open About/Resume Block
	$('.about').on( 'click', function() {
	  $('.content-blocks').removeClass('showx');
	  $('.content-blocks').addClass('hidex');	
	  $('.content-blocks.about').removeClass('hidex');
	  $('.content-blocks.about').addClass('showx');
	  $('.menu-item').removeClass('active');
	  $('.menu-item.about').addClass('active');
    });	
	//On Click Open Portfolio Block
	$('.portfolio').on( 'click', function() { 
	  $('.content-blocks').removeClass('showx');	
	  $('.content-blocks').addClass('hidex');	
	  $('.content-blocks.portfolio').removeClass('hidex');
	  $('.content-blocks.portfolio').addClass('showx');
	  // $('.menu-item').removeClass('active');
	  $('.menu-item.portfolio').addClass('active');
    });	
	//On Portfolio Page
	if (/portfolio/.test(window.location.href)) {
		// Content Section show on portfolio page
	  $('.content-blocks').removeClass('showx');	
	  $('.content-blocks').addClass('hidex');	
	  $('.content-blocks.portfolio').removeClass('hidex');
	  $('.content-blocks.portfolio').addClass('showx');
	  $('.menu-item.portfolio').addClass('active');		
	  // Menu Bar show on portfolio page
    $('.name-block').addClass('reverse');
	  $('.name-block-container').addClass('reverse');
	  $('.menu-blocks').addClass('hidex');
	  $('.inline-menu-container').removeClass('hidex');
	  $('.inline-menu-container').addClass('showx');	  
	}
	//On Click Open Blog Block
	$('.blog').on( 'click', function() { 
	  $('.content-blocks').removeClass('showx');	
	  $('.content-blocks').addClass('hidex');	
	  $('.content-blocks.blog').removeClass('hidex');
	  $('.content-blocks.blog').addClass('showx');
	  $('.menu-item').removeClass('active');
	  $('.menu-item.blog').addClass('active');
    });	
	//On Click Open Contact Block
	$('.contact').on( 'click', function() { 
	  $('.content-blocks').removeClass('showx');	
	  $('.content-blocks').addClass('hidex');	
	  $('.content-blocks.contact').removeClass('hidex');
	  $('.content-blocks.contact').addClass('showx');
	  // $('.menu-item').removeClass('active');
	  $('.menu-item.contact').addClass('active');
    });
	// Resume
	$('.resume').on( 'click', function() { 
	  $('.content-blocks').removeClass('showx');	
	  $('.content-blocks').addClass('hidex');	
	  $('.content-blocks.resume').removeClass('hidex');
	  $('.content-blocks.resume').addClass('showx');
	  // $('.menu-item').removeClass('active');
	  $('.menu-item.resume').addClass('active');
    });
	
	//On Click Close Blocks
	$('#close').on( 'click', function() {
	  $('.name-block').removeClass('reverse');
	  $('.name-block-container').removeClass('reverse');
	  $('.menu-blocks').removeClass('hidex');
      $('.content-blocks').removeClass('showx');
	  $('.content-blocks').addClass('hidex');
	  $('.inline-menu-container').removeClass('showx');
	  $('.inline-menu-container').addClass('hidex');
	  // $('.menu-item').removeClass('active');	
    });	
	
	
	//Placeholder
    $('input,textarea').on( 'focus', function(){
       $(this).data('placeholder',$(this).attr('placeholder'))
       $(this).attr('placeholder','');
    });
    $('input,textarea').blur(function(){
       $(this).attr('placeholder',$(this).data('placeholder'));
    });
	
	$('input, textarea').placeholder();


var scrolledWin = 0, winW, winH, winR, screenH, emS, screensI = 0, scrolled = 0, theS = 1, exp = false, trans3D = false, thisL = 0, topL, leftL, sizeL = 1, inBetween = [], aboutOff, about = false, menuH = 0, imprintOff = 0, showLetter, bigL = true;
var $screen = [], $offSet = [], $contentWrapper = [], $navLink = [], $navCount = [], inView = [], $h4 = [];

var $win, $body, $wrapper, $works, $about, $bigL, $bigLc, $aboutW;

var screenZoom = 0.1; // some setting
var imgSize = 960; // max img size

var navH = 20; // height of nav li
var frame = 50; // position of nav item

var vimeoColor = "fff";

// distortion time
var dt1 = 500, dt2 = 8000;

// random big letter
var bigL1 = 50, bigL2 = 100;
var starting = true;
var started = false;
// var poolS = '&brvbar; &nabla; &oline; &deg; &Delta; &bull;';
var poolS = '&bull; &deg;';
var randomCharS = poolS.split(' '); 


// random special character
var pool = '&bull; &deg;';
// var pool = '1';
var randomChar = pool.split(' '); 

// remove js class
$('html').removeClass("no-js").addClass("js");

$(document).ready(function(){
		
	// Cache objects
	$win = $(window);
	$body = $('body');	
	$wrapper = $('#wrapper');
	$lander = $('#lander');
	// $subTilte = $lander.find("h2");
	$title = $lander.find("h2.title");
	$portfolio = $lander.find("h2.portfolio");
	$resume = $lander.find("h2.resume");
	$contact = $lander.find("h2.contact");
	$about = $("#about");
	$aboutL = $("#aboutLink");
	$bigL = $('#bigLetter');
	$bigLc = $('#bigLetter span');
	cacheScreens();
		
	// init
	init();	

});

$(window).load(function() {
	
	// fade in page
	start();
	
});

// init site functions
/////////////////////////////////////////

function init() {
	
	// start up after 3sec no matter what
  window.setTimeout(function(){
  	start();
  }, 2000);
  
  // start letter animation
	bigLetterR();
	    	
	// get window dimensions
	adjustWindow();
	$win.resize(function() {
		adjustWindow();
	});
  
  // add bigger experience for non-touch devises and other than IE < 10
  if($('html').hasClass("no-touch") && !$('html').hasClass("oldie")) {
  	$('html').addClass("exp");
		exp = true;  
	}
	if($('html').hasClass("csstransforms3d")) {
		trans3D = true;  
	}
	
	// handle scrolling
	$win.scroll(function() {			
		handleScroll();
	});	 
		
	// start rendering image
	animloop();	
	
	// start distroy animation
	// disTroy($h4[theS-1],true);
	// disTroy($subTilte,false);
	$subTilte.mouseover(function() {
		// disTroy($(this),false);
	});
	
	// navigation 
	initNav();
		
	// show video function
	$('.video a').live( "click", function(e) {
		e.preventDefault();
		showVideo($(this));
	});

}

// fade in experience
function start() {
	
	if(started == false) {
	
		started = true;	
		
		// start off
		window.setTimeout(function() {
		
		  // fade in nicolai
		  $(".nicolai").addClass("active");
	    $(".bg-image").addClass("active");		    		  
		  
		  // reduce bigL speed
		  bigL1 = 200;
		  bigL2 = 1000;
		  
		  // set full caracter set
		  starting = false;
		  
		  window.setTimeout(function() {			
		  	// fade in robles
		    $(".robles").addClass("active");		    		  
		  }, 300);
		  		
		  window.setTimeout(function() {			
		  	// fade in robles
		    $title.addClass("active");		    		  
		  }, 600);

		  window.setTimeout(function() {			
		    $portfolio.addClass("active");		    		  
		  }, 700);

		  window.setTimeout(function() {			
		    $resume.addClass("active");		    		  
		  }, 900);

		  window.setTimeout(function() {			
		    $contact.addClass("active");		    		  
		  }, 1100);		
		  
		  
		  // fade in showreel etc
		  var landerM = (winH / 2) + 100;
		  // $lander.css({marginBottom: landerM});
		  	
	  	// fade in copyright
	  	// window.setTimeout(function() {			
		  //   $("footer.copyright").addClass("active");		    		  
		  // }, 1500);
		
		  window.setTimeout(function() {			
		  	// show showreel
		  	$('section.full').css({display: "block", opacity: "0"});
		  	$about.css({display: "block", opacity: "1"});
		  	$('#imprint').css({display: "block", opacity: "1"});
		  	topOffs();
		  	$('section.full').animate({opacity: "1"}, 1400, "easeInOutQuad");	    		  
		    		  		    		  	
		  	// show navi
		  	window.setTimeout(function() {
		  		// reduce bigL speed
					bigL1 = 2000;
					bigL2 = 16000;	
					showNav($("li.navLink").last(),true); 
				}, 800);
		    
		  }, 1000);
		  
		}, 600);
		
	}

}

      