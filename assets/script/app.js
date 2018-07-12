$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['home', 'camp', 'posts', 'about', 'stories'],
        scrollOverflow: true,
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        controlArrows: false,
        slidesNavigation: true,
        paddingTop: '3rem',
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


$(function() {
    $('.nav-item').on('click', function() {
        $('.nav-item').removeClass('active');
        $(this).addClass('active');
    });

});