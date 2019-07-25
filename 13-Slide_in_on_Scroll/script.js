function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const slidingElements = document.querySelectorAll(".slide-in");

window.addEventListener("scroll", debounce(checkSlide));

function checkSlide(e) {
  slidingElements.forEach(element => {
    //slide in when the bottom of the page is halfway through the image
    //calculate by finding scroll Y position, adding the window height, then subtracting half the element height
    const slideLocation = window.scrollY + window.innerHeight - element.height / 2;
    // bottom of the image
    //calculate by getting the Y position of the element's top edge, and adding the element height
    const elementBottom = element.offsetTop + element.height;
    //flags to use
    const halfShown = slideLocation > element.offsetTop;

    const scrolledPast = window.scrollY > elementBottom;

    if (halfShown && !scrolledPast) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
}
