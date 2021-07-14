$(window).on("load", function() {
    setTimeout(function(){ $('.loader-wrapper').fadeOut('slow'); }, 2000);
    setTimeout(function(){ AOS.init(); },3000);
    setTimeout(function(){ $('nav').css('visibility', 'visible');},4000);
    setTimeout(function(){ $('#home').css('visibility', 'visible');},3000);
    setTimeout(function(){ $('.ct-btn-scroll').css('visibility', 'visible');},3000);
});
