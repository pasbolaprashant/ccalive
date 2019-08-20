var app = angular.module('ComplaintTypeModule', []);
app.service('ComplaintTypeService', function ($http) {
    this.save = function (obj) {
        console.log(obj);
        return $http.post('/api/ComplaintType/save', obj, {});
    };
    this.List = function () {
        return $http.get('/api/ComplaintType/List')
    };
    this.update = function (obj) {
        console.log(obj);
        return $http.post('/api/ComplaintType/update', obj, {});
    };

    this.delete = function (obj) {
        console.log(obj);
        return $http.post('/api/ComplaintType/delete', obj, {});
    };



});

app.controller('ComplaintTypeController', function ($scope, ComplaintTypeService, ComplaintCategoryService) {
    console.log("ComplaintType");

    $scope.Categorytypeshow = true;
    $scope.Complainttype = true;
    $scope.ComplainttypeSave = false;
    $scope.ComplainttypeBrand = false;
    $scope.Complainttypetotal = false;



    $scope.init = function () {
        $scope.Categorytypeshow = true;
        $scope.Complainttype = true;
        $scope.ComplainttypeSave = false;
        $scope.ComplainttypeBrand = false;
        $scope.Complainttypetotal = false;


        ComplaintTypeService.List()
        .then(function (success) {
            console.log(success);
            if (success.data != null) {
                $scope.ComplaintTypeArray = success.data;
            };
        },
        function (error) {
            console.log(error);
        });
        ComplaintCategoryService.List()
       .then(function (success) {
           console.log(success);
           if (success.data != null) {
               $scope.ComplaintCategoryArray = success.data;
           };
       },
       function (error) {
           console.log(error);
       });
};
  



    $scope.Save = function () {
        if (!$scope.ComplaintType) {
            console.log("hi");
            return false;
        }
        var obj = {
            ComplaintType: $scope.ComplaintType,
            ComplaintCategoryID: $scope.ComplaintCategoryID
        }
        console.log(obj);
        ComplaintTypeService.save(obj)
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




    $scope.Back = function () {
        $scope.init();
        $scope.Categorytypeshow = true;
    };



    $scope.AddComplainttype = function () {
        $scope.ComplaintType = '';
        $scope.ComplaintCategoryID = '';


        $scope.Categorytypeshow = false;
        $scope.Complainttype = false;
        $scope.ComplainttypeSave = true;
        $scope.ComplainttypeBrand = false;
        $scope.Complainttypetotal = true;

    };




    $scope.Edit = function (ComplaintCategoryID, ComplaintCategory, ComplaintType, ComplaintTypeID) {
        console.log(ComplaintTypeID);
        $scope.ComplaintCategoryID = ComplaintCategoryID;
        $scope.ComplaintCategory = ComplaintCategory;
        $scope.ComplaintType = ComplaintType;
        $scope.ComplaintTypeID = ComplaintTypeID;
       

        $scope.Categorytypeshow = false;
        $scope.Complainttype = false;
        $scope.ComplainttypeSave = true;
        $scope.ComplainttypeBrand = true;
        $scope.Complainttypetotal = false;

    }




    $scope.update = function () {

        console.log('ComplaintCategoryID');
        var obj = {
            ComplaintCategoryID: $scope.ComplaintCategoryID,
            ComplaintType: $scope.ComplaintType,
            ComplaintTypeID: $scope.ComplaintTypeID,
            ComplaintCategory : $scope.ComplaintCategory

        }
        ComplaintTypeService.update(obj)
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

    $scope.init();


    $scope.Delete = function (ComplaintCategoryID) {
        console.log(ComplaintCategoryID);

        var obj = {
            ComplaintCategoryID: ComplaintCategoryID,
        }
        ComplaintTypeService.delete(obj)
       .then(function (success) {
           console.log(success);
           $scope.init();
       },
       function (error) {
           console.log(error);
       });

    };




});

