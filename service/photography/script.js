'use strict';

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * toggle navbar
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
};

// Add event listener to the toggler to toggle the navbar
navToggler.addEventListener("click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
};

// Add event listener to each navbar link to close the navbar
navbarLinks.forEach(link => {
  link.addEventListener("click", closeNavbar);
});

// Close the navbar if the user clicks outside of it
document.addEventListener("click", function (event) {
  // Check if the click was outside the navbar and toggler
  if (!navbar.contains(event.target) && !navToggler.contains(event.target)) {
    closeNavbar();
  }
});


/**
 * header active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

//------------------ WELCOME-----------------------------------------
    // Fade-in effect
    window.addEventListener("scroll", function () {
      const element = document.querySelector(".fade-in");
      const position = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      
      if (position < screenPosition) {
          element.classList.add("active");
      }
  });



// ABOUT SECTION

 // Fade-in transition for the image when scrolling to the section
 document.addEventListener("DOMContentLoaded", function() {
  const imageContainer = document.querySelector(".image-container");
  window.addEventListener("scroll", function() {
      const section = document.getElementById("about-section");
      const sectionPosition = section.getBoundingClientRect().top;
      const screenPosition = window.innerHeight;
      if (sectionPosition < screenPosition) {
          imageContainer.classList.add("fade-in");
      }
  });
});

// WHO WE ARE

document.addEventListener("DOMContentLoaded", function () {
  const fadeInElements = document.querySelectorAll(".fade-in-left");

  const observer = new IntersectionObserver(
      (entries, observer) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  entry.target.style.opacity = "1";
                  entry.target.style.transform = "translateX(0)";
                  observer.unobserve(entry.target); // Stop observing once effect is applied
              }
          });
      },
      { threshold: 0.1 }
  );

  fadeInElements.forEach((el) => observer.observe(el));
});



// -----------------WHAT WE DO

// Fade-in transition for the image when scrolling to the section
document.addEventListener("DOMContentLoaded", function() {
  const imageContainer = document.querySelector(".what-we-do-image-container");
  window.addEventListener("scroll", function() {
      const section = document.getElementById("what-we-do-section");
      const sectionPosition = section.getBoundingClientRect().top;
      const screenPosition = window.innerHeight;
      if (sectionPosition < screenPosition) {
          imageContainer.classList.add("fade-in");
      }
  });
});


// Intersection Observer for fade-in effect
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          entry.target.classList.add('visible');
      }
  });
});
observer.observe(document.getElementById('venue-section'));


document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

document.addEventListener('selectstart', function(e) {
  e.preventDefault();
});

document.addEventListener('copy', function(e) {
  e.preventDefault();
});

document.addEventListener('cut', function(e) {
  e.preventDefault();
});

document.addEventListener('paste', function(e) {
  e.preventDefault();
});

document.addEventListener('keydown', function(e) {
  if (e.ctrlKey && (e.key === 'c' || e.key === 'x' || e.key === 'v')) {
    e.preventDefault();
  }
});





  
