$(document).ready(
    function () {
        $('about-section').waypoint(
            function (direction) {
                if (direction == "down") {
                    $('nav').addclass('sticky');
                } else {
                    $('nav').removeclass('sticky');
                }
            }, {
            offset: '100px'
                }
        )
     }           
)