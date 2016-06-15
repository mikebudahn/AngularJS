// CUSTOMERSCONTROLLERS.JS
// Mike Budahn 6/2016
//
// Contrtoller for 04-Loops

/* OPTION 1
myApp.controller('CustomersController', function($scope) {
	$scope.sortBy = "name";
	$scope.reverse = false;

	$scope.customers= [
	{joined:'2000-12-02', name:'John', city:'Norfolk', orderTotal:98.45},
	{joined:'2002-19-06', name:'Mary', city:'Chesapeake', orderTotal:151.36},
	{joined:'2005-28-09', name:'Ralph', city:'Suffolk', orderTotal:313.12};
	$scope.doSort= function(propertyName){
		$scope.sortBy = propertyName;
		$scope.reverse = !$scope.reverse;
	};
});
*/

/* OPTION 2
(function () {

	angular.module('customersApp')
		.controller('CustomersController', function($scope) {
		$scope.sortBy = "name";
		$scope.reverse = false;

		$scope.customers= [
		{joined:'2000-12-02', name:'John', city:'Norfolk', orderTotal:98.45},
		{joined:'2002-19-06', name:'Mary', city:'Chesapeake', orderTotal:151.36},
		{joined:'2005-28-09', name:'Ralph', city:'Suffolk', orderTotal:313.12};
		$scope.doSort= function(propertyName){
			$scope.sortBy = propertyName;
			$scope.reverse = !$scope.reverse;
		};
	});
}());
*/

(function () {

	var CustomersController = function($scope) {
		$scope.sortBy = "name";
		$scope.reverse = false;

		$scope.customers= [
		{joined:'2000-12-02', name:'John', city:'Norfolk', orderTotal:98.45},
		{joined:'2002-19-06', name:'Mary', city:'Chesapeake', orderTotal:151.36},
		{joined:'2005-28-09', name:'Ralph', city:'Suffolk', orderTotal:313.12}
		];
		$scope.doSort= function(propertyName){
			$scope.sortBy = propertyName;
			$scope.reverse = !$scope.reverse;
		};
	};

	angular.module('customersApp')
	.controller('CustomersController', CustomersController);
}());
