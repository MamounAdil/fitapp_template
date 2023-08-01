/*global $*/
$(document).ready(function () {
    "use strict";

    /* Add And Remove Class Active */
    $("header .header-content .list li a").on("click", function () {
        $(this).parent().siblings().removeClass("active");
        $(this).parent().addClass("active");
    });

    /* Prevent Default In Landing Page  */
    $(".button a").on("click", function (ev) {
        ev.preventDefault();
        window.alert("Done");
    });

    /* Trigger bxslider */
    $(".slider").bxSlider();

    /* Open Menu In Mobile */
    $("header i.hidden").on("click", function () {
        $(this).hide();
        $("header i.hide").css("display", "block");
        $("header .list").addClass("open-menu");
    });

    $("header i.fa-square-xmark").on("click", function () {
        $(this).hide();
        $("header i.hidden").show();
        $("header .list").removeClass("open-menu");
    });


});