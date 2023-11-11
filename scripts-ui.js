
  
    // Main Menu Style Dropdown ----------------------

$(document).ready(function (){


  $(".layout-control").click( function() {

    $("html").removeClass("layout-default layout-compact layout-expanded");
    $(".layout-control").removeClass("active");

        var newwclass = $(this).attr("id");
     $("html").toggleClass(newwclass);
     $(this).addClass("active");
   });

    $(".expand-this").click(function(){
      $(this).closest(".listing-wrapper").toggleClass("expanded");
      $(this).toggleClass("active");
      $("html").toggleClass("no-scroll");
    });

});
  