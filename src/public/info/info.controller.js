(function () {

    angular.module("public").controller("InfoController", InfoController);

    InfoController.$inject = ["MenuService", "ApiPath"];
    function InfoController(MenuService, ApiPath) {
        var vm = this;
        vm.apiPath = ApiPath;

        vm.signedUp = false;

        vm.user = MenuService.getUser();
        console.log('User is', vm.user);
        if (angular.equals(vm.user, {})) {
            console.log('1');
            vm.signedUp = false;
        } else {
            console.log('2');
            vm.signedUp = true;
        }
    }
})();