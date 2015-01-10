'use strict';
adsApp.controller('HomeCtrl',['$scope', '$route', '$log', 'adsDataService', function($scope, $route, $log, adsDataService) {
    $scope.pageTitle='Home';

    adsDataService.getAllAds(function (resp) {
        $scope.data = resp;
    });

    adsDataService.getAllTowns(function (resp) {
        $scope.towns = resp;
    });
    adsDataService.getAllCategories(function (resp) {
        $scope.categories = resp;
    });
}]);