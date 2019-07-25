const addItems = document.querySelector(".add-items");
const manipulateItems = document.querySelector(".manipulate-items");
const itemsList = document.querySelector(".plates");
const items = JSON.parse(localStorage.getItem("items")) || [];

populateList(items, itemsList);

addItems.addEventListener("submit", addItem);
manipulateItems.addEventListener("click", manipulate);
itemsList.addEventListener("click", toggleChecked);

function addItem(e) {
  e.preventDefault();
  const inputText = addItems.querySelector("[name=item]").value;
  const item = {
    text: inputText,
    done: false
  };
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items));
  addItems.reset();
}

function manipulate(e) {
  if (!e.target.matches("input")) return; //event delegation
  const element = e.target;
  const action = element.name;
  switch (action) {
    case "check":
      items.forEach(item => (item.done = !item.done));
      break;
    case "remove":
      items.length = 0;
      break;
    default:
      break;
  }
  populateList(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items));
}

function toggleChecked(e) {
  if (!e.target.matches("input")) return; //event delegation
  const element = e.target;
  const index = element.dataset.index;
  items[index].done = !items[index].done;
  populateList(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items));
}

function populateList(itemsArray = [], itemsElement) {
  itemsElement.innerHTML = itemsArray
    .map((item, i) => {
      return `
        <li>
            <input type="checkbox" data-index=${i} id="item${i}" ${item.done ? "checked" : ""} />
            <label for="item${i}">${item.text}</label>
        </li>
        `;
    })
    .join("");
}
