const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=` + breedName;
  request(url, (error, response, body) => {
    if (error) {
      // console.log(error);
      return; callback(error); //since no description, call the second variable
    }
    //is null for line 9/13/21
    
    if (!response.statusCode === 200) {
      console.log(response.statusCode);
      return callback('statusCode: !200');;
    }
    // JSON is turning the body into a string
    const data = JSON.parse(body);
    const cat = data[0];
    if (!cat) {
      // console.log("");
      return callback("cat not found!");
    }
    // console.log(cat.description);
    return callback(null, cat.description)
  });
};

module.exports = {
  fetchBreedDescription,
};
