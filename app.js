const faqContainer = document.querySelector(".faq");
const headingContainer = document.querySelectorAll(".para__heading");
const arrowContainer = document.querySelectorAll(".arrow");
const answerContainer = document.querySelectorAll(".answer");
let currentNumber = -1;

faqContainer.addEventListener("click", function (e) {
  const element = e.target.closest(".faq__question");
  if (!element) return;
  const target = element.dataset.box;
  const answer = this.querySelector(`.answer--${target}`);
  const arrow = element.querySelector(`.arrow--${target}`);
  //Remove all
  if (currentNumber !== target) {
    headingContainer.forEach(function (heading) {
      heading.classList.remove("active");
    });
    arrowContainer.forEach(function (a) {
      a.classList.remove("arrow-active");
    });

    answerContainer.forEach(function (a) {
      a.style.maxHeight = null;
    });
  }

  //Add new
  element.querySelector("p").classList.toggle("active");

  arrow.classList.toggle("arrow-active");
  answer.style.maxHeight
    ? (answer.style.maxHeight = null)
    : (answer.style.maxHeight = answer.scrollHeight + "px");
  currentNumber = target;
});
