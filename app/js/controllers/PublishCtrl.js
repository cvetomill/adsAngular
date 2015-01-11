'use strict';
adsApp.controller('PublishCtrl', function($scope, $route, $log, adsDataService, userData) {
    $scope.pageTitle='Publish New Ad';


    adsDataService.getAllTowns(function (resp) {
        $scope.towns = resp;
    });
    adsDataService.getAllCategories(function (resp) {
        $scope.categories = resp;
    });

    this.publish = function (data) {
            //ToDo
            notify(data);
        };
    this.logout = function () {
            //ToDo
            
        };
});
