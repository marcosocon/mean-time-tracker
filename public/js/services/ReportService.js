angular.module('ReportService', [])
.factory('ReportService',['$http', function($http){
	return {
		get: function(){
			return $http.get('data/reports.json')
				.then(function(response){
					return response;
				});
		},
		// create: function(reportData){
		// 	return $http.post('/api/reports', reportData);
		// },
		// delete: function(id){
		// 	return $http.delete('/api/reports/' + id);
		// }
	};
}]);
