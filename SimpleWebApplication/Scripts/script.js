var myApp = angular.module("myApp", []);
var url = "http://localhost:65498/api/employee"

myApp.controller("myController", function ($scope, $http) {

    var onSuccess = function (response) {
        $scope.employees = response.data;
    }

    var onError = function () {
        $scope.error = "Something failed!";
    }

    var getAllEmployees = function () {
        $http.get(url).then(onSuccess, onError);
    }

    getAllEmployees();
})