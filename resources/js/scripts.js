$(document).ready(
    function () {

        // sticky nav
        $('.about-section').waypoint(
            function (direction) {
                if (direction == "down") {
                    $('nav').addClass('sticky');
                } else {
                    $('nav').removeClass('sticky');
                }
            }, {
            offset: '600px'
        }
        )
        // scroll
        $('a').click(function(event){
            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 700);
            event.preventDefault();
        });
    }
)
