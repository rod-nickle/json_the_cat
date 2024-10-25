const needle = require('needle');

// First argument to the module is the cat breed.
const args = process.argv.slice(2);
const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + args[0];

needle.get((url), (error, response, body) => {
  if (error) {
    console.log(`There was an error with this request:\n"${error}"`);
    return;
  }

  if (!body[0]) {
    console.log(`The breed "${args[0]}" was not found.`);
  } else {
    console.log(body[0].description);
  }
});




