$(document).ready(function() {
    $('.body_project').hide(); // Oculta todas las respuestas inicialmente

    $('.card_project').click(function() {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active").find(".body_project").slideUp();
            $(this).find("#iconProject").removeClass("questions_arrow--rotate");
        } else {
            $(".card_project.active .body_project").slideUp();
            $(".card_project.active").removeClass("active").find("#iconProject").removeClass("questions_arrow--rotate");
            $(this).addClass("active").find(".body_project").slideDown();
            $(this).find("#iconProject").addClass("questions_arrow--rotate");
        }
        return false;
    });
});
