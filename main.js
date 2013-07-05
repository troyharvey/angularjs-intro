var flightApp = angular.module('flightApp', []);
flightApp.factory('FlightService', function() {
  return new Flight();
});

function FilterCtrl($scope, FlightService) {
  $scope.flight = FlightService;

  $scope.idOnly = function(flightNumber) {
    return flightNumber.substr(3, 4);
  };
}

function FlightListCtrl($scope, FlightService) {
  $scope.flight = FlightService;
}