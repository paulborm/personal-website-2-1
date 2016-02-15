$(document).ready(function () {

    $('.nav-toggle').on('click', function () {
        $(this).toggleClass('nav-toggle--open');
        $(".nav-fullscreen").toggleClass("nav-fullscreen--open");
    });

});