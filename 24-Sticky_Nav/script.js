const nav = document.querySelector("#main");
const navTopPosition = nav.offsetTop;

window.addEventListener("scroll", fixNav);
window.addEventListener("resize", () => (navTopPosition = nav.offsetTop));

function fixNav() {
  if (navTopPosition <= window.scrollY) {
    document.body.style.paddingTop = `${nav.offsetHeight}px`;
    document.body.classList.add("fixed-nav");
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove("fixed-nav");
  }
}
