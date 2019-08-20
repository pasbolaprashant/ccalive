var Techapp = angular.module('TechnicalHeadModule', []);

Techapp.service('TechnicalHeadService', function ($http) {
    //getCOmplaintTYpe

    //this.GetComplaintList = function (ComplaintCategoryId) {

    //    return $http.get('/api/ComplaintType/GetComplaintType/?ComplaintCategoryId=' + ComplaintCategoryId);
    //};
    ////GetComplaintCategory
    //this.GetComplaintCategory = function (id) {

    //    return $http.get('/api/ComplaintType/GetComplaintCategory/', {});
    //};
    this.Initialize = function (obj) {

        return $http.post('/api/TechnicalHead/GetData/', obj);
    };
    
    
    
});
Techapp.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;

            element.bind('change', function () {
                scope.$apply(function () {
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);
Techapp.controller('TechnicalHeadController', function ($scope, $http, $location, $rootScope, TechnicalHeadService, $modal, $q) {

    $scope.init = function () {
        //alert('Error!! First name can not tbe empty.');

    }

    $scope.Initialize = function () {

        var obj = {
            Cosmplaint_ID: '',
            Department_ID:'',
            ProcessReplicated: $scope.Thead.Replicated,
            NonApplicationReason: $scope.NonApplicationReason,
            ReApplicationDate: $scope.ReApplicationDate ,
            ReApplicationReqd: $scope.ReApplicationReqd ,
            ClosureRecomended: $scope.RecommendedClosure, 
            CustomerCommunication: $scope.CustomerCommunication,
            SystemFollowed: $scope.SystemFollowed ,
            ApplicationComments: $scope.ApplicationComments ,
            ComplaintObserved: $scope.ComplaintObserved,
            TMInformed: $scope.TMInformed,
            TMApproved: $scope.TMApproved,
            CourseOfAction: $scope.CourseOfAction ,
            CustomerComplaintClosed: $scope.CustomerComplaintClosed ,
            //CreatedBy: $scope.CreatedBy 
            //CreationDate:  ,
            //ModifiedBy ,
            //ModifiedDate 

        };

        var Undercoat = {
            Complaint_ID: '',
            Substrate_ID: $scope.Substrate,
            CoatType_ID: '',
            ApplicationType: 'Undercoat',
            ApplicationTypeValue: 'Primer',
            Value3: $scope.Undercoat.UndercoatSelect,
            Value4: $scope.Undercoat.UndercoatSelectChildInput,
            Value5: $scope.Undercoat.Ratio,
            Value6: $scope.Undercoat.Hardener,
            Value7: '',
            Value8: ''
        };

        var Underbody = {
            Complaint_ID: '',
            Substrate_ID: $scope.Substrate,
            CoatType_ID: '',
            ApplicationType: 'Underbody',
            ApplicationTypeValue: $scope.Underbody.UnderbodySelect,
            Value3: $scope.Underbody.BodyFillerInput,
            Value4: $scope.Underbody.UnderbodySelectChild,
            Value5: $scope.Underbody.UnderbodySelectChildInput,
            Value6: '',
            Value7: '',
            Value8: ''
        };

        var Basecoat = {
            Complaint_ID: '',
            Substrate_ID: $scope.Substrate,
            CoatType_ID: '',
            ApplicationType: 'Basecoat',
            ApplicationTypeValue: $scope.Basecoat.BasecoatSelect,
            Value3: $scope.Basecoat.MetallicBasecoat,
            Value4: $scope.Basecoat.Ratio,
            Value5: '',
            Value6: '',
            Value7: '',
            Value8: ''
        };

        var Clearcoat = {
            Complaint_ID: '',
            Substrate_ID: $scope.Substrate,
            CoatType_ID: '',
            ApplicationType: 'Clearcoat',
            ApplicationTypeValue: $scope.Clearcoat.ClearcoatSelect,
            Value3: $scope.Clearcoat.ClearcoatSelectNoOfCost,
            Value4: $scope.Clearcoat.Hardener,
            Value5: $scope.Clearcoat.Ratio,
            Value6: '',
            Value7: '',
            Value8: ''
        };

        var Thinner = {
            Complaint_ID: '',
            Substrate_ID: $scope.Substrate,
            CoatType_ID: '',
            ApplicationType: 'Thinner',
            ApplicationTypeValue: $scope.Thinner.ThinnerSelect,
            Value3: $scope.Thinner.ThinnerSelectChildInput,
            Value4: $scope.Thinner.MixingRatio,
            Value5: '',
            Value6: '',
            Value7: '',
            Value8: ''
        };

        //};
        var SystemInfoData = [Undercoat, Underbody, Basecoat, Clearcoat, Thinner];
        var WholeData = {
            ComplaintReapplication: obj,
            SystemInformation: SystemInfoData

        };

        TechnicalHeadService.Initialize(WholeData).then(function (success) {
            console.log("Api hit");

        },
            function (error) {
                console.log(error);
            });


    }






    $scope.uploadImage = function () {
        console.log($scope.brandName);

        var obj = {
            Cosmplaint_ID: '',
            Department_ID: '',
            ProcessReplicated: $scope.Thead.Replicated,
            NonApplicationReason: $scope.NonApplicationReason,
            ReApplicationDate: $scope.ReApplicationDate,
            ReApplicationReqd: $scope.ReApplicationReqd,
            ClosureRecomended: $scope.RecommendedClosure,
            CustomerCommunication: $scope.CustomerCommunication,
            SystemFollowed: $scope.SystemFollowed,
            ApplicationComments: $scope.ApplicationComments,
            ComplaintObserved: $scope.ComplaintObserved,
            TMInformed: $scope.TMInformed,
            TMApproved: $scope.TMApproved,
            CourseOfAction: $scope.CourseOfAction,
            CustomerComplaintClosed: $scope.CustomerComplaintClosed,
            //CreatedBy: $scope.CreatedBy 
            //CreationDate:  ,
            //ModifiedBy ,
            //ModifiedDate 

        };

        var Undercoat = {
            Complaint_ID: '',
            Substrate_ID: $scope.Substrate,
            CoatType_ID: '',
            ApplicationType: 'Undercoat',
            ApplicationTypeValue: 'Primer',
            Value3: $scope.Undercoat.UndercoatSelect,
            Value4: $scope.Undercoat.UndercoatSelectChildInput,
            Value5: $scope.Undercoat.Ratio,
            Value6: $scope.Undercoat.Hardener,
            Value7: '',
            Value8: ''
        };

        var Underbody = {
            Complaint_ID: '',
            Substrate_ID: $scope.Substrate,
            CoatType_ID: '',
            ApplicationType: 'Underbody',
            ApplicationTypeValue: $scope.Underbody.UnderbodySelect,
            Value3: $scope.Underbody.BodyFillerInput,
            Value4: $scope.Underbody.UnderbodySelectChild,
            Value5: $scope.Underbody.UnderbodySelectChildInput,
            Value6: '',
            Value7: '',
            Value8: ''
        };

        var Basecoat = {
            Complaint_ID: '',
            Substrate_ID: $scope.Substrate,
            CoatType_ID: '',
            ApplicationType: 'Basecoat',
            ApplicationTypeValue: $scope.Basecoat.BasecoatSelect,
            Value3: $scope.Basecoat.MetallicBasecoat,
            Value4: $scope.Basecoat.Ratio,
            Value5: '',
            Value6: '',
            Value7: '',
            Value8: ''
        };

        var Clearcoat = {
            Complaint_ID: '',
            Substrate_ID: $scope.Substrate,
            CoatType_ID: '',
            ApplicationType: 'Clearcoat',
            ApplicationTypeValue: $scope.Clearcoat.ClearcoatSelect,
            Value3: $scope.Clearcoat.ClearcoatSelectNoOfCost,
            Value4: $scope.Clearcoat.Hardener,
            Value5: $scope.Clearcoat.Ratio,
            Value6: '',
            Value7: '',
            Value8: ''
        };

        var Thinner = {
            Complaint_ID: '',
            Substrate_ID: $scope.Substrate,
            CoatType_ID: '',
            ApplicationType: 'Thinner',
            ApplicationTypeValue: $scope.Thinner.ThinnerSelect,
            Value3: $scope.Thinner.ThinnerSelectChildInput,
            Value4: $scope.Thinner.MixingRatio,
            Value5: '',
            Value6: '',
            Value7: '',
            Value8: ''
        };

        //};
        var SystemInfoData = [Undercoat, Underbody, Basecoat, Clearcoat, Thinner];
        var WholeData =
            {
                ComplaintReapplication: obj,
                SystemInformation: SystemInfoData

            };
        console.log(WholeData);
        var fd = new FormData();
        
        fd.append('file1', $scope.file.img1);
        fd.append('file2', $scope.file.img2);
        fd.append('file3', $scope.file.img3);
        fd.append('data', angular.toJson(WholeData));

        //swal({
        //    title: "Are you sure?",
        //    text: "you are going to create request",
        //    type: "warning",
        //    showCancelButton: true,
        //    confirmButtonColor: "#DD6B55",
        //    confirmButtonText: "Yes, Create",
        //    cancelButtonText: "No, cancel plx!",
        //    closeOnConfirm: false,
        //    closeOnCancel: false
        //},
        //    function (isConfirm) {
        //        if (isConfirm) {
        //            $http.post("/api/TechnicalHead/uploadImg", fd, {
        //                transformRequest: angular.identity,
        //                headers: { 'Content-Type': undefined }

        //            }).then(function (success) {
        //                swal("Done!", "Process Done successfully!", "success");

        //            },
        //                function (error) {
        //                    swal("error", error.data, "error");
        //                });
        //        }
        //        else {
        //            swal("Cancelled", "Your imaginary file is safe :)", "error");
        //        }
        //    });



        $http.post("/api/TechnicalHead/uploadImg", fd, {
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }

        }).then(function (success) {
            swal("Done!", "Process Done successfully!", "success");
           
        },
            function (error) {
                console.log(error.data);
                swal("error",error.data, "error");
            });
    }
});








