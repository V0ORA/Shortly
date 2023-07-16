import { toggleNavigation, closeNavigation } from "./navigation.js";
import { SessionStorageHandler } from "./storage.js";
import { renderLinkResults, handleShortenButtonClick, deleteAllLinks } from "./render.js";
import { copyBtnEvent } from "./copybutton.js";

// DOM Elements
const hamburger = document.querySelector("#hamburger");
const navigation = document.querySelector(".mobileNav");
const linkInput = document.querySelector("#link-input");
const shortenButton = document.querySelector("#generate-btn");
const shortenForm = document.querySelector("#shorten_form");
const results = document.querySelector(".results");
const deleteButtonAll = document.querySelector("#btn_delete");

// Function to initialize the page
function initializePage() {
  // Add event listeners
  hamburger.addEventListener("click", toggleNavigation);
  document.addEventListener("click", closeNavigation);
  document.addEventListener("keydown", closeNavigation);

  // Event listener for shorten button click
  shortenButton.addEventListener("click", handleShortenButtonClick);
  // Even listener for deleting all links
  deleteButtonAll.addEventListener("click", deleteAllLinks);

  // Retrieve links from session storage
  const links = SessionStorageHandler.getItem("links");

  // Render link results if links exist
  if (links) {
    links.forEach(({ original_link, short_link }) => {
      renderLinkResults(original_link, short_link);
    });
    copyBtnEvent();
  }
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", initializePage);

export {
  hamburger,
  navigation,
  linkInput,
  shortenButton,
  shortenForm,
  results,
  deleteButtonAll,
};
