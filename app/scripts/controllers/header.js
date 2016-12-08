(function() {
    'use strict';

    angular
        .module('gambituiApp')
        .controller('header', header);

        function header($location,adalAuthenticationService) {
            var vm = this;
            vm.isActive = function (viewLocation) {
                return viewLocation === $location.path();
            };

            // logout of forgeadminuiApp
            vm.logout = function () {
                adalAuthenticationService.logOut();
            };
        }
})();