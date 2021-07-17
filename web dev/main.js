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

// Code to control the team button
function changeMemberList(n) {
    var currentActive = "filter-coordinators";
    if (n == 1) {

        document.getElementById(currentActive).className = String(document.getElementById(currentActive).className).replace("active", "");
        currentActive = "filter-coordinators";
        document.getElementById(currentActive).className = document.getElementById(currentActive).className + "active";
        document.getElementById("m-coordinator").hidden = false;
        document.getElementById("m-core").hidden = true;
        document.getElementById("m-junior").hidden = true;
    }
    if (n == 2) {
        document.getElementById(currentActive).className = String(document.getElementById(currentActive).className).replace("active", "");
        currentActive = "filter-core";
        document.getElementById(currentActive).className = document.getElementById(currentActive).className + " active";
        document.getElementById("m-coordinator").hidden = true;
        document.getElementById("m-core").hidden = false;
        document.getElementById("m-junior").hidden = true;
    }
    if (n == 3) {
        document.getElementById(currentActive).className = String(document.getElementById(currentActive).className).replace("active", "");
        currentActive = "filter-junior";
        document.getElementById(currentActive).className = document.getElementById(currentActive).className + " active";
        document.getElementById("m-coordinator").hidden = true;
        document.getElementById("m-core").hidden = true;
        document.getElementById("m-junior").hidden = false;
    }
}

//code to control events
function changeEventList(n) {
    console.log("changeEventList");
    var curActive = "filter-tech";
    if (n == 1) {
        console.log("changeEventList 1");
        document.getElementById(curActive).className = String(document.getElementById(curActive).className).replace("active", "");
        curActive = "filter-tech";
        document.getElementById(curActive).className = document.getElementById(curActive).className + "active";
        document.getElementById("m-tech").hidden = false;
        document.getElementById("m-fun").hidden = true;
        document.getElementById("m-gaming").hidden = true;
    }
    if (n == 2) {
        console.log("changeEventList 2");
        document.getElementById(curActive).className = String(document.getElementById(curActive).className).replace("active", "");
        curActive = "filter-fun";
        document.getElementById(curActive).className = document.getElementById(curActive).className + " active";
        document.getElementById("m-tech").hidden = true;
        document.getElementById("m-fun").hidden = false;
        document.getElementById("m-gaming").hidden = true;
    }
    if (n == 3) {
        console.log("changeEventList 3");
        document.getElementById(curActive).className = String(document.getElementById(curActive).className).replace("active", "");
        curActive = "filter-gaming";
        document.getElementById(curActive).className = document.getElementById(curActive).className + " active";
        document.getElementById("m-tech").hidden = true;
        document.getElementById("m-fun").hidden = true;
        document.getElementById("m-gaming").hidden = false;
    }
}
// code for collapsing navbar when the element is clicked
$('.nav-link').on('click', function() {
    $('.navbar-collapse').collapse('hide');
});