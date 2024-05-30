"use strict";

const header = document.querySelector("header");
const nav = document.querySelector(".nav");
const servieSection = document.querySelector("#service");
const allServices = document.querySelectorAll(".services");
const clientOne = document.querySelector(".client__1");
const clientTwo = document.querySelector(".client__2");
const clientThree = document.querySelector(".client__3");
const clientsMessages = document.querySelectorAll(".client__message");
const client = document.querySelector(".client");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

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

// Testimonial Section
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

// const aboutPartner = document.querySelector(".about__partners");

// const message = [];
// switch (message) {
//   case `<p>
//   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
// </p>
// <h3>
//   Mohanad Eaton
// </h3>
// <span>co-founder</span>`:
//     break;
//   case `<p>
//   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
// </p>
// <h3>
//   Aarman Cox
// </h3>
// <span>co-founder</span>`:
//     break;
// }

// partners section
const partnerContent = document.getElementById("partner-content");
const prevBtn = document.querySelector(".prev__btn");
const nextBtn = document.querySelector(".next__btn");

const messages = [
  `<p class="about-partner">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </p>
    <h3>
      Mohanad Eaton
    </h3>
    <span>co-founder</span>`,
  `<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, placeat eos? Enim nam saepe ullam, quam, exercitationem quidem et quis suscipit doloribus tenetur ea voluptate veritatis cumque, fugiat similique est!
  Eaque provident eos dolore distinctio perferendis unde nisi nostrum ad vitae, cupiditate facilis repudiandae aperiam placeat officia eius? Aspernatur, suscipit laborum iste vitae nostrum eius ut enim id eligendi voluptatum!
    </p>
    <h3>
      Aarman Cox
    </h3>
    <span>co-founder</span>`,
];

let currentPartnerIndex = 0;

function updateContent() {
  partnerContent.innerHTML = messages[currentPartnerIndex];
}

function toggleActiveButton() {
  prevBtn.classList.remove("btn__active");
  nextBtn.classList.remove("btn__active");

  if (currentIndex === 0) {
    prevBtn.classList.add("btn__active");
  } else {
    nextBtn.classList.add("btn__active");
  }
}

prevBtn.addEventListener("click", () => {
  currentPartnerIndex =
    currentPartnerIndex === 0 ? messages.length - 1 : currentPartnerIndex - 1;
  updateContent();
});

nextBtn.addEventListener("click", () => {
  currentPartnerIndex =
    currentPartnerIndex === messages.length - 1 ? 0 : currentPartnerIndex + 1;
  nextBtn.classList.add("btn__active");
  updateContent();
});

// Initialize with the first content
updateContent();

// Reveal sections
const allSections = document.querySelectorAll(".section");

const revelSection = function (entries, observe) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observe.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revelSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});
