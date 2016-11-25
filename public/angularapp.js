/**
 * Created by Anudeep on 2/23/2016.
 */
(function () {
    'use strict';
    angular.module('socketapp', ['ngRoute']);

    angular.module('socketapp').config(['$routeProvider', function ($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: './partials/site_login.html',
                controller: 'LoginController',
                controllerAs: 'loginCtrl',


            })
            .when('/chatapp', {
                templateUrl: './partials/site_chat.html',
                controller: 'ChatController',
                controllerAs: 'chatCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);

    angular.module('socketapp').run(['$rootScope', '$location', function ($rootScope, $location) {

        $rootScope.$on('$routeChangeStart', function (event, next, current) {
            if (sessionStorage.getItem('user')) {
                $location.path('/chatapp');
            }
            else {
                $location.path('/');
            }

        });
    }]);

})();