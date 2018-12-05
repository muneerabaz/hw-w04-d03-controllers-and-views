/* Set up your index.js file. Require your packages, set up your app and 
view engine, and listen on your port. 
Create a root route to render a 
homepage. Look back at the grocery example we did today as a reference 
for the syntax.*/

var express = require('express');
var mustache = require('mustache-express');
var app = express();
var port = 3000;

app.engine('html' , mustache());
app.set('view engine' , 'html');
app.set('views' , __dirname +'/views');

var angry_birdsController = require('./controllers/angry_birdsController');

app.use('/angry_birds' , angry_birdsController);
app.listen(port,function(){
    console.log(`App is listening on port ${port}`)
    });

    
    router.get('/' , function(request , response ){
        response.render('./' ,)
    })