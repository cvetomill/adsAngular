'use strict';
adsApp.controller('UserCtrl', function($scope, $route, $log, adsDataService, userData) {
    $scope.pageTitle='User Home';
   
    adsDataService.getAllAds(function (resp) {
        $scope.data = resp;
    });

    adsDataService.getAllTowns(function (resp) {
        $scope.towns = resp;
    });
    adsDataService.getAllCategories(function (resp) {
        $scope.categories = resp;
    });
});