"use strict";

const header = document.querySelector("header");
const nav = document.querySelector(".nav");
const servieSection = document.querySelector("#service");
const allServices = document.querySelectorAll(".services");

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
