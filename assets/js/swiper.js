var swiper2 = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },
  loop: true,
  observer: true,
  observeParents: true,
  coverflowEffect: {
    rotate: 10,
    stretch: 0,
    depth: 200,
    modifier: 1,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  keyboard: {
    enabled: true,
  },
});
