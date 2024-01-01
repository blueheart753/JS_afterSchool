// window.addEventListener('load', () => {
//   setTimeout(() => window.scrollTo(0, 0), 100);
// });

const navBar = document.querySelectorAll('.nav_bar > li');
const navMenu = document.querySelector('.menu');
const navMenuList = document.querySelectorAll('.menu > ul > li');

const content = document.querySelectorAll('.content-wrap > ul > li');
const sectionPage = document.querySelectorAll('section');
let sectionPosition;

const moveSection = idx => {
  sectionPosition = sectionPage[idx].offsetTop;
  window.scrollTo({ top: sectionPosition, behavior: 'smooth' });
};

const clickMoveSectionEvent = (el, idx) => {
  el.addEventListener('click', e => {
    e.preventDefault();
    moveSection(idx);
  });
};

content.forEach((el, idx) => {
  clickMoveSectionEvent(el, idx);
});

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
  clickMoveSectionEvent(el, idx);
});

navMenu.addEventListener('mouseover', () => {
  navMenu.classList.add('active');
});

navMenu.addEventListener('mouseout', () => {
  navMenu.classList.remove('active');
});

navMenuList.forEach((el, idx) => {
  clickMoveSectionEvent(el, idx);
});

const subTitle = document.querySelector('.home > .showInterduce > h2');
const headerContent = document.querySelector('.home > .showInterduce>p');
const headerImage = document.querySelector('.photo_wrap');

const io = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    entry.isIntersecting
      ? entry.target.classList.add('show')
      : entry.target.classList.remove('show');
  });
});

document.querySelectorAll('.animate').forEach(el => {
  io.observe(el);
});
