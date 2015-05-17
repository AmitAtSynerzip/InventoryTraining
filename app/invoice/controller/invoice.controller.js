/**
 * Created by Amitsh on 11/5/2015.
 */
angular.module("invoice")
    .controller("invoiceController", ["$scope", "invoiceFactory", "customerFactory", function($scope, invoiceFactory, customerFactory){
        $scope.customers = customerFactory.customers;

        $scope.createInvoice = function(){
            $scope.calinvoiceId = invoiceFactory.invoices.length + 1;
            invoiceFactory.addInvoice({'id': $scope.calinvoiceId, 'invoiceCustomer': {'id': $scope.invoiceCustomer.id, 'name': $scope.invoiceCustomer.name, 'city': $scope.invoiceCustomer.city},
             'item': {'name': $scope.newInvoice.item.name, 'cost': $scope.newInvoice.item.cost}, 'quantity': $scope.newInvoice.quantity, 'totalCost': $scope.newInvoice.totalCost
            });

        };
        $scope.AddItem = function(){
            $scope.newInvoice.totalCost = $scope.newInvoice.item.cost * $scope.newInvoice.quantity;
        };
        $scope.allinvoices = invoiceFactory.invoices;
    }]);