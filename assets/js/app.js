$(document).ready(function() {

    
    // initiate tabs
    $( function() {
        $( "#tabs" ).tabs();
      } );
    
      // set first one to active
    $( "#tabs" ).tabs({
        active: 0
    });

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


}); // Document ready