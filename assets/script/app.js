$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['home', 'camp', 'posts', 'about', 'stories'],
        scrollOverflow: true,
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        controlArrows: false,
        slidesNavigation: true,
        paddingTop: '4rem',
        fixedElements: '.navbar',
        afterRender: function() {
        	$('#fullpage').css('visibility', 'visible');
            $('#loader-container').fadeOut();
            slideTimeout = setInterval(function() {
                $.fn.fullpage.moveSlideRight();
            }, 5000);
        },
        onLeave: function(index, direction) {
            if (index == '1') {
                console.log('on leaving the slideshow/section1');
                clearInterval(slideTimeout);
            }
        }
    });
});

    /*--/ Star Typed /--*/
    if ($('.text-slider').length == 1) {
    var typed_strings = $('.text-slider-items').text();
        var typed = new Typed('.text-slider', {
            strings: typed_strings.split(','),
            typeSpeed: 80,
            loop: true,
            backDelay: 1100,
            backSpeed: 30
        });
    }
$(function() {
    $('.nav-item').on('click', function() {
        $('.nav-item').removeClass('active');
        $(this).addClass('active');
    });
    // Collapse navbar
    $('.navbar-toggler').click();
});
