var app = angular.module('ComplaintSystemInfoModule', []);
app.service('ComplaintSystemInfoService', function ($http) {
    this.List = function () {
        return $http.get('/api/ComplaintSystemInfo/List')
    };



});
app.controller('ComplaintSystemInfoServiceController', function ($scope, ComplaintSystemInfoService) {
    console.log("ComplaintSystemInfoService");



    $scope.init = function () {
        ComplaintSystemInfoService.List()
                .then(function (success) {
                    console.log(success);
                    if (success.data != null) {
                        $scope.Objectstake = success.data;
                               
                    };
                },
                function (error) {
                    console.log(error);

                });


    };
    $scope.init();




});