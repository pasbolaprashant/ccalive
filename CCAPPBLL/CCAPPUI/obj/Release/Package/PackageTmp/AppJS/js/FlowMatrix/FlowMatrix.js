var app = angular.module('FlowMatrixModule', []);
app.service('FlowMatrixService', function ($http) {
    this.update = function (obj) {
        console.log(obj);
        return $http.post('/api/FlowMatrix/update', obj, {});
    };
    this.save = function (obj) {
        console.log(obj);
        return $http.post('/api/FlowMatrix/save', obj, {});
    };
    this.List = function () {
        return $http.get('/api/FlowMatrix/List')
    };

});



app.controller('FlowMatrixController', function ($scope, FlowMatrixService) {
    console.log("FlowMatrix");





    $scope.FlowMatrixArray = [{
        Local_LOCAL: 1
    },
      {
          GroupAr_AR: 1
      }];

    $scope.ShowSave = true;



    $scope.init = function () {
      
        FlowMatrixService.List()
        .then(function (success) {
            console.log(success);
            if (success.data.length > 0) {
                $scope.FlowMatrixArray = success.data;
                $scope.ShowSave = false;
            };
        },
        function (error) {
            console.log(error);
        });
    };
    $scope.init();







    $scope.Save = function () {
       
        console.log($scope.FlowMatrixArray);
        FlowMatrixService.save($scope.FlowMatrixArray)
            .then(function (success) {
                console.log(success);
                $scope.init();
            },
            function (error) {
                console.log(error);
            });
    };





    $scope.Update = function () {
    console.log($scope.FlowMatrixArray);
        FlowMatrixService.update($scope.FlowMatrixArray)
            .then(function (success) {
                console.log(success);
                $scope.init();
            },
            function (error) {
                console.log(error);
            });
    };

});