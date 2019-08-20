var app = angular.module('ALLComplaintRecordModule', []);

app.service('ALLComplaintRecordService', function ($http) {
    //getCOmplaintTYpe

    var ComplaintID = 0;

    this.GetALLComplaintDetail = function () {

        return $http.get('/api/PendingRequest/GetALLComplaintDetail');
    };
    this.DeleteComplaint = function (obj) {
        console.log(obj);
        return $http.post('/api/PendingRequest/DeleteComplaint', obj, {});
    };
    this.BulkDelete = function (obj) {
        console.log(obj);
        return $http.post('/api/PendingRequest/BulkDelete', obj, {});
    };
});
app.controller('ALLComplaintRecordController', function ($scope, $http, $location, $rootScope, HomeService, ALLComplaintRecordService, $uibModal, $q, $filter) {


    $scope.init = function () {
        ALLComplaintRecordService.GetALLComplaintDetail().then(function (success) {

            $scope.PendingRequest = success.data;
            console.log($scope.PendingRequest);
        },
            function (error) {
                console.log(error);
            });

    };

    $scope.DeleteComplaint = function (Complaint_ID) {
        var Obj = {
            Complaint_ID: Complaint_ID,
            ModifiedBy: $rootScope.session.EMP_CODE
        }

        console.log($scope.PendingRequest);
        swal({
            title: "Are you sure?",
            text: "Complaint will be Deleted",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Continue",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: true
        },
            function () {

        ALLComplaintRecordService.DeleteComplaint(Obj).then(function (success) {
            console.log(success);
            swal("Complaint Successfully Deleted");
            $scope.init();
        },
            function (error) {
                console.log(error);
                    });
            });
    };

    $scope.selectAll = function (pt) {

        console.log($scope.PendingRequest);
    
        angular.forEach($scope.PendingRequest, function (value, key) {
           console.log(value.Complaint_ID);
           
           if (value.IsSelected == false) {
               value.IsSelected = true;
               value.ModifiedBy = $rootScope.session.EMP_CODE;
                console.log(value.IsSelected);
           }
            else {
               value.IsSelected = false;
               value.ModifiedBy = $rootScope.session.EMP_CODE;
                console.log(value.IsSelected);
            }
        });
       

    };





    $scope.BulkDelete = function () {


        angular.forEach($scope.PendingRequest, function (value1, key) {
         
            value1.ModifiedBy = $rootScope.session.EMP_CODE;
        });

        console.log($scope.PendingRequest);
        swal({
            title: "Are you sure?",
            text: "Complaint will be Deleted",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Continue",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: true
        },
            function () {
           
                
                ALLComplaintRecordService.BulkDelete($scope.PendingRequest).then(function (success) {
                    console.log(success);
                    swal("Complaint Successfully Deleted");
                    $scope.init();
                },
                    function (error) {
                        console.log(error);
                    });
            });
    };





    $scope.init();


});