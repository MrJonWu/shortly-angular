angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};

  var rValidUrl = /^(?!mailto:)(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[0-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|localhost)(?::\d{2,5})?(?:\/[^\s]*)?$/i;

  $scope.isValid = rValidUrl;

  $scope.submitForm = function(isValid) {
    if (isValid) {
      console.log('valid');
      $scope.addLink();
    }
  };

  $scope.addLink = function() {

    // console.log($scope.link.url.$valid);

    Links.addOne($scope.link);

    // if ($scope.link.url.indexOf('http://') === - 1) {
    //   $scope.link.url = 'http://' + $scope.link.url;
    // }
    // if ($scope.link.url.match(rValidUrl)) {
    //   console.log('VALID');
    //   Links.addOne($scope.link);
    //   // $scope.link.url = '';
    // } else {
    //   console.log('INVALID URL');
    //   //$scope.link.url = 'PLEASE USE A VALID URL';
    // }    
  };
});

  // <form name='urlForm' ng-submit='submitForm(urlForm.$valid)' novalidate>
  //     <input ng-model="link.url" class='text' type='url' name='url' required>
  //     <input type='submit' value='Shorten'>
  // </form>