angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};

  $scope.addLink = function(link) {
    $scope.link.url = link;
    Links.addOne($scope.link);
  };
  // $shortUrlField 
  // $scope.submit = function() {

  // };
});
