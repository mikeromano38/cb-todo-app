angular.module('e2eMock', ['ngMockE2E'])

.run(function($httpBackend){
		$httpBackend.whenGET(/^views/).passThrough();

		$httpBackend.whenGET('http://angular-db-api.aws.af.cm/api/todos').respond([
			{
				task: 'Some Task 1',
				complete: false,
				_id: 1
			},
			{
				task: 'Some Task 2',
				complete: false,
				_id: 2
			},
			{
				task: 'Some Task 3',
				complete: false,
				_id: 3
			},
			{
				task: 'Some Task 4',
				complete: false,
				_id: 4
			},
			{
				task: 'Some Task 5',
				complete: false,
				_id: 5
			}
		]);
	});

angular.module('myApp').requires.push('e2eMock');

