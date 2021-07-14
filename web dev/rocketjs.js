$(document).ready(function(){
  $(window).scroll(function () {
    if($(window).scrollTop()<50)
    {

        $(".rocket").css("visibility","hidden");

      // if ($(".rocket").css("bottom","0px")) {
      //   $(".rocket").css("visibility","hidden");
      // }
      // $(function(){

     // $(".rocket").slideDown(800, function(){
     //   setTimeout(function()
     //   {
     //     $(".rocket").css("visibility","hidden");
     //   }, 1000);
     // });
   // });
    }

    else
    {
      $(".rocket").animate({bottom:"55px"},500);

      $(".rocket").css("visibility","visible");
    }
  });
  });

  $( document ).ready(function() {
  $('#rock').on('click', function(){
    $('html, body').animate({ scrollTop:'0px',display:'none'},{duration: 500,easing: 'linear'});
        var self = this;
        this.className += ' '+"launchrocket";
        setTimeout(function(){
          self.className = 'rocket';
        },800)
  });

  });
