//import './_vendor';
//import vars from './_vars';
//import './_functions';
//import './_components';





document.addEventListener('DOMContentLoaded', function () {
    const menu = document.getElementById('navMenu');
    document.querySelectorAll('.burgerClick').forEach(el => {
        el.addEventListener('click', () => menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex')
    });


    const swiper = new Swiper('.slider1', {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 48,
        allowTouchMove: false,
        navigation: {
            nextEl: '.swiper-button-next',
        }
    });
    
    const swiper2 = new Swiper('.slider2', {
        slidesPerView: 1,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
    });

    const swiper3 = new Swiper('.slider3', {
        slidesPerView: 1,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
    });
    
});





