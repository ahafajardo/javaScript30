const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
const cities = [];

let searchBox = document.querySelector("input");

let suggestions = document.querySelector(".suggestions");

let githubPromise = fetch(endpoint);

githubPromise.then(res => res.json()).then(data => cities.push(...data));

searchBox.addEventListener("change", displayMatches);
searchBox.addEventListener("keyup", displayMatches);

function displayMatches() {
  let matchResults = findMatches();
  let searchTerm = searchBox.value;
  let suggestionsHtml = "";
  if (searchTerm.length) {
    let regex = new RegExp(searchTerm, "gi");
    suggestionsHtml = matchResults
      .map(location => {
        let cityHtml = location.city.replace(regex, `<span class="hl">${searchBox.value}</span>`);
        let stateHtml = location.state.replace(regex, `<span class="hl">${searchBox.value}</span>`);
        return `
        <li>
            <span class="name">${cityHtml}, ${stateHtml}</span>
            <span class="population">${location.population}</span>
        </li>
        `;
      })
      .join("");
  }
  suggestions.innerHTML = suggestionsHtml;
}

function findMatches() {
  let searchTerm = searchBox.value;
  let regex = new RegExp(searchTerm, "gi");
  let results = cities.filter(location => location.city.match(regex) || location.state.match(regex));
  return results;
}
