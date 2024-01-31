function locoAni() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    lerp:0.02
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}
locoAni();

function cursorEffect() {
  var page1Contnt = document.querySelector(".page1-content");
  var cursor = document.querySelector(".cursor");

  page1Contnt.addEventListener("mousemove", function (info) {
    // cursor.style.left = info.x+"px";
    // cursor.style.top = info.y+"px";
    gsap.to(cursor, {
      x: info.x,
      y: info.y,
    });
  });
  page1Contnt.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
    });
  });
  page1Contnt.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0,
    });
  });
}
cursorEffect();

function page2Animation1() {
  gsap.from(".elem h2,.bar,.elem  h1", {
    y: 120,
    stagger: 0.1,
    duration: 1,
    scrollTrigger: {
      trigger: "#page2",
      scroller: "#main",
      start: "top 30%",
      end: "top 31%",
      // markers:true,
      scrub: 2,
    },
  });
}
page2Animation1();

function page3Animation1() {
  gsap.from(".page3-top h4,.page3-top h2", {
    y: 120,
    stagger: 0.1,
    duration: 1,
    scrollTrigger: {
      trigger: "#page3",
      scroller: "#main",
      start: "top 40%",
      end: "top 41%",
      // markers:true,
      scrub: 2,
    },
  });
}
page3Animation1();

function page4Animation() {
  gsap.from(".elem1 h2, .bar2,#page4 h1", {
    y: 120,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
      trigger: "#page4",
      scroller: "#main",
      start: "top 30%",
      end: "top 31%",
      // markers:true,
      scrub: 2,
    },
  });
}
page4Animation();

function page6Animation() {
  gsap.from("#page6 h2, .bar3,#page6 h1", {
    y: 120,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
      trigger: "#page6",
      scroller: "#main",
      start: "top 30%",
      end: "top 31%",
      // markers:true,
      scrub: 2,
    },
  });
}
page6Animation();

function page8Animation1() {
  gsap.from(".page8-top h4,.page8-top h2", {
    y: 120,
    stagger: 0.1,
    duration: 1,
    scrollTrigger: {
      trigger: "#page8",
      scroller: "#main",
      start: "top 55%",
      end: "top 56%",
      // markers:true,
      scrub: 2,
    },
  });
}
page8Animation1();

function moveing() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,

    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
}
moveing();

function timelineAni() {
  var tl = gsap.timeline();

  tl.from("#loder h3", {
    x: 40,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
  });
  tl.to("#loder h3", {
    opacity: 0,
    x: -30,
    duration: 1,
    stagger: 0.1,
  });
  tl.to("#loder", {
    opacity: 0,
    display: "none",
  });

  tl.from(".page1-content span", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    // delay:-0.2,
  });
}
timelineAni();

function cEffect() {
  var p5Content = document.querySelector(".p5-content");
  var c2 = document.querySelector(".cursor2");

  p5Content.addEventListener("mousemove", function (info2) {
    gsap.to(c2, {
      x: info2.x,
      y: info2.y,
    });
  });

  p5Content.addEventListener("mouseenter", function () {
      gsap.to(c2, {
          scale: 1,
          opacity: 1,
      });
  });

  p5Content.addEventListener("mouseleave", function () {
      gsap.to(c2, {
          scale: 0,
          opacity: 0,
      });
  });
}
cEffect();

function footerAni() {
  gsap.from(".p9-top,.d1", {
    y: -120,
    stagger: 0.1,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
      trigger: "#page9",
      scroller: "#main",
      start: "top 65%",
      end: "top 68%",
      // markers:true,
      scrub: 2,
    },
  });

  gsap.from(".d2 span", {
    y: -150,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    // delay:-0.2,
    scrollTrigger: {
      trigger: "#page9",
      scroller: "#main",
      start: "top 35%",
      end: "top 28%",
      // markers:true,
      scrub: 2,
    },
  });
}
footerAni();

window.addEventListener("load", function () {
  checkScreenSize(); // Check on page load
  window.addEventListener("resize", checkScreenSize); // Check on window resize

  function checkScreenSize() {
    if (window.innerWidth < 767) {
      alert("Please Rotate Your Screen For a Better Experience.");
    }
  }
});
