(function() {
	
	// create a factory function with customers
	var customersService = function () {


        // define a function for the factory to perform
        this.getCustomers = function() {
        	return customers;
        };
        
        // Start business logic
        this.getCustomer = function(customerId) {
            //Search the customers for the customerId
            //Return the customer or null if not found
            for (var i=0,len=customers.length;i<len;i++) {
               if (customers[i].id === parseInt(customerId)) {
                   return customers[i];
               }
            }
            return {};
        }

	};

	// Register the factory
	angular.module('customersApp').service('customersService',customersService);

}());