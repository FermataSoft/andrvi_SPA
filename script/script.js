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
// gsap.to(".pContent", {
//   yPercent: 0,
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".pSection",
//     // start: "top bottom", // the default values
//     // end: "bottom top",
//     scrub: true,
//   },
// });

gsap.to(".pImage", {
  yPercent: 15,
  ease: "none",
  scrollTrigger: {
    trigger: ".pSection",
    start: "top center", // the default values
    end: "bottom top",
    scrub: 0.5,
    markers: false,
  },
});

// Title on load




// Loading page according to local storage language
// window.onload = function() {
//   lang = localStorage.getItem('lang');
//   if(lang === 'ru') {

//   } else {

//   }
// }