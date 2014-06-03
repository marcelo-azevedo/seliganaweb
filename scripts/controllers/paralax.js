'use strict';

// myApp.constant('TweenMax', TweenMax);

// myApp.controller('MainCtrl', function ($scope) {
//     $scope.pages = {
//         'home': { label: 'Home', sublabel: 'Sublabel', content: 'This is page content.' },
//         'oquesomos': { label: 'About', sublabel: 'Sublabel', content: 'This is page content.' },
//         'aliga': { label: 'Contact', sublabel: 'Sublabel', content: 'This is page content.' }
//         'portfolio': { label: 'Contact', sublabel: 'Sublabel', content: 'This is page content.' }
//         'contato': { label: 'Contact', sublabel: 'Sublabel', content: 'This is page content.' }
//     };

//     $scope.currentPage = 'home';
//     $scope.page = $scope.pages['home'];
//     $scope.isInTransit = false;

//     $scope.setCurrentPage = function (page) {
//         if ($scope.currentPage !== page) {
//             $scope.page = $scope.pages[page];
//             $scope.currentPage = page;
//             $scope.isInTransit = true;
//         }
//     };

//     $scope.isCurrentPage = function (page) {
//         return $scope.currentPage === page;
//     };

//     $scope.$on('bgTransitionComplete', function(){
//         $scope.isInTransit = false;
//     });
// });

// myApp.animation('.bg-animation', function ($window, $rootScope, TweenMax) {
//     return {
//         enter: function (element, done) {
//             TweenMax.fromTo(element, 0.5, { left: $window.innerWidth}, {left: 0, onComplete: function () {
//                 $rootScope.$apply(function(){
//                     $rootScope.$broadcast('bgTransitionComplete');
//                 });
//                 done();
//             }});
//         },

//         leave: function (element, done) {
//             TweenMax.to(element, 0.5, {left: -$window.innerWidth, onComplete: done});
//         }
//     };
// });




// var jq = $.noConflict();
// jq(document).ready(function(){

// 	jq("#menu-home a").click(function( event ){
// 		event.preventDefault();
// 		console.log("tetttt")
// 	});

// });
    


