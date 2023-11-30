const sceneItems = document.querySelectorAll(".scene-img");
const steps = document.querySelectorAll(".step");

const visible = (index) => {
  sceneItems.forEach((item, idx) => {
    idx === index ? item.classList.add("visible") : item.classList.remove("visible");
  });
};

const invisible = (index) => {
  sceneItems.forEach((item, idx) => {
    idx === index ? item.classList.remove("visible") : null;
  });
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    const dataIndex = parseInt(entry.target.dataset.index);
    entry.isIntersecting ? visible(dataIndex) : invisible(dataIndex);
  });
});

steps.forEach((el, idx) => {
  observer.observe(el);
  sceneItems[idx].setAttribute("data-index", idx);
  el.setAttribute("data-index", idx);
  sceneItems[idx].style.backgroundImage = `url(./img/intro${idx + 1}.png)`;
});
