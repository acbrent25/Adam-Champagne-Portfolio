$(document).ready(function() {

    // initiate tabs
    $( function() {
        $( "#tabs" ).tabs();
      } );
    
      // set first one to active
    $( "#tabs" ).tabs({
        active: 0
    });

    // Hide email level
    $('#email2').hide()

    // call owl carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        singleItem: true,
        autoplay: false,
        autoHeight:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    new WOW().init();

/**************
 * ANIMATION
 *************/
// var mugShot = $('#mugshot');
// TweenMax.from(mugshot, 1, {rotation:-45, width: "600px"});

$("#form-check").hide();

}); // Document ready