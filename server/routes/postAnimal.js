var express = require('express');
var router = express.Router();
var pg = require('pg');


var connectionString = '';

if(process.env.DATABASE_URL !== undefined) {
    connectionString = process.env.DATABASE_URL + 'ssl';
} else {
    connectionString = 'postgres://localhost:5432/pet_finder';
}

//no table column yet for .animalSpecies or for .animal (dog, cat, etc)
router.post('/', function(req, res) {
    console.log(req.body);

    var results = [];
    var addAnimal = {
        petid: req.body.animalId,
        name: req.body.animalName,
        image: req.body.animalImage,
        breed: req.body.animalBreed.breed,
        desc: req.body.animalDesc,
        species: req.body.animalSpecies

    };


    //if(addAnimal.desc.length > 100) {
    //    addAnimal.desc = addAnimal.desc.substring(0,100);
    //}
    console.log(addAnimal.desc);

    pg.connect(connectionString, function (err, client, done) {
        client.query("INSERT INTO animals (pet_id, pet_name, pet_image, pet_breed, pet_desc, animal_species) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id",
            [addAnimal.petid, addAnimal.name, addAnimal.image, addAnimal.breed, addAnimal.desc, addAnimal.animalSpecies],
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