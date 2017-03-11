

var express = require('express'); // requesting to use express
var router = express.Router();
var jokes = require('../model/jokes');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index') //<- template, not necessary to .hbs because it was setup in app.js that it is the default engine
});

router.get('/randomjoke', function(req, res,next){
  //req.session.jokeCount +=1;
  res.render('randomjoke', jokes.getRandomJoke());
});

router.get('/jokes', function(req, res,next){
 // req.session.jokesCount +=1;
  res.render('alljokes', { jokes: jokes.allJokes});
});

module.exports = router;