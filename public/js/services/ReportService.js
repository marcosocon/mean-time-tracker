angular.module('ReportService', [])
.factory('Report', ['$http', function($http){
	return {
		get: function(){
			return $http.get('/api/reports');
		},
		create: function(reportData){
			return $http.post('/api/reports', reportData);
		},
		delete: function(id){
			return $http.delete('/api/reports/' + id);
		}
	};
}]);
