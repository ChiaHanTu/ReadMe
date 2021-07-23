$(document).ready(function(){

	$(".menu").click(function(){ 
    
    $("nav").slideToggle();
        
    });
    
    $(window).on('load resize',function(){
        var a_w = document.body.clientWidth;
        if(a_w >= 768) $("nav").show(); else $("nav").hide();
    });
		
    $("#phone").click(function(){

        $(".num").slideToggle();

    });

     //group
    $(".fancybox").fancybox({
        openEffect  : 'none', //'elastic', 'fade' or 'none'
        closeEffect : 'none'
    });

});