var myApp = angular.module('myApp', ['ngRoute', 'ui.bootstrap']);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: './view/index.html'
            //controller: 'routeController'
        })
        .when('/favorites', {
            templateUrl: 'templates/favorites.html',
            controller: 'favoritesController'
        })
        .otherwise({
            //redirectTo: '/home'
        });
    }]);

//
//myApp.controller('APIController', ['$scope', '$http', function($scope, $http) {
//
//    $scope.data = {};
//    $scope.showAnimal = false;
//    $scope.returnedAnimal = '';
//
//
//    //on change call updatePath() to change url
//    $scope.updatePath = function() {
//        $location.path('/findapet');
//    };
//
//    //populate list of dropdown items
//    $scope.items = [
//        {name:'Dog', value: 'dog', href: '#findapet'},
//        {name: 'Cat', value: 'cat', href: '#findapet'},
//        {name: 'Bird', value: 'bird', href: '#findapet'},
//        {name: 'Small Furry', value: 'smallfurry', href: '#findapet'}
//    ];
//
//    $scope.selectedAnimal = $scope.items[0];
//
//    //on change call chooseAnimal to grab value and assign to animalType
//    $scope.chooseAnimal = function() {
//        var animalType = $scope.returnedAnimal;
//        petFinder(animalType);
//    };
//
//    //calls in the data route and calls the favoriteAnimal function
//    //$scope.addFavorite = function(id, name, description, image) {
//    //    var animals = {
//    //        animalId: id,
//    //        animalName: name,
//    //        animalDesc: description,
//    //        animalImage: image
//    //    };
//    //
//    //    //var animals = [];
//    //    //animals.push(id, name, description, image);
//    //    console.log('animals object from returnedAnimal controller: ', animals);
//    //    $scope.dataFactory.postToDatabase(animals);
//    //    return animals;
//    //};
//