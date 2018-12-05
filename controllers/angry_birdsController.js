var express = require('express');
var router = express.Router();

var angrybirds = require('../modules/angry_birds');

router.get('/angry_birds', function(request,response){
    //gives me an array of the keys for an object
    var birdsNames = Object.keys(angrybirds);
    var birdsList = birdsNames.join(', ');
    response.render('./angry_birds/index', birdsList);
    // response.send(`These are our angrybirds: ${birdsList}`)
  })

  router.get('/angry_birds/:id', function(request,response){
    var biredtName = request.params.id;
    var fruit = id[biredtName];
    // var mustacheVariables = {
    //   name: fruitName,
    //   price: fruit.price
    // };
    // response.send(`${fruitName} is ${fruit.description} and costs ${fruit.price}`)
    response.render('./angry-birds/show', fruit);
  })

  module.exports = router;
/* 
You will have 1 controller. It will handle all of the /angry_birds routes.

When you go to /angry_birds/ it should get all of the angry birds from the angry bird module and render the angry_birds/index.html view.
When you go to /angry_birds/:id it should get that individual bird from the angry bird module and render the angry-birds/show.html view.
*/