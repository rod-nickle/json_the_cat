const needle = require('needle');

const fetchBreedDescription = function(breedName, callback) {
  const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;

  needle.get((url), (error, response, body) => {
    // There was an error in the API request.
    if (error) {
      callback(error, null);
      return;
    }
  
    // The breed was was not found.
    if (!body[0]) {
      callback(null, `The breed "${breedName}" was not found.`);
      return;
    }
    
       // The breed was found.  Return the description.
    callback(null, body[0].description);
  });
};

module.exports = { fetchBreedDescription };



