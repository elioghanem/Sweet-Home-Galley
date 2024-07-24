function openMenu() {
    document.body.classList += " menu--open"
}

function closeMenu() {
    document.body.classList.remove('menu--open')
}

$(document).ready(function() {
    var currentIndex = 1;
    var totalDesc = $('.desc__list').length;

    function showDescription(index) {
        $('.desc__list').removeClass('active');
        $('.desc__list:nth-child(' + index + ')').addClass('active');
        $('.bullet').removeClass('active');
        $('.bullet[data-target="' + index + '"]').addClass('active');
    }

    function switchDescription() {
        currentIndex++;
        if (currentIndex > totalDesc) {
            currentIndex = 1;
        }
        showDescription(currentIndex);
    }

    // Initial setup
    showDescription(currentIndex);
    setInterval(switchDescription, 5000);

    // Click event for bullets navigation (optional, if you have navigation bullets)
    $('.bullet').click(function() {
        var target = $(this).attr('data-target');
        currentIndex = parseInt(target);
        showDescription(currentIndex);
    });
});

const swiper = new Swiper('.slider__wrapper', {

    loop: true,
    grabCursor: true,
    spaceBetween: 30,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        2000: {
            slidesPerView: 3
        }
    }


});