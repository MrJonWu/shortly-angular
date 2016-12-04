angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};

  var rValidUrl = /^(?!mailto:)(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[0-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|localhost)(?::\d{2,5})?(?:\/[^\s]*)?$/i;

  $scope.validator = rValidUrl;

  $scope.submitForm = function($event) {
    //if (isValid) {
    //console.log($scope);

    $scope.addLink();
    // if (!$scope.link.url.match(rValidUrl)) {
    //   $scope.urlForm.$invalid = true;
    //   $scope.urlForm.$valid = false;
    // } else {
    //   $scope.addLink();
    // }

    // if ($scope.urlForm.$invalid) {
    //   $event.preventDefault();
    // } else {
    //   $scope.addLink();
    // }
      
    // } else {
    //   return false;
    // }
  };

  $scope.addLink = function() {
    Links.addOne($scope.link);  
  };
});