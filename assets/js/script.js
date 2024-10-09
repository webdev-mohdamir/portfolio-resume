/**
 * @fileoverview Script for the personal website.
 * @author Mohd Amir <webdev.mohdamir@gmail.com>
 * @version 1.0.0
 * @since 2024-12-27
 * @description This script is responsible for the sidebar, modal, custom select, filter, contact form, and page navigation functionality of the website.
 */

// sidebar variables
/**
 * Sidebar element
 * @type {HTMLElement}
 */
const sidebar = document.querySelector("[data-sidebar]");

/**
 * Sidebar button element
 * @type {HTMLElement}
 */
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", () => sidebar.classList.toggle("active"));

// testimonials variables
/**
 * Testimonials item collection
 * @type {NodeList}
 */
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");

/**
 * Modal container element
 * @type {HTMLElement}
 */
const modalContainer = document.querySelector("[data-modal-container]");

/**
 * Modal close button element
 * @type {HTMLElement}
 */
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");

/**
 * Overlay element
 * @type {HTMLElement}
 */
const overlay = document.querySelector("[data-overlay]");

// modal variable
/**
 * Modal image element
 * @type {HTMLImageElement}
 */
const modalImg = document.querySelector("[data-modal-img]");

/**
 * Modal title element
 * @type {HTMLElement}
 */
const modalTitle = document.querySelector("[data-modal-title]");

/**
 * Modal text element
 * @type {HTMLElement}
 */
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
/**
 * Toggle modal function
 * @function
 */
const toggleModal = () => {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

// add click event to all modal items
testimonialsItem.forEach((el) => {
  el.addEventListener("click", () => {
    modalImg.src = el.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = el.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = el.querySelector(
      "[data-testimonials-title]"
    ).innerHTML;
    modalText.innerHTML = el.querySelector(
      "[data-testimonials-text]"
    ).innerHTML;

    toggleModal();
  });
});

// add click event to modal close button
modalCloseBtn.addEventListener("click", toggleModal);
overlay.addEventListener("click", toggleModal);

// custom select variables
/**
 * Select element
 * @type {HTMLElement}
 */
const select = document.querySelector("[data-select]");

/**
 * Select items collection
 * @type {NodeList}
 */
const selectItems = document.querySelectorAll("[data-select-item]");

/**
 * Select value element
 * @type {HTMLElement}
 */
const selectValue = document.querySelector("[data-selecct-value]");

/**
 * Filter button collection
 * @type {NodeList}
 */
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", () => select.classList.toggle("active"));

// add event in all select items
selectItems.forEach((el) => {
  el.addEventListener("click", () => {
    const selectedValue = el.innerText.toLowerCase();
    selectValue.innerText = el.innerText;
    select.classList.remove("active");
    filterFunc(selectedValue);
  });
});

// filter variables
/**
 * Filter items collection
 * @type {NodeList}
 */
const filterItems = document.querySelectorAll("[data-filter-item]");

/**
 * Filter function
 * @function
 */
const filterFunc = (selectedValue) => {
  filterItems.forEach((el) => {
    if (selectedValue === "all") {
      el.classList.add("active");
    } else if (selectedValue === el.dataset.category) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

filterBtn.forEach((el) => {
  el.addEventListener("click", () => {
    const selectedValue = el.innerText.toLowerCase();
    selectValue.innerText = el.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    el.classList.add("active");
    lastClickedBtn = el;
  });
});

// contact form variables
/**
 * Contact form element
 * @type {HTMLFormElement}
 */
const form = document.querySelector("[data-form]");

/**
 * Contact form input collection
 * @type {NodeList}
 */
const formInputs = document.querySelectorAll("[data-form-input]");

/**
 * Contact form button element
 * @type {HTMLElement}
 */
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
formInputs.forEach((el) => {
  el.addEventListener("input", () => {
    form.checkValidity()
      ? formBtn.removeAttribute("disabled")
      : formBtn.setAttribute("disabled", "");
  });
});

// page navigation variables
/**
 * Navigation links collection
 * @type {NodeList}
 */
const navigationLinks = document.querySelectorAll("[data-nav-link]");

/**
 * Pages collection
 * @type {NodeList}
 */
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
navigationLinks.forEach((el) => {
  el.addEventListener("click", () => {
    pages.forEach((page) => {
      if (el.innerHTML.toLowerCase() === page.dataset.page) {
        page.classList.add("active");
        el.classList.add("active");
        window.scrollTo(0, 0);
      } else {
        page.classList.remove("active");
        el.classList.remove("active");
      }
    });
  });
});
