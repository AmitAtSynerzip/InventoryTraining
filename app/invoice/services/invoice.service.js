/**
 * Created by Amitsh on 11/5/2015.
 */
angular.module('invoice')
    .factory('invoiceFactory', function(){
       return({
         invoices: [
            ],
           addInvoice : function(invoice){
               this.invoices.push(invoice);
           }
       })
    });