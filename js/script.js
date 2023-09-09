// Поиск в header
let headerBtn = document.querySelector(".header__btn");
let headerInput = document.querySelector(".search-form__input");
let headerSearch = document.querySelector(".search-form");

headerBtn.addEventListener("click", function () {
  headerInput.classList.toggle("search-form__input--active");
  headerSearch.classList.toggle("search-form--active");
  headerBtn.classList.toggle("header__btn--active");
});

// подкасты карточки
const btnMore = document.querySelector(".podcasts__btn-more");
const podcastsItems = document.querySelectorAll(".podcasts__item");

btnMore.addEventListener("click", () => {
  podcastsItems.forEach((el) => {
    el.classList.add("podcasts__item--visible");
  });
  btnMore
    .closest(".podcasts__center")
    .classList.add("podcasts__center--hidden");
});

// передачи селект
const element = document.querySelector(".broadcasts__select");
const choices = new Choices(element, {
  searchEnabled: false,
  shouldSort: false,
  itemSelectText: "",
});

// гости аккордион
new Accordion(".accordion-container");

// гости табы

let howBtn = document.querySelectorAll(".tabs-nav__btn");
let howSlider = document.querySelectorAll(".guests__tabs-item");

howBtn.forEach(function (element) {
  element.addEventListener("click", function (e) {
    const path = e.currentTarget.dataset.path;

    howBtn.forEach(function (btn) {
      btn.classList.remove("tabs-nav__btn--active");
    });
    e.currentTarget.classList.add("tabs-nav__btn--active");

    howSlider.forEach(function (element) {
      element.classList.remove("guests__tabs-item--active");
    });
    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("guests__tabs-item--active");
  });
});

// плейлисты сдайдер
const swiper = new Swiper(".playlists-sliger", {
  slidesPerView: 4,
  spaceBetween: 30,
  watchOverflow: true,

  grid: {
    rows: 3,
    fill: "row",
  },

  pagination: {
    el: ".playlists__pagination",
    type: "fraction",
    clickable: true,
  },

  navigation: {
    nextEl: ".playlists__button-next",
    prevEl: ".playlists__button-prev",
  },
});

// слайдер-adv
const swiperAdv = new Swiper(".adv-sliger", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  loop: true,

  autoplay: {
    delay: 5000,
  },
});

// слайдер-about
const swiperAbout = new Swiper(".about-slider", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,

  navigation: {
    nextEl: ".about__button-next",
    prevEl: ".about__button-prev",
  },
});

// валидация форм-about

new JustValidate(".about__form", {
  colorWrong: "#D52B1E",
  messages: {
    name: {
      required: "Ошибка",
      minLength: "Введите 3 и более символов",
      maxLength: "Не более 15 символов",
    },
    email: {
      email: "Введите корреткный email",
      required: "Ошибка",
    },
  },
});
