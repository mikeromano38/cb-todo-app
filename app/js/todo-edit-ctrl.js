angular.module('myApp').controller('TodoEditCtrl', ['$scope', '$stateParams', 'Todo', '$state', function($scope, $stateParams, Todo, $state){

	Todo.get( $stateParams.id ).then(function( todo ){
		$scope.todo = todo;
	});

	$scope.updateTodo = function(){

		$scope.todo.put().then(function( todo ){

			var target = _.findWhere($scope.todos.list, { id: todo.id });
			$scope.todos.list[ $scope.todos.list.indexOf( target ) ] = todo;

			$scope.todo = {};
			$state.transitionTo('home');
		});
	};

}]);