myApp.controller('selectController', function ($scope, $log, $location) {

    $scope.updatePath = function() {
        $location.path('/findapet');
    };

    $scope.chooseAnimal = function() {
        var animalType = $scope.randonAnimal;
        petFinder(animalType);
    };

    $scope.items = [
        {name:'Dog', value: 'dog', href: '#findapet'},
        {name: 'Cat', value: 'cat', href: '#findapet'},
        {name: 'Bird', value: 'bird', href: '#findapet'},
        {name: 'Small Furry', value: 'smallfurry', href: '#findapet'}
    ];

    $scope.setChoice = function(data){
        $scope.loc = data;
        //Do somethign else..
    };

    $scope.status = {
        isopen: false
    };

    $scope.toggled = function(open) {
        $log.log('Dropdown is now: ', open);
    };

    $scope.toggleDropdown = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.status.isopen = !$scope.status.isopen;
    };

    $scope.appendToEl = angular.element(document.querySelector('#dropdown-long-content'));
});