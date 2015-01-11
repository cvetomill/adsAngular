'use strict';
adsApp.controller('RegisterCtrl', ['$scope', '$location','townsData', 'notify','userData', function($scope, $location, townsData,notify, userData){
    this.pageTitle='Register';

    townsData.getTowns()
        .$promise
        .then(function(data){
            $scope.towns=data;
        });
    $scope.register=function(user){
        userData.register(user)
        .then(function () {
                $location.path('/login');
                notify({message: 'Register success. Please login.', classes: 'alert-success'});
            }, function () {
                notify({message: 'Invalid Register', classes: 'alert-danger'});
            }
        );
    };
}]);	