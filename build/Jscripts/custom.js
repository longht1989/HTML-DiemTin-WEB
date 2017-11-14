/* ====================================
   Onload functions
   ==================================== */

$(function() {
    // toggle header menu
    $('.site-header__menu .btn').click(function() {
        $(this).toggleClass('is-active');
        $(".menu__listing").slideToggle();
    });

    // toggle story menu
    $('.story .story__trigger').click(function() {
        $(this).toggleClass('is-active');
        $(this).siblings('.trigger__menu').toggle();
    });
});

$(function() {
    // index shuffle layout
    var Shuffle = window.Shuffle;
    var myShuffle = new Shuffle(document.querySelector('.shuffle-layout'), {
        itemSelector: '.story'
    });
});