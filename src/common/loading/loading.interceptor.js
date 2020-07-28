(function () {
  "use strict";
  angular
    .module("common")
    .factory("loadingHttpInterceptor", LoadingHttpInterceptor);

  LoadingHttpInterceptor.$inject = ["$rootScope", "$q"];
  /**
   * Tracks when a request begins and finishes. When a
   * request starts, a progress event is emitted to allow
   * listeners to determine when a request has been initiated.
   * When the response completes or a response error occurs,
   * we assume the request has ended and emit a finish event.
   */

  function LoadingHttpInterceptor($rootScope, $q) {
    var loadingCount = 0;
    var loadingName = "spinner:activate";

    return {
      request: function (Config) {
        console.log("Inside interceptor, config: ", Config);

        if (++loadingCount === 1) {
          $rootScope.$broadcast(loadingName, { on: true });
        }

        return Config;
      },
      response: function (response) {
        console.log("Inside interceptor,  response: ", response);
        if (--loadingCount === 0) {
          $rootScope.$broadcast(loadingName, { on: false });
        }
        return response;
      },
      responseError: function (response) {
        console.log("Inside interceptor, error response: ", response);
        console.log("Inside interceptor, config: ", $q.reject(response));
        if (--loadingCount === 0) {
          $rootScope.$broadcast(loadingName, { on: false });
        }

        return $q.reject(response);
      },
    };
  }
})();
