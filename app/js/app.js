'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', ['ui.router', 'restangular'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

		$urlRouterProvider.otherwise('/');

		$stateProvider

			.state('home', {
				url: '/',
				templateUrl: 'views/todo-index.html'
			})

			.state('edit', {
				url: '/edit/:id',
				templateUrl: 'views/todo-edit.html'
			})
	}]);

