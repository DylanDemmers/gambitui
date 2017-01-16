(function() {
    'use strict';
/*-------------------------------Header Controller To handle Login/Location routing ----------------------*/
    angular
        .module('gambituiApp')
        .controller('header', header);

        function header($location,adalAuthenticationService) {
            var vm = this;                                                  //Scope           
            vm.isActive = function (viewLocation) {                         //Is active is used in index html to view which distribution
                return viewLocation === $location.path();                   //Is in use. Returns the path of that distributioin
            };

            // logout of forgeadminuiApp
            vm.logout = function () {
                adalAuthenticationService.logOut();                         //Handles the logout on button push in index.html
            };
        }
})();