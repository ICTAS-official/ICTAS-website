$(window).on("load", function() {
    setTimeout(function(){ $('.loader-wrapper').fadeOut('slow'); }, 0);
    setTimeout(function(){ AOS.init(); },0);
    setTimeout(function(){ $('nav').css('visibility', 'visible');},0);
    setTimeout(function(){ $('#home').css('visibility', 'visible');},0);
    setTimeout(function(){ $('.ct-btn-scroll').css('visibility', 'visible');},0);
    $('#top').css("visibility","hidden");
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
        $('#top').css("visibility", "visible");
    } else {
        $('#top').css("visibility", "hidden");
    }
});
$('#top').click(function() {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
});
