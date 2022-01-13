$(document).ready(function() {
    eel.setInterval();

    eel.expose(getAndCreateTime);
    function getAndCreateTime(hours1, hours2, minutes1, minutes2, seconds1, seconds2) {
        $('.time-0,.time-1,.time-2,.time-3,.time-4,.time-5,.time-6,.time-7,.time-8,.time-9').css('background-color', '#e9e8e8');

        setTimeout(() =>{ $('.top-dot,.bottom-dot').css('background-color', 'aqua'); }, 500);

        $('.hours-block').find('.first-block').find(`.time-${hours1}`).css('background-color', 'black');
        $('.hours-block').find('.second-block').find(`.time-${hours2}`).css('background-color', 'black');

        $('.minutes-block').find('.first-block').find(`.time-${minutes1}`).css('background-color', 'black');
        $('.minutes-block').find('.second-block').find(`.time-${minutes2}`).css('background-color', 'black');

        $('.seconds-block').find('.first-block').find(`.time-${seconds1}`).css('background-color', 'black');
        $('.seconds-block').find('.second-block').find(`.time-${seconds2}`).css('background-color', 'black');

        $('.top-dot,.bottom-dot').css('background-color', 'black');
    }
})