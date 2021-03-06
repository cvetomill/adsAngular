'use strict';
adsApp.controller('LoginCtrl', ['$scope', '$location', 'notify', 'userData', function($scope, $location,notify, userData){

    this.pageTitle='Login';
    $scope.login=function(user){
        userData.login(user)
        .then(function(){
                $location.path('/user/home');
                notify({ message:'Login success', classes:'alert-success'});
            }, function(){
                notify({ message:'Invalid Login', classes:'alert-danger'});
            }
        );
    };
    
    
}]);


