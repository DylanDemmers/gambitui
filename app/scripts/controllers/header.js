(function() {
    'use strict';

    angular
        .module('gambituiApp')
        .controller('header', header);

        header.$inject = ['$location', 'adalAuthenticationService'];

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