angular.module('myApp').factory('Todo', [ 'Restangular', '$q', function( Restangular, $q ){

	var Todo;
	var _resource = Restangular.withConfig(function(RestangularConfigurer){
		RestangularConfigurer.setBaseUrl('http://angular-db-api.aws.af.cm/api/');

		RestangularConfigurer.setRestangularFields({
			id: '_id'
		});

		RestangularConfigurer.addElementTransformer('todos', function( element ){
			element.id = element._id;

			return element;
		});
	});

	var Todo = _resource.all('todos');

	return Todo;
}]);