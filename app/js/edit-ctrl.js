angular.module('myApp').controller('EditCtrl', ['$scope', '$stateParams', function($scope, $stateParams){

	$scope.listRecieved.then(function(){
		$scope.todo = _.findWhere( $scope.todos, { id: parseInt($stateParams.id) } );
	})

}]);