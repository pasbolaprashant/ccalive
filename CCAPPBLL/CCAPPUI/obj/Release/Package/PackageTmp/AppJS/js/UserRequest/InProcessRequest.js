﻿var app = angular.module('InProcessRequestModule', []);

app.service('InProcessRequestService', function ($http) {
    //getCOmplaintTYpe

    var ComplaintID = 0;

    this.GetPendingRequestForApproval = function (EmpCode) {

        return $http.get('/api/PendingRequest/GetInProcessRequest?EmpCode=' + EmpCode);
    };
    this.GetComplaintDetails = function (ComplaintId) {

        return $http.get('/api/RequestCreation/GetComplaintDetails?ComplaintId=' + ComplaintId);
    };


    this.GetStatusDetails = function (ComplaintId) {

        return $http.get('/api/PendingRequest/GetStatusDetails?ComplaintID=' + ComplaintId);
    };

    this.GetTSEList = function () {

        return $http.get('/api/PendingRequest/GetTSEInfo');
    };

    this.GetComplaintHandlerDetails = function (ComplaintId, Dept) {

        return $http.get('/api/PendingRequest/GetComplaintHandlerDetails?ComplaintID=' + ComplaintId + '&Department=' + Dept);
    };

    this.GetComplaintList = function (ComplaintCategoryId) {

        return $http.get('/api/Complaint/GetComplaintType/?ComplaintCategoryId=' + ComplaintCategoryId);
    };
    //GetComplaintCategory
    this.GetComplaintCategory = function (id) {

        return $http.get('/api/Complaint/GetComplaintCategory/', {});
    };
    this.GetData = function (obj) {

        return $http.post('/api/RequestCreation/GetData/', obj);
    };


    this.CMAssignToTSE = function (obj) {

        return $http.post('/api/PendingRequest/CMAssignToTSE', obj, {});
    };
    this.CHApprovalRCAPlnt = function (obj) {

        return $http.post('/api/PendingRequest/CHApprovalRCAPlnt', obj, {});
    };

    this.PlntAssignToBM = function (obj) {

        return $http.post('/api/PendingRequest/PlntAssignToBM', obj, {});
    };

    this.DealerDetails = function (obj) {

        return $http.get('/api/DealerMaster/DealerDetails/', {});
    };

    this.GetProductId = function (obj) {

        return $http.get('/api/ProductMaster/GetProductId/', {});
    };

    this.GetBrandName = function (id) {

        return $http.get('/api/ProductMaster/GetBrandName/?Brand_Id=' + id);
    };

    this.GetSubstrateId = function () {

        return $http.get('/api/Substrate/GetSubstrateId/', {});
    };
    this.SystemInformation = function (SystemInfo) {

        return $http.post('/api/RequestCreation/GetSystemInfo/', SystemInfo);
    };

    this.GetBatchAndMfg = function (id) {

        return $http.get('/api/BatchAndMfg/GetBatchAndMfg/?ProductId=' + id);
    };



    this.CreateRequest = function (ReqDtl) {

        return $http.post('/api/RequestCreation/RecieveData/', ReqDtl);
    };

    this.uploadImage = function (fd) {

        return $http.post("/api/PendingRequest/uploadClosure", fd, {
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }

        });
    };

    this.AssignToCH = function (fd) {

        return $http.post("/api/PendingRequest/AssignToCH", fd, {
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }

        });
    };

});

app.controller('InProcessRequestController', function ($scope, $http, $location, $rootScope, InProcessRequestService, $uibModal, $q, $filter) {

    $scope.PhotoURL = [];
    $scope.S1 = true;
    $scope.S2 = false;
    $scope.S3 = false;
    $scope.S4 = false;
    $scope.S5 = false;
    $scope.ComplaintHandler = false;
    $scope.ComplaintManager = false;
    $scope.PedingApprovalCH = false;
    $scope.Request = {

        CustomerName: '',
        CustomerNo: '',
        CustomerAddress: '',
        CustomerEmail: '',
        CustomerAccountName: '',
        DateOfvehicleRepair: '',
        DealerID: '',
        CreatedBy: $rootScope.session.EMP_CODE
    };
    $scope.Complaint = [
        Quantity = null,
        ProductCode = null

    ];

    $scope.TSEList = [];
    $scope.TSE = {};
    $scope.Plnt = {};
    $scope.Thead = {
        //Complaint_ID :'',
        //Department_ID: '',
        //ProcessReplicated: false,
        //NonApplicationReason: '',
        //ReApplicationDate: '',
        //ReApplicationReqd: false,
        //ClosureRecomended: false,
        //CustomerCommunication: '',
        //SystemFollowed: false,
        //ApplicationComments: '',
        //ComplaintObserved: false,
        //TMInformed: false,
        //TMApproved:false,
        //CourseOfAction: '',
        //CustomerComplaintClosed: false,
        //CreatedBy: '',

        //ProblemDescription: ''



    };

    $scope.ShowGrid = true;
    $scope.ShowDetails = false;

    $scope.init = function () {
        $scope.S1 = true;
        $scope.ShowGrid = true;
        $scope.ShowDetails = false;
        $scope.GetPendingRequest($rootScope.session.EMP_CODE);

        InProcessRequestService.DealerDetails().then(function (success) {
            console.log("inside GetComplaintCategory");
            $scope.DealerDetails = success.data;
            console.log($scope.DealerDetails);
        },
            function (error) {
                console.log(error);
            });


        //get substrate id
        InProcessRequestService.GetSubstrateId().then(function (success) {
            console.log("inside GetComplaintCategory");
            $scope.SubstrateMaster = success.data;
            console.log($scope.SubstrateMaster);
        },
            function (error) {
                console.log(error);
            });


        //get product ID
        InProcessRequestService.GetProductId().then(function (success) {
            console.log("inside GetProductId");
            $scope.ProductMaster = success.data;
            console.log($scope.ProductMaster);
        },
            function (error) {
                console.log(error);
            });


        //GetComplaintCategory
        InProcessRequestService
            .GetComplaintCategory().then(function (success) {
                console.log("inside GetComplaintCategory");
                $scope.ComplaintCategory = success.data;
                console.log($scope.ComplaintCategory);
                $scope.MainArray = angular.copy($scope.ComplaintCategory);
                console.log($scope.MainArray);
                //obj.ComplaintLst.push(success.data)
            },
            function (error) {
                console.log(error);
            });
    }

    $scope.GetCurrentWindow = function (curr) {
        if (curr == 'S1') {
            $scope.S1 = true;
           
        }      

    }
    
    $scope.GetPendingRequest = function (EmpCode) {
        InProcessRequestService.GetPendingRequestForApproval(EmpCode).then(function (success) {

            $scope.PendingRequest = success.data;
            console.log($scope.DealerDetails);
        },
            function (error) {
                console.log(error);
            });

    };

    $scope.GetTSE = function () {
        InProcessRequestService.GetTSEList().then(function (success) {

            $scope.TSEList = success.data;
            console.log($scope.TSEList);
        },
            function (error) {
                console.log(error);
            });

    };

    $scope.GetComplaintDetails = function (ComplaintId, status) {
        InProcessRequestService.GetComplaintDetails(ComplaintId).then(function (success) {

            $scope.ShowGrid = false;
            $scope.ShowDetails = true;
            $scope.ComplaintDtl = success.data;
            console.log($scope.DealerDetails);

            $scope.Request.DealerID = $scope.ComplaintDtl.CustomerComplaint.Dealer_ID;
            $scope.Thead.Complaint_ID = ComplaintId;
            $scope.Plnt.Complaint_ID = ComplaintId;
            $scope.DealerName();
            $scope.Request.CustomerName = $scope.ComplaintDtl.CustomerComplaint.CustomerName;
            $scope.Request.CustomerNo = $scope.ComplaintDtl.CustomerComplaint.CustomerPhone;
            $scope.Request.CustomerAddress = $scope.ComplaintDtl.CustomerComplaint.CustomerAddress;
            $scope.Request.CustomerEmail = $scope.ComplaintDtl.CustomerComplaint.CustomerEmail;
            $scope.Request.CustomerAccountName = $scope.ComplaintDtl.CustomerComplaint.CustomerAccountName;
            $scope.Request.DateOfvehicleRepair = $scope.ComplaintDtl.CustomerComplaint.DateOfVehicleRepair;
            $scope.Complaint.Quantity = $scope.ComplaintDtl.CustomerComplaint.ComplaintQty;
            $scope.ProblemDescription = $scope.ComplaintDtl.CustomerComplaint.ComplaintDesc;
            $scope.Complaint.ProductCode = $scope.ComplaintDtl.CustomerComplaint.ProductCode;
            $scope.Complaint.BatchNumber = $scope.ComplaintDtl.CustomerComplaint.BatchNumber;
            $scope.BrandName();
            $scope.Request.CreatedBy = $scope.ComplaintDtl.CustomerComplaint.CreatedBy;
            
           // $scope.GetManufactureDate($scope.Complaint.BatchNumber);
            $scope.Complaint.QtyOfComplaintStock = $scope.ComplaintDtl.CustomerComplaint.QtyOfComplaintStock;

            if ($scope.Undercoat == null) {
                $scope.Undercoat = {
                    UndercoatSelect: '',
                    UndercoatSelectChildInput: '',
                    Ratio: '',
                    Hardener: ''
                };
            }
            if ($scope.Underbody == null) {
                $scope.Underbody = {
                    UnderbodySelect: '',
                    BodyFillerInput: '',
                    UnderbodySelectChild: '',
                    UnderbodySelectChildInput: ''
                };
            }
            if ($scope.Basecoat == null) {
                $scope.Basecoat = {
                    BasecoatSelect: '',
                    MetallicBasecoat: '',
                    Ratio: '',
                };
            }
            if ($scope.Clearcoat == null) {
                $scope.Clearcoat = {
                    ClearcoatSelect: '',
                    ClearcoatSelectNoOfCost: '',
                    ClearcoatSelectNoOfCost: '',
                    Hardener: '',
                    Ratio: ''

                };
            }
            if ($scope.Thinner == null) {
                $scope.Thinner = {
                    ThinnerSelect: '',
                    ThinnerSelectChildInput: '',
                    MixingRatio: ''


                };
            }

            if ($scope.ReappUndercoat == null) {
                $scope.ReappUndercoat = {
                    UndercoatSelect: '',
                    UndercoatSelectChildInput: '',
                    Ratio: '',
                    Hardener: ''
                };
            }
            if ($scope.ReappUnderbody == null) {
                $scope.ReappUnderbody = {
                    UnderbodySelect: '',
                    BodyFillerInput: '',
                    UnderbodySelectChild: '',
                    UnderbodySelectChildInput: ''
                };
            }
            if ($scope.ReappBasecoat == null) {
                $scope.ReappBasecoat = {
                    BasecoatSelect: '',
                    MetallicBasecoat: '',
                    Ratio: '',
                };
            }
            if ($scope.ReappClearcoat == null) {
                $scope.ReappClearcoat = {
                    ClearcoatSelect: '',
                    ClearcoatSelectNoOfCost: '',
                    ClearcoatSelectNoOfCost: '',
                    Hardener: '',
                    Ratio: ''

                };
            }
            if ($scope.ReappThinner == null) {
                $scope.ReappThinner = {
                    ThinnerSelect: '',
                    ThinnerSelectChildInput: '',
                    MixingRatio: ''


                };
            }


            $scope.Substrate = $scope.ComplaintDtl.SystemInformation[0].Substrate_ID;
            $scope.ReappSubstrate = $scope.ComplaintDtl.SystemInformation[0].Substrate_ID;
            $scope.Undercoat.UndercoatSelect = $scope.ComplaintDtl.SystemInformation[0].Value3;
            $scope.Undercoat.UndercoatSelectChildInput = $scope.ComplaintDtl.SystemInformation[0].Value4;
            $scope.Undercoat.Ratio = $scope.ComplaintDtl.SystemInformation[0].Value5;
            $scope.Undercoat.Hardener = $scope.ComplaintDtl.SystemInformation[0].Value6;
            $scope.ReappUndercoat.UndercoatSelect = $scope.ComplaintDtl.SystemInformation[0].Value3;
            $scope.ReappUndercoat.UndercoatSelectChildInput = $scope.ComplaintDtl.SystemInformation[0].Value4;
            $scope.ReappUndercoat.Ratio = $scope.ComplaintDtl.SystemInformation[0].Value5;
            $scope.ReappUndercoat.Hardener = $scope.ComplaintDtl.SystemInformation[0].Value6;

            $scope.Underbody.UnderbodySelect = $scope.ComplaintDtl.SystemInformation[1].ApplicationTypeValue;
            $scope.Underbody.BodyFillerInput = $scope.ComplaintDtl.SystemInformation[1].Value3;
            $scope.Underbody.UnderbodySelectChild = $scope.ComplaintDtl.SystemInformation[1].Value4;
            $scope.Underbody.UnderbodySelectChildInput = $scope.ComplaintDtl.SystemInformation[1].Value5;
            $scope.ReappUnderbody.UnderbodySelect = $scope.ComplaintDtl.SystemInformation[1].ApplicationTypeValue;
            $scope.ReappUnderbody.BodyFillerInput = $scope.ComplaintDtl.SystemInformation[1].Value3;
            $scope.ReappUnderbody.UnderbodySelectChild = $scope.ComplaintDtl.SystemInformation[1].Value4;
            $scope.ReappUnderbody.UnderbodySelectChildInput = $scope.ComplaintDtl.SystemInformation[1].Value5;


            $scope.Basecoat.BasecoatSelect = $scope.ComplaintDtl.SystemInformation[2].ApplicationTypeValue;
            $scope.Basecoat.MetallicBasecoat = $scope.ComplaintDtl.SystemInformation[2].Value3;
            $scope.Basecoat.Ratio = $scope.ComplaintDtl.SystemInformation[2].Value4;
            $scope.ReappBasecoat.BasecoatSelect = $scope.ComplaintDtl.SystemInformation[2].ApplicationTypeValue;
            $scope.ReappBasecoat.MetallicBasecoat = $scope.ComplaintDtl.SystemInformation[2].Value3;
            $scope.ReappBasecoat.Ratio = $scope.ComplaintDtl.SystemInformation[2].Value4;


            $scope.Clearcoat.ClearcoatSelect = $scope.ComplaintDtl.SystemInformation[3].ApplicationTypeValue;
            $scope.Clearcoat.ClearcoatSelectNoOfCost = $scope.ComplaintDtl.SystemInformation[3].Value3;
            $scope.Clearcoat.Hardener = $scope.ComplaintDtl.SystemInformation[3].Value4;
            $scope.Clearcoat.Ratio = $scope.ComplaintDtl.SystemInformation[3].Value5;
            $scope.ReappClearcoat.ClearcoatSelect = $scope.ComplaintDtl.SystemInformation[3].ApplicationTypeValue;
            $scope.ReappClearcoat.ClearcoatSelectNoOfCost = $scope.ComplaintDtl.SystemInformation[3].Value3;
            $scope.ReappClearcoat.Hardener = $scope.ComplaintDtl.SystemInformation[3].Value4;
            $scope.ReappClearcoat.Ratio = $scope.ComplaintDtl.SystemInformation[3].Value5;


            $scope.Thinner.ThinnerSelect = $scope.ComplaintDtl.SystemInformation[4].ApplicationTypeValue;
            $scope.Thinner.ThinnerSelectChildInput = $scope.ComplaintDtl.SystemInformation[4].Value3;
            $scope.Thinner.MixingRatio = $scope.ComplaintDtl.SystemInformation[4].Value4;
            $scope.ReappThinner.ThinnerSelect = $scope.ComplaintDtl.SystemInformation[4].ApplicationTypeValue;
            $scope.ReappThinner.ThinnerSelectChildInput = $scope.ComplaintDtl.SystemInformation[4].Value3;
            $scope.ReappThinner.MixingRatio = $scope.ComplaintDtl.SystemInformation[4].Value4;


            //$scope.AddRowArray = $scope.ComplaintDtl.ComplaintTypeArray;
            $scope.AddRowArray = [];
            for (var i = 0; i < $scope.ComplaintDtl.ComplaintTypeArray.length; i++) {

                $scope.AddRowArray.push({
                    ComplaintCategory: $scope.MainArray,
                    ComplaintCategory_ID: $scope.ComplaintDtl.ComplaintTypeArray[i].ComplaintCategory_ID,
                    SelectedComplaintsArray: $scope.ComplaintDtl.ComplaintTypeArray[i].SelectedComplaintsArray,
                    ComplaintLst: []

                });

                var obj = $scope.GetComplaintList($scope.AddRowArray[i]);

                obj.then(function (v) {

                },
                    function (err) {
                        console.log('error');
                    });
            }

            $scope.PhotoURL = $scope.ComplaintDtl.PhotoInfo;

            if (status == 'Pending - Complaint Handler') {
                $scope.ComplaintHandler = true;
                $scope.ComplaintManager = false;
                $scope.TSE = false;

            }
            else if (status == 'Pending - Complaint Manager') {
                $scope.ComplaintHandler = false;
                $scope.ComplaintManager = true;
                $scope.TSEManager = false;
                //GetComplaintHandlerDetails
                $scope.GetTSE();
                PendingRequestService.GetComplaintHandlerDetails(ComplaintId, 2).then(function (success) {
                    $scope.Thead = success.data.Model;

                    $scope.ReappSubstrate = success.data.SystemInfo[0].Substrate_ID;

                    $scope.ReappUndercoat.UndercoatSelect = success.data.SystemInfo[0].Value3;
                    $scope.ReappUndercoat.UndercoatSelectChildInput = success.data.SystemInfo[0].Value4;
                    $scope.ReappUndercoat.Ratio = success.data.SystemInfo[0].Value5;
                    $scope.ReappUndercoat.Hardener = success.data.SystemInfo[0].Value6;

                    $scope.ReappUnderbody.UnderbodySelect = success.data.SystemInfo[1].ApplicationTypeValue;
                    $scope.ReappUnderbody.BodyFillerInput = success.data.SystemInfo[1].Value3;
                    $scope.ReappUnderbody.UnderbodySelectChild = success.data.SystemInfo[1].Value4;
                    $scope.ReappUnderbody.UnderbodySelectChildInput = success.data.SystemInfo[1].Value5;

                    $scope.ReappBasecoat.BasecoatSelect = success.data.SystemInfo[2].ApplicationTypeValue;
                    $scope.ReappBasecoat.MetallicBasecoat = success.data.SystemInfo[2].Value3;
                    $scope.ReappBasecoat.Ratio = success.data.SystemInfo[2].Value4;

                    $scope.ReappClearcoat.ClearcoatSelect = success.data.SystemInfo[3].ApplicationTypeValue;
                    $scope.ReappClearcoat.ClearcoatSelectNoOfCost = success.data.SystemInfo[3].Value3;
                    $scope.ReappClearcoat.Hardener = success.data.SystemInfo[3].Value4;
                    $scope.ReappClearcoat.Ratio = success.data.SystemInfo[3].Value5;

                    $scope.ReappThinner.ThinnerSelect = success.data.SystemInfo[4].ApplicationTypeValue;
                    $scope.ReappThinner.ThinnerSelectChildInput = success.data.SystemInfo[4].Value3;
                    $scope.ReappThinner.MixingRatio = success.data.SystemInfo[4].Value4;

                }, function (error) {
                    console.log(error);
                });
            }
            else if (status == 'Pending - TSE') {
                $scope.ComplaintHandler = false;
                $scope.ComplaintManager = false;
                $scope.TSEManager = true;
                $scope.PedingApprovalCH = false;
                //GetComplaintHandlerDetails
                $scope.GetTSE();
                PendingRequestService.GetComplaintHandlerDetails(ComplaintId, 2).then(function (success) {
                    $scope.TSE = success.data.Model;

                    $scope.ReappSubstrate = success.data.SystemInfo[0].Substrate_ID;

                    $scope.ReappUndercoat.UndercoatSelect = success.data.SystemInfo[0].Value3;
                    $scope.ReappUndercoat.UndercoatSelectChildInput = success.data.SystemInfo[0].Value4;
                    $scope.ReappUndercoat.Ratio = success.data.SystemInfo[0].Value5;
                    $scope.ReappUndercoat.Hardener = success.data.SystemInfo[0].Value6;

                    $scope.ReappUnderbody.UnderbodySelect = success.data.SystemInfo[1].ApplicationTypeValue;
                    $scope.ReappUnderbody.BodyFillerInput = success.data.SystemInfo[1].Value3;
                    $scope.ReappUnderbody.UnderbodySelectChild = success.data.SystemInfo[1].Value4;
                    $scope.ReappUnderbody.UnderbodySelectChildInput = success.data.SystemInfo[1].Value5;

                    $scope.ReappBasecoat.BasecoatSelect = success.data.SystemInfo[2].ApplicationTypeValue;
                    $scope.ReappBasecoat.MetallicBasecoat = success.data.SystemInfo[2].Value3;
                    $scope.ReappBasecoat.Ratio = success.data.SystemInfo[2].Value4;

                    $scope.ReappClearcoat.ClearcoatSelect = success.data.SystemInfo[3].ApplicationTypeValue;
                    $scope.ReappClearcoat.ClearcoatSelectNoOfCost = success.data.SystemInfo[3].Value3;
                    $scope.ReappClearcoat.Hardener = success.data.SystemInfo[3].Value4;
                    $scope.ReappClearcoat.Ratio = success.data.SystemInfo[3].Value5;

                    $scope.ReappThinner.ThinnerSelect = success.data.SystemInfo[4].ApplicationTypeValue;
                    $scope.ReappThinner.ThinnerSelectChildInput = success.data.SystemInfo[4].Value3;
                    $scope.ReappThinner.MixingRatio = success.data.SystemInfo[4].Value4;

                }, function (error) {
                    console.log(error);
                });
            }
            else if (status == 'Pending Approval - CH') {
                $scope.ComplaintHandler = false;
                $scope.ComplaintManager = false;
                $scope.TSEManager = true;
                $scope.PedingApprovalCH = true;
                //GetComplaintHandlerDetails
                $scope.GetTSE();
                PendingRequestService.GetComplaintHandlerDetails(ComplaintId, 4).then(function (success) {
                    $scope.TSE = success.data.Model;

                    $scope.ReappSubstrate = success.data.SystemInfo[0].Substrate_ID;

                    $scope.ReappUndercoat.UndercoatSelect = success.data.SystemInfo[0].Value3;
                    $scope.ReappUndercoat.UndercoatSelectChildInput = success.data.SystemInfo[0].Value4;
                    $scope.ReappUndercoat.Ratio = success.data.SystemInfo[0].Value5;
                    $scope.ReappUndercoat.Hardener = success.data.SystemInfo[0].Value6;

                    $scope.ReappUnderbody.UnderbodySelect = success.data.SystemInfo[1].ApplicationTypeValue;
                    $scope.ReappUnderbody.BodyFillerInput = success.data.SystemInfo[1].Value3;
                    $scope.ReappUnderbody.UnderbodySelectChild = success.data.SystemInfo[1].Value4;
                    $scope.ReappUnderbody.UnderbodySelectChildInput = success.data.SystemInfo[1].Value5;

                    $scope.ReappBasecoat.BasecoatSelect = success.data.SystemInfo[2].ApplicationTypeValue;
                    $scope.ReappBasecoat.MetallicBasecoat = success.data.SystemInfo[2].Value3;
                    $scope.ReappBasecoat.Ratio = success.data.SystemInfo[2].Value4;

                    $scope.ReappClearcoat.ClearcoatSelect = success.data.SystemInfo[3].ApplicationTypeValue;
                    $scope.ReappClearcoat.ClearcoatSelectNoOfCost = success.data.SystemInfo[3].Value3;
                    $scope.ReappClearcoat.Hardener = success.data.SystemInfo[3].Value4;
                    $scope.ReappClearcoat.Ratio = success.data.SystemInfo[3].Value5;

                    $scope.ReappThinner.ThinnerSelect = success.data.SystemInfo[4].ApplicationTypeValue;
                    $scope.ReappThinner.ThinnerSelectChildInput = success.data.SystemInfo[4].Value3;
                    $scope.ReappThinner.MixingRatio = success.data.SystemInfo[4].Value4;

                }, function (error) {
                    console.log(error);
                });
            }
            else if (status == 'Pending RCA - Plant') {
                $scope.ComplaintHandler = false;
                $scope.ComplaintManager = false;
                $scope.TSEManager = false;
                $scope.RCAPlant = true;
                $scope.Plnt.Comp

            }



        },
            function (error) {
                console.log(error);
            });
    }

    $scope.OpenStatus = function (id) {
        //$scope.items.IndexId = _Item;
        //console.log($scope.items);
      
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'partial/StatusModal.html',
            controller: 'ModalInstanceCtrl_StatusInProcess',
            size: 'lg',
            resolve: {
                items: function () {
                    return id;
                }
            }
        });
        InProcessRequestService.ComplaintID = id;
        modalInstance.result.then(function (items) {
            $scope.RequestID = items;
            console.log(items);
            // $scope.invoice.row[$scope.items.IndexId].
        });
    };

    $scope.BrandName = function () {
        angular.forEach($scope.ProductMaster, function (value, key) {
            console.log("we are in brand name");
            console.log($scope.Complaint.BrandID);
            if (value.Product_ID == $scope.Complaint.ProductCode) {

                $scope.Complaint.BrandID = value.Brand_ID;
            }

        });

        InProcessRequestService.GetBrandName($scope.Complaint.BrandID).then(function (success) {

            $scope.Complaint.BrandName = success.data;
        },
            function (error) {
                console.log(error);
            });


        //for product description

        angular.forEach($scope.ProductMaster, function (value, key) {
            if (value.Product_ID == $scope.Complaint.ProductCode) {
                $scope.ProductDescription = value.ProductDescription;
            }

        });

        //getting batch number and mfg date
        InProcessRequestService.GetBatchAndMfg($scope.Complaint.ProductCode).then(function (success) {
            $scope.Batch = success.data;
            $scope.Complaint.ManuFactureDate = '';
            console.log("batch data: ", $scope.Batch);
            $scope.GetManufactureDate($scope.Complaint.BatchNumber);
        },
            function (error) {
                console.log(error);
            });




    }

    $scope.GetManufactureDate = function (id) {
        for (var i = 0; i < $scope.Batch.length; i++) {
            if ($scope.Batch[i].ProductBatch_ID == id) {
                // var date = new Date($scope.Batch[i].ManufactureDate);
                $scope.Complaint.ManuFactureDate = $filter('date')(new Date($scope.Batch[i].ManufactureDate), 'MM/dd/yyyy');
            }
        }
    }
    //GetComplaintList
    $scope.GetComplaintList = function (obj) {
        var deferred = $q.defer();
        console.log(obj.ComplaintCategory_ID);
        InProcessRequestService.GetComplaintList(obj.ComplaintCategory_ID).then(function (success) {
            console.log("inside GET COMPLAINT LIST");

            obj.ComplaintLst = success.data;

            for (var j = 0; j < obj.SelectedComplaintsArray.length; j++) {
                $scope.SelectComplaints(obj, obj.SelectedComplaintsArray[j]);
            }
            console.log(obj.ComplaintLst);
            deferred.resolve(obj.ComplaintLst = success.data);
        },
            function (error) {
                console.log(error);
                deferred.reject(obj.ComplaintLst = []);
            });

        return deferred.promise;
    }

    $scope.DealerName = function () {

        angular.forEach($scope.DealerDetails, function (value, key) {
            if (value.Dealer_ID == $scope.Request.DealerID) {
                $scope.Request.DealerName = value.DealerName;
                $scope.Request.SalesOffice = value.DealerAddress;
            }

        });

    }

    $scope.SelectComplaints = function (obj, Id) {
        console.log(Id);

        for (var i = 0; i < obj.ComplaintLst.length; i++) {
            if (obj.ComplaintLst[i].ComplaintType_ID == Id) {
                obj.ComplaintLst[i].IsSelected = true;
            }
        }
        var Idx = obj.SelectedComplaintsArray.indexOf(Id);
        //if (Idx < 0) {
        //    obj.SelectedComplaintsArray.push(Id);

        //} else {
        //    obj.SelectedComplaintsArray.splice(Idx, 1);
        //}
    }

    $scope.init();


});

app.controller('ModalInstanceCtrl_StatusInProcess', function ($scope, $uibModalInstance, InProcessRequestService, $q) {
    $scope.PendingStatusData = {};
    $scope.grid = {};
    $scope.initStatus = function () {
        InProcessRequestService.GetStatusDetails(InProcessRequestService.ComplaintID).then(function (success) {
            console.log("inside GetComplaintCategory");
            $scope.PendingStatusData  = success.data;
            console.log($scope.DealerDetails);
        },
            function (error) {
                console.log(error);
            });

    };
    $scope.initStatus();

    $scope.cancel = function () {
        //$scope.IsErrorFlag = false;
        //$scope.IsSaveFlag = false;
        //if ($scope.IsSaveFlag) {
        //    if ($scope.IsErrorFlag) {
        //        $scope.items.TaxType1 = null;
        //        $scope.items.TaxType2 = null;
        //        $scope.items.TaxType3 = null;
        //        $scope.items.TaxPercentage1 = null;
        //        $scope.items.TaxPercentage2 = null;
        //        $scope.items.TaxPercentage3 = null;
        //        $scope.items.TaxSplit1 = null;
        //        $scope.items.TaxSplit2 = null;
        //        $scope.items.TaxSplit3 = null;
        //    }
        //}
        $uibModalInstance.dismiss('cancel');
    };

});