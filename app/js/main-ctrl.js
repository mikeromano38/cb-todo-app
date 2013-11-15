angular.module('myApp').controller('MainCtrl', [ '$scope', 'Todo', function( $scope, Todo ){

	$scope.todos = {};

	Todo.getList().then(function( todos ){
		$scope.todos.list = todos;
	});
}]);