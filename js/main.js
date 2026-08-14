const navbar = document.querySelector(".navbar");
const logoLight = document.querySelector(".logo-light");
const logo = document.querySelector(".logo");
const mMenuToggle = document.querySelector(".mobile-menu-toggle");
const menu = document.querySelector(".mobile-menu");
const isFront = document.body.classList.contains("front-page");

const lightModeOn = (event) => {
  navbar.classList.add("navbar-light");
};

const lightModeOff = (event) => {
  navbar.classList.remove("navbar-light");
};
const changeNavHeight = (height) => {
  navbar.style.height = height;
};

const openMenu = (event) => { //Функция открывания меню
  menu.classList.add("is-open"); //Вешает класс is-open
  mMenuToggle.classList.add("close-menu");
  document.body.style.overflow = "hidden"; //Запрещаем прокрутку
  lightModeOn();
}
const closeMenu = (event) => { //Функция закрывания меню
  menu.classList.remove("is-open"); //Убирает класс is-open
  mMenuToggle.classList.remove("close-menu");
  document.body.style.overflow = "hidden"; //Возвращает прокрутку
  lightModeOff();
}
window.addEventListener('scroll', () => {
  this.scrollY > 1 ? changeNavHeight("4.5rem") : changeNavHeight("5.875rem");
  if (isFront) {
    this.scrollY > 1 ? lightModeOn() : lightModeOff();
  }
});
mMenuToggle.addEventListener("click", (event) => {
  event.preventDefault();
  menu.classList.contains("is-open") ? closeMenu() : openMenu();
});
const headerSlider = new Swiper('.header-slider-wrapper .swiper', {
  speed: 400,
  slidesPerView: 1,
  navigation: {
    nextEl: '.header-slider-wrapper .slider-button-next',
    prevEl: '.header-slider-wrapper .slider-button-prev',
  },
  breakpoints: {
    // when window width is >= 576px
    576: {
      slidesPerView: 2,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 4,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 5,
    },
  },
});

const stepsSlider = new Swiper('.steps-slider-wrapper .steps-slider', {
  speed: 400,
  autoHeight: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.steps-slider-wrapper .steps-button-next',
    prevEl: '.steps-slider-wrapper .steps-button-prev',
  },
  breakpoints: {
    // when window width is >= 576px
    576: {
      slidesPerView: 2,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 4,
    },
  },
});

const swiperBlog = new Swiper(".blog-slider", {
  speed: 400,
  slidesPerView: 1,
  spaceBetween: 30,
  allowTouchMove: true,
  navigation: {
    nextEl: '.blog-button-next',
    prevEl: '.blog-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 30,
    }
  },
});

const modal = document.querySelector(".modal");
const modalDialog = document.querySelector(".modal-dialog");

document.addEventListener("click", (event) => {
  if (
    event.target.dataset.toggle == "modal" ||
    event.target.parentNode.dataset.toggle == "modal" ||
    (!event.composedPath().includes(modalDialog) &&
      modal.classList.contains("is-open"))
  ) {
    event.preventDefault();
    modal.classList.toggle("is-open");
  }
});
document.addEventListener("keyup", (event) => {
  if (event.key == "Escape" && modal.classList.contains("is-open")) {
    modal.classList.toggle("is-open");
  }
});


