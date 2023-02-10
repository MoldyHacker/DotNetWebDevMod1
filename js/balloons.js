$(function () {

    // Pick a date
    $('#birthday').pickadate({ format: 'mmmm, d' });

    // uncheck all checkboxes (FireFox)
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });

    // event listener for check/uncheck
    $('.form-check-input').on('change', function () {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
            $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
            $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
    });

    // Change H1 color based on hovered balloon text
    // Blue
    $("label:contains('Blue')").hover(function () {
        $('h1').css("color", "blue");
    }, function () {
        $('h1').css("color", "black");
    });
    // Black
    $("label:contains('black')").hover(function () {
        $('h1').css("color", "black");
    }, function () {
        $('h1').css("color", "black");
    });
    // Red
    $("label:contains('Red')").hover(function () {
        $('h1').css("color", "red");
    }, function () {
        $('h1').css("color", "black");
    });

    // Randomize css class on h1
    let animateCss = [
        'animate__bounce',
        'animate__flash',
        'animate__pulse',
        'animate__rubberBand',
        'animate__shakeX',
        'animate__shakeY',
        'animate__headShake',
        'animate__swing',
        'animate__tada',
        'animate__wobble',
        'animate__jello',
        'animate__heartBeat'
    ];

    function addRandomClasses() {
        let random = Math.floor(Math.random() * animateCss.length) + 1;
        let attentionseeker = animateCss[random];
        $('h1').addClass(attentionseeker);
    };

    $(document).ready(addRandomClasses())


    $('button#submit').on('click', function () {
        let countCheckedBoxes = $('input:checked').length;
        // $('#toast').toast('show');
        if (countCheckedBoxes == 0) {
            $('#toast').toast('show');
        }
    });
});