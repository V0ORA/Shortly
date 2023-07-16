import { hamburger, navigation } from "./index.js";

// Toggle navigation
export function toggleNavigation() {
  hamburger.classList.toggle("open");
  navigation.classList.toggle("block");
}

// Close navigation
export function closeNavigation(e) {
  const isHamburgerClicked = hamburger.contains(e.target);
  const isNavigationClicked = navigation.contains(e.target);
  const isEscapeKeyPressed = e.key === "Escape";

  if ((!isHamburgerClicked && !isNavigationClicked) || isEscapeKeyPressed) {
    navigation.classList.remove("block");
    hamburger.classList.remove("open");
  }
}
