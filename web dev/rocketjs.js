// jQuery(window).scroll(function() {
//     if (jQuery(window).scrollTop() < 50) {
//         jQuery('#rocketmeluncur').slideUp(500);
//     } else {
//         jQuery('#rocketmeluncur').slideDown(500);
//     }
//     var ftrocketmeluncur = jQuery("#ft")[0] ? jQuery("#ft")[0] : jQuery(document.body)[0];
//     var scrolltoprocketmeluncur = $('rocketmeluncur');
//     var viewPortHeightrocketmeluncur = parseInt(document.documentElement.clientHeight);
//     var scrollHeightrocketmeluncur = parseInt(document.body.getBoundingClientRect().top);
//     var basewrocketmeluncur = parseInt(ftrocketmeluncur.clientWidth);
//     var swrocketmeluncur = parseInt(scrolltoprocketmeluncur.clientWidth);
//     if (basewrocketmeluncur < 500) {
//         var leftrocketmeluncur = parseInt(ftrocketmeluncur.offsetLeft);
//         leftrocketmeluncur = leftrocketmeluncur < swrocketmeluncur ? leftrocketmeluncur * 2 - swrocketmeluncur : leftrocketmeluncur;
//         scrolltoprocketmeluncur.css('left', (basewrocketmeluncur + leftrocketmeluncur + "px"));
//     } else {
//         scrolltoprocketmeluncur.css('left', 'auto');
//         scrolltoprocketmeluncur.css('right', '10px');
//     }
// });

// jQuery('#rocketmeluncur').click(function() {
//     jQuery("html, body").animate({
//         scrollTop: '0px',
//         display: 'none'
//     }, {
//         duration: 600,
//         easing: 'linear'
//     });

//     var self = this;
//     this.className += ' ' + "launchrocket";
//     setTimeout(function() {
//         self.className = 'showrocket';
//     }, 800);
// });

// https://stackoverflow.com/questions/60090130/uncaught-typeerror-cannot-set-property-left-of-undefined