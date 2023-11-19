const card = document.querySelectorAll(".card");

window.addEventListener("load", () => {
  card.forEach((el) => {
    el.classList.add("active");
  });
});

const card_inner = document.querySelectorAll(".card_inner");

card_inner.forEach((el) => {
  el.addEventListener("click", () => {
    el.classList.toggle("card_flip");
  });
});
