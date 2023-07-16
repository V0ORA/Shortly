import { linkInput, shortenForm, results, deleteButtonAll } from "./index.js";
import { SessionStorageHandler } from "./storage.js";
import { copyBtnEvent } from "./copybutton.js";

// Render link results
export function renderLinkResults(originalLink, shortLink) {
  const html = `
    <div class="url__results">
      <div class="url__old">${originalLink}</div>
      <div class="url__new">
        <p>
          <a class="shorten_url" href="${shortLink}" target="_blank">${shortLink}</a>
        </p>
        <button class="btn btn_copy">Copy</button>
      </div>
    </div>  
  `;
  deleteButtonAll.style.display = "flex";
  results.insertAdjacentHTML("afterbegin", html);
}

// Handle shorten button click
export async function handleShortenButtonClick(event) {
  event.preventDefault();

  const apiURL = `https://api.shrtco.de/v2/shorten?url=${linkInput.value}`;

  try {
    const response = await fetch(apiURL);
    const data = await response.json();

    if (data.ok) {
      const { original_link, short_link } = data.result;

      // Store link in session storage
      const links = SessionStorageHandler.getItem("links") || [];
      links.push({ original_link, short_link });
      SessionStorageHandler.setItem("links", links);

      // Render link results
      renderLinkResults(original_link, short_link);

      copyBtnEvent();
    } else {
      shortenForm.classList.add("empty");
      setTimeout(() => {
        shortenForm.classList.remove("empty");
      }, 2000);
    }
  } catch (error) {
    console.error(error);
  }

  linkInput.value = "";
}

// Handle delete button all
export function deleteAllLinks() {
  // Clear the session Storage
  SessionStorageHandler.clearAll();

  // Clear the link results in the UI
  const linkResults = results.querySelectorAll(".url__results");
  linkResults.forEach((link) => {
    link.remove();
  });

  deleteButtonAll.style.display = "none";
}
