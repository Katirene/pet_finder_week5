myApp.factory('DataFactory', ['$scope','$http', function($scope, $http){

    $scope.data = {};

    function petFinder() {
        // API key
        var key = 'a80d614ab2bc137e9560bd6f39d4526c';

        var baseURL = 'http://api.petfinder.com/';
        var query = 'pet.getRandom';
        query += '?key=' + key;
        query += '&animal=dog';
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
    }

    petFinder();
}]);