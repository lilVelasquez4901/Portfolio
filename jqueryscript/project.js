$(document).ready(function() {
     $('#blackout').show();
    $('#blackout').fadeOut(1000);
});
$('.shard a').on('click', function(e) {
    e.preventDefault();
    const target = $(this).attr('href');
    $('#blackout').fadeIn(1000, function() {
        window.location.href = target;
    });
});