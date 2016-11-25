/**
 * Created by Anudeep on 2/23/2016.
 */
(function () {
    'use strict';

    angular.module('socketapp')
        .controller('ChatController', ['$rootScope', '$scope', '$location', '$window', 'UserService', 'SocketService', ChatController]);

    function ChatController($rootScope, $scope, $location, $window, UserService, SocketService) {

        var vm = this;
        vm.loggedUsername = JSON.parse(sessionStorage.getItem('user'));
        vm.chatlist = UserService.getAllChatUsers(vm.loggedUsername.username);
        vm.sendMessage = function () {
            
            $('#msg_notification')[0].play();
            SocketService.sendMessage(vm.message);
            vm.message = '';
        };

        vm.notify = function (event) {
            if (event.which == 13){
                $('#msg_notification')[0].play();
                SocketService.sendMessage(vm.message);
                vm.message = '';
                
                return;
            }
            SocketService.notify();
        };

        vm.hideNotification = function () {

            SocketService.hideNotification();
        };

        vm.logOut = function () {

            sessionStorage.removeItem('user');
            SocketService.logOutClient();
            $window.location.reload();
            $location.path('/');

        };





    }
})();