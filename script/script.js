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
