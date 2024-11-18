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

document.addEventListener("DOMContentLoaded", function () {
  const welcomeContent = document.querySelector(".welcome-content");
  // Add the fade-in-up class to trigger the animation
  welcomeContent.classList.add("fade-in-up");
});


// ABOUT SECTION

document.addEventListener("DOMContentLoaded", function () {
  const eventSection = document.querySelector(".event-section");
  // Add the "visible" class to trigger the transition effect
  eventSection.classList.add("visible");
});


// SERVICE SECTION

document.addEventListener("DOMContentLoaded", function() {
  const serviceItems = document.querySelectorAll(".service-item");

  function handleScroll() {
      const section = document.querySelector(".services-section");
      const sectionPosition = section.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (sectionPosition < screenPosition) {
          serviceItems.forEach((item, index) => {
              if (Math.floor(index / 4) % 2 === 0) {
                  item.classList.add("fade-in-left");
              } else {
                  item.classList.add("fade-in-right");
              }
          });
          window.removeEventListener("scroll", handleScroll); // Trigger only once
      }
  }

  window.addEventListener("scroll", handleScroll);
});


 // Add zoom-in effect when the section is in view
 const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add("zoom-in");
      }
  });
});
observer.observe(document.querySelector(".gallery"));

 // Check if observer exists and define if not
 if (!window.fadeInObserver) {
  window.fadeInObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              // Unobserve the element after it has become visible to avoid re-triggering
              fadeInObserver.unobserve(entry.target);
          }
      });
  });
}


//------------------------------------ TESTIMONIAL

let currentIndex = 0;
let visibleCards = 3; // Default visible cards for large screens
const experts = document.querySelector('.experts');
const totalCards = document.querySelectorAll('.expert-card').length;
const dotsContainer = document.querySelector('.carousel-dots');

// Adjust number of visible cards based on screen width
function updateVisibleCards() {
    const screenWidth = window.innerWidth;
    if (screenWidth > 992) {
        visibleCards = 3;
    } else if (screenWidth > 768) {
        visibleCards = 2;
    } else {
        visibleCards = 1;
    }

    createDots();
    updateSlidePosition();
}

// Create dots for navigation
function createDots() {
    dotsContainer.innerHTML = '';
    const totalSlides = Math.ceil(totalCards / visibleCards);
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (i === currentIndex) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }
}

// Update slide position based on the current index
function updateSlidePosition() {
    const offset = -currentIndex * (100 / visibleCards);
    experts.style.transform = `translateX(${offset}%)`;

    // Update active dot
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

// Go to a specific slide
function goToSlide(index) {
    currentIndex = index;
    updateSlidePosition();
}

// Auto-carousel effect
function nextSlide() {
    const totalSlides = Math.ceil(totalCards / visibleCards);
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlidePosition();
}

// Initialize auto-slide every 3 seconds
setInterval(nextSlide, 3000);

// Update visible cards and create dots on load and resize
window.addEventListener('resize', updateVisibleCards);
window.addEventListener('load', updateVisibleCards);



// WHY CHOOSE US

document.addEventListener("DOMContentLoaded", function() {
  const features = document.querySelectorAll(".fade-in-zoom");
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("animate");
              observer.unobserve(entry.target);
          }
      });
  }, { threshold: 0.5 });

  features.forEach(feature => {
      observer.observe(feature);
  });
});


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













  
