var express = require('express');
var router = express.Router();
var pg = require('pg');


var connectionString = '';

if(process.env.DATABASE_URL !== undefined) {
    connectionString = process.env.DATABASE_URL + 'ssl';
} else {
    connectionString = 'postgres://localhost:5432/pet_finder';
}

router.post('/', function(req, res) {
    var results = [];
    var addAnimal = {
        name: req.body.name,
        breed: req.body.breed
    };

    pg.connect(connectionString, function (err, client, done) {
        client.query("INSERT INTO animal (breed, name) VALUES ($1, $2) RETURNING id",
            [addAnimal.breed, addAnimal.name],
            function (err, result) {
                done();
                if (err) {
                    console.log("Error inserting data: ", err);
                    res.send(false);
                } else {
                    res.send(result);
                }
            });
    });
});


module.exports = router;