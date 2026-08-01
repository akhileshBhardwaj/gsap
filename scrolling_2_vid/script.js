// gsap.from("#page1 #box", {
//   scale: 0,
//   delay: 1,
//   duration: 2,
//   rotate: 360,
//   scrollTrigger:{
//     trigger:"#page1 #box",
//     scrub:2,
//   }
// });

// gsap.from("#page2 #box", {
//   scale: 0,
//   delay: 1,
//   duration: 2,
//   rotate: 360,
//   // Scroll maintan
//   //scrollTrigger: "#page2 #box",
//   scrollTrigger:{
//     trigger:"#page2 #box",
//     scroller:"body",
//     start:"top 60%"
//   }
// });

// gsap.from("#page2 h2",{
//   opacity:0,
//   duration:2,
//   x:-500,
//   scrollTrigger:{
//     trigger:"#page2 h1",
//     scroll: "body",
//     markers: true,
//     start: "top 50%",
//     scrub:2,
//   }
// })
// gsap.from("#page3 #box",{
//   scale:0,
//   opacity:0,
//   borderRadius:"100%",
//   duration:2,
//   scrollTrigger:{
//     trigger:"#page3 #box",
//     scrub:2,

//   }
// })

// GSAP se h1 ko horizontal direction me animate kar rahe hain
gsap.to("#page2 h1", {
  // Element ko left side me uski width ke 150% tak move karega
  // translateX(-150%) = Left direction me movement
  xPercent: -150,

  // ScrollTrigger animation ko scroll ke saath control karta hai
  scrollTrigger: {
    // Jis section par animation start hogi
    trigger: "#page2",

    // Scroll container (default body hai)
    scroller: "body",

    // Development ke time start/end points dekhne ke liye
    // Production me isse false ya remove kar dena
    markers: true,

    // Jab page2 ka top viewport ke top ko touch karega
    // tab animation start hogi
    start: "top top",

    // Page2 viewport se 100% upar chala jayega tab animation complete hogi
    end: "top -100%",

    // Scroll aur animation ko synchronize karta hai
    // Value jitni badi hogi animation utni smooth lagegi
    scrub: 2,

    // Animation ke dauran section ko screen par fix rakhta hai
    // Jab tak animation complete nahi hoti tab tak section pinned rahega
    pin: true,

    // ScrollTrigger ko better performance ke liye refresh karne me help karta hai
    invalidateOnRefresh: true,
  },
});
