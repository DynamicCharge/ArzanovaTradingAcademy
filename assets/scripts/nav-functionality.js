$(document).ready(function() {
    $('.burger__cheeckbox').prop('checked', false);

    $('.burger').on('click', function(){
        if(!$('.nav__holder').hasClass('holder__active')){
            $('.nav__holder').toggleClass('holder__active');
            $('.mask').css('display', 'block').ready(function(){
                setTimeout(function(){
                    $('.mask').toggleClass('mask__active');
                }, 100);
            });
        } else {
            $('.nav__holder').removeClass('holder__active');
            $('.mask').removeClass('mask__active').ready(function(){
                setTimeout(function(){
                    $('.mask').css('display', 'none');
                }, 500);
            });
        }
    });

    $('.mask').on('click', function(){
        if($('.nav__holder').hasClass('holder__active')){
            $('.nav__holder').removeClass('holder__active');
            $('.mask').removeClass('mask__active').ready(function(){
                setTimeout(function(){
                    $('.mask').css('display', 'none');
                }, 500);
            });
            $('.burger__cheeckbox').prop('checked', false)
        }
    });
})