// import './style.css'
import "./style.scss";
import heroImg from "./assets/hero.png";
import javascriptLogo from "./assets/javascript.svg";
import viteLogo from "./assets/vite.svg";
import { setupCounter } from "./counter.js";

console.log("hello world 2");
$(document).ready(function () {
  $(".faq-elem-head").on("click", function () {
    $(this).closest(".faq-elem-head").next(".faq-elem-body").slideToggle();
    $(this).parents(".faq-elem").toggleClass("active");
  });
  $('#menuStart').on("click", function () {
    $(this).children(".icon").toggle();
    $('.mobile-menu').toggleClass('open')
  });
});
document.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    document.querySelectorAll(".header").forEach(function (el) {
      el.classList.add("header-fixed");
    });
  } else {
    document.querySelectorAll(".header").forEach(function (el) {
      el.classList.remove("header-fixed");
    });
  }
});
function setSidebarHeight() {
  const video = document.getElementById("video2");
  const sidebar = document.getElementById("sidebarWrap");

  if (!video || !sidebar) return;

  if (window.innerWidth >= 993) {
    sidebar.style.height = `${video.offsetHeight}px`;
  } else {
    sidebar.style.height = "";
  }
}

window.addEventListener("load", setSidebarHeight);
window.addEventListener("resize", setSidebarHeight);

const swiperSoc = new Swiper(".swiperSoc", {
  slidesPerView: 3,
  spaceBetween: 20,

  breakpoints: {
    0: {
      slidesPerView: 1.3,
      spaceBetween: 10,
    },
    481: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1366: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
const mainBannerSwiper = new Swiper(".mainBannerSwiper", {
  spaceBetween: 30,
  effect: "fade",
  // autoplay: {
  //   delay: 4000,
  //   disableOnInteraction: false,
  // },

  pagination: {
    el: ".mainBannerPagination",
    clickable: true,
  },
});
// const video = document.getElementById('video');

//                   video.addEventListener('click', () => {
//                     video.innerHTML = `
// <iframe
//   width="560"
//   height="315"
//   src="https://www.youtube.com/embed/AWZI6qebVhw?autoplay=1"
//   title="YouTube video player"
//   frameborder="0"
//   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//   referrerpolicy="strict-origin-when-cross-origin"
//   allowfullscreen>
// </iframe>
//     `;
// const initFaqAccordions = () => {
//   const items = [...document.querySelectorAll("[data-faq-item]")];
//   if (!items.length) return;

//   const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

//   const afterHeightTransition = (panel, callback) => {
//     let complete = false;
//     const done = () => {
//       if (complete) return;
//       complete = true;
//       panel.removeEventListener("transitionend", onTransitionEnd);
//       window.clearTimeout(timeout);
//       callback();
//     };
//     const onTransitionEnd = (event) => {
//       if (event.target === panel && event.propertyName === "height") done();
//     };
//     const timeout = window.setTimeout(done, 420);

//     panel.addEventListener("transitionend", onTransitionEnd);
//   };

//   const setFaqOpen = (item, open, animate = true) => {
//     const toggle = item.querySelector("[data-faq-toggle]");
//     const panel = item.querySelector("[data-faq-panel]");
//     if (!toggle || !panel) return;

//     toggle.setAttribute("aria-expanded", open ? "true" : "false");

//     if (open) {
//       panel.hidden = false;
//       panel.style.height = "0px";
//       panel.style.opacity = "0";
//       item.classList.add("is-open");

//       if (!animate || prefersReducedMotion()) {
//         panel.style.height = "auto";
//         panel.style.opacity = "";
//         return;
//       }

//       window.requestAnimationFrame(() => {
//         panel.style.height = `${panel.scrollHeight}px`;
//         panel.style.opacity = "1";
//         afterHeightTransition(panel, () => {
//           panel.style.height = "auto";
//           panel.style.opacity = "";
//         });
//       });
//       return;
//     }

//     panel.style.height = `${panel.scrollHeight}px`;
//     panel.style.opacity = "1";
//     item.classList.remove("is-open");

//     if (!animate || prefersReducedMotion()) {
//       panel.hidden = true;
//       panel.style.height = "";
//       panel.style.opacity = "";
//       return;
//     }

//     window.requestAnimationFrame(() => {
//       panel.style.height = "0px";
//       panel.style.opacity = "0";
//       afterHeightTransition(panel, () => {
//         panel.hidden = true;
//         panel.style.height = "";
//         panel.style.opacity = "";
//       });
//     });
//   };

//   items.forEach((item) => {
//     const toggle = item.querySelector("[data-faq-toggle]");
//     const panel = item.querySelector("[data-faq-panel]");
//     if (!toggle || !panel) return;

//     setFaqOpen(item, item.classList.contains("is-open"), false);
//     toggle.addEventListener("click", () => setFaqOpen(item, !item.classList.contains("is-open")));
//   });
// };
