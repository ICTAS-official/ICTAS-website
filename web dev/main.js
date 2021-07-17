$(document).ready(function() {
    $(this).scrollTop(0);
});

$(window).on("load", function() {
    setTimeout(function() { $('.loader-wrapper').fadeOut('slow'); }, 0);
    setTimeout(function() { AOS.init(); }, 0);
    setTimeout(function() { $('nav').css('visibility', 'visible'); }, 0);
    setTimeout(function() { $('#home').css('visibility', 'visible'); }, 0);
    setTimeout(function() { $('.ct-btn-scroll').css('visibility', 'visible'); }, 0);
    $('#top').css("visibility", "hidden");
});

$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();
    $('.content-section').each(function(i) {
        if ($(this).position().top <= scrollDistance) {
            $('.navigation a.active').removeClass('active');
            $('.navigation a').eq(i).addClass('active');
        }
    });
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

$('a[href*=#]').bind('click', function(e) {
    e.preventDefault(); // prevent hard jump, the default behavior

    var target = $(this).attr("href"); // Set the target as variable

    // perform animated scrolling by getting top-position of target-element and set it as scroll target
    $('html, body').stop().animate({
        scrollTop: $(target).offset().top
    }, 800, function() {
        location.hash = target; //attach the hash (#jumptarget) to the pageurl
    });

    return false;
});


