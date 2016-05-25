angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider
		// home page
		.when('/', {
			templateUrl: 'views/Main.html',
			controller: 'MainController'
		})
		// reports page
		.when('/reports', {
			templateUrl: 'views/Reports.html',
			controller: 'ReportsController'
		})
		.otherwise({
			templateUrl: 'views/Main.html',
			controller: 'MainController'
		});


}]);
