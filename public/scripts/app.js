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
//    function petFinder(animalType) {
//        // API key
//        var key = 'a80d614ab2bc137e9560bd6f39d4526c';
//
//        var baseURL = 'http://api.petfinder.com/';
//        var query = 'pet.getRandom';
//        query += '?key=' + key;
//        query += '&returnedAnimal=' + animalType;
//        query += '&output=basic';
//        query += '&format=json';
//
//        var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';
//        console.log(request);
//
//        $http.jsonp(request).then(
//            function(response) {
//                $scope.returnedAnimal = response.data.petfinder.pet;
//                console.log($scope.returnedAnimal);
//            }
//        );
//        $scope.showAnimal = true;
//    }
//
//    petFinder();
//    console.log(returnedAnimal);
//}]);
