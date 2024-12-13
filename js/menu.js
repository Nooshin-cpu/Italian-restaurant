$(function() {


    // Parallax plugin
    // Initialize
    $('.statement').parallax({ // Selector
        imageSrc: './assets/images/gallery2.jpg'
    });

    // Resize (used for responsive issues wit the plugin)
    $(window).trigger('resize').trigger('scroll');

})