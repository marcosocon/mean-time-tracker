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

	$scope.logs = [
		{
			project : 'Altoros',
			hours : 2.65,
			date : '10/04/1993'
		},
		{
			project : 'Itx',
			hours : 2.65,
			date : '10/04/1993'
		},
		{
			project : 'Paychex',
			hours : 2.65,
			date : '10/04/1993'
		},
		{
			project : 'Altoros',
			hours : 3.50,
			date : '10/04/1993'
		},
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
		$scope.logs.push({
			project : $scope.project,
			hours : $scope.hours,
			date : $scope.date
		});
	};
});
