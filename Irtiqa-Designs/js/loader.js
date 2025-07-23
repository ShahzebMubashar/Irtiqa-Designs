$(document).ready(function() {
    setTimeout(function() {
        $(".loader-logo").addClass("fill-effect"); // Start the filling effect
    }, 300);

    setTimeout(function() {
        $("body").addClass("loaded"); // Hide loader after animation
    }, 2800);
});
