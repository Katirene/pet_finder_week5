var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var postAnimal = require('./routes/postAnimal');
var getAnimal = require('./routes/getAnimal');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/postAnimal', postAnimal);
app.use('/getAnimal', getAnimal);


// Serve back static files
app.use(express.static('public'));
app.use(express.static('public/views'));
app.use(express.static('public/scripts'));
app.use(express.static('public/styles'));
app.use(express.static('public/vendors'));

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});