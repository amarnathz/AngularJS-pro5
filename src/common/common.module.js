(function () {
  "use strict";
  angular
    .module("common", [])
    .constant("ApiPath", "https://server-for-restaurant.herokuapp.com/")
    .config(config);
  //https://davids-restaurant.herokuapp.com
  config.$inject = ["$httpProvider"];

  function config($httpProvider) {
    $httpProvider.interceptors.push("loadingHttpInterceptor");
  }
})();
