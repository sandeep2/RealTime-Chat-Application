/**
 * Created by Anudeep on 2/23/2016.
 */
(function () {
    'use strict';
    angular.module('socketapp')
        .controller('LoginController', ['$rootScope', '$location', 'UserService', LoginController]);

    function LoginController($rootScope, $location, UserService) {

        var vm = this;
        vm.isValidUser = true;

        vm.authenticateUser = function () {

            var authenticatedUser = UserService.authenticateUser(vm.username, vm.passwd);
            if (authenticatedUser) {

                sessionStorage.setItem('user', JSON.stringify(authenticatedUser));
                $location.path('/chatapp');

            }
            else {
                vm.isValidUser = false;
            }


        };

    }

})();