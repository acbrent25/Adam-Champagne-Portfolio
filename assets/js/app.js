$(document).ready(function() {

    
    // initiate tabs
    $( function() {
        $( "#tabs" ).tabs();
      } );
    
      // set first one to active
    $( "#tabs" ).tabs({
    active: 0
    });


}); // Document ready