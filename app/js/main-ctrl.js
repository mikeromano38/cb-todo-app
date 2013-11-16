angular.module('myApp').controller('MainCtrl', [ '$scope', 'Todo', function( $scope, Todo ){

	$scope.todos = [];

	$scope.listRecieved = Todo.getList().then(function( todos ){
		$scope.todos = todos;
	});
}]);