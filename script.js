function test_maxLength(element, symbolsCount) {
  let str = "";
  for (let i = 0; i < symbolsCount; i++) {
    str += randomSymbol();
  }
  element.innerHTML = str;
}

function randomSymbol() {
  return String.fromCharCode(randomInteger(91, 122));
}

function randomInteger(min, max) {
  let rand = min + Math.random() * (max - min);
  return Math.round(rand);
}

// test_maxLength(document.querySelector("textarea"), 500);

// Parallax
gsap.to(".pContent", {
  yPercent: -5,
  ease: "none",
  scrollTrigger: {
    trigger: ".pSection",
    // start: "top bottom", // the default values
    // end: "bottom top",
    scrub: true,
  }, 
});

gsap.to(".pImage", {
  yPercent: 30,
  ease: "none",
  scrollTrigger: {
    trigger: ".pSection",
    // start: "top bottom", // the default values
    end: "bottom top",
    scrub: true
  }, 
});
