import SwiperCore, {
  Autoplay,
  EffectCreative,
  EffectFade,
  Grid,
  // Mousewheel,
  Navigation,
  Pagination,
} from "swiper";
SwiperCore.use([
  // Mousewheel,
  Pagination,
  Navigation,
  EffectFade,
  Autoplay,
  Grid,
  EffectCreative,
]);

export const home1SliderProps = {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 8000,
  },
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ["-20%", 0, -1],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
  speed: 1800,
  mousewheel: true,
  watchSlidesProgress: true,
  pagination: {
    el: ".hero-main-slider .swiper-pagination",
  },
  navigation: {
    nextEl: ".hero-main-slider .swiper-button-next",
    prevEl: ".hero-main-slider .swiper-button-prev",
  },

};