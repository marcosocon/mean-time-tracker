angular.module('ReportsCtrl', ['ReportService'])
	.controller('ReportsController', function($scope, ReportService) {

	$scope.getReports = function (){
		ReportService.get().then(function(response){
		$scope.reports = response.data;
		});
	};

	$scope.getReports();


});
