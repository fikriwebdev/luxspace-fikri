$(document).ready(function () {
    $(".accordion-overview div .accordion-toggle").click(function () {
        $(".accordion-overview .accordion-menu").toggleClass(
            "hidden opacity-100 transition-all duration-500");
        $(this).toggleClass("transform rotate-180")
        $(".accordion-overview .accordion-wrapper").toggleClass("flex-col")

    });

    $(".accordion-company div .accordion-toggle").click(function () {
        $(".accordion-company .accordion-menu").toggleClass(
            "hidden opacity-100 transition-all duration-500");
        $(this).toggleClass("transform rotate-180")
        $(".accordion-company .accordion-wrapper").toggleClass("flex-col")

    });

    $(".accordion-explore div .accordion-toggle").click(function () {
        $(".accordion-explore .accordion-menu").toggleClass(
            "hidden opacity-100 transition-all duration-500");
        $(this).toggleClass("transform rotate-180")
        $(".accordion-explore .accordion-wrapper").toggleClass("flex-col")

    });
});