/*$(document).ready(function(){
    $(".extraDiv1").hide();
    $("#nav-home-tab").on("click",function(){
        $(".extraDiv2").show();
        $(".extraDiv3").show();
        $(".extraDiv1").hide();
    });
    $("#nav-profile-tab").on("click",function(){
        $(".extraDiv1").show();
        $(".extraDiv3").show();
        $(".extraDiv2").hide();
    });

    $("#nav-contact-tab").on("click",function(){
        $(".extraDiv1").show();
        $(".extraDiv2").show();
        $(".extraDiv3").hide();
    });
});*/

// Image  lightbox
$(document).ready(function() {
    $('.image-popup-vertical-fit').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-img-mobile',
        image: {
            verticalFit: true
        }
        
    });
    $('.image-popup-fit-width').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        image: {
            verticalFit: false
        }
    });
    $('.image-popup-no-margins').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 300 // don't foget to change the duration also in CSS
        }
    });
});