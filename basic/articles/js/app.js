'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
        'ui.bootstrap'
    ]).
    config([function () {
//        $routeProvider.otherwise({redirectTo: '/view1'});
    }]);

angular.module('myApp').controller('mainController', function ($scope) {
    window.scope = $scope;

    $scope.cities = function (searchText) {
        $scope.searchText = searchText;

    }

    $scope.types = {
        air: false,
        land: false,
        water: true,
        snow: false
    }


    $scope.find = function () {
//       $scope.cities($scope.searchText);


        //        console.log($scope.types);
//        Object.keys($scope.types).
//        var x= Array.prototype.slice.call($scope.types);
//        console.log(x);

        var types = [];
        for (var key in $scope.types) {
            console.log(types);
            if ($scope.types.hasOwnProperty(key) && $scope.types[key]) {
                types.push(key);
            }
        }

        console.log(types);
        $scope.result = ""
        return $scope.events = [
            { city: 'Amsterdam', 'event': 'Swimming', 'price': '1000', days: '1', type: 'water'},
            { city: 'Bangalore', 'event': 'Swimming', 'price': '1000', days: '1', type: 'water'},
            { city: 'Hyderabad', 'event': 'Swimming', 'price': '1000', days: '1', type: 'water'},
            { city: 'Melbourne', 'event': 'Desert ride', 'price': '1000', days: '1', type: 'land'},
            { city: 'Sydney', 'event': 'Swimming', 'price': '5000', days: '1', type: 'water'}
        ];

        return $http({method: 'GET', url: '/getEvents', params: {
            types: types
        }}).
            then(function (data, status, headers, config) {
                console.log(data.data.events);
//                return data.data.events;
                $scope.events = data.data.events

            })
//            error(function(data, status, headers, config) {
//                return [];
//            });


//        return $http.jsonp("/getEvents").then(function(response){
//            return response.data;
//        });
    }
});