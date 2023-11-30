const sceneItems = document.querySelectorAll(".scene-img");
const steps = document.querySelectorAll(".step");
let ioIndex;

function visible(index) {
  sceneItems.forEach((item, idx) => {
    idx === index ? item.classList.add("visible") : item.classList.remove("visible");
  });
}

sceneItems.forEach((el, idx) => {
  el.style.backgroundImage = `url(./img/intro${idx + 1}.png)`;
});

function inactivate(index) {
  sceneItems.forEach((item, idx) => {
    if (idx === index) {
      item.classList.remove("visible");
    }
  });
}

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    const dataIndex = entry.target.dataset.index * 1;
    entry.isIntersecting ? visible(dataIndex) : inactivate(dataIndex);
  });
});

steps.forEach((el, idx) => {
  observer.observe(el);
  el.dataset.index = idx;
  sceneItems[idx].dataset.index = idx;
  el.setAttribute("data-index", idx);
});
