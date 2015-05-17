/**
 * Created by Amitsh on 11/5/2015.
 */
angular.module('customer')
    .controller('customerCtrl', ['$scope', 'customerFactory', function($scope, customerFactory){

        $scope.createCustomer = function(){
            $scope.calulatedId = customerFactory.customers.length + 1;
            customerFactory.addCustomer({'id': $scope.calulatedId, 'name': $scope.newCust.name, 'city': $scope.newCust.city });
            resetCustForm();
        }

        $scope.custs = customerFactory.customers;

        function resetCustForm() {
            $scope.newCust = {
                id: '',
                name: '',
                city: ''
            }
        }
    }]);