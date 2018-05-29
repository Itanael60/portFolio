$(function() {
    let display = $("#background").css('display');
    let skills = false;
    if (display == 'none') {
        $('main').css('display', 'inline');
    } else {

        $('.sp-circle-link2').mouseenter(function() {
            $('.sp-circle-link').animate({ opacity: 0.9 }, 1000);
        });
        $('.sp-circle-link2').mouseleave(function() {
            $('.sp-circle-link').animate({ opacity: 0.8 }, 1000);
        });

        $('.sp-circle-link').on('click', function() {
            $('#background').css('background-color', 'white');
            $('#background').fadeOut(4000, function() {
                // $('main').css('opacity', '1');
                $('main').show();
            });

        });
        $('#goToEnd').click(function() {
            $('#background').css('background-color', 'white');
            $('#background').fadeOut(4000, function() {
                // $('main').css('opacity', '1');
                $('main').show();
            });
        })
    };

    //animation des progress section skills 
    // window.sr = ScrollReveal();
    // sr.reveal('.progress-bar', {
    //     origin: 'left',
    //     duration: 2000,
    //     distance: '100%'
    // })

    function isElementVisible(elementToBeChecked) {
        var TopView = $(window).scrollTop();
        var BotView = TopView + $(window).height();
        var TopElement = $(elementToBeChecked).offset().top;
        var BotElement = TopElement + $(elementToBeChecked).height();
        return ((BotElement <= BotView) && (TopElement >= TopView));
    }
    $(window).scroll(function() {
        isOnView = isElementVisible("#skills");
        if (isOnView) {
            if (skills == true) {
                $("#skills").html('<section id="skills"> <div class="red-divider"></div> <h2>Compétences</h2> <div class="container"> <div class="row"> <div class="col-md-6"> <div class="progress"> <div class="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style="width: 85%;">HTML 85%</div> </div> <div class="progress"> <div class="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style="width: 85%;">CSS 85%</div> </div> <div class="progress"> <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style="width: 85%;">JAVASCRIPT 85%</div> </div> </div> <div class="col-md-6 second"> <div class="progress"> <div class="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style="width: 85%;">JQUERY 85%</div> </div> <div class="progress"> <div class="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style="width: 85%;">BOOTSTRAP 85%</div> </div> <div class="progress"> <div class="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style="width: 85%;">ANGULAR 85%</div> </div> </div> </div> </div> </section>')
                window.sr = ScrollReveal();
                sr.reveal('.progress-bar', {
                    origin: 'left',
                    duration: 2000,
                    distance: '100%'
                })
                console.log("Mike")
            }
            skills = false;
        } else {
            skills = true;
        }
    });

});