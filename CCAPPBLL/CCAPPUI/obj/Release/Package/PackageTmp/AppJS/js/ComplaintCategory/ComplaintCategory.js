var app = angular.module('ComplaintCategoryModule', []);
app.service('ComplaintCategoryService', function ($http) {
    this.save = function (obj) {
        console.log(obj);
        return $http.post('/api/ComplaintCategory/save', obj, {});
    };

    this.List = function () {
        return $http.get('/api/ComplaintCategory/List')
    };

    this.update = function (obj) {
        console.log(obj)
        return $http.post('/api/ComplaintCategory/update', obj, {});
    };
    this.delete = function (obj) {
        console.log(obj);
        return $http.post('/api/ComplaintCategory/delete', obj, {});
    };


});


    app.controller('ComplaintCategoryController', function ($scope,ComplaintCategoryService) {
        console.log("ComplaintCategory");


    $scope.Categoryshow = true;
    $scope.Complaintshow = true;
    $scope.ComplaintSave = false;
    $scope.ComplaintBrand = true;
    $scope.Complainttotal = false;



    $scope.init = function () {

        $scope.Categoryshow = true;
       
        $scope.Complaintshow = true;
        $scope.ComplaintSave = false;
        $scope.ComplaintBrand = true;
        $scope.Complainttotal = false;
        ComplaintCategoryService.List()
        .then(function(success){
            console.log(success);
            if (success.data != null) {
                $scope.ComplaintCategoryArray = success.data;
            };
        },
        function(error){
            console.log(error);
        });
       

    };




    $scope.AddComplaint = function () {
        $scope.ComplaintCategory = '';
        $scope.Categoryshow = false;
        $scope.Complaintshow = false;
        $scope.ComplaintSave = true;
        $scope.ComplaintBrand = false;
        $scope.Complainttotal = true;
    };


    $scope.Back = function () {
        $scope.init();
        $scope.Categoryshow = true;
    };



    $scope.Save = function () {
        if (!$scope.ComplaintCategory) {
            console.log("hi");
            return false;
        }
        var obj = {
            complaintCategory: $scope.ComplaintCategory,
        }
        ComplaintCategoryService.save(obj)
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




    $scope.Edit = function (ComplaintCategoryID, ComplaintCategory) {
        console.log(ComplaintCategoryID);
        $scope.ComplaintCategoryID = ComplaintCategoryID;
        $scope.ComplaintCategory = ComplaintCategory;



        $scope.Categoryshow = false;
        $scope.Complaintshow = false;
        $scope.ComplaintSave = true;
        $scope.ComplaintBrand = true;
        $scope.Complainttotal = false;

    }


    $scope.update = function () {
        console.log('ComplaintCategoryID');
        var obj = {
            ComplaintCategory : $scope.ComplaintCategory,
            ComplaintCategoryID: $scope.ComplaintCategoryID,
        };
        ComplaintCategoryService.update(obj)
        .then(function(success){
            console.log(success);
            if (success.data != null) {


                $scope.init();
            }
        },
        function(error){
            console.log(error);
        });

    };




    $scope.Delete = function (ComplaintCategoryID) {
        console.log(ComplaintCategoryID);

        var obj = {
            ComplaintCategoryID: ComplaintCategoryID,
        }
        ComplaintCategoryService.delete(obj)
       .then(function (success) {
           console.log(success);
           $scope.init();
       },
       function (error) {
           console.log(error);
       });

    };

    $scope.init();


});