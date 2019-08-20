var app = angular.module('BrandModule', []);
app.service('BrandService', function ($http) {

    this.save = function (obj) {
        console.log(obj);
        return $http.post('/api/Brand/save', obj, {});
    };

    this.delete = function (obj) {
        console.log(obj);
        return $http.post('/api/Brand/delete', obj, {});
    };
    this.update = function (obj) {
        console.log(obj);
        return $http.post('/api/Brand/update', obj, {});
    };


    this.List = function () {
        return $http.get('/api/Brand/List')
    };
});


app.controller('BrandController', function ($scope, BrandService) {
    console.log("Brand");



    $scope.Brandshow = true;
    $scope.BrandSave = false;
    $scope.EditBrand = false;




    $scope.init = function () {

        $scope.Brandshow = true;
        $scope.BrandSave = false;
        $scope.EditBrand = false;

        BrandService.List()
        .then(function (success) {
            console.log(success);
            if (success.data != null) {
                $scope.BrandArray = success.data;
            };
        },
        function (error) {
            console.log(error);

        });
    };
    $scope.init();




    $scope.AddBrand = function () {
        $scope.BrandName = '';


        $scope.Brandshow = false;
        $scope.BrandView = false;
        $scope.EditBrand = false;
        $scope.Brand = true;
        $scope.BrandSave = true;
        $scope.Brandtotal = true;

    };

    $scope.Back = function () {
        $scope.init();
    };



    $scope.Save = function () {
        if (!$scope.BrandName) {
            console.log("hi");
            return false;
        }
        var obj = {
            BrandName: $scope.BrandName,
        }
        BrandService.save(obj)
            .then(function (success) {
                console.log(success);
                if (success.data.indexOf('error') == -1) {

                    swal("Success", "Successfully saved", "success");

                    $scope.init();
                }
                else {
                    swal("Success", "could not be saved", "success");

                }
                $scope.init();
            },
            function (error) {
                console.log(error);
            });
    };




    $scope.Edit = function (BrandID, BrandName) {
        console.log(BrandID);
        $scope.BrandID = BrandID;
        $scope.BrandName = BrandName;

        $scope.AddComplaint = false;
        $scope.BrandSave = true;
        $scope.Brandtotal = false;
        $scope.EditBrand = true;
        $scope.Brandshow = false;



    }



    $scope.Delete = function (BrandID) {
        console.log(BrandID);

        var obj = {
            BrandID: BrandID,
        }
        BrandService.delete(obj)
       .then(function (success) {
           console.log(success);
           $scope.init();
       },
       function (error) {
           console.log(error);
       });

    };




    $scope.update = function () {
        console.log('BrandID');
        var obj = {
            BrandID: $scope.BrandID,
            BrandName: $scope.BrandName,
        }
        BrandService.update(obj)
       .then(function (success) {
           console.log(success);
           if (success.data != null) {


               $scope.init();
           }
           },
           
       function (error) {
           console.log(error);
       });

       };
    
});
