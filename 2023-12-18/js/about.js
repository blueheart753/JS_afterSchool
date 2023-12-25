const subTitle = document.querySelector('header > h2');

window.addEventListener('load', () => {
  subTitle.classList.add('active');
});

const backBtn = document.querySelector('.back');

backBtn.addEventListener('click', () => {
  backBtn.classList.add('active');
  backBtn.parentElement.classList.add('active');
  setTimeout(() => {
    location.href = '../index.html';
  }, 400);
});
