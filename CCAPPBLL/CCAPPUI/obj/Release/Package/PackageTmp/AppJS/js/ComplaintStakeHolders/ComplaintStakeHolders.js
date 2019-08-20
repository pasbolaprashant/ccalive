var app = angular.module('ComplaintStakeHoldersModule', []);
app.service('ComplaintStakeHoldersService', function ($http) {
    this.save = function (obj) {
        console.log(obj);
        return $http.post('/api/ComplaintStakeHolders/save', obj, {});
    };
    this.List = function () {
        return $http.get('/api/ComplaintStakeHolders/List')
    };
    this.update = function (obj) {
        console.log(obj);
        return $http.post('/api/ComplaintStakeHolders/update', obj, {});
    };
});


app.controller('ComplaintStakeHoldersController', function ($scope, ComplaintStakeHoldersService) {
    console.log("ComplaintStakeHolders");



    $scope.showSave = true;
    $scope.init = function () {
ComplaintStakeHoldersService.List()
        .then(function (success) {
            console.log(success);
            if (success.data != null) {
                $scope.Objectstake = success.data;
              
                $scope.showSave = false;
            };
        },
        function (error) {
            console.log(error);

        });
     

    };
    $scope.init();






    $scope.Save = function () {
        console.log($scope.Objectstake.Catalyst);
        var obj = {
            Catalyst: $scope.Objectstake.Catalyst,
            ComplaintHandler: $scope.Objectstake.ComplaintHandler,
            ComplaintManager: $scope.Objectstake.ComplaintManager,
            LocalTechnical: $scope.Objectstake.LocalTechnical,
            Manager: $scope.Objectstake.Manager,
        };


        console.log(obj);
        ComplaintStakeHoldersService.save(obj)
            .then(function (success) {
                console.log(success);

            },
            function (error) {
                console.log(error);
            });
    }


    $scope.Update = function () {
        console.log($scope.Objectstake);


        ComplaintStakeHoldersService.update($scope.Objectstake)
            .then(function (success) {
                console.log(success);
                $scope.init();
            },
            function (error) {
                console.log(error);
            });
    };


});
