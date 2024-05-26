"use strict";

const header = document.querySelector("header");
const nav = document.querySelector(".nav");
const servieSection = document.querySelector("#service");
const allServices = document.querySelectorAll(".services");
const clientOne = document.querySelector(".client__1");
const clientTwo = document.querySelector(".client__2");
const clientThree = document.querySelector(".client__3");

// Sticky Header
const stickyHeader = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyHeader, {
  root: null,
  threshold: 0,
});
headerObserver.observe(header);

// Services active
const Services = document.querySelector(".services-rended");
Services.addEventListener("click", function (e) {
  const serviceClicked = e.target.closest(".service-btn");

  if (!serviceClicked) return;

  allServices.forEach((el) => {
    el.classList.remove("active");
  });
  serviceClicked.classList.add("active");
});

// Testimonial
const clientsMessages = document.querySelectorAll(".client__message");
const arrow = document.querySelector(".arrow");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

let currentIndex = 1;

function updateClientDisplay(index) {
  clientsMessages.forEach((clientsMessage, i) => {
    if (i === index) {
      clientsMessage.classList.add("active");
      clientsMessage.classList.remove("blur");
    } else {
      clientsMessage.classList.remove("active");
      clientsMessage.classList.add("blur");
    }
  });
}

leftArrow.addEventListener("click", function () {
  currentIndex =
    (currentIndex - 1 + clientsMessages.length) % clientsMessages.length;
  updateClientDisplay(currentIndex);
});

rightArrow.addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % clientsMessages.length;
  updateClientDisplay(currentIndex);
});

// Initial display setup
updateClientDisplay(currentIndex);

// Click event for individual client images
clientsMessages.forEach((clientsMessage, index) => {
  const image = clientsMessage.querySelector(".client_image");
  image.addEventListener("click", function () {
    currentIndex = index;
    updateClientDisplay(currentIndex);
  });
});

// clientsMessages.forEach((clientsMessage) => {
//   const image = clientsMessage.querySelector(".client_image");
//   image.addEventListener("click", function () {
//     clientsMessages.forEach((c) => {
//       c.classList.remove("active");
//       c.classList.remove("blur");
//     });

//     clientsMessage.classList.add("active");
//     clientsMessages.forEach((c) => {
//       if (c !== clientsMessage) {
//         c.classList.add("blur");
//       }
//     });
//   });
//   clientOne.classList.add("blur");
//   clientTwo.classList.add("active");
//   clientThree.classList.add("blur");
// });
