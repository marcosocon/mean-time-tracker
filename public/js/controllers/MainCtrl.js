angular.module('MainCtrl', [])
.controller('MainController', function($scope){
	$scope.projects = [
		{
			name : 'Altoros'
		},
		{
			name : 'Itx'
		},{
			name : 'Paychex'
		}
	];


	$scope.myDate = new Date();

	$scope.minDate = new Date(
		$scope.myDate.getFullYear(),
		$scope.myDate.getMonth(),
		$scope.myDate.getDate()-7);

	$scope.maxDate = new Date(
		$scope.myDate.getFullYear(),
		$scope.myDate.getMonth(),
		$scope.myDate.getDate());

	$scope.logHours = function(){
		var project = $scope.project;
		var hours = $scope.hours;
		var date = $scope.date;

		if (project && hours && date) {
			$scope.logs.push({
				project : $scope.project,
				hours : $scope.hours,
				date : $scope.date
			});
		}
		else{
			return false;
		}
	};
});
