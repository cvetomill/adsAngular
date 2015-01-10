var adsApp = angular.module('adsApp', ['ngResource', 'ngRoute', 'LocalStorageModule'])
    .constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net/api/')

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: '../templates/home.html',
            controller: 'HomeCtrl'
        });
        $routeProvider.when('/login', {
            templateUrl: 'templates/login.html',
            controller: 'LoginCtrl as ctrl'
        });
        $routeProvider.when('/register', {
            templateUrl: 'templates/register.html',
            controller: 'RegisterCtrl as ctrl'
        });
        $routeProvider.otherwise({
            // templateUrl: '../templates/html.html',
            // controller: 'HomeCtrl'
            redirectTo: '/'
        });

    }]);