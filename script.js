// Code goes here

var app = angular.module('app', [
  'ui.router'
]);

app.config(['$stateProvider', '$urlRouterProvider', registerRoutes]);
app.run(['$rootScope', '$location', function($rootScope, $location) {
  $rootScope.$location = $location;
}]);

function registerRoutes($stateProvider, $urlRouterProvider) {

  // root authenticated state
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home.html'
    }).
    state('new-qs', {
      url: '/new?portfolioId',
      templateUrl: 'new.html',
      controller: function($scope, $stateParams) {
         $scope.portfolioId = $stateParams.portfolioId;
      }
    }).
    state('new-rp', {
      url: '/new/:portfolioId',
      templateUrl: 'new.html',
      controller: function($scope, $stateParams) {
         console.log($stateParams);
         $scope.portfolioId = $stateParams.portfolioId;
      }
    }).
    state('new-nonurl', {
      url: '/new',
      params: {
        portfolioId: null,
      },
      templateUrl: 'new.html',
      controller: function($scope, $stateParams) {
         $scope.portfolioId = $stateParams.portfolioId;
      }
    });
    
  $urlRouterProvider.otherwise('/');
}