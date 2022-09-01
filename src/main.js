// Create variables targetting the relevant DOM elements here 👇


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇


// Create your event handlers and other functions here 👇


// We've provided one function to get you started

var randomCoverIndex = getRandomIndex(covers);
var randomTitleIndex = getRandomIndex(titles);
var randomDescriptorIndex1 = getRandomIndex(descriptors);
var randomDescriptorIndex2 = getRandomIndex(descriptors);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function buildRandomCover(cover, title, descriptor1, descriptor2) {
  var randomCover = new Cover(cover, title, descriptor1, descriptor2);
  return randomCover;
}

var newCoverInstance = buildRandomCover(covers[randomCoverIndex], titles[randomTitleIndex], descriptors[randomDescriptorIndex1], descriptors[randomDescriptorIndex2]);
