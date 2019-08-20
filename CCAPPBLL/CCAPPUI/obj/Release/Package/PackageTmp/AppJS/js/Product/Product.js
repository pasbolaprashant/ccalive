var app = angular.module('ProductModule', []);
app.service('ProductService', function ($http) {
    this.save = function (obj) {
        console.log(obj);
        return $http.post('/api/Product/save', obj, {})
    };
    this.List = function () {

        return $http.get('/api/Product/List')
    };
    this.update = function (obj) {
        console.log(obj);
        return $http.post('/api/Product/update', obj, {});
    };
    this.delete = function (obj) {
        console.log(obj);
        return $http.post('/api/Product/delete', obj, {});
    };




});


app.controller('ProductController', function ($scope, ProductService, BrandService) {
    console.log("product");



    $scope.Prduct = false;
    $scope.ProductShow = true;
    $scope.ProductView = true;
    $scope.ProductSave = false;

    $scope.init = function () {
        
        $scope.Prduct = false;
        $scope.ProductShow = true;
        $scope.ProductView = true;

        ProductService.List()
         .then(function (success) {
             console.log(success);
             if (success.data != null) {
                 $scope.ProductArray = success.data;
             };
         },
         function (error) {
             console.log(error);

         });

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




    $scope.AddProduct = function () {
        $scope.Prduct = true;
        $scope.ProductShow = false;
        $scope.ProductView = false;
        $scope.ProductSave = true;
     };


    $scope.Back = function () {

        $scope.init();

    };


    $scope.Save = function () {
        if (!$scope.ProductName) {
            console.log("hi");
            aler('Emtpy product name');
            return false;
        }
        var obj = {
            ProductName: $scope.ProductName,
            BrandID: $scope.BrandID,
            ProductCode: $scope.ProductCode,
            BrandName : $scope.BrandName,

        }
        ProductService.save(obj)
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
    


    $scope.Edit = function (BrandID, BrandName,ProductID, ProductName, ProductCode) {
        console.log(BrandID);
        $scope.BrandID = BrandID;
        $scope.BrandName = BrandName;
        $scope.ProductName = ProductName;
        $scope.ProductCode = ProductCode;
        $scope.ProductID = ProductID;

        $scope.Prduct = true;
        $scope.ProductShow = false;
        $scope.ProductView = false;
        $scope.ProductSave = false;
        $scope.EditButton = true;


    }


    $scope.Update = function () {
        console.log('BrandID');
        var obj = {
            BrandID: $scope.BrandID,
            BrandName: $scope.BrandName,
            ProductName: $scope.ProductName,
            ProductCode: $scope.ProductCode,
            ProductID: $scope.ProductID

        }
        ProductService.update(obj)
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



    $scope.Delete = function ( ProductID) {
        console.log(ProductID);

        var obj = {
            ProductID: ProductID,
        }
        ProductService.delete(obj)
       .then(function (success) {
           console.log(success);
           $scope.init();
       },
       function (error) {
           console.log(error);
       });

    };

    
   
});
