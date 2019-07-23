const checkboxes = document.querySelectorAll(".item input");

let checkedIndex = 0;
let lastChecked = checkboxes[0];
let lastCheckedIndex = 0;
let shiftHeld = false;

document.getRootNode().addEventListener("keydown", e => (shiftHeld = e.which == 16 ? true : shiftHeld));
document.getRootNode().addEventListener("keyup", e => (shiftHeld = e.which == 16 ? false : shiftHeld));

checkboxes.forEach(checkbox =>
  checkbox.addEventListener("click", e => {
    if (shiftHeld) {
      checkedIndex = [...checkboxes].indexOf(e.target);
      let indexRange = Math.abs(checkedIndex - lastCheckedIndex);
      let startIndex = checkedIndex > lastCheckedIndex ? lastCheckedIndex : checkedIndex;
      let toCheck = [...checkboxes].slice(startIndex + 1, startIndex + indexRange);
      toCheck.forEach(checkbox => (checkbox.checked = !checkbox.checked));
    }
    lastChecked = e.target;
    lastCheckedIndex = [...checkboxes].indexOf(lastChecked);
  })
);
