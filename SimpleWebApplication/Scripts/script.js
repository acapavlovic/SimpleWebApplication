var myApp = angular.module("myApp", []);
var url = "http://localhost:65498/api/employee/"

myApp.controller("myController",
    function ($scope, $http, $window) {

        var getAllEmployees = function () {
            var onSuccess = function (response) {
                $scope.employees = response.data;
                $scope.proba = "real time API call";
            }

            var onError = function () { //at this part this in not required
                $scope.error = "Something failed!";
            }

            $http.get(url).then(onSuccess, onError);
        };

        getAllEmployees();

        //loading new data again - call this function after every update
        $scope.reloadRoute = function () {  //I tried with $route but then was thrown injection exception
            $http.get(url).then(function (response) {
                $scope.employees = response.data;
            });
        }

        //TODO: First I want to implement all main CRUD operations and then to implement auto update of table, in real time.
        //    (probaly with data binding)

        $scope.insertEmployee = function () {
            var employee = {
                "FirstName": $scope.firstName,
                "LastName": $scope.lastName,
                "Job": $scope.job
            };
            $http.post(url, employee).then(function (response) {
                $scope.employees = response.data;
            });
            $window.alert("Employee was inserted. Please reload data in table.");
        }

        $scope.deleteEmployee = function () {
            $http.delete(url + $scope.id);
            $window.alert("Employee was deleted. Please reload data in table.");
        }

        $scope.editEmployee = function () {
            var employee = {
                "FirstName": $scope.newFirstName,
                "LastName": $scope.newLastName,
                "Job": $scope.newJob
            };
            $http.put(url + $scope.idChange, employee).then(function(response) {
                $scope.employees = response.data;
            });
            $window.alert("Employee data was changed. Please reload data in table.");
        }
    });

