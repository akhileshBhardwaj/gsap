gsap.from("h1", {
  opacity: 0,
  color: "red",
  duration: 2,
  delay: 1,
  y: 20,
  stagger: 0.3,
  repeat: -1,
});

gsap.to("#box", {
  x: 1200,
  duration: 2,
  delay: 1,
  rotate: 360,
  repeat: -1,
  yoyo: true,
});

//Timeline concept

// gsap.to("#box2", {
//   x: 1300,
//   rotate: 360,
//   duration: 1.5,
//   delay: 1,
// });
// gsap.to("#box3", {
//   x: 1300,
//   rotate: 360,
//   duration: 2.5,
//   delay: 2.5,
// });
// gsap.to("#box4", {
//   x: 1300,
//   rotate: 360,
//   duration: 2.5,
//   delay: 5,
// });

// Using TimeLine concept

var tl = gsap.timeline();
tl.to("#box2", {
  x: 1200,
  rotate: 360,
  duration: 1.5,
  delay: 1,
});

tl.to("#box3", {
  x: 1200,
  rotate: 360,
  duration: 1.5,
  
});
tl.to("#box4", {
  x: 1200,
  rotate: 360,
  duration: 1.5,
  
});
