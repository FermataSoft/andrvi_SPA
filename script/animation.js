function animate__title() {
  gsap.from("#hero__title", {
    duration: 0.7,
    opacity: 0,
    y: 70,
    delay: 2,
  });

  gsap.from("#hero__subtitle", {
    duration: 0.5,
    opacity: 0,
    y: 50,
    delay: 3,
  });
}

window.addEventListener("load", animate__title())