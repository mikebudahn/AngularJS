(function() {
    
    var app = angular.module('customersApp', ['ngRoute']);
    
    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'CustomersController',
                templateUrl: 'app/views/customers-06.html'
            })
            .when('/orders/:customerId', {
                controller: 'OrdersController',
                templateUrl: 'app/views/orders-06.html'
            })
            .otherwise( { redirectTo: '/' } );
    });
    
}());