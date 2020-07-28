(function () {

    "use strict";

    angular
        .module("common")
        .service("MenuService", MenuService);

    MenuService.$inject = ["$http", "ApiPath"];
    function MenuService($http, ApiPath) {
        var service = this;
        service.user = {};  //to display signup button in info 


        service.getCategories = function () {
            var result = $http.get(ApiPath + '/categories.json')
                .then(function (response) {
                    console.log(response.data);
                    return response.data;
                });
            return result;
        };

        service.getMenuitems = function (categoryName) {
            var config = {};
            if (categoryName) { config.params = { 'category': categoryName } }

            //  (    "https://davids-restaurant.herokuapp.com/menu_items.json?category="+categoryName   )
            var result = $http.get(ApiPath + "/menu_items.json", config)
                .then(function (response) {
                    console.log("getMenuitems", response.data);
                    return response.data;
                });
            return result;
        };

        service.getFavoriteDish = function (shortName) {
            return $http.get(ApiPath + '/menu_items/' + shortName + '.json');
        };


        service.saveUser = function (user) {
            service.user = angular.copy(user);
            console.log("service.user", service.user);
        }

        service.getUser = function () {
            return service.user;
        }
    }


})();