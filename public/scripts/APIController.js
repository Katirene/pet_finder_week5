myApp.controller('APIController', ['$scope', '$http', function($scope, $http) {

    //$scope.selectedAnimal = 'rabbit';

    //on change call updatePath() to change url
    $scope.searchAPI = function() {
        //$scope.location = $location.path();
        //location.path('/findapet');

        var key = 'a80d614ab2bc137e9560bd6f39d4526c';

        var baseURL = 'http://api.petfinder.com/';
        var query = 'pet.getRandom';
        query += '?key=' + key;
        query += '&returnedAnimal=dog';
        query += '&output=basic';
        query += '&format=json';

        var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';
        console.log(request);

        $http.jsonp(request).then(
            function (response) {
                $scope.returnedAnimal = response.data.petfinder.pet;
                console.log($scope.returnedAnimal);
            }
        );
        //$scope.showAnimal = true;


        searchAPI();
        console.log(returnedAnimal);
    };

}]);