(function () {

    angular.module("public").controller("signupFromController", SignupFromController);

    SignupFromController.$inject = ["MenuService"];

    function SignupFromController(MenuService) {
        var vm = this;

        vm.user = {};
        vm.favoriteDish = {};

        vm.showError = false;       // When this value is true error about the favorite dish wiil be shown
        vm.showMessage = false;     // When this value is true message about successfull signup will be shown

        vm.signup = function (form) {
            vm.showError = false;
            vm.showMessage = false;
            // If the form is not valid don't submit
            if (form.$invalid) {
                console.log('The form is not valid');
                return;
            }



            var dish = MenuService.getFavoriteDish(vm.user.favoriteDish);   //it return promises of $http ApiPath + '/menu_items/' + short_name + '.json'

            dish.then(
                function (response) {
                    vm.user.favoriteDishDetails = response.data;
                    console.log("favourite", vm.favoriteDish);
                    MenuService.saveUser(vm.user);
                    vm.showMessage = true;
                }
                , function (error) {
                    console.log(error);
                    vm.showError = true;
                });

        }

    }

})();