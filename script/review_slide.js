var slide_rv_index = 1;
function plus_rv(n) {
  show_rv_content((slide_rv_index += n));
}
function current_rv(n) {
  show_rv_content((slide_rv_index = n));
}
function show_rv_content(n) {
  let i;
  // const
}
function initSlider(containerSelector, itemSelector, dotSelector, btnLeftSelector, btnRightSelector) {
  const container = document.querySelector(containerSelector);
  const items = document.querySelectorAll(itemSelector);
  const dots = document.querySelectorAll(dotSelector);
  const btnLeft = document.querySelector(btnLeftSelector);
  const btnRight = document.querySelector(btnRightSelector);

  if (!container || items.length === 0 || dots.length === 0 || !btnLeft || !btnRight) return;

  let currentIndex = 0;
  let itemWidth = items[0].clientWidth;
  let resizeTimeout; // Debounce timer
  let isTransitioning = false; // Cờ kiểm tra đang slide

  function slide(index) {
    index = Math.max(0, Math.min(index, items.length - 1));

    // update dots
    dots.forEach((d) => d.classList.remove("dot--active"));
    dots[index]?.classList.add("dot--active");

    const offset = -index * itemWidth;
    container.style.willChange = "transform";
    container.style.transform = `translateX(${offset}px)`;
    container.style.transition = "transform 0.3s ease";

    currentIndex = index;
    isTransitioning = true;
    setTimeout(() => {
      isTransitioning = false;
      container.style.willChange = "auto"; // Reset
    }, 300);
  }
  function slideNext() {
    slide(currentIndex + 1);
  }
  function slidePrev() {
    slide(currentIndex - 1);
  }
  btnRight.addEventListener("click", slideNext, { passive: true });
  btnLeft.addEventListener("click", slidePrev, { passive: true });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => slide(index), { passive: true });
  });
}
export function initRvSlider() {
  document.addEventListener("DOMContentLoaded", () => {
    // review slider
    initSlider(".review__list", ".review-item", ".review__dot", ".review__slide--left", ".review__slide--right");
  });
}
