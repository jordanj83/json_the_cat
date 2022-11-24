const { fetchBreedDescription } = require("./breedFetcher");
const breedName = process.argv[2];

const myCallback = (error, description) => {
  if (error) {
    console.log(error);
  }
  else {
  
    console.log(descriptions);
  }
};

fetchBreedDescription(breedName, myCallback);


