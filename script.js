// -------- Menu Dropdown
const mobileItem = document.querySelectorAll(".mobile-item")
const dropMenu = document.querySelectorAll(".drop-menu")

mobileItem.forEach((element, index) => {
    element.addEventListener("click", function () {
        dropMenu.forEach((menu, id) => {
            if (index === id) {
                menu.classList.toggle("active-drop-menu")
            }
        })
    })
});


// ------- Menu for news page
const menuIcon = document.querySelector(".menu_icon");
const mobileMenu = document.querySelector(".mobile_menu");
if(menuIcon){
    menuIcon.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
    });
}




// ------- 
function filterToggle(){
    document.querySelector(".filter_list").classList.toggle("filter_active")
}





$(document).ready(function () {

    $(".banner").owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        items: 1,
        nav: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
    });
    $(".latest_device_carousel").owlCarousel({
        loop: true,
        margin: 20,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 4,
            }
        },
        nav: true,
        loop: true,
        autoplay: false,
        autoplayTimeout: 5000,
    });
    $(".popular_device_carousel").owlCarousel({
        loop: true,
        margin: 20,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 4,
            }
        },
        nav: true,
        loop: true,
        autoplay: false,
        autoplayTimeout: 5000,
    });
    $(".comparison_device_carousel").owlCarousel({
        loop: true,
        margin: 20,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 2,
            }
        },
        nav: true,
        loop: true,
        autoplay: false,
        autoplayTimeout: 5000,
    });


});  