$(document).ready(function () {
    $("#toggler-button").click(function () {
        $(".wrapper").toggleClass("invisible transition duration-500");
    });
});