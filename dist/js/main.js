$(document).ready(function() {
    $('.popup-youtube').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

        $('.top-slide .item img').each(function() {
            var ico = $(this).data('icon');
            $('.after-slide').append('<span class="img" style="background: url('+ico+')"></span>');
        });
        $('.top-slide').owlCarousel({
            items: 1,
            autoplay: true,
            autoplayTimeout:6000,
            nav: false,
            dots: true,
            loop: true,
            animateOut: 'fadeOut',
            dotsContainer: '.after-slide',/*Указываем класс блока пагинации*/
            autoplayHoverPause: true
        });
        $('.after-slide').appendTo('.top-slide');
        $('.after-slide img').click(function () {
            $('.top-slide').trigger('to.owl.carousel', [$(this).index(), 300]);
        });
});