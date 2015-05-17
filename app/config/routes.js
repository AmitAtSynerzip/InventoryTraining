/**
 * Created by Amitsh on 11/5/2015.
 */
angular.module('invoice')
    .config(function($stateProvider, $urlRouterProvider){

        $urlRouterProvider.otherwise("/Home");

        $stateProvider
            .state('home', {
                url:"/Home",
                templateUrl: "app/invoice/views/home.html"
            })
            .state('newCustomer', {
                url:"/newCustomer",
                templateUrl: "app/customer/views/addcustomer.html",
                controller: "customerCtrl"
            })
            .state('listCustomer', {
                url:"/listCustomer",
                templateUrl: "app/customer/views/listcustomer.html",
                controller: "customerCtrl"
            })
            .state('addInvoice', {
                url:"/addInvoice",
                templateUrl: "app/invoice/views/addinvoice.html",
                controller: "invoiceController"
            })
            .state('listInvoice', {
                url:"/listInvoice",
                templateUrl: "app/invoice/views/listinvoice.html",
                controller: "invoiceController"
            })
            .state('invoiceDetail', {
                url:"/invoiceDetail/:invoiceId",
                templateUrl: "app/invoice/views/invoicedetails.html",
                controller: "invoiceDetailCtrl"
            })
    });