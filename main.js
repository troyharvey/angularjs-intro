var flightApp = angular.module('flightApp', []);
flightApp.factory('FlightService', function() {
  return new Flight();
});

function FilterCtrl($scope, FlightService) {
  $scope.flight = FlightService;
}

function FlightListCtrl($scope, FlightService) {
  $scope.flight = FlightService;
}