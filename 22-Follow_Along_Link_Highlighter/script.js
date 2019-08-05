// 👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀
const links = document.querySelectorAll("a");
const highlight = document.createElement("span");

highlight.classList.add("highlight");
document.body.append(highlight);

links.forEach(link =>
  link.addEventListener("mouseenter", () => {
    const linkRect = link.getBoundingClientRect();
    highlight.style.width = `${linkRect.width}px`;
    highlight.style.height = `${linkRect.height}px`;
    highlight.style.transform = `translate(${linkRect.left + window.scrollX}px, ${linkRect.top + window.scrollY}px)`;
  })
);
