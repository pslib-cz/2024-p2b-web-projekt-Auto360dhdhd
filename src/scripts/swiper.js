import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

let swiperInstance = null;

function initOrDestroySwiper() {
  const viewportWidth = window.innerWidth;
  const swiperContainer = document.querySelector('.swiper');

  if (!swiperContainer) return;

  if (viewportWidth >= 1280) {
    if (!swiperInstance) {
      swiperInstance = new Swiper('.swiper', {
        modules: [Navigation, Pagination, Scrollbar],
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      slidesPerView: 3,
      spaceBetween: 30,
        loop: true,

      });
    }
  } else {
    if (swiperInstance) {
      swiperInstance.destroy(true, true);
      swiperInstance = null;
    }
  }
}

// Počkáme, až se celý DOM načte
window.addEventListener('DOMContentLoaded', () => {
  initOrDestroySwiper();
  window.addEventListener('resize', initOrDestroySwiper);
});
