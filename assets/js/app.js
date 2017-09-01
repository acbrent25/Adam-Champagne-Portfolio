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
    $(".owl-carousel").owlCarousel();

    $("#owl-demo").owlCarousel({
             navigation : true, // Show next and prev buttons
             slideSpeed : 300,
             paginationSpeed : 400,
             singleItem:true
        
             // "singleItem:true" is a shortcut for:
             // items : 1, 
             // itemsDesktop : false,
             // itemsDesktopSmall : false,
             // itemsTablet: false,
             // itemsMobile : false
        
         });


}); // Document ready