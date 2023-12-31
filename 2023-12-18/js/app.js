const navBar = document.querySelectorAll(".nav_bar > li");
const navMenu = document.querySelector(".menu");
const navMenuList = document.querySelectorAll(".menu > ul > li");

navBar.forEach((el, idx) => {
  el.addEventListener("mouseover", () => {
    navMenu.classList.add("active");

    if (navMenuList[idx]) {
      navMenuList[idx].classList.add("hovered");
    }
  });

  el.addEventListener("mouseout", () => {
    navMenu.classList.remove("active");
    if (navMenuList[idx]) {
      navMenuList[idx].classList.remove("hovered");
    }
  });
});

navMenu.addEventListener("mouseover", () => {
  navMenu.classList.add("active");
});

navMenu.addEventListener("mouseout", () => {
  navMenu.classList.remove("active");
});

const content = document.querySelectorAll(".content-wrap > ul > li");

content.forEach((el, idx) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    switch (idx) {
      case 0:
        break;

      case 1:
        location.href = "./view/About.html";
        break;

      case 2:
        location.href = "./view/Skills.html";
        break;

      case 3:
        location.href = "./view/Portfolio.html";
        break;

      default:
        location.href = "./view/Portfolio.html";
        break;
    }
  });
});

const subTitle = document.querySelector(".home > .showInterduce > h2");
const headerContent = document.querySelector(".home > .showInterduce>p");
const headerImage = document.querySelector(".photo_wrap");

window.addEventListener("load", () => {
  subTitle.classList.add("active");
  headerContent.classList.add("startDoc");
  headerImage.classList.add("startDoc");
});
