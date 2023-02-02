$(function () {
    // preload audio
    var toast = new Audio('media/toast.wav');

    $('.code').on('click', function (e) {
        e.preventDefault();
        // first pause the audio (in case it is still playing)
        toast.pause();
        // reset the audio
        toast.currentTime = 0;
        // play audio
        toast.play();

        $('.toast-header #product').text($(this).attr('data-product'));
        $('.toast-body #code').text($(this).attr('data-code'));
        $('#toast').toast({ autohide: false }).toast('show');
    });
});

$(document).on('keydown', function (event) {
    if (event.key == "Escape") {
        $('#toast').toast('hide')
    }
});