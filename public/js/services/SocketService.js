/**
 * Created by Anudeep on 2/24/2016.
 */
(function(){
    'use strict';
    angular.module('socketapp')
        .factory('SocketService', ['UserService',SocketService]);


    function SocketService(UserService){

        var socket = io();

        socket.emit('join', {user : JSON.parse(sessionStorage.getItem('user'))});

        socket.on('chat_display', function(data){

            $("#chat_list").append("<li><h4 style='text-align: center'><b><i> "+data.user+" </i></b>:"+data.message+"</h4></li>");
        });

        socket.on('keying_display', function(clientid){

                $("."+clientid).show();

        });

        socket.on('hide_keying_display', function(clientid){

            $("."+clientid).hide();
        });

        socket.on('client_offline', function(clientid){

            $("#"+clientid).removeClass("label-success").addClass("label-default");
            $("#"+clientid).text("OFFLINE");
        });

        socket.on('update_availability',function(clientids){

            clientids.forEach(function(clientid){
                $("#"+clientid).removeClass('label-default').addClass('label-success');
                $("#"+clientid).text('ONLINE');
            });


        });
        
        var socketService = {
            sendMessage : sendMessage,
            notify:notify,
            hideNotification: hideNotification,
            logOutClient:logOutClient
        };

        return socketService;
        ///////////////// Implementation Here /////////////////
        function sendMessage(msg){

            socket.emit('chat_sent', {user:JSON.parse(sessionStorage.getItem('user')).chatname,message:msg});
        }

        function notify(){

            socket.emit('notify_keying_clients');
        }

        function hideNotification(){

            socket.emit('stop_keying_notifications');
        }

        function logOutClient(){

            socket.emit('logout_client');

        }

    }

})();