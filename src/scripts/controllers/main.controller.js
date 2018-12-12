angular.module('controllers', []).controller("MainController", _mainController)

function _mainController($scope, $http) {
	$scope.message = 'Hola!';


	$http({
			method: 'get',
			url: '/db/db.json'
		}).then(function (response){
			console.log(response)
			$scope.data = response.data.menu	
		}, function(error){
			console.log("loi ooooo"+ error);
		});
}
