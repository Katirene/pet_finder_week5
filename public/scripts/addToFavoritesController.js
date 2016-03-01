myApp.controller ('addToFavoritesController', ['$scope', '$http', function($scope, $http) {

    console.log('addToFavoritesController');

    $scope.sendFavorite = function() {
        var favoriteAnimal = {
            animalSpecies: $scope.returnedAnimal.animal,
            animalBreed: $scope.returnedAnimal.breeds,
            animalId: $scope.returnedAnimal.id,
            animalName: $scope.returnedAnimal.name,
            animalDesc: $scope.returnedAnimal.description,
            animalImage: $scope.returnedAnimal.image
        };
        console.log(favoriteAnimal);
        postFavorite(favoriteAnimal);
    };

    function postFavorite(animal) {
        $http({
            method: 'POST',
            url: '/postAnimal',
            data: animal
        }).then(function(response) {  //after the GET method gets a response , then we run then.
            var data = response.data;  //this is where the data lives in a response from an angular response.
            console.log();
            //the whole response in Angular is the header and status code, etc, etc. not just the data
        });

    }

}]);