
adsApp.factory('adsDataService', function ($http, $log) {
    return {
        getAllAds: function (success) {
            var pageIndex = 1;
            $http({
                method: 'GET',
                url: 'http://softuni-ads.azurewebsites.net/api/ads?pagesize=10&startpage='})
                .success(function (data, status, headers, config) {
                    success(data);
                })
                .error(function (data, status, headers, config) {
                    $log.warn(data);
                })

        },
        getAllTowns: function (success) {
            $http({method: 'GET', url: 'http://softuni-ads.azurewebsites.net/api/towns'})
                .success(function (data, status, headers, config) {
                    success(data);
                })
                .error(function (data, status, headers, config) {
                    $log.warn(data);
                })

        },
        getAllCategories: function (success) {
            $http({method: 'GET', url: 'http://softuni-ads.azurewebsites.net/api/categories'})
                .success(function (data, status, headers, config) {
                    success(data);
                })
                .error(function (data, status, headers, config) {
                    $log.warn(data);
                })

        }
    }
});