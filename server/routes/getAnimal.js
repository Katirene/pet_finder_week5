var express = require('express');
var router = express.Router();
var pg = require('pg');


var connectionString = '';

if(process.env.DATABASE_URL !== undefined) {
    connectionString = process.env.DATABASE_URL + 'ssl';
} else {
    connectionString = 'postgres://localhost:5432/pet_finder';
}

router.get('/', function(req, res) {
    var results = [];
    pg.connect(connectionString, function(err, client, done) {
        var query = client.query('SELECT * FROM animals;');

        query.on('row', function(row) {
            results.push(row);
            console.log(results);
        });

        query.on('end', function() {
            client.end();
            return res.json(results);
        });

        if(err) {
            console.log(err);
        }
    });
});





module.exports = router;