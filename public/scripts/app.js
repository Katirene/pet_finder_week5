var myApp = angular.module('myApp', ['ngRoute', 'ui.bootstrap']);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: './view/index.html',
            controller: 'routeController'
        })
        .when('/favorites', {
            //templateUrl: 'view/templates/favorites.html'
            controller: 'routeController'
        })
        .when('/findapet', {
            //templateUrl: 'view/templates/findapet.html'
            controller: 'APIController'
        })
        .when('/fish', {
            templateUrl: './view/templates/fish.html',
            controller: 'buttonController'
        })
        .otherwise({
            //redirectTo: '/home'
        });
    }]);


myApp.controller('APIController', ['$scope', '$http', function($scope, $http) {

    $scope.data = {};
    $scope.dataFactory = DataFactory;
    $scope.showAnimal = false;

    //to create dropdown menu
    $scope.chooseAnimal = function() {
        var animalType = $scope.animal;
        petFinder(animalType);
    };

    //calls in the data route and calls the favoriteAnimal function
    //$scope.addFavorite = function(id, name, description, image) {
    //    var animals = {
    //        animalId: id,
    //        animalName: name,
    //        animalDesc: description,
    //        animalImage: image
    //    };
    //
    //    //var animals = [];
    //    //animals.push(id, name, description, image);
    //    console.log('animals object from animal controller: ', animals);
    //    $scope.dataFactory.postToDatabase(animals);
    //    return animals;
    //};

    function petFinder(animalType) {
        // API key
        var key = 'a80d614ab2bc137e9560bd6f39d4526c';

        var baseURL = 'http://api.petfinder.com/';
        var query = 'pet.getRandom';
        query += '?key=' + key;
        query += '&animal=' + animalType;
        query += '&output=basic';
        query += '&format=json';

        var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';
        console.log(request);

        $http.jsonp(request).then(
            function(response) {
                $scope.animal = response.data.petfinder.pet;
                console.log($scope.animal);
            }
        );
        $scope.showAnimal = true;
    }

    petFinder();
}]);
