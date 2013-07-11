var flightApp = angular.module('flightApp', []);

function FlightCtrl($scope, FlightService) {
    $scope.flights = FlightService;
    $scope.filterFlightsBy = {
        origin: 'PHX'
    };
}

flightApp.directive("mapLink", function($window) {
    return function(scope, element) {
        element.bind('click', function() {
            $window.location.href = "https://maps.google.com/maps?q=" + this.innerText + "+airport&hl=en";
        });
    }
});

flightApp.factory('FlightService', function() {
    return [
        new Flight('UPS0010', 'SDF', 'CGN', new Date(2013,6,11,12,0).getTime() + Math.random()*43200000),
        new Flight('UPS0918', 'SDF', 'PHX', new Date(2013,6,11,12,0).getTime() + Math.random()*43200000),
        new Flight('UPS1872', 'SDF', 'ANC', new Date(2013,6,11,12,0).getTime() + Math.random()*43200000),
        new Flight('UPS6261', 'SDF', 'CGN', new Date(2013,6,11,12,0).getTime() + Math.random()*43200000),
        new Flight('UPS3827', 'SDF', 'MMX', new Date(2013,6,11,12,0).getTime() + Math.random()*43200000),
        new Flight('UPS2722', 'PHX', 'LAX', new Date(2013,6,11,12,0).getTime() + Math.random()*43200000),
        new Flight('UPS9482', 'PHX', 'BDL', new Date(2013,6,11,12,0).getTime() + Math.random()*43200000),
        new Flight('UPS8372', 'ANC', 'TPE', new Date(2013,6,11,12,0).getTime() + Math.random()*43200000),
        new Flight('UPS0482', 'BUR', 'PHX', new Date(2013,6,11,12,0).getTime() + Math.random()*43200000),
        new Flight('UPS2871', 'OAK', 'LAX', new Date(2013,6,11,12,0).getTime() + Math.random()*43200000),
        new Flight('UPS8392', 'SNA', 'LAX', new Date(2013,6,11,12,0).getTime() + Math.random()*43200000),
        new Flight('UPS0238', 'BDL', 'SDF', new Date(2013,6,11,12,0).getTime() + Math.random()*43200000),
        new Flight('UPS0392', 'ATL', 'SDF', new Date(2013,6,11,12,0).getTime() + Math.random()*43200000),
        new Flight('UPS9482', 'HNL', 'ANC', new Date(2013,6,11,12,0).getTime() + Math.random()*43200000),
        new Flight('UPS2028', 'BOS', 'SDF', new Date(2013,6,11,12,0).getTime() + Math.random()*43200000),
        new Flight('UPS4792', 'STL', 'SDF', new Date(2013,6,11,12,0).getTime() + Math.random()*43200000),
        new Flight('UPS2984', 'SDF', 'OKC', new Date(2013,6,11,12,0).getTime() + Math.random()*43200000)
      ];

});