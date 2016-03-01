myApp.factory('DataFactory', ['$http', function($http) {
    // PRIVATE
    var dbAnimals = [];

    var getData = function() {
        console.log('getting data from server');
        var promise = $http.get('/getAnimal').then(function(response) {
            dbAnimals = response.data;
            console.log('Async data response:', people);
        });

        return promise;
    };

    //var addPerson = function(name) {
    //    people.push(name);
    //};


    //PUBLIC
    var publicApi = {
        factoryAnimals: function() {
            return dbAnimals;
        },
        factoryRetrieveData: function() {
            return getData();
        }
        //addName: function(name) {
        //    addPerson(name);
        //}
    };

    return publicApi;

}]);