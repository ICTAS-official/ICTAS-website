// $(document).ready(function() {
//     $(this).scrollTop(0);
// });

$(window).on("load", function() {
    setTimeout(function() { $('.loader-wrapper').fadeOut('slow'); }, 500);
    setTimeout(function() { AOS.init(); },500);
    setTimeout(function() { $('nav').css('visibility', 'visible'); },500);
    setTimeout(function() { $('#home').css('visibility', 'visible'); }, 500);
    setTimeout(function() { $('.ct-btn-scroll').css('visibility', 'visible'); }, 500);
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

// $("a[href*=#]").bind('click', function(e) {
//     e.preventDefault(); // prevent hard jump, the default behavior

//     var target = $(this).attr("href"); // Set the target as variable

//     // perform animated scrolling by getting top-position of target-element and set it as scroll target
//     $('html, body').stop().animate({
//         scrollTop: $(target).offset().top
//     }, 800, function() {
//         location.hash = target; //attach the hash (#jumptarget) to the pageurl
//     });

//     return false;
// });

$(document).ready(function(){
    $('#members li').click(function(e){
        var x=this.id;
        var y=$('#members li.active').attr("id");
        // console.log("clicked:",x);
        // console.log("clicked:",e.target.id);
        // console.log("active:",y);
        if(y == "filter-coordinators"){ $('#m-coordinator').hide();}
        else if(y == "filter-core"){ $('#m-core').hide();}
        else if(y == "filter-junior"){ $('#m-junior').hide();}
        // console.log("#members ",e.target.id);
        // $('#members li.active').hide();
        $('#members li.active').removeClass('active');
        $(this).addClass('active');
        if(x == "filter-coordinators"){ $('#m-coordinator').show();}
        else if(x == "filter-core"){ $('#m-core').show();}
        else if(x == "filter-junior"){ $('#m-junior').show();}
    });
});
$('.nav-link').on('click', function() {
    $('.navbar-collapse').collapse('hide');
});
$(document).ready(function(){
    $('#event-names li').click(function(e){
        var x=this.id;
        var y=$('#event-names li.active').attr("id");
        if(y == "filter-tech"){ $('#m-tech').hide();}
        else if(y == "filter-fun"){ $('#m-fun').hide();}
        else if(y == "filter-gaming"){ $('#m-gaming').hide();}
        $('#event-names li.active').removeClass('active');
        $(this).addClass('active');
        if(x == "filter-tech"){ $('#m-tech').show();}
        else if(x == "filter-fun"){ $('#m-fun').show();}
        else if(x == "filter-gaming"){ $('#m-gaming').show();}
    });
});