const inViewport = (entries, observer) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("animate-fadein", entry.isIntersecting);
    if (entry.isIntersecting) observer.unobserve(entry.target);
  });
};

const observer = new IntersectionObserver(inViewport);

const animateElements = document.querySelectorAll(".select-animate");
animateElements.forEach((e) => {
  observer.observe(e);
});

document.querySelector("#title-right img").classList.toggle("animate-slidein");

console.log(animateElements);
