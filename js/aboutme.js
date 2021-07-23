$(document).ready(function(){

	$(".icon").hide();
	$(".wave").hide();	
	$(".essay1").hide();
	$(".essay2").hide();
	$(".essay4").hide();
	$(".essay5").hide();
	$("#undo").hide();

	$(".circle").click(function(){

		$(".circle:hover").css({cursor:"default"});

		$(this).animate({width:"100%",height:"100%",top:0,left:0,border:"0px"},1200);
		$(this).addClass('cr');

		$(".icon").css("z-index",10);
		$(".a3").delay( 1000 ).fadeIn( 2000 );
		$(".a2").delay( 1400 ).fadeIn( 2000 );
		$(".a4").delay( 1800 ).fadeIn( 2000 );
		$(".a1").delay( 2200 ).fadeIn( 2000 );
		$(".a5").delay( 2600 ).fadeIn( 2000 );

		$(".wave").delay( 1000 ).fadeIn( 2000 );

	});

	$(".p1").click(function(){
		
		$(".a1").animate({left:"10vw",top:"33vh"},1500);
		$(".a1").css("animation-name","no");
		$(".a2").fadeTo("fast",0);
		$(".a3").fadeTo("fast",0);
		$(".a4").fadeTo("fast",0);
		$(".a5").fadeTo("fast",0);

		$(".icon").css({cursor:"default"});
		$('a').each(function(index) {
   			$(this).replaceWith($(this).html());
		});

		$(".essay1").fadeIn( 2000 );
		
		
		
	});

	$(".p2").click(function(){
		
		$(".a2").animate({left:"10vw",top:"33vh"},1500);
		$(".a2").css("animation-name","no");
		$(".a1").fadeTo("fast",0);
		$(".a3").fadeTo("fast",0);
		$(".a4").fadeTo("fast",0);
		$(".a5").fadeTo("fast",0);

		$(".icon").css({cursor:"default"});
		$('a').each(function(index) {
   			$(this).replaceWith($(this).html());
		});

		$(".essay2").fadeIn( 2000 );

	});

	$(".p4").click(function(){
		
		$(".a4").animate({left:"80vw",top:"33vh"},1500);
		$(".a4").css("animation-name","no");
		$(".a1").fadeTo("fast",0);
		$(".a2").fadeTo("fast",0);
		$(".a3").fadeTo("fast",0);
		$(".a5").fadeTo("fast",0);

		$(".icon").css({cursor:"default"});
		$('a').each(function(index) {
   			$(this).replaceWith($(this).html());
		});

		$(".essay4").fadeIn( 2000 );
	});	


	$(".p5").click(function(){
		
		$(".a5").animate({left:"80vw",top:"33vh"},1500);
		$(".a5").css("animation-name","no");
		$(".a1").fadeTo("fast",0);
		$(".a2").fadeTo("fast",0);
		$(".a3").fadeTo("fast",0);
		$(".a4").fadeTo("fast",0);

		$(".icon").css({cursor:"default"});
		$('a').each(function(index) {
   			$(this).replaceWith($(this).html());
		});

		$(".essay5").fadeIn( 2000 );

	});
});