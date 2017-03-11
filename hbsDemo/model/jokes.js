


var jokes = [
  "A day without sunshine is like, night.",
  "At what age is it appropriate to tell my dog that he's adopted?",
  "I intend to live forever, or die trying"
];


function randomjoke(){
    var joke = {};
    var random = Math.floor(Math.random()*jokes.length);
    joke = {randomjoke:jokes[random]};
    //document.getElementById('quote').innerHTML = jokes[random];
    return joke;
}

function addJoke(){
    
    
}

module.exports = {
  allJokes: jokes,
  getRandomJoke: randomjoke,
  addJoke: addJoke
}

console.log(randomjoke());
console.log()