var app = angular.module('ComplaintStakeHoldersModule', []);
app.service('ComplaintStakeHoldersService', function ($http) {
    this.save = function (obj) {
        console.log(obj);
        return $http.post('/api/ComplaintStakeHolders/save', obj, {});
    };
    this.List = function () {
        return $http.get('/api/ComplaintStakeHolders/List')
    };
    this.GetBU = function () {
        return $http.get('/api/ComplaintStakeHolders/GetBU')
    };
    this.Update = function (obj) {
        console.log(obj);
        return $http.post('/api/ComplaintStakeHolders/update', obj, {});
    };
    
    this.Delete = function (obj) {
        console.log(obj);
        return $http.post('/api/ComplaintStakeHolders/Delete', obj, {})

    };


});

app.controller('ComplaintStakeHoldersController', function ($scope, ComplaintStakeHoldersService, $rootScope) {
    console.log("ComplaintStakeHolders");


    $scope.Objectstake = [
    {
            BU_Array: [],
          
    }];


    $scope.AddMatrix = function () {

        $scope.Objectstake.push({

            Catalyst: "",
            ComplaintHandler: "",
            ComplaintManager : "",
            LocalTechnical: "",
            Manager: "",
            SBU_Name: "",
            ComplaintStakeHolders_ID: null,
            BU_Array: $scope.BUArrayInd,
            isNew: 1,
            isEdit: 0,
            CreatedBy: $rootScope.session.EMP_CODE
        });
    };

   

  




    $scope.Delete = function (ComplaintStakeHolders_ID) {
        console.log(ComplaintStakeHolders_ID);
        swal({
            title: "Are you sure?",
            text: "You will not be able to recover this imaginary file!",
            type: "warning",
            showCancelButton: true,
            confirmButtonClass: "btn-danger",
            confirmButtonText: "Yes",
            cancelButtonText: "No",
            closeOnConfirm: false,
            closeOnCancel: true
        },
            function (isConfirm) {
                if (isConfirm) {

                    console.log(ComplaintStakeHolders_ID);

                    var obj = {
                        ComplaintStakeHolders_ID: ComplaintStakeHolders_ID,

                    }
                    console.log(obj);
                    ComplaintStakeHoldersService.Delete(obj)
                        .then(function (success) {
                            swal("Deleted!", "Your file has been deleted.", "success");
                            console.log(success);

                            $scope.init();
                        },
                        function (error) {
                            console.log(error);
                        });

                }
            });
    }







    //$scope.Objectstake = [{
    //    Local_LOCAL: 1
    //},
    //  {
    //      GroupAr_AR: 1
    //  }];

    $scope.ShowSave = true;



    //$scope.init = function () {
    //    $scope.Objectstake = [];
    //    ComplaintStakeHoldersService.List()
    //        .then(function (success) {
    //            console.log(success);
    //            if (success.data.length > 0) {
    //                angular.forEach(success.data, function (value, key) {
    //                    $scope.Objectstake.push({



    //                        Catalyst: value.Catalyst,
    //                        ComplaintHandler: value.ComplaintHandler,
    //                        ComplaintManager: value.ComplaintManager,
    //                        LocalTechnical: value.LocalTechnical,
    //                        SBU_Name: value.SBU_Name,
    //                        BU_Array: $scope.BU_Array,
    //                        Manager: value.Manager,
    //                        ComplaintStakeHolders_ID: value.ComplaintStakeHolders_ID


    //                    });
    //                });
    //                //   $scope.Objectstake = success.data;
    //                $scope.ShowSave = false;
    //            };
    //        },
    //        function (error) {
    //            console.log(error);
    //        });


    //    ComplaintStakeHoldersService.GetBU()
    //        .then(function (success) {
    //            console.log(success);
    //            $scope.BU_Array = success.data;

    //            console.log($scope.BU_Array);
    //        },
    //        function (error) {
    //            console.log(error);
    //        });



    //};




    $scope.init = function () {
        console.log("insideinit");


        $scope.Objectstake = [
            {
                BU_Array: [],

            }];



        ComplaintStakeHoldersService.List().then(function (success) {
            $scope.Objectstake = success.data;

            console.log("Objectstake", $scope.Objectstake);
            return ComplaintStakeHoldersService.GetBU()
        }).then(function (success) {
            $scope.BUArrayInd = angular.copy(success.data);
            console.log("BU Array:", success.data);
            angular.forEach($scope.Objectstake, function (value, key) {
                value.BU_Array = success.data;
            });
        }, function (error) {
            console.log(error);
        });

    };

     $scope.init();







    $scope.Save = function () {

        console.log($scope.Objectstake);
        ComplaintStakeHoldersService.save($scope.Objectstake)
            .then(function (success) {
                console.log(success);
                $scope.init();
            },
            function (error) {
                console.log(error);
            });
    };


    $scope.Update = function () {
        console.log('ComplaintStakeHolders_ID');

        var keepgoin = true;
        console.log($scope.Objectstake);

        angular.forEach($scope.Objectstake, function (value, key) {

            console.log(value);

            if (!value.SBU_Name) {

                return false;
            }
            if (!value.ComplaintHandler) {

                return false;
            }
            if (!value.ComplaintManager) {

                return false;
            }

        });
        if (keepgoin) {
            $scope.finalArray = [];
            //----session-----//
            angular.forEach($scope.Objectstake, function (value, key) {

                $scope.finalArray.push({

                    Catalyst: value.Catalyst,
                    ComplaintHandler: value.ComplaintHandler,
                    ComplaintManager: value.ComplaintManager,
                    LocalTechnical: value.LocalTechnical,
                    SBU_Name: value.SBU_Name,
                    BU_Array: $scope.BU_Array,
                    Manager: value.Manager,
                    ComplaintStakeHolders_ID: value.ComplaintStakeHolders_ID,
                    isNew: value.isNew,
                    isEdit: value.isEdit,
                    CreatedBy: $rootScope.session.EMP_CODE
                });

            })
            console.log($scope.Objectstake);

            ComplaintStakeHoldersService.Update($scope.Objectstake).then(function (success) {
                swal("Update!", "data has been Update.", "success");
                console.log(success);
                if (success.data != null) {
                    $scope.init();
                }
            }, function (error) {
                console.log(error);
            });
        };


    }


    $scope.RemoveMatrix = function (index, ComplaintStakeHolders_ID) {
        console.log(ComplaintStakeHolders_ID);
        $scope.Objectstake.splice(index, 1)

        if (ComplaintStakeHolders_ID) {
            var obj = {
                ComplaintStakeHolders_ID: ComplaintStakeHolders_ID,
            }
            console.log(obj);
            ComplaintStakeHoldersService.Delete(obj).then(function (success) {
                swal("Deleted!", "Data has been deleted.", "success");
                console.log(success);
                $scope.init();
            },
                function (error) {
                    console.log(error);
                });
        }
    };



    //$scope.Remove = function (Id, index) {
    //    $scope.ApprovalList.splice(index, 1);

    //    console.log("is remove", Id);

    //    var data = {
    //        ApprovalMatrix_Id: Id,
    //    }

    //    ApprovalMatrixService.removeApproval(data).then(function success(data) {
    //        console.log(data);
    //        swal(data.data);
    //    }, function error(data)
    //        { console.log(data); });
    //}

});























//var app = angular.module('ComplaintStakeHoldersModule', []);
//app.service('ComplaintStakeHoldersService', function ($http) {
//    this.save = function (obj) {
//        console.log(obj);
//        return $http.post('/api/ComplaintStakeHolders/save', obj, {});
//    };
//    this.List = function () {
//        return $http.get('/api/ComplaintStakeHolders/List')
//    };
//    this.update = function (obj) {
//        console.log(obj);
//        return $http.post('/api/ComplaintStakeHolders/update', obj, {});
//    };
//});


//app.controller('ComplaintStakeHoldersController', function ($scope, ComplaintStakeHoldersService) {
//    console.log("ComplaintStakeHolders");



//    $scope.showSave = true;
//    $scope.init = function () {
//ComplaintStakeHoldersService.List()
//        .then(function (success) {
//            console.log(success);
//            if (success.data != null) {
//                $scope.Objectstake = success.data;
              
//                $scope.showSave = false;
//            };
//        },
//        function (error) {
//            console.log(error);

//        });
     

//    };
//    $scope.init();






//    $scope.Save = function () {
//        console.log($scope.Objectstake.Catalyst);
//        var obj = {
//            Catalyst: $scope.Objectstake.Catalyst,
//            ComplaintHandler: $scope.Objectstake.ComplaintHandler,
//            ComplaintManager: $scope.Objectstake.ComplaintManager,
//            LocalTechnical: $scope.Objectstake.LocalTechnical,
//            Manager: $scope.Objectstake.Manager,
//        };


//        console.log(obj);
//        ComplaintStakeHoldersService.save(obj)
//            .then(function (success) {
//                console.log(success);

//            },
//            function (error) {
//                console.log(error);
//            });
//    }


//    $scope.Update = function () {
//        console.log($scope.Objectstake);


//        ComplaintStakeHoldersService.update($scope.Objectstake)
//            .then(function (success) {
//                console.log(success);
//                $scope.init();
//            },
//            function (error) {
//                console.log(error);
//            });
//    };


//});
