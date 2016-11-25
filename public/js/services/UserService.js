/**
 * Created by Anudeep on 2/23/2016.
 */
(function(){
    'use strict';

    angular.module('socketapp')
        .factory('UserService', UserService);

    function UserService(){


        var users = [{
            id:10001,
            chatname:'Anudeep Dasari',
            username:'anudeepd',
            passwd:'pass',
            isAvailable:false
        },
            {
                id:10002,
                chatname:'Sudeep Reddy',
                username:'sudeepv',
                passwd:'pass',
                isAvailable:false
            },
            {
                id:10003,
                chatname:'Rishi Reddy',
                username:'rishib',
                passwd:'pass',
                isAvailable:false
            },
            {
                id:10004,
                chatname:'Praneeth Reddy',
                username:'praneethv',
                passwd:'pass',
                isAvailable:false
            },
            {
                id:10005,
                chatname:'Neelesh',
                username:'neeleshn',
                passwd:'pass',
                isAvailable:false
            },{
                id:10006,
                chatname:'Vikas Vellanki',
                username:'vikasv',
                passwd:'pass',
                isAvailable:false,
            },
            {
                id:10007,
                chatname:'Kaushik Veluru',
                username:'kaushikv',
                passwd:'pass',
                isAvailable:false
            },
            {
                id:10008,
                chatname:'Praneeth Krishna',
                username:'praneethb',
                passwd:'pass',
                isAvailable:false
            }];


        var userService = {
            users : users,
            getAllChatUsers : getAllChatUsers,
            authenticateUser:authenticateUser
        };

        return userService;
        /////////////////// Implementation Here ///////////////

        function getAllChatUsers(loggedUser){


            var chatusers = userService.users.filter(function(user){

                return user.username !== loggedUser;
            });

            return chatusers;

        }

        function authenticateUser(username, passwd){

            var loggedUser = userService.users.find(function(user){

                return user.username === username && user.passwd === passwd;
            });

            if(loggedUser){
                loggedUser.isAvailable = true;
            }
            return loggedUser;
        }

    }

})();