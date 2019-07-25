bandListElement = document.querySelector("#bands");

const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog"
];

const articles = [/( )*the +/, /( )*a +/, /( )*an +/];

const bandsWithoutArticles = bands.map(band => ({
  bandName: band,
  processedName: removeArticles(band)
}));

function removeArticles(inputString) {
  const outputString = articles.reduce((output, article) => {
    const regex = new RegExp(article, "gi");
    const cleanString = output.replace(regex, " ");
    return cleanString.startsWith(" ") ? cleanString.slice(1) : cleanString;
  }, inputString);

  return outputString;
}

const sortedBands = bandsWithoutArticles.sort((band, nextBand) =>
  band.processedName == nextBand.processedName ? 0 : band.processedName < nextBand.processedName ? -1 : 1
);

console.table(sortedBands);

const bandListItems = sortedBands
  .map(
    band => `
    <li>${band.bandName}</li>
    `
  )
  .join("");

bandListElement.innerHTML = bandListItems;
