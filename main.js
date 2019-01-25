$(document).ready(function(){

    $('.b').click(function(){
        $('.home').fadeOut()
        $('.about').fadeIn('slow');
    });

    $('#.a').click(function(){
        $('.about').fadeOut()
        $('.home').fadeIn('slow');
    });

    $('a').click(function(){
    var selected = $(this);
    $('a').removeClass('active');
    $(selected).addClass('active');
    });
});