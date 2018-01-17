$(function () {

    // Scroll to Anchor
    $('.scroll-to').click(function () {
        var top = $('body').find($(this).attr('href')).offset().top + (-72);
        $('html, body').animate({
            scrollTop: top
        }, 1000, 'easeOutQuart');
        return false;
    });

    // Scroll to Pivot top
    $('.pivot-scroll').on("click", function () {
        $('html, body').scrollTo('#top-of-pivot', 400, 'easeOutQuart');
    });

    // Call sticky tabs
    $('.sticky-tabs').stickThis();

    $('h3.subtitle').on("click", function () {
        $(this).toggleClass('active');
        $(this).next('div').slideToggle();
    });

    // Featured Icons - Animated Gif Loading
    var waypoint = new Waypoint({
        element: document.getElementById('immersive-features'),
        handler: function () {
            setTimeout(function () {
                $('#ft-users img, #ft-users h3').fadeIn().css('width', '100%');
            }, 0);
            setTimeout(function () {
                $('#ft-devices img, #ft-devices h3').fadeIn().css('width', '100%');
            }, 750);
            setTimeout(function () {
                $('#ft-1tb img').fadeIn().css(
                    {
                        'width': '76%',
                        'position': 'relative',
                        'top': '0px',
                        'left': '-6px'
                    }
                );
                $('#ft-1tb h3').fadeIn();
            }, 1500);
        },
        offset: 550
    });

    // Featured Icons Click Play Animation
    $('#ft-users img').on("click", function () {
        $(this).attr('src', '../images/animated-icons/orange/icon-users-over.gif');
    });
    $('#ft-devices img').on("click", function () {
        $(this).attr('src', '../images/animated-icons/orange/icon-devices-over.gif');
    });
    $('#ft-1tb img').on("click", function () {
        $(this).attr('src', '../images/animated-icons/orange/icon-1tb-over.gif').css(
            {
                'width': '80%',
                'position': 'relative',
                'top': '0',
                'left': '0'
            })
    });

    // Additional features shelf
    $('.features-shelf-toggle').on("click", function () {
        $('.features-shelf-toggle').toggleClass('active');
        $('.feature-shelf').slideToggle();
    });

});