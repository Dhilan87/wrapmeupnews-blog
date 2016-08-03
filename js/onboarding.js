    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
      e.target // newly activated tab
      e.relatedTarget // previous active tab
    });
    
    $(".btn-continue").on("click", function(){
        $(".welcome-msg").hide( "slide", { direction: "left"  }, 500 );
        $('.nav-tabs a:eq(0)').tab('show');
    });
    
    $(".btn-continue-2").on("click", function(){
        $('.nav-tabs a:eq(1)').tab('show');
         $('.nav-tabs li:eq(0)').addClass("disabled");
    });
    
    $(".dw-color-stops .light1, .dw-color-stops .light2").hover(function(){
        $(".dw-app-window").removeClass("dark-grey");
        $(".dw-app-window").addClass("light-theme");
    }, function(){
        $(".dw-app-window").removeClass("light-theme");
        $(".dw-app-window").addClass("dark-grey");
    });
    
    $(".dw-color-stops .light1, .dw-color-stops .light2").on("click", function(){
        $(".dw-app-window").removeClass("dark-grey");
        $(".dw-app-window").addClass("light-theme");
        $( ".dw-color-stops .light1, .dw-color-stops .light2" ).mouseout(function() {
          $( ".dw-app-window" ).addClass("light-theme");
        });
    });
    
    $(".developer").on("click", function(){
        $('.nav-tabs a:eq(2)').tab('show');
        $('.nav-tabs li:eq(1)').addClass("disabled");
        //$(this).find('.radio-value1').prop("checked", true).trigger("click");
    });
    
    $(".standard").on("click", function(){
        $('.nav-tabs a:eq(2)').tab('show');
        $('.nav-tabs li:eq(1)').addClass("disabled");
        //$(this).find('.radio-value2').prop("checked", true).trigger("click");
    });
    
//    $(".radio-btns").on("click", function(){
//        $('.nav-tabs a:eq(2)').tab('show');
//        $('.nav-tabs li:eq(1)').addClass("disabled");
//    });
    

$(document).ready(function(){

    $('input[name="optradio"]').change(function(){
        localStorage.setItem('optradio', $(this).val());
    });
    
});

$('.dw-close').on("click", function(){
    var val = localStorage.getItem('optradio');
    $('.app-dialog').fadeOut();
    if (val == "dev"){
        $('.dev-image img').fadeIn();
    } else if (val == "std"){
        $('.std-image img').fadeIn();
    }
});











