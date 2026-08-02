// const string = document.querySelector("#string");
// const pathElement = document.querySelector("path");

// string.addEventListener("mousemove", (e) => {
//   const path = `M 10 100 Q 500 ${e.offsetY} 990 100`;
//   pathElement.setAttribute("d", path);
// });

var path = "M 10 100 Q 500 100 990 100";
var finalPath = "M 10 100 Q 500 100 990 100";

const string = document.querySelector("#string");

string.addEventListener("mousemove", function (e) {
  path = `M 10 100 Q ${e.x} ${e.y} 990 100`;

  gsap.to("svg path", {
    attr: { d: path },
    duration: 0.2,
    ease: "power2.out",
  });
});

string.addEventListener("mouseleave", function () {
  gsap.to("svg path", {
    attr: { d: finalPath },
    duration: 1.5,
    ease: "elastic.out(1, 0.3)",
  });
});
