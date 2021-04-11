let btnToggle = document.querySelector(".button-toggle");
let nav = document.querySelector("nav");

let show = false;
btnToggle.addEventListener("click", () => {
  if (!show) {
    btnToggle.src = "images/icon-close-menu.svg";
    nav.style.maxHeight = "400px";
    show = true;
  } else {
    btnToggle.src = "images/icon-hamburger.svg";
    nav.style.maxHeight = "0";
    show = false;
  }
});

let bookToggle = document.querySelector("#bookmark-toggle");
let bookmarkTriggers = document.querySelectorAll("[data-toggle=bookmark]");

bookmarkTriggers.forEach((bookmark) => {
  bookmark.addEventListener("click", () => {
    if (bookToggle.textContent == "Bookmark") {
      bookToggle.textContent = "Bookmarked";
    } else {
      bookToggle.textContent = "Bookmark";
    }
  });
});

// modal support

let supportTriggers = document.querySelectorAll("[data-toggle=modal-support]");
let modalSupport = document.querySelector("#modal-support");

supportTriggers.forEach((support) => {
  support.addEventListener("click", () => {
    modalSupport.classList.toggle("flex");
  });
});

// main modal

let modalTriggers = document.querySelectorAll(".modal-trigger");
let modalMain = document.querySelector("#modal-container");

modalTriggers.forEach((modal) => {
  modal.addEventListener("click", () => {
    modalMain.classList.toggle("show");
  });
});

// border
let borderChange = document.querySelectorAll(".modal-box");

document.querySelectorAll("input[type=radio]").forEach((radio) => {
  radio.addEventListener("click", () => {
    borderChange.forEach((border) => {
      if (border.querySelector("input[type=radio]").checked) {
        border.style.borderColor = "hsl(176, 50%, 47%)";
      } else {
        border.style.borderColor = "hsl(0, 0%, 93%)";
      }
    });
  });
});

document.querySelectorAll("a").forEach((e) => {
  e.addEventListener("click", function (event) {
    event.preventDefault();
  });
});
