(function() {
	
	// create a factory function with customers
	var customersFactory = function ($http) {

        // create a factory object
        var factory = {};
        // define a function for the factory to perform
        factory.getCustomers = function() {
        	return $http.get('/customers');
        };
        
        factory.getCustomer = function(customerId) {
            return $http.get('/customers/' + customerId);
        };

        // return the factory
        return factory;
	};

    // Handle minification
    customersFactory.$inject = ['$http'];

	// Register the factory
	angular.module('customersApp').factory('customersFactory',customersFactory);

}());