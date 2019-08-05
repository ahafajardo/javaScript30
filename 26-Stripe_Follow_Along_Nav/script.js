const dropdownContents = document.querySelectorAll(".cool > li");
const background = document.querySelector(".dropdownBackground");
const nav = document.querySelector(".top");

dropdownContents.forEach(dropdownContent => dropdownContent.addEventListener("mouseenter", handleEnter));
dropdownContents.forEach(dropdownContent => dropdownContent.addEventListener("mouseleave", handleLeave));

function handleEnter() {
  this.classList.add("trigger-enter");
  setTimeout(() => this.classList.contains("trigger-enter") && this.classList.add("trigger-enter-active"), 150);
  const dropdown = this.querySelector(".dropdown");
  const dropdownRect = dropdown.getBoundingClientRect();
  const navRect = nav.getBoundingClientRect();
  background.classList.add("open");

  const rect = {
    width: dropdownRect.width,
    height: dropdownRect.height,
    top: dropdownRect.top - navRect.top,
    left: dropdownRect.left - navRect.left
  };

  background.style.width = `${rect.width}px`;
  background.style.height = `${rect.height}px`;
  background.style.transform = `translate(${rect.left}px, ${rect.top}px)`;
}

function handleLeave() {
  this.classList.remove("trigger-enter", "trigger-enter-active");
  background.classList.remove("open");
}
