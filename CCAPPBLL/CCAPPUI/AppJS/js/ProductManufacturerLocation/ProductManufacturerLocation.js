   var app = angular.module('ProductManufacturerLocationModule', []);
app.service('LocationService', function ($http) {
    this.save = function (obj) {
        console.log(obj);
        return $http.post('/api/ProductManufacturerLocation/save', obj, {})
    };
    this.List = function () {

        return $http.get('/api/ProductManufacturerLocation/List')
    };
    this.update = function (obj) {
        console.log(obj);
        return $http.post('/api/ProductManufacturerLocation/update', obj, {});
    };
    this.delete = function (obj) {
        console.log(obj);
        return $http.post('/api/ProductManufacturerLocation/delete', obj, {});
    };




   

});


app.controller('ProductManufacturerLocationController', function ($scope, LocationService, $rootScope) {
    console.log("ProductManufacturerLocationController");

    $scope.currentPage = 1;

    $scope.Prduct = false;
    $scope.ProductShow = true;
    $scope.ProductView = true;
    $scope.ProductSave = false;


    $scope.Exit = false;
    $scope.UploadExcel = false;

  



    $scope.init = function () {

        $scope.Prduct = false;
        $scope.ProductShow = true;
        $scope.ProductView = true;
        $scope.Exit = false;

       
     

        LocationService.List()
            .then(function (success) {
                console.log(success);
                if (success.data != null) {
                    $scope.ProductLocationArray = success.data;
                };
            },
            function (error) {
                console.log(error);

            });

      
    };
    $scope.init();


    $scope.AddProduct = function () {
        $scope.Prduct = true;
        $scope.ProductShow = false;
        $scope.ProductView = false;
        $scope.ProductSave = true;
        $scope.EditButton = false;

        $scope.Exit = false;
        
        $scope.ManufacturingLocation = "";
        
    };

    $scope.Back = function () {

        $scope.init();

    };

    $scope.Save = function () {
        if (!$scope.ManufacturingLocation) {
            swal("Please enter Product Manufacturing Location name");
            return false;
        }
      


        swal({
            title: "Are you sure?",
            text: "You want to save this ",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Continue",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: true
        }, function () {

            var obj = {
                ManufacturingLocation: $scope.ManufacturingLocation,
               
            }

            LocationService.save(obj)
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
        });
    };

    $scope.Edit = function (Location_Id, ManufacturingLocation) {
      
        $scope.Location_Id = Location_Id;
        $scope.ManufacturingLocation = ManufacturingLocation;
      
        $scope.Prduct = true;
        $scope.ProductShow = false;
        $scope.ProductView = false;
        $scope.ProductSave = false;
        $scope.EditButton = true;


    }

    $scope.Update = function () {
      
        if (!$scope.ManufacturingLocation) {
            swal("Please enter product Manufacturing Location name");
            return false;
        }
        

        swal({
            title: "Are you sure?",
            text: "You want to update this ",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Continue",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: true
        }, function () {
            var obj = {
                Location_Id: $scope.Location_Id,
                ManufacturingLocation: $scope.ManufacturingLocation
               
            }

            LocationService.update(obj)
                .then(function (success) {
                    console.log(success);
                    if (success.data.indexOf('error') == -1) {

                        swal("Success", "Successfully update", "success");

                        $scope.init();
                    }
                    else {
                        swal("Success", "could not be saved", "success");

                    }



                },

                function (error) {
                    console.log(error);
                });
        });

    };

    $scope.Delete = function (Location_Id) {
       

        swal({
            title: "Are you sure?",
            text: "You want to delete this ",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Continue",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: true
        }, function () {
            var obj = {
                Location_Id: Location_Id,
            }

            LocationService.delete(obj)
                .then(function (success) {
                    console.log(success);
                    if (success.data.indexOf('error') == -1) {

                        swal("Success", "Successfully deleted", "success");

                        $scope.init();
                    }
                    else {
                        swal("Success", "could not be saved", "success");

                    }
                },
                function (error) {
                    console.log(error);
                });
        });

    };
    
  

   

 
    $scope.Exit = function () {

        $scope.init();

    }

});

