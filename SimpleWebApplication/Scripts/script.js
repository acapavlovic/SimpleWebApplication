﻿var myApp = angular.module("myApp", []);

myApp.controller("myController", function ($scope, $http) {
    $scope.hello = "Hello Angular!";
})