const swiper = new Swiper(".swiper", {
   slidesPerView: "auto",
   // Optional parameters
   loop: false,
   // spaceBetween: 20,
   // centeredSlides: true,

   // If we need pagination
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },

   breakpoints: {
      640: {
         slidesPerView: 1,
         spaceBetween: 20,
      },
   },

   // Navigation arrows
   // navigation: {
   //    nextEl: ".swiper-button-next",
   //    prevEl: ".swiper-button-prev",
   // },
});
