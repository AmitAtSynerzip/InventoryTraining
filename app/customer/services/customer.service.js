/**
 * Created by Amitsh on 11/5/2015.
 */
angular.module('customer')
    .factory('customerFactory',function(){
        return({
            customers:[

            ],
            addCustomer: function(customer){
                this.customers.push(customer);
            }
        });

    });
