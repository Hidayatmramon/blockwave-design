const swiper = new Swiper(".slider-freemaps .swiper-container", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: ".slider-freemaps .swiper-button-next",
      prevEl: ".slider-freemaps .swiper-button-prev",
    },
    breakpoints: {
      // Responsive settings
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });