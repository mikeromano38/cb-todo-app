angular.module('myApp').factory('Todo', ['$http', '$q', 'Restangular', function( $http, $q, Restangular ){

	var Todo;

	var _resource = Restangular.withConfig(function(RestangularConfigurer){
		RestangularConfigurer.setBaseUrl('http://angular-db-api.aws.af.cm/api');

		RestangularConfigurer.setRestangularFields({
			id: '_id'
		});

		RestangularConfigurer.addElementTransformer('todos', false, function( element ) {
			//add methods to instances here element.method = function(){}
			element.id = element._id;

			return element;
		});
	});

	Todo = _resource.all('todos');

	return Todo;
}]);