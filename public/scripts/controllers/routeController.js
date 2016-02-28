
myApp.controller('routeController', ['$scope', '$location', function($scope, $location) {
    function getPath() {
        $scope.path = $location.path();
        return path;
    }
    //$scope.$apply();
    //function notAtFavorites() {
    //    if(location.path() != '/favorites') {
    //       return true;
    //    } else {
    //        return false;
    //    }
    //
    //}
}]);