if($(window).width() >= 820){
    $(".get-started").stick_in_parent();
}

$( "a.form" ).click(function( event ) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
});



