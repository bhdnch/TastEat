const burger = document.querySelector(".burger__menu-icon");
const menu = document.querySelector(".burger__menu");
const body = document.querySelector("body");

burger.addEventListener("click", () => {
   burger.classList.toggle("active");
   menu.classList.toggle("burger__menu--open");
   body.classList.toggle("overflow--hidden");
});
