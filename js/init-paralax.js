$(function() {

    // bgVideo plugin
    $('.banner-video').bgVideo({ // Selector
        showPlayPause: false,
        pauseAfter: 0,
        fadeIn: 0
    });

    // Flickity plugin
    $('.main-carousel').flickity({ // Selector
        contain: true,
        cellAlign: 'left',
        wrapAround: true,
        pageDots: true,
        autoPlay: true
    });

    // Parallax plugin
    // Initialize
    $('.statement').parallax({ // Selector
        imageSrc: './assets/images/win.jpg'
    });

    // Resize (used for responsive issues wit the plugin)
    $(window).trigger('resize').trigger('scroll');

})