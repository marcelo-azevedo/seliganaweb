'use strict';

  myApp.controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

  // HeaderController
myApp.controller('HeaderCtrl', function($scope){
   $scope.templates = {[
     template: { url: 'inc/menu.html' }
   ]};

   $scope.template = $scope.templates[0].template;
});


