myApp.controller ('favoritesController', ['$scope', 'DataFactory', function($scope, DataFactory) {

    console.log('Favorites Controller');

    $scope.yourFavorites = [];
    $scope.dataFactory = DataFactory;


    $scope.onClickFavorites = function() {
        if ($scope.dataFactory.factoryAnimals() === undefined) {
            // initial load
            $scope.dataFactory.factoryRetrieveData().then(function () {
                $scope.yourFavorites = $scope.dataFactory.factoryAnimals();
            });
        } else {
            $scope.yourFavorites = $scope.dataFactory.factoryAnimals();
        }
    }

}]);
