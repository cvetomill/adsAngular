adsApp.directive('leftPrivateSidebar', function(){
    return {
        controller: 'UserCtrl',
        restrict: 'E',
        templateUrl: 'templates/left-sidebar-private.html'
        //replace: true
    }
});