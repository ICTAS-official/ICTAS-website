$(window).on("load", function() {
    setTimeout(function(){ $('.loader-wrapper').fadeOut('slow'); }, 0);
    setTimeout(function(){ AOS.init(); },0);
    setTimeout(function(){ $('nav').css('visibility', 'visible');},0);
    setTimeout(function(){ $('#home').css('visibility', 'visible');},0);
    setTimeout(function(){ $('.ct-btn-scroll').css('visibility', 'visible');},0);
});
