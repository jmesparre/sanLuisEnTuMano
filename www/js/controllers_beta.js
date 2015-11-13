angular.module('angularGoogleMapsExample.controllers', ['angularGoogleMapsExample.services'])

.controller('MapCtrl', function($scope, $timeout, $cordovaGeolocation, uiGmapGoogleMapApi) {
	 // Do stuff with your $scope.
    // Note: Some of the directives require at least something to be defined originally!
    // e.g. $scope.markers = []

    $scope.map = { 
    	center: { latitude: -33.183680, longitude: -66.312700 },
    	zoom: 15,
    };

    // uiGmapGoogleMapApi is a promise.
    // The "then" callback function provides the google.maps object.
    uiGmapGoogleMapApi.then(function(maps) {

    });
});

