(() => {
  const btn = document.querySelector(".menu_btn");
  const nav = document.querySelector(".navbar");

  let flag = true;

  const menu_toggle = () => {
    if (flag) {
      gsap.to(topLine, {
        rotation: -45,
        top: 35,
        duration: 0.3,
      });
      gsap.to(middleLine, {
        transformOrigin: "left",
        scaleX: 0,
        duration: 0.2,
      });
      gsap.to(bottomLine, {
        rotation: 45,
        top: 35,
        duration: 0.3,
      });
      flag = false;
    } else {
      gsap.to(topLine, {
        rotation: 0,
        top: "25px",
        duration: 0.3,
      });
      gsap.to(middleLine, {
        top: "35px",

        scaleX: 1,
        duration: 0.2,
      });
      gsap.to(bottomLine, {
        rotation: 0,
        top: "45px",
        duration: 0.3,
      });
      flag = true;
    }
  };

  btn.addEventListener("click", (e) => {
    menu_toggle();
    const menuHeight = nav.firstElementChild.offsetHeight;
    nav.classList.toggle("active");

    nav.classList.contains("active") ? (nav.style.height = `${menuHeight}px`) : (nav.style.height = `0px`);
  });
})();

const menuItemBtn = document.querySelectorAll(".menu_item");
const sectionPage = document.querySelectorAll("section");
let sectionPosition;
let sectionHeight;

const moveSections = (idx) => {
  sectionPosition = sectionPage[idx].offsetTop;
  sectionHeight = document.querySelector(".header").offsetHeight;
  scrollTo({ top: sectionPosition - sectionHeight, behavior: "smooth" });
};

menuItemBtn.forEach((el, idx) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    moveSections(idx + 1);
  });
});

const logo = document.querySelector(".logo");

logo.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
