'use strict';

$(document).ready(function(){
    $('.style-switch').click(function(){
        var elemToChange = $('*[data-switchable=style]');
        var style = $(this).attr('data-style');
        $('.style-switch').removeClass('active');


        elemToChange.removeClass();
        elemToChange.addClass(style);

        $(this).addClass('active');
    });
});