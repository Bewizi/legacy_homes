"use strict";

const header = document.querySelector("header");
const nav = document.querySelector(".nav");
const servieSection = document.querySelector("#service");

// Sticky Header
const stickyHeader = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyHeader, {
  root: null,
  threshold: 0,
});
headerObserver.observe(header);
