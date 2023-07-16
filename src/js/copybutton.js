import { results } from "./index.js";
import { copyToClipboard } from "./clipboard.js";

// Function to handle copy button click
export function handleCopyButtonClick(event) {
  const copyBtn = event.target;
  const shortenLink = copyBtn.previousElementSibling.querySelector("a").textContent;
  console.log(shortenLink);

  copyToClipboard(shortenLink);

  // Add styles to button
  copyBtn.classList.add("copied");
  copyBtn.textContent = "Copied!";
  setTimeout(() => {
    copyBtn.classList.remove("copied");
    copyBtn.textContent = "Copy";
  }, 1300);
}

// Function to attach event listeners to copy buttons
export function copyBtnEvent() {
  // Get all copy buttons
  const copyBtns = results.querySelectorAll(".btn_copy");

  // Attach event listener to each copy button
  copyBtns.forEach((copyBtn) => {
    copyBtn.addEventListener("click", handleCopyButtonClick);
  });
}
