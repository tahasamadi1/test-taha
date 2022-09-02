$(document).ready(function () {
    $(".toggleDropDown").click(function () {
        $(".navbarMenuDropdown").toggleClass("d-none")
    })
    var $owl = $('.owl-carousel');

    $owl.on('initialized.owl.carousel resized.owl.carousel', function(e) {
        $(e.target).toggleClass('hide-nav', e.item.count <= e.page.size);
    });
    $owl.owlCarousel({
        loop:true,
        margin:10,
        rtl:true,
        // responsiveClass:true,
        autoWidth:true,
        autoHeight:true,
        dots:false,
        navText : ["<i class='fa fa-chevron-right'></i>","<i class='fa fa-chevron-left'></i>"],
        responsive:{
            0:{
                items:1,
                nav:true,
                loop:true,
            },
            600:{
                items:3,
                nav:true,
                loop:true,
            },
            1000:{
                items:5,
                nav:true,
                loop:true
            },
            900:{
                nav:true,
                loop:true
            },
            800:{
                nav:true,
                loop:true
            },
            700:{
                nav:true,
                loop:true
            },
            1100:{
                nav:true,
                loop:true
            }
        }
    })
})