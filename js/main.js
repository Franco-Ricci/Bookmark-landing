let tabLinks = document.querySelectorAll(".tab__links");

let tabTitle = document.querySelector(".tab__title");
let tabText = document.querySelector(".tab__text");
let tabImg = document.querySelector(".tab__img");

const questions = document.querySelectorAll(".question__container");
const answers = document.querySelectorAll(".answer");
const arrow = document.querySelectorAll(".arrow");

const email = document.querySelector(".input__email");
const send = document.querySelector(".btn__send");
const error = document.querySelector(".error__email");

const menuHamburguer = document.querySelector(".nav__hamburguer");
const nav = document.querySelector(".nav");
const contMobile = document.querySelector(".container__header");
const iconMenu = document.querySelector(".icon-menu");
const contMenu = document.querySelector(".content__menu");
const bloque = document.querySelector(".bloque")

const navLinks = document.querySelectorAll(".nav__links");
const navBtn = document.querySelector(".nav__links--red");
const letter = document.querySelector(".letter");
const circle = document.querySelector(".circle");
const logo = document.querySelector(".logo");
const medias = document.querySelector(".media__mobile");


const info = [
  {
    tabTitle: "Bookmark in one click",
    tabText:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    tabImg: "images/illustration-features-tab-1.svg",
    alt: "Bookmark in one click"
  },
  {
    tabTitle: "Intelligent search",
    tabText:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    tabImg: "images/illustration-features-tab-2.svg",
    alt: "Intelligent search"
  },
  {
    tabTitle: "Share your bookmarks",
    tabText:
      " Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    tabImg: "images/illustration-features-tab-3.svg",
    alt: "Share your bookmarks"
  },
];


for (let i = 0; i < tabLinks.length; i++) {
  tabLinks[i].addEventListener("click", () => {
    for (let j = 0; j < info.length; j++) {
      if (i == j) {
        console.log(tabLinks[j]);
        tabTitle.innerHTML = `${info[j].tabTitle}`;
        tabText.innerHTML = `${info[j].tabText}`;
        tabImg.src = `${info[j].tabImg}`;
        tabImg.alt = `${info[j].alt}`;
        tabLinks[j].classList.add("tab__link--active")
      }else{
        tabLinks[j].classList.remove("tab__link--active")
      }
    }
  });
}


// questions 

for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", () => {
    for (j = 0; j < answers.length; j++) {
      if (i == j) {
        answers[j].classList.toggle("answer-show");
        addStyle();
      }
    }
  });
}

const addStyle = () => {
  arrow[j].classList.toggle("arrow-rotate");
};

send.addEventListener("click", (e) => {
  if (email.value == "") {
    e.preventDefault();
  }
  validate();
});

// email validations

const validate = () => {
  email.addEventListener("keydown", () => {
    let emailRegex =
      /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (emailRegex.test(email.value)) {
      console.log("mail valido");
      email.classList.remove("error-input");
      error.classList.remove("show-error");
    } else {
      console.log("mail no valido");
      email.classList.add("error-input");
      error.classList.add("show-error");
    }
  });
};


//  menu mobile

menuHamburguer.addEventListener("click", () => {
  nav.classList.toggle("nav__mobile");
  bloque.classList.toggle("bloqueagreg")
  contMobile.classList.toggle("container__mobile");
  letter.classList.toggle("fill-hero");
  circle.classList.toggle("fill-circle");
  logo.classList.toggle("fill-logo");
  medias.classList.toggle("media-show");
  document.body.classList.toggle("menu-hidden");
  navLinks.forEach((e) => {
    e.classList.add("menu__links");
  });
  navBtn.classList.toggle("menu__link-button");

  if (iconMenu.getAttribute("data-name") === "menu") {
    iconMenu.setAttribute("src", "images/icon-close.svg");
    iconMenu.setAttribute("data-name", "close");
  } else {
    iconMenu.setAttribute("src", "images/icon-hamburger.svg");
    iconMenu.setAttribute("data-name", "menu");
  }
});
