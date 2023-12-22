const navBar = document.querySelectorAll('.nav_bar > li');
const navMenu = document.querySelector('.menu');
const navMenuList = document.querySelectorAll('.menu > ul > li');

navBar.forEach((el, idx) => {
  el.addEventListener('mouseover', () => {
    navMenu.classList.add('active');

    if (navMenuList[idx]) {
      navMenuList[idx].classList.add('hovered');
    }
  });

  el.addEventListener('mouseout', () => {
    navMenu.classList.remove('active');
    if (navMenuList[idx]) {
      navMenuList[idx].classList.remove('hovered');
    }
  });
});

navMenu.addEventListener('mouseover', () => {
  navMenu.classList.add('active');
});

navMenu.addEventListener('mouseout', () => {
  navMenu.classList.remove('active');
});
