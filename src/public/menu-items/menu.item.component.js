(function () {
    "use strict";

    angular.module("public")
        .component("menuItem", {
            templateUrl: 'src/public/menu-items/menu.item.html',
            bindings: {
                menuItemName: "<"
            },
            controller: MenuItemController
        });

    MenuItemController.$inject = ['ApiPath'];
    function MenuItemController(ApiPath) {
        //geting image for ApiPath url to implement in component
        var $ctrl = this;
        $ctrl.basePath = ApiPath;
        // $ctrl.basePath = 'https://aleksandar-gjorgievski.herokuapp.com';
    }
})();