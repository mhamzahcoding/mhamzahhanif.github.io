$('a').click(function(){
    var selected = $(this);
    $('a').removeClass('active');
    $(selected).addClass('active');
});

    $("#aboutTab").click(function () {
        $("#homePage").hide();
        $("#aboutPage").show();
    });
    $("#homeTab").click(function () {
        $("#homePage").show();
        $("#aboutPage").hide();
    });