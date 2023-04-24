$(document).ready(function() {
    jQuery.extend(verge);
    $('a[href^="#"]').click(function(event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top - 50
        }, 900);
    });

    $('#down').click(function() {
        $('html,body').animate({
            scrollTop: $('#about').offset().top - 50
        }, 900);
    });
    $('#down').addClass('animated infinite slideInDown');
});

function animateChevron() {
    var scrollHeight = $(window).scrollTop();
    var windowHeight = $(window).height();
    var documentHeight = $(document).height();
    var triggerHeight = documentHeight - windowHeight;

    if (scrollHeight < triggerHeight) {
        $('html, body').animate({ scrollTop: triggerHeight }, 500);
    } else {
        $('html, body').animate({ scrollTop: 0 }, 500);
    }
}