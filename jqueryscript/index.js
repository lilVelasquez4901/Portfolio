$(document).ready(function() {
    $(document).one('click', function() {
        let audio = new Audio('../audios/glass-breaking-sound-effect_wLZSIYn.mp3');
        setTimeout(function() {
            audio.play();
        }, 3000);
        let flickers = 0;
        let maxFlickers = 3;
        let flickerSpeed = 500;
        function flicker() {
            if (flickers < maxFlickers) {
                $('#blackout').fadeIn(flickerSpeed, function() {
                    $('#blackout').fadeOut(flickerSpeed, function() {
                        flickers++;
                        flicker();
                    });
                });
            } else {
                $('#blackout').fadeIn(150, function() {
                    setTimeout(function() {
                        window.location.href = 'html/\afterTheBreak.html';
                    }, 3000);
                });
            }
        }
        flicker();
    });
});