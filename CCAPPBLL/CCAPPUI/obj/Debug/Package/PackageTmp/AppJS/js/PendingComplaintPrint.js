var Techapp = angular.module('PendingComplaintPrintModule', []);

app.service('PendingComplaintPrintService', function ($http) {
    this.GetComplaintEmployee = function (ComplaintId) {

        console.log(ComplaintId);

        return $http.get('/api/PendingRequest/GetComplaintEmployee?ComplaintId=' + ComplaintId);
    };

    this.GetComplaintDetails = function (ComplaintId) {

        return $http.get('/api/RequestCreation/GetComplaintDetails?ComplaintId=' + ComplaintId);
    };

    this.GetComplaintHandlerDetails = function (ComplaintId, Dept) {

        return $http.get('/api/PendingRequest/GetComplaintHandlerDetails?ComplaintID=' + ComplaintId + '&Department=' + Dept);
    };

     this.GetStatusDetails = function (ComplaintId) {

        return $http.get('/api/PendingRequest/GetStatusDetails?ComplaintID=' + ComplaintId);
    };
    this.DealerDetails = function (obj) {

        return $http.get('/api/DealerMaster/DealerDetails/', {});
    };

    this.GetComplaintList = function (ComplaintCategoryId) {

        return $http.get('/api/Complaint/GetComplaintType/?ComplaintCategoryId=' + ComplaintCategoryId);
    };
    this.GetComplaintRCA = function (ComplaintId, Dept) {

        return $http.get('/api/PendingRequest/GetComplaintRCA?ComplaintID=' + ComplaintId + '&Department=' + Dept);
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

});

app.controller('PendingComplaintPrintController', function ($scope, $filter, $http, $location, $rootScope, PendingComplaintPrintService,$q,$window) {


    $scope.TSEList = [];
    $scope.TSE = {};
    $scope.Plnt = {};
    $scope.RD = {};
    $scope.CM = {};
    $scope.Complaint = [
        Quantity = null,
        ProductCode = null

    ];
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


    $scope.init = function () {
        // debugger
     
        $scope.ComplaintId = $scope.dtViewComplaint.Complaint_ID;
        $scope.status = $scope.dtViewComplaint.StatusName;
        $scope.StatusId = $scope.dtViewComplaint.StatusId;
        $scope.CreatedBy = $scope.dtViewComplaint.CreatedBy;

        console.log($scope.ComplaintId);
        console.log($scope.status);
        console.log($scope.StatusId);
        console.log($scope.CreatedBy);


        PendingComplaintPrintService.DealerDetails().then(function (success) {
            console.log("inside GetComplaintCategory");
            $scope.DealerDetails = success.data;
            console.log($scope.DealerDetails);
        },
            function (error) {
                console.log(error);
            });


        PendingComplaintPrintService.GetProductId().then(function (success) {
            $scope.ProductMaster = success.data;
            $rootScope.ProMastr = $scope.ProductMaster;
            console.log("ProductMaster:", $rootScope.ProMastr);
            console.log($scope.ProductMaster);
        },
            function (error) {
                console.log(error);
            });

        PendingComplaintPrintService.GetSubstrateId().then(function (success) {
           
            $scope.SubstrateMaster = success.data;
            console.log($scope.SubstrateMaster);
        },
            function (error) {
                console.log(error);
            });



        PendingComplaintPrintService.GetComplaintEmployee($scope.ComplaintId).then(function (success) {
            $scope.EmployeeDetails = success.data;
        },
            function (error) {
                console.log(error);
            });


        PendingComplaintPrintService.GetStatusDetails($scope.ComplaintId).then(function (success) {
            $scope.PendingStatusData = success.data;
            console.log($scope.PendingStatusData);
        },
            function (error) {
                console.log(error);
            });


            //PendingComplaintPrintService.DealerDetails().then(function (success) {
            //    console.log("inside GetComplaintCategory");
            //    $scope.DealerDetails = success.data;

            //    return PendingComplaintPrintService.GetProductId();
            //}).then(function (success) {
            //    $scope.ProductMaster = success.data;
            //    $rootScope.ProMastr = $scope.ProductMaster;
            //    console.log("ProductMaster:", $rootScope.ProMastr);
            //    console.log($scope.ProductMaster);
            //    return PendingComplaintPrintService.GetSubstrateId();
            //}).then(function(success){
            //    console.log("inside GetComplaintCategory");
            //    $scope.SubstrateMaster = success.data;
            //    console.log($scope.SubstrateMaster);
        //    return PendingComplaintPrintService.GetComplaintEmployee($scope.ComplaintId)
        //}).then(function (success) {
        //    $scope.EmployeeDetails = success.data;
            //console.log("EmployeeDetails array:", $scope.EmployeeDetails);


            //return PendingComplaintPrintService.GetStatusDetails($scope.ComplaintId)
            //}).then(function (success) {
            //    console.log("inside GetComplaintCategory");
            //    $scope.PendingStatusData = success.data;
            //    console.log($scope.DealerDetails);


        PendingComplaintPrintService.GetProductId().then(function (success) {
            $scope.ProductMaster = success.data;
            $rootScope.ProMastr = $scope.ProductMaster;
            console.log("ProductMaster:", $rootScope.ProMastr);
            console.log($scope.ProductMaster);
        return PendingComplaintPrintService.GetComplaintDetails($scope.ComplaintId)

    }).then(function (success) {

        //PendingComplaintPrintService.GetComplaintDetails($scope.ComplaintId).then(function (success) {
                $scope.Thead = {};
                $scope.ComplaintDtl = success.data;

                console.log("Complaint detail Detail ", $scope.ComplaintDtl);

                console.log($scope.DealerDetails);
                $scope.Complaint_Id = $scope.ComplaintId;
                $scope.Request.DealerID = $scope.ComplaintDtl.CustomerComplaint.Dealer_ID;
                $scope.Request.DealerName = $scope.ComplaintDtl.CustomerComplaint.DealerName;
                $scope.Thead.Complaint_ID = $scope.ComplaintId;
                $scope.Plnt.Complaint_ID = $scope.ComplaintId;
                $scope.RD.Complaint_ID = $scope.ComplaintId;
                $scope.CM.Complaint_Id = $scope.ComplaintId;
                $scope.DealerName();
                $scope.ComplaintNumber = $scope.ComplaintDtl.CustomerComplaint.ComplaintNumber;
                $scope.Request.CustomerName = $scope.ComplaintDtl.CustomerComplaint.CustomerName;
                $scope.Request.CustomerNo = $scope.ComplaintDtl.CustomerComplaint.CustomerPhone;
                $scope.Request.CustomerAddress = $scope.ComplaintDtl.CustomerComplaint.CustomerAddress;
                $scope.Request.CustomerEmail = $scope.ComplaintDtl.CustomerComplaint.CustomerEmail;
                $scope.Request.CustomerAccountName = $scope.ComplaintDtl.CustomerComplaint.CustomerAccountName;
                $scope.Request.DateOfvehicleRepair = $filter('date')(new Date($scope.ComplaintDtl.CustomerComplaint.DateOfVehicleRepair), 'dd/MMM/yyyy');
                $scope.Complaint.Quantity = $scope.ComplaintDtl.CustomerComplaint.ComplaintQty;
                $scope.ProblemDescription = $scope.ComplaintDtl.CustomerComplaint.ComplaintDesc;
                $scope.Complaint.ProductCode = $scope.ComplaintDtl.CustomerComplaint.ProductCode;
                $scope.Complaint.BatchNumber = $scope.ComplaintDtl.CustomerComplaint.BatchNumber;
                $scope.Complaint.BatchNumber1 = $scope.ComplaintDtl.CustomerComplaint.BatchNumber1;
                $scope.BrandName();
                $scope.Request.CreatedBy = $scope.ComplaintDtl.CustomerComplaint.CreatedBy;
                $scope.Complaint.QtyOfComplaintStock = $scope.ComplaintDtl.CustomerComplaint.QtyOfComplaintStock;

            //$scope.Product


                $scope.Complaint.EvidenceAvailable = $scope.ComplaintDtl.CustomerComplaint.EvidenceAvailable;
                $scope.Complaint.VerifiedInSameBatch = $scope.ComplaintDtl.CustomerComplaint.VerifiedInSameBatch;
                $scope.Complaint.IsSelf = $scope.ComplaintDtl.CustomerComplaint.IsSelf;
                $scope.Complaint.AvailableForFutureEvidence = $scope.ComplaintDtl.CustomerComplaint.AvailableForFutureEvidence;
                $scope.Complaint.SufficientEvidence = $scope.ComplaintDtl.CustomerComplaint.SufficientEvidence;
                $scope.Complaint.RemarksForQuetsionaire = $scope.ComplaintDtl.CustomerComplaint.RemarksForQuetsionaire;
                $scope.RCAtoBeDone = $scope.ComplaintDtl.CustomerComplaint.RequestRCA;
                $scope.Tempreature = $scope.ComplaintDtl.CustomerComplaint.Tempreature;
                $scope.Humidity = $scope.ComplaintDtl.CustomerComplaint.Humidity;

                if ($scope.Undercoat == null) {
                    $scope.Undercoat = {
                        UndercoatSelect: '',
                        UndercoatSelectChildInput: '',
                        Ratio1: '',
                        Ratio2: '',
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
                        Ratio1: '',
                        Ratio2: '',
                        Hardener: ''
                    };
                }
                if ($scope.Clearcoat == null) {
                    $scope.Clearcoat = {
                        ClearcoatSelect: '',
                        Clear: '',
                        ClearcoatSelectNoOfCost: '',
                        ClearcoatSelectNoOfCost: '',
                        Hardener: '',
                        Ratio1: '',
                        Ratio2: ''

                    };
                }
                if ($scope.Thinner == null) {
                    $scope.Thinner = {
                        ThinnerSelect: '',
                        ThinnerSelectChildInput: '',
                        MixingRatio1: '',
                        MixingRatio2: ''


                    };
                }
                if ($scope.ReappUndercoat == null) {
                    $scope.ReappUndercoat = {
                        UndercoatSelect: '',
                        UndercoatSelectChildInput: '',
                        Ratio1: '',
                        Ratio2: '',
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
                        Ratio1: '',
                        Ratio2: '',
                        Hardener: ''
                    };
                }
                if ($scope.ReappClearcoat == null) {
                    $scope.ReappClearcoat = {
                        ClearcoatSelect: '',
                        Clear: '',
                        ClearcoatSelectNoOfCost: '',
                        ClearcoatSelectNoOfCost: '',
                        Hardener: '',
                        Ratio1: '',
                        Ratio2: '',

                    };
                }
                if ($scope.ReappThinner == null) {
                    $scope.ReappThinner = {
                        ThinnerSelect: '',
                        ThinnerSelectChildInput: '',
                        MixingRatio1: '',
                        MixingRatio2: ''


                    };
                }
                if ($scope.TSEReappUndercoat == null) {
                    $scope.TSEReappUndercoat = {
                        UndercoatSelect: '',
                        UndercoatSelectChildInput: '',
                        Ratio1: '',
                        Ratio2: '',
                        Hardener: ''
                    };
                }
                if ($scope.TSEReappUnderbody == null) {
                    $scope.TSEReappUnderbody = {
                        UnderbodySelect: '',
                        BodyFillerInput: '',
                        UnderbodySelectChild: '',
                        UnderbodySelectChildInput: ''
                    };
                }
                if ($scope.TSEReappBasecoat == null) {
                    $scope.TSEReappBasecoat = {
                        BasecoatSelect: '',
                        MetallicBasecoat: '',
                        Ratio1: '',
                        Ratio2: '',
                        Hardener: ''
                    };
                }
                if ($scope.TSEReappClearcoat == null) {
                    $scope.TSEReappClearcoat = {
                        ClearcoatSelect: '',
                        ClearcoatSelectNoOfCost: '',
                        ClearcoatSelectNoOfCost: '',
                        Hardener: '',
                        Ratio1: '',
                        Ratio2: '',

                    };
                }
                if ($scope.TSEReappThinner == null) {
                    $scope.TSEReappThinner = {
                        ThinnerSelect: '',
                        ThinnerSelectChildInput: '',
                        MixingRatio1: '',
                        MixingRatio2: ''


                    };
                }
                if ($scope.ComplaintDtl.SystemInformation.length > 0) {
                    $scope.Substrate = $scope.ComplaintDtl.SystemInformation[0].Substrate_ID;
                    $scope.ReappSubstrate = $scope.ComplaintDtl.SystemInformation[0].Substrate_ID;
                    $scope.Undercoat.UndercoatSelect = $scope.ComplaintDtl.SystemInformation[0].Value3;
                    $scope.Undercoat.UndercoatSelectChildInput = $scope.ComplaintDtl.SystemInformation[0].Value4;
                    $scope.Undercoat.Ratio1 = parseInt($scope.ComplaintDtl.SystemInformation[0].Value5);
                    $scope.Undercoat.Ratio2 = $scope.ComplaintDtl.SystemInformation[0].Value6;
                    $scope.Undercoat.Hardener = $scope.ComplaintDtl.SystemInformation[0].Value7;
                    $scope.ReappUndercoat.UndercoatSelect = $scope.ComplaintDtl.SystemInformation[0].Value3;
                    $scope.ReappUndercoat.UndercoatSelectChildInput = $scope.ComplaintDtl.SystemInformation[0].Value4;
                    $scope.ReappUndercoat.Ratio1 = $scope.ComplaintDtl.SystemInformation[0].Value5;
                    $scope.ReappUndercoat.Ratio2 = $scope.ComplaintDtl.SystemInformation[0].Value6;
                    $scope.ReappUndercoat.Hardener = $scope.ComplaintDtl.SystemInformation[0].Value7;

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
                    $scope.Basecoat.Hardener = $scope.ComplaintDtl.SystemInformation[2].Value4;
                    $scope.Basecoat.Ratio1 = $scope.ComplaintDtl.SystemInformation[2].Value5;
                    $scope.Basecoat.Ratio2 = $scope.ComplaintDtl.SystemInformation[2].Value6;
                    //$scope.Basecoat.Hardener = $scope.ComplaintDtl.SystemInformation[2].Value6;
                    $scope.ReappBasecoat.BasecoatSelect = $scope.ComplaintDtl.SystemInformation[2].ApplicationTypeValue;
                    $scope.ReappBasecoat.MetallicBasecoat = $scope.ComplaintDtl.SystemInformation[2].Value3;
                    $scope.ReappBasecoat.Ratio1 = $scope.ComplaintDtl.SystemInformation[2].Value5;
                    $scope.ReappBasecoat.Ratio2 = $scope.ComplaintDtl.SystemInformation[2].Value6;
                    $scope.ReappBasecoat.Hardener = $scope.ComplaintDtl.SystemInformation[2].Value4;




                    $scope.Clearcoat.ClearcoatSelect = $scope.ComplaintDtl.SystemInformation[3].ApplicationTypeValue;
                    $scope.Clearcoat.Clear = $scope.ComplaintDtl.SystemInformation[3].Value3;
                    $scope.Clearcoat.ClearcoatSelectNoOfCost = $scope.ComplaintDtl.SystemInformation[3].Value4;
                    $scope.Clearcoat.Hardener = $scope.ComplaintDtl.SystemInformation[3].Value5;
                    $scope.Clearcoat.Ratio1 = $scope.ComplaintDtl.SystemInformation[3].Value6;
                    $scope.Clearcoat.Ratio2 = $scope.ComplaintDtl.SystemInformation[3].Value7;
                    $scope.ReappClearcoat.ClearcoatSelect = $scope.ComplaintDtl.SystemInformation[3].ApplicationTypeValue;
                    $scope.ReappClearcoat.Clear = $scope.ComplaintDtl.SystemInformation[3].Value3;
                    $scope.ReappClearcoat.ClearcoatSelectNoOfCost = $scope.ComplaintDtl.SystemInformation[3].Value4;
                    $scope.ReappClearcoat.Hardener = $scope.ComplaintDtl.SystemInformation[3].Value5;
                    $scope.ReappClearcoat.Ratio1 = $scope.ComplaintDtl.SystemInformation[3].Value6;
                    $scope.ReappClearcoat.Ratio2 = $scope.ComplaintDtl.SystemInformation[3].Value7;


                    $scope.Thinner.ThinnerSelect = $scope.ComplaintDtl.SystemInformation[4].ApplicationTypeValue;
                    $scope.Thinner.ThinnerSelectChildInput = $scope.ComplaintDtl.SystemInformation[4].Value3;
                    $scope.Thinner.MixingRatio1 = $scope.ComplaintDtl.SystemInformation[4].Value4;
                    $scope.Thinner.MixingRatio2 = $scope.ComplaintDtl.SystemInformation[4].Value5;
                    $scope.ReappThinner.ThinnerSelect = $scope.ComplaintDtl.SystemInformation[4].ApplicationTypeValue;
                    $scope.ReappThinner.ThinnerSelectChildInput = $scope.ComplaintDtl.SystemInformation[4].Value3;
                    $scope.ReappThinner.MixingRatio1 = $scope.ComplaintDtl.SystemInformation[4].Value4;
                    $scope.ReappThinner.MixingRatio2 = $scope.ComplaintDtl.SystemInformation[4].Value5;
                }

                $scope.PhotoURL = $scope.ComplaintDtl.PhotoInfo;

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
                var incan = 0;
                var systemrlated = 0;
                for (var i = 0; i < $scope.AddRowArray.length; i++) {
                    if ($scope.AddRowArray[i].ComplaintCategory_ID == 1 || $scope.AddRowArray[i].ComplaintCategory_ID == 2) {

                        //$scope.IsInCan = true;
                        //$scope.IsSystemRelated = false;
                        incan++;
                    }
                    else if ($scope.AddRowArray[i].ComplaintCategory_ID == 3 || $scope.AddRowArray[i].ComplaintCategory_ID == 4) {

                        //$scope.IsInCan = false;
                        //$scope.IsSystemRelated = true;
                        systemrlated++;
                    }
                }

                if (incan == 0) {
                    $scope.IsInCan = false;
                }
                else {
                    $scope.IsInCan = true;
                }

                if (systemrlated == 0) {
                    $scope.IsSystemRelated = false;
                }
                else {
                    $scope.IsSystemRelated = true;
                }
                if ($scope.status == 'Pending - Complaint Handler') {
                    $scope.ComplaintHandler = true;
                    $scope.ComplaintManager = false;
                    $scope.TSE = false;
                    $scope.CHLogin = $rootScope.session.Role.indexOf("CH") != -1 ? true : false;
                    $scope.GetTSE();


                }
                else if ($scope.status == 'Pending - Complaint Manager') {
                    $scope.ComplaintHandler = false;
                    $scope.ComplaintManager = $rootScope.session.Role.indexOf("CM") != -1 ? true : false;
                    $scope.TSEManager = false;
                    //GetComplaintHandlerDetails
                    $scope.GetTSE();
                    PendingComplaintPrintService.GetComplaintHandlerDetails($scope.ComplaintId, 2).then(function (success) {
                        $scope.Thead = success.data.Model;
                        $scope.Thead.ReApplicationDate = $filter('date')(new Date(success.data.Model.ReApplicationDate), 'dd/MMM/yyyy');

                        $scope.Thead.PhotoURL = success.data.PhotoInfo;
                        if (success.data.SystemInfo.length > 0) {
                            $scope.ReappSubstrate = success.data.SystemInfo[0].Substrate_ID;

                            $scope.ReappUndercoat.UndercoatSelect = success.data.SystemInfo[0].Value3;
                            $scope.ReappUndercoat.UndercoatSelectChildInput = success.data.SystemInfo[0].Value4;
                            $scope.ReappUndercoat.Ratio1 = success.data.SystemInfo[0].Value5;
                            $scope.ReappUndercoat.Ratio2 = success.data.SystemInfo[0].Value6;
                            $scope.ReappUndercoat.Hardener = success.data.SystemInfo[0].Value7;

                            $scope.ReappUnderbody.UnderbodySelect = success.data.SystemInfo[1].ApplicationTypeValue;
                            $scope.ReappUnderbody.BodyFillerInput = success.data.SystemInfo[1].Value3;
                            $scope.ReappUnderbody.UnderbodySelectChild = success.data.SystemInfo[1].Value4;
                            $scope.ReappUnderbody.UnderbodySelectChildInput = success.data.SystemInfo[1].Value5;

                            $scope.ReappBasecoat.BasecoatSelect = success.data.SystemInfo[2].ApplicationTypeValue;
                            $scope.ReappBasecoat.MetallicBasecoat = success.data.SystemInfo[2].Value3;
                            $scope.ReappBasecoat.Hardener = success.data.SystemInfo[2].Value4;
                            $scope.ReappBasecoat.Ratio1 = success.data.SystemInfo[2].Value5;
                            $scope.ReappBasecoat.Ratio2 = success.data.SystemInfo[2].Value6;

                            $scope.ReappClearcoat.ClearcoatSelect = success.data.SystemInfo[3].ApplicationTypeValue;
                            $scope.ReappClearcoat.Clear = success.data.SystemInfo[3].Value3;
                            $scope.ReappClearcoat.ClearcoatSelectNoOfCost = success.data.SystemInfo[3].Value4;
                            $scope.ReappClearcoat.Hardener = success.data.SystemInfo[3].Value5;
                            $scope.ReappClearcoat.Ratio1 = success.data.SystemInfo[3].Value6;
                            $scope.ReappClearcoat.Ratio2 = success.data.SystemInfo[3].Value7;

                            $scope.ReappThinner.ThinnerSelect = success.data.SystemInfo[4].ApplicationTypeValue;
                            $scope.ReappThinner.ThinnerSelectChildInput = success.data.SystemInfo[4].Value3;
                            $scope.ReappThinner.MixingRatio1 = success.data.SystemInfo[4].Value4;
                            $scope.ReappThinner.MixingRatio2 = success.data.SystemInfo[4].Value5;
                        }

                    }, function (error) {
                        console.log(error);
                    });
                }
                else if ($scope.status == 'Pending - TSE') {
                    $scope.ComplaintHandler = true;
                    $scope.ComplaintManager = false;
                    $scope.TSEManager = $rootScope.session.Role.indexOf("TSE") != -1 ? true : false;
                    $scope.PedingApprovalCH = false;
                    $scope.PedingApprovalCM = false;
                    $scope.CHLogin = false;

                    $scope.CHApprovalAction = false;
                    //GetComplaintHandlerDetails
                    $scope.GetTSE();
                    PendingComplaintPrintService.GetComplaintHandlerDetails($scope.ComplaintId, 2).then(function (success) {
                        $scope.TSE = angular.copy(success.data.Model);
                        $scope.TSE.ReApplicationDate = $filter('date')(new Date(success.data.Model.ReApplicationDate), 'dd/MMM/yyyy');
                        $scope.Thead = angular.copy(success.data.Model);
                        $scope.Thead.ReApplicationDate = $filter('date')(new Date(success.data.Model.ReApplicationDate), 'dd/MMM/yyyy');
                        $scope.Thead.PhotoURL = success.data.PhotoInfo;
                        if (success.data.SystemInfo.length > 0) {
                            $scope.ReappSubstrate = success.data.SystemInfo[0].Substrate_ID;

                            $scope.ReappUndercoat.UndercoatSelect = success.data.SystemInfo[0].Value3;
                            $scope.ReappUndercoat.UndercoatSelectChildInput = success.data.SystemInfo[0].Value4;
                            $scope.ReappUndercoat.Ratio1 = success.data.SystemInfo[0].Value5;
                            $scope.ReappUndercoat.Ratio2 = success.data.SystemInfo[0].Value6;
                            $scope.ReappUndercoat.Hardener = success.data.SystemInfo[0].Value7;

                            $scope.ReappUnderbody.UnderbodySelect = success.data.SystemInfo[1].ApplicationTypeValue;
                            $scope.ReappUnderbody.BodyFillerInput = success.data.SystemInfo[1].Value3;
                            $scope.ReappUnderbody.UnderbodySelectChild = success.data.SystemInfo[1].Value4;
                            $scope.ReappUnderbody.UnderbodySelectChildInput = success.data.SystemInfo[1].Value5;

                            $scope.ReappBasecoat.BasecoatSelect = success.data.SystemInfo[2].ApplicationTypeValue;
                            $scope.ReappBasecoat.MetallicBasecoat = success.data.SystemInfo[2].Value3;
                            $scope.ReappBasecoat.Hardener = success.data.SystemInfo[2].Value4;
                            $scope.ReappBasecoat.Ratio1 = success.data.SystemInfo[2].Value5;
                            $scope.ReappBasecoat.Ratio2 = success.data.SystemInfo[2].Value6;

                            $scope.ReappClearcoat.ClearcoatSelect = success.data.SystemInfo[3].ApplicationTypeValue;
                            $scope.ReappClearcoat.Clear = success.data.SystemInfo[3].Value3;
                            $scope.ReappClearcoat.ClearcoatSelectNoOfCost = success.data.SystemInfo[3].Value4;
                            $scope.ReappClearcoat.Hardener = success.data.SystemInfo[3].Value5;
                            $scope.ReappClearcoat.Ratio1 = success.data.SystemInfo[3].Value6;
                            $scope.ReappClearcoat.Ratio2 = success.data.SystemInfo[3].Value7;

                            $scope.ReappThinner.ThinnerSelect = success.data.SystemInfo[4].ApplicationTypeValue;
                            $scope.ReappThinner.ThinnerSelectChildInput = success.data.SystemInfo[4].Value3;
                            $scope.ReappThinner.MixingRatio1 = success.data.SystemInfo[4].Value4;
                            $scope.ReappThinner.MixingRatio2 = success.data.SystemInfo[4].Value5;
                        }

                        if (success.data.SystemInfo.length > 0) {

                            $scope.TSEReappSubstrate = success.data.SystemInfo[0].Substrate_ID;

                            $scope.TSEReappUndercoat.UndercoatSelect = success.data.SystemInfo[0].Value3;
                            $scope.TSEReappUndercoat.UndercoatSelectChildInput = success.data.SystemInfo[0].Value4;
                            $scope.TSEReappUndercoat.Ratio1 = success.data.SystemInfo[0].Value5;
                            $scope.TSEReappUndercoat.Ratio2 = success.data.SystemInfo[0].Value6;
                            $scope.TSEReappUndercoat.Hardener = success.data.SystemInfo[0].Value7;

                            $scope.TSEReappUnderbody.UnderbodySelect = success.data.SystemInfo[1].ApplicationTypeValue;
                            $scope.TSEReappUnderbody.BodyFillerInput = success.data.SystemInfo[1].Value3;
                            $scope.TSEReappUnderbody.UnderbodySelectChild = success.data.SystemInfo[1].Value4;
                            $scope.TSEReappUnderbody.UnderbodySelectChildInput = success.data.SystemInfo[1].Value5;

                            $scope.TSEReappBasecoat.BasecoatSelect = success.data.SystemInfo[2].ApplicationTypeValue;
                            $scope.TSEReappBasecoat.MetallicBasecoat = success.data.SystemInfo[2].Value3;
                            $scope.TSEReappBasecoat.Hardener = success.data.SystemInfo[2].Value4;
                            $scope.TSEReappBasecoat.Ratio1 = success.data.SystemInfo[2].Value5;
                            $scope.TSEReappBasecoat.Ratio2 = success.data.SystemInfo[2].Value6;

                            $scope.TSEReappClearcoat.ClearcoatSelect = success.data.SystemInfo[3].ApplicationTypeValue;
                            $scope.TSEReappClearcoat.Clear = success.data.SystemInfo[3].Value3;
                            $scope.TSEReappClearcoat.ClearcoatSelectNoOfCost = success.data.SystemInfo[3].Value4;
                            $scope.TSEReappClearcoat.Hardener = success.data.SystemInfo[3].Value5;
                            $scope.TSEReappClearcoat.Ratio1 = success.data.SystemInfo[3].Value6;
                            $scope.TSEReappClearcoat.Ratio2 = success.data.SystemInfo[3].Value7;

                            $scope.TSEReappThinner.ThinnerSelect = success.data.SystemInfo[4].ApplicationTypeValue;
                            $scope.TSEReappThinner.ThinnerSelectChildInput = success.data.SystemInfo[4].Value3;
                            $scope.TSEReappThinner.MixingRatio1 = success.data.SystemInfo[4].Value4;
                            $scope.TSEReappThinner.MixingRatio2 = success.data.SystemInfo[4].Value5;
                        }




                    }, function (error) {
                        console.log(error);
                    });
                }
                else if ($scope.status == 'Pending Approval - CH') {
                    $scope.ComplaintHandler = true;
                    $scope.ComplaintManager = false;
                    $scope.TSEManager = true;
                    $scope.PedingApprovalCH = $rootScope.session.Role.indexOf("CH") != -1 ? true : false;
                    $scope.CHApprovalAction = $rootScope.session.Role.indexOf("CH") != -1 ? true : false;
                    //GetComplaintHandlerDetails
                    $scope.GetTSE();
                    PendingComplaintPrintService.GetComplaintHandlerDetails($scope.ComplaintId, 4).then(function (success) {
                        $scope.TSE = success.data.Model;
                        $scope.TSE.PhotoURL = success.data.PhotoInfo;
                        $scope.TSE.ReApplicationDate = $filter('date')(new Date(success.data.Model.ReApplicationDate), 'dd/MMM/yyyy');

                        $scope.TSEReappSubstrate = success.data.SystemInfo[0].Substrate_ID;

                        $scope.TSEReappUndercoat.UndercoatSelect = success.data.SystemInfo[0].Value3;
                        $scope.TSEReappUndercoat.UndercoatSelectChildInput = success.data.SystemInfo[0].Value4;
                        $scope.TSEReappUndercoat.Ratio1 = success.data.SystemInfo[0].Value5;
                        $scope.TSEReappUndercoat.Ratio2 = success.data.SystemInfo[0].Value6;
                        $scope.TSEReappUndercoat.Hardener = success.data.SystemInfo[0].Value7;

                        $scope.TSEReappUnderbody.UnderbodySelect = success.data.SystemInfo[1].ApplicationTypeValue;
                        $scope.TSEReappUnderbody.BodyFillerInput = success.data.SystemInfo[1].Value3;
                        $scope.TSEReappUnderbody.UnderbodySelectChild = success.data.SystemInfo[1].Value4;
                        $scope.TSEReappUnderbody.UnderbodySelectChildInput = success.data.SystemInfo[1].Value5;

                        $scope.TSEReappBasecoat.BasecoatSelect = success.data.SystemInfo[2].ApplicationTypeValue;
                        $scope.TSEReappBasecoat.MetallicBasecoat = success.data.SystemInfo[2].Value3;
                        $scope.TSEReappBasecoat.Hardener = success.data.SystemInfo[2].Value4;
                        $scope.TSEReappBasecoat.Ratio1 = success.data.SystemInfo[2].Value5;
                        $scope.TSEReappBasecoat.Ratio2 = success.data.SystemInfo[2].Value6;

                        $scope.TSEReappClearcoat.ClearcoatSelect = success.data.SystemInfo[3].ApplicationTypeValue;
                        $scope.TSEReappClearcoat.Clear = success.data.SystemInfo[3].Value3;
                        $scope.TSEReappClearcoat.ClearcoatSelectNoOfCost = success.data.SystemInfo[3].Value4;
                        $scope.TSEReappClearcoat.Hardener = success.data.SystemInfo[3].Value5;
                        $scope.TSEReappClearcoat.Ratio1 = success.data.SystemInfo[3].Value6;
                        $scope.TSEReappClearcoat.Ratio2 = success.data.SystemInfo[3].Value7;

                        $scope.TSEReappThinner.ThinnerSelect = success.data.SystemInfo[4].ApplicationTypeValue;
                        $scope.TSEReappThinner.ThinnerSelectChildInput = success.data.SystemInfo[4].Value3;
                        $scope.TSEReappThinner.MixingRatio1 = success.data.SystemInfo[4].Value4;
                        $scope.TSEReappThinner.MixingRatio2 = success.data.SystemInfo[4].Value5;


                    }, function (error) {
                        console.log(error);
                    });
                    PendingComplaintPrintService.GetComplaintHandlerDetails($scope.ComplaintId, 2).then(function (success) {
                        //$scope.TSE = success.data.Model;
                        $scope.Thead = success.data.Model;
                        $scope.Thead.PhotoURL = success.data.PhotoInfo;

                        $scope.ReappSubstrate = success.data.SystemInfo[0].Substrate_ID;

                        $scope.ReappUndercoat.UndercoatSelect = success.data.SystemInfo[0].Value3;
                        $scope.ReappUndercoat.UndercoatSelectChildInput = success.data.SystemInfo[0].Value4;
                        $scope.ReappUndercoat.Ratio1 = success.data.SystemInfo[0].Value5;
                        $scope.ReappUndercoat.Ratio2 = success.data.SystemInfo[0].Value6;
                        $scope.ReappUndercoat.Hardener = success.data.SystemInfo[0].Value7;

                        $scope.ReappUnderbody.UnderbodySelect = success.data.SystemInfo[1].ApplicationTypeValue;
                        $scope.ReappUnderbody.BodyFillerInput = success.data.SystemInfo[1].Value3;
                        $scope.ReappUnderbody.UnderbodySelectChild = success.data.SystemInfo[1].Value4;
                        $scope.ReappUnderbody.UnderbodySelectChildInput = success.data.SystemInfo[1].Value5;

                        $scope.ReappBasecoat.BasecoatSelect = success.data.SystemInfo[2].ApplicationTypeValue;
                        $scope.ReappBasecoat.MetallicBasecoat = success.data.SystemInfo[2].Value3;
                        $scope.ReappBasecoat.Hardener = success.data.SystemInfo[2].Value4;
                        $scope.ReappBasecoat.Ratio1 = success.data.SystemInfo[2].Value5;
                        $scope.ReappBasecoat.Ratio2 = success.data.SystemInfo[2].Value6;

                        $scope.ReappClearcoat.ClearcoatSelect = success.data.SystemInfo[3].ApplicationTypeValue;
                        $scope.ReappClearcoat.Clear = success.data.SystemInfo[3].Value3;
                        $scope.ReappClearcoat.ClearcoatSelectNoOfCost = success.data.SystemInfo[3].Value4;
                        $scope.ReappClearcoat.Hardener = success.data.SystemInfo[3].Value5;
                        $scope.ReappClearcoat.Ratio1 = success.data.SystemInfo[3].Value6;
                        $scope.ReappClearcoat.Ratio2 = success.data.SystemInfo[3].Value7;

                        $scope.ReappThinner.ThinnerSelect = success.data.SystemInfo[4].ApplicationTypeValue;
                        $scope.ReappThinner.ThinnerSelectChildInput = success.data.SystemInfo[4].Value3;
                        $scope.ReappThinner.MixingRatio1 = success.data.SystemInfo[4].Value4;
                        $scope.ReappThinner.MixingRatio2 = success.data.SystemInfo[4].Value5;
                    }, function (error) {
                        console.log(error);
                    });
                }

                else if ($scope.status == 'Pending TSE Approval - CM') {
                    $scope.PedingApprovalCM = true;
                    $scope.ComplaintHandler = true;
                    $scope.ComplaintManager = false;
                    $scope.TSEManager = true;
                    $scope.PedingApprovalCH = false;
                    $scope.CHApprovalAction = $rootScope.session.Role.indexOf("CM") != -1 ? true : false;
                    //GetComplaintHandlerDetails
                    $scope.GetTSE();
                    PendingComplaintPrintService.GetComplaintHandlerDetails($scope.ComplaintId, 4).then(function (success) {
                        $scope.TSE = success.data.Model;
                        $scope.TSE.PhotoURL = success.data.PhotoInfo;
                        $scope.TSE.ReApplicationDate = $filter('date')(new Date(success.data.Model.ReApplicationDate), 'dd/MMM/yyyy');
                        $scope.TSEReappSubstrate = success.data.SystemInfo[0].Substrate_ID;

                        $scope.TSEReappUndercoat.UndercoatSelect = success.data.SystemInfo[0].Value3;
                        $scope.TSEReappUndercoat.UndercoatSelectChildInput = success.data.SystemInfo[0].Value4;
                        $scope.TSEReappUndercoat.Ratio1 = success.data.SystemInfo[0].Value5;
                        $scope.TSEReappUndercoat.Ratio2 = success.data.SystemInfo[0].Value6;
                        $scope.TSEReappUndercoat.Hardener = success.data.SystemInfo[0].Value7;

                        $scope.TSEReappUnderbody.UnderbodySelect = success.data.SystemInfo[1].ApplicationTypeValue;
                        $scope.TSEReappUnderbody.BodyFillerInput = success.data.SystemInfo[1].Value3;
                        $scope.TSEReappUnderbody.UnderbodySelectChild = success.data.SystemInfo[1].Value4;
                        $scope.TSEReappUnderbody.UnderbodySelectChildInput = success.data.SystemInfo[1].Value5;

                        $scope.TSEReappBasecoat.BasecoatSelect = success.data.SystemInfo[2].ApplicationTypeValue;
                        $scope.TSEReappBasecoat.MetallicBasecoat = success.data.SystemInfo[2].Value3;
                        $scope.TSEReappBasecoat.Hardener = success.data.SystemInfo[2].Value4;
                        $scope.TSEReappBasecoat.Ratio1 = success.data.SystemInfo[2].Value4;
                        $scope.TSEReappBasecoat.Ratio2 = success.data.SystemInfo[2].Value6;

                        $scope.TSEReappClearcoat.ClearcoatSelect = success.data.SystemInfo[3].ApplicationTypeValue;
                        $scope.TSEReappClearcoat.Clear = success.data.SystemInfo[3].Value3;
                        $scope.TSEReappClearcoat.ClearcoatSelectNoOfCost = success.data.SystemInfo[3].Value4;
                        $scope.TSEReappClearcoat.Hardener = success.data.SystemInfo[3].Value5;
                        $scope.TSEReappClearcoat.Ratio1 = success.data.SystemInfo[3].Value6;
                        $scope.TSEReappClearcoat.Ratio2 = success.data.SystemInfo[3].Value7;

                        $scope.TSEReappThinner.ThinnerSelect = success.data.SystemInfo[4].ApplicationTypeValue;
                        $scope.TSEReappThinner.ThinnerSelectChildInput = success.data.SystemInfo[4].Value3;
                        $scope.TSEReappThinner.MixingRatio1 = success.data.SystemInfo[4].Value4;
                        $scope.TSEReappThinner.MixingRatio2 = success.data.SystemInfo[4].Value5;


                    }, function (error) {
                        console.log(error);
                    });
                    PendingComplaintPrintService.GetComplaintHandlerDetails($scope.ComplaintId, 2).then(function (success) {
                        //$scope.TSE = success.data.Model;
                        $scope.Thead = success.data.Model;
                        $scope.Thead.PhotoURL = success.data.PhotoInfo;

                        $scope.ReappSubstrate = success.data.SystemInfo[0].Substrate_ID;

                        $scope.ReappUndercoat.UndercoatSelect = success.data.SystemInfo[0].Value3;
                        $scope.ReappUndercoat.UndercoatSelectChildInput = success.data.SystemInfo[0].Value4;
                        $scope.ReappUndercoat.Ratio1 = success.data.SystemInfo[0].Value5;
                        $scope.ReappUndercoat.Ratio2 = success.data.SystemInfo[0].Value6;
                        $scope.ReappUndercoat.Hardener = success.data.SystemInfo[0].Value7;

                        $scope.ReappUnderbody.UnderbodySelect = success.data.SystemInfo[1].ApplicationTypeValue;
                        $scope.ReappUnderbody.BodyFillerInput = success.data.SystemInfo[1].Value3;
                        $scope.ReappUnderbody.UnderbodySelectChild = success.data.SystemInfo[1].Value4;
                        $scope.ReappUnderbody.UnderbodySelectChildInput = success.data.SystemInfo[1].Value5;

                        $scope.ReappBasecoat.BasecoatSelect = success.data.SystemInfo[2].ApplicationTypeValue;
                        $scope.ReappBasecoat.MetallicBasecoat = success.data.SystemInfo[2].Value3;
                        $scope.ReappBasecoat.Hardener = success.data.SystemInfo[2].Value4;
                        $scope.ReappBasecoat.Ratio1 = success.data.SystemInfo[2].Value5;
                        $scope.ReappBasecoat.Ratio2 = success.data.SystemInfo[2].Value6;

                        $scope.ReappClearcoat.ClearcoatSelect = success.data.SystemInfo[3].ApplicationTypeValue;
                        $scope.ReappClearcoat.Clear = success.data.SystemInfo[3].Value3;
                        $scope.ReappClearcoat.ClearcoatSelectNoOfCost = success.data.SystemInfo[3].Value4;
                        $scope.ReappClearcoat.Hardener = success.data.SystemInfo[3].Value5;
                        $scope.ReappClearcoat.Ratio1 = success.data.SystemInfo[3].Value6;
                        $scope.ReappClearcoat.Ratio2 = success.data.SystemInfo[3].Value7;

                        $scope.ReappThinner.ThinnerSelect = success.data.SystemInfo[4].ApplicationTypeValue;
                        $scope.ReappThinner.ThinnerSelectChildInput = success.data.SystemInfo[4].Value3;
                        $scope.ReappThinner.MixingRatio1 = success.data.SystemInfo[4].Value4;
                        $scope.ReappThinner.MixingRatio2 = success.data.SystemInfo[4].Value5;
                    }, function (error) {
                        console.log(error);
                    });
                }
                else if ($scope.status == 'Pending RCA - Plant') {
                    $scope.RCA = true;
                    $scope.ComplaintHandler = true;
                    $scope.ComplaintManager = false;
                    $scope.TSEManager = true;
                    $scope.RCAPlant = $rootScope.session.Role.indexOf("_Plant") != -1 ? true : false;
                    $scope.PlantSubmit = false;
                    $scope.PlantApproval = false;
                    $scope.StockReceipt = false;
                    $scope.CHApprovalAction = true;
                    PendingComplaintPrintService.GetComplaintRCA($scope.ComplaintId, 6).then(function (success) {
                        if (success.data != null) {
                            $scope.Plnt = success.data;
                            $scope.Plnt.DateOfExpectedClosure = $filter('date')(new Date(success.data.DateOfExpectedClosure), 'dd/MMM/yyyy');
                        }
                    }, function (error) {
                        console.log(error);
                    });
                    PendingComplaintPrintService.GetComplaintHandlerDetails($scope.ComplaintId, 4).then(function (success) {
                        if (success.data.Model == null) {
                            $scope.TSEManager = false;
                        }
                        $scope.TSE = success.data.Model;
                        $scope.TSE.PhotoURL = success.data.PhotoInfo;
                        $scope.TSE.ReApplicationDate = $filter('date')(new Date(success.data.Model.ReApplicationDate), 'dd/MMM/yyyy');
                        $scope.TSEReappSubstrate = success.data.SystemInfo[0].Substrate_ID;

                        $scope.TSEReappUndercoat.UndercoatSelect = success.data.SystemInfo[0].Value3;
                        $scope.TSEReappUndercoat.UndercoatSelectChildInput = success.data.SystemInfo[0].Value4;
                        $scope.TSEReappUndercoat.Ratio1 = success.data.SystemInfo[0].Value5;
                        $scope.TSEReappUndercoat.Ratio2 = success.data.SystemInfo[0].Value6;
                        $scope.TSEReappUndercoat.Hardener = success.data.SystemInfo[0].Value7;

                        $scope.TSEReappUnderbody.UnderbodySelect = success.data.SystemInfo[1].ApplicationTypeValue;
                        $scope.TSEReappUnderbody.BodyFillerInput = success.data.SystemInfo[1].Value3;
                        $scope.TSEReappUnderbody.UnderbodySelectChild = success.data.SystemInfo[1].Value4;
                        $scope.TSEReappUnderbody.UnderbodySelectChildInput = success.data.SystemInfo[1].Value5;

                        $scope.TSEReappBasecoat.BasecoatSelect = success.data.SystemInfo[2].ApplicationTypeValue;
                        $scope.TSEReappBasecoat.MetallicBasecoat = success.data.SystemInfo[2].Value3;
                        $scope.TSEReappBasecoat.Hardener = success.data.SystemInfo[2].Value4;
                        $scope.TSEReappBasecoat.Ratio1 = success.data.SystemInfo[2].Value4;
                        $scope.TSEReappBasecoat.Ratio2 = success.data.SystemInfo[2].Value6;

                        $scope.TSEReappClearcoat.ClearcoatSelect = success.data.SystemInfo[3].ApplicationTypeValue;
                        $scope.TSEReappClearcoat.Clear = success.data.SystemInfo[3].Value3;
                        $scope.TSEReappClearcoat.ClearcoatSelectNoOfCost = success.data.SystemInfo[3].Value4;
                        $scope.TSEReappClearcoat.Hardener = success.data.SystemInfo[3].Value5;
                        $scope.TSEReappClearcoat.Ratio1 = success.data.SystemInfo[3].Value6;
                        $scope.TSEReappClearcoat.Ratio2 = success.data.SystemInfo[3].Value7;

                        $scope.TSEReappThinner.ThinnerSelect = success.data.SystemInfo[4].ApplicationTypeValue;
                        $scope.TSEReappThinner.ThinnerSelectChildInput = success.data.SystemInfo[4].Value3;
                        $scope.TSEReappThinner.MixingRatio1 = success.data.SystemInfo[4].Value4;
                        $scope.TSEReappThinner.MixingRatio2 = success.data.SystemInfo[4].Value5;


                    }, function (error) {
                        console.log(error);
                    });
                    PendingComplaintPrintService.GetComplaintHandlerDetails($scope.ComplaintId, 2).then(function (success) {
                        //$scope.TSE = success.data.Model;
                        $scope.Thead = success.data.Model;
                        $scope.Thead.PhotoURL = success.data.PhotoInfo;
                        $scope.Thead.ReApplicationDate = $filter('date')(new Date(success.data.Model.ReApplicationDate), 'dd/MMM/yyyy');
                        // $scope.TSEReappSubstrate = success.data.SystemInfo[0].Substrate_ID;
                        $scope.ReappSubstrate = success.data.SystemInfo[0].Substrate_ID;

                        $scope.ReappUndercoat.UndercoatSelect = success.data.SystemInfo[0].Value3;
                        $scope.ReappUndercoat.UndercoatSelectChildInput = success.data.SystemInfo[0].Value4;
                        $scope.ReappUndercoat.Ratio1 = success.data.SystemInfo[0].Value5;
                        $scope.ReappUndercoat.Ratio2 = success.data.SystemInfo[0].Value6;
                        $scope.ReappUndercoat.Hardener = success.data.SystemInfo[0].Value7;

                        $scope.ReappUnderbody.UnderbodySelect = success.data.SystemInfo[1].ApplicationTypeValue;
                        $scope.ReappUnderbody.BodyFillerInput = success.data.SystemInfo[1].Value3;
                        $scope.ReappUnderbody.UnderbodySelectChild = success.data.SystemInfo[1].Value4;
                        $scope.ReappUnderbody.UnderbodySelectChildInput = success.data.SystemInfo[1].Value5;

                        $scope.ReappBasecoat.BasecoatSelect = success.data.SystemInfo[2].ApplicationTypeValue;
                        $scope.ReappBasecoat.MetallicBasecoat = success.data.SystemInfo[2].Value3;
                        $scope.ReappBasecoat.Hardener = success.data.SystemInfo[2].Value4;
                        $scope.ReappBasecoat.Ratio1 = success.data.SystemInfo[2].Value5;
                        $scope.ReappBasecoat.Ratio2 = success.data.SystemInfo[2].Value6;

                        $scope.ReappClearcoat.ClearcoatSelect = success.data.SystemInfo[3].ApplicationTypeValue;
                        $scope.ReappClearcoat.Clear = success.data.SystemInfo[3].Value3;
                        $scope.ReappClearcoat.ClearcoatSelectNoOfCost = success.data.SystemInfo[3].Value4;
                        $scope.ReappClearcoat.Hardener = success.data.SystemInfo[3].Value5;
                        $scope.ReappClearcoat.Ratio1 = success.data.SystemInfo[3].Value6;
                        $scope.ReappClearcoat.Ratio2 = success.data.SystemInfo[3].Value7;

                        $scope.ReappThinner.ThinnerSelect = success.data.SystemInfo[4].ApplicationTypeValue;
                        $scope.ReappThinner.ThinnerSelectChildInput = success.data.SystemInfo[4].Value3;
                        $scope.ReappThinner.MixingRatio1 = success.data.SystemInfo[4].Value4;
                        $scope.ReappThinner.MixingRatio2 = success.data.SystemInfo[4].Value5;
                    }, function (error) {
                        console.log(error);
                    });

                }
                else if ($scope.status == 'Pending - Business Manager') {
                    $scope.RCA = true;
                    $scope.ComplaintHandler = true;
                    $scope.ComplaintManager = false;
                    $scope.TSEManager = true;
                    $scope.RCAPlant = true;
                    $scope.PlantSubmit = true;
                    $scope.BMPlantApproval = $rootScope.session.Role.indexOf("_BM") != -1 ? true : false;
                    $scope.BHPlantApproval = false;
                    $scope.StockReceipt = false;
                    $scope.CHApprovalAction = true;
                    PendingComplaintPrintService.GetComplaintHandlerDetails($scope.ComplaintId, 4).then(function (success) {
                        if (success.data.Model == null) {
                            $scope.TSEManager = false;
                        }
                        $scope.TSE = success.data.Model;
                        $scope.TSE.PhotoURL = success.data.PhotoInfo;
                        $scope.TSE.ReApplicationDate = $filter('date')(new Date(success.data.Model.ReApplicationDate), 'dd/MMM/yyyy');
                        $scope.TSEReappSubstrate = success.data.SystemInfo[0].Substrate_ID;

                        $scope.TSEReappUndercoat.UndercoatSelect = success.data.SystemInfo[0].Value3;
                        $scope.TSEReappUndercoat.UndercoatSelectChildInput = success.data.SystemInfo[0].Value4;
                        $scope.TSEReappUndercoat.Ratio1 = success.data.SystemInfo[0].Value5;
                        $scope.TSEReappUndercoat.Ratio2 = success.data.SystemInfo[0].Value6;
                        $scope.TSEReappUndercoat.Hardener = success.data.SystemInfo[0].Value7;

                        $scope.TSEReappUnderbody.UnderbodySelect = success.data.SystemInfo[1].ApplicationTypeValue;
                        $scope.TSEReappUnderbody.BodyFillerInput = success.data.SystemInfo[1].Value3;
                        $scope.TSEReappUnderbody.UnderbodySelectChild = success.data.SystemInfo[1].Value4;
                        $scope.TSEReappUnderbody.UnderbodySelectChildInput = success.data.SystemInfo[1].Value5;

                        $scope.TSEReappBasecoat.BasecoatSelect = success.data.SystemInfo[2].ApplicationTypeValue;
                        $scope.TSEReappBasecoat.MetallicBasecoat = success.data.SystemInfo[2].Value3;
                        $scope.TSEReappBasecoat.Hardener = success.data.SystemInfo[2].Value4;
                        $scope.TSEReappBasecoat.Ratio1 = success.data.SystemInfo[2].Value4;
                        $scope.TSEReappBasecoat.Ratio2 = success.data.SystemInfo[2].Value6;

                        $scope.TSEReappClearcoat.ClearcoatSelect = success.data.SystemInfo[3].ApplicationTypeValue;
                        $scope.TSEReappClearcoat.Clear = success.data.SystemInfo[3].Value3;
                        $scope.TSEReappClearcoat.ClearcoatSelectNoOfCost = success.data.SystemInfo[3].Value4;
                        $scope.TSEReappClearcoat.Hardener = success.data.SystemInfo[3].Value5;
                        $scope.TSEReappClearcoat.Ratio1 = success.data.SystemInfo[3].Value6;
                        $scope.TSEReappClearcoat.Ratio2 = success.data.SystemInfo[3].Value7;

                        $scope.TSEReappThinner.ThinnerSelect = success.data.SystemInfo[4].ApplicationTypeValue;
                        $scope.TSEReappThinner.ThinnerSelectChildInput = success.data.SystemInfo[4].Value3;
                        $scope.TSEReappThinner.MixingRatio1 = success.data.SystemInfo[4].Value4;
                        $scope.TSEReappThinner.MixingRatio2 = success.data.SystemInfo[4].Value5;


                    }, function (error) {
                        console.log(error);
                    });
                    PendingComplaintPrintService.GetComplaintHandlerDetails($scope.ComplaintId, 2).then(function (success) {
                        //$scope.TSE = success.data.Model;
                        $scope.Thead = success.data.Model;
                        $scope.Thead.PhotoURL = success.data.PhotoInfo;
                        $scope.Thead.ReApplicationDate = $filter('date')(new Date(success.data.Model.ReApplicationDate), 'dd/MMM/yyyy');
                        $scope.ReappSubstrate = success.data.SystemInfo[0].Substrate_ID;

                        $scope.ReappUndercoat.UndercoatSelect = success.data.SystemInfo[0].Value3;
                        $scope.ReappUndercoat.UndercoatSelectChildInput = success.data.SystemInfo[0].Value4;
                        $scope.ReappUndercoat.Ratio1 = success.data.SystemInfo[0].Value5;
                        $scope.ReappUndercoat.Ratio2 = success.data.SystemInfo[0].Value6;
                        $scope.ReappUndercoat.Hardener = success.data.SystemInfo[0].Value7;

                        $scope.ReappUnderbody.UnderbodySelect = success.data.SystemInfo[1].ApplicationTypeValue;
                        $scope.ReappUnderbody.BodyFillerInput = success.data.SystemInfo[1].Value3;
                        $scope.ReappUnderbody.UnderbodySelectChild = success.data.SystemInfo[1].Value4;
                        $scope.ReappUnderbody.UnderbodySelectChildInput = success.data.SystemInfo[1].Value5;

                        $scope.ReappBasecoat.BasecoatSelect = success.data.SystemInfo[2].ApplicationTypeValue;
                        $scope.ReappBasecoat.MetallicBasecoat = success.data.SystemInfo[2].Value3;
                        $scope.ReappBasecoat.Hardener = success.data.SystemInfo[2].Value4;
                        $scope.ReappBasecoat.Ratio1 = success.data.SystemInfo[2].Value5;
                        $scope.ReappBasecoat.Ratio2 = success.data.SystemInfo[2].Value6;

                        $scope.ReappClearcoat.ClearcoatSelect = success.data.SystemInfo[3].ApplicationTypeValue;
                        $scope.ReappClearcoat.Clear = success.data.SystemInfo[3].Value3;
                        $scope.ReappClearcoat.ClearcoatSelectNoOfCost = success.data.SystemInfo[3].Value4;
                        $scope.ReappClearcoat.Hardener = success.data.SystemInfo[3].Value5;
                        $scope.ReappClearcoat.Ratio1 = success.data.SystemInfo[3].Value6;
                        $scope.ReappClearcoat.Ratio2 = success.data.SystemInfo[3].Value7;

                        $scope.ReappThinner.ThinnerSelect = success.data.SystemInfo[4].ApplicationTypeValue;
                        $scope.ReappThinner.ThinnerSelectChildInput = success.data.SystemInfo[4].Value3;
                        $scope.ReappThinner.MixingRatio1 = success.data.SystemInfo[4].Value4;
                        $scope.ReappThinner.MixingRatio2 = success.data.SystemInfo[4].Value5;
                    }, function (error) {
                        console.log(error);
                    });

                    PendingComplaintPrintService.GetComplaintRCA($scope.ComplaintId, 6).then(function (success) {
                        $scope.Plnt = success.data;
                        $scope.Plnt.DateOfExpectedClosure = $filter('date')(new Date(success.data.DateOfExpectedClosure), 'dd/MMM/yyyy');
                    }, function (error) {
                        console.log(error);
                    });

                }
                else if ($scope.status == 'Pending Plant - Business Head') {
                    $scope.RCA = true;
                    $scope.ComplaintHandler = true;
                    $scope.ComplaintManager = false;
                    $scope.TSEManager = true;
                    $scope.RCAPlant = true;
                    $scope.PlantSubmit = true
                    $scope.BHPlantApproval = $rootScope.session.Role.indexOf("BH") != -1 ? true : false;
                    $scope.BMPlantApproval = false;
                    $scope.StockReceipt = false;
                    $scope.CHApprovalAction = true;
                    PendingComplaintPrintService.GetComplaintRCA($scope.ComplaintId, 6).then(function (success) {
                        if (success.data == null) {
                            $scope.RCAPlant = false;
                        }
                        $scope.Plnt = success.data;
                    }, function (error) {
                        console.log(error);
                    });
                    PendingComplaintPrintService.GetComplaintHandlerDetails($scope.ComplaintId, 4).then(function (success) {
                        if (success.data.Model == null) {
                            $scope.TSEManager = false;
                        }

                        $scope.TSE = success.data.Model;
                        if (success.data.PhotoInfo != null) {
                            $scope.TSE.PhotoURL = success.data.PhotoInfo;
                        }

                        if (success.data.ReApplicationDate != null) {
                            $scope.TSE.ReApplicationDate = $filter('date')(new Date(success.data.Model.ReApplicationDate), 'dd/MMM/yyyy');

                        }

                        $scope.TSEReappSubstrate = success.data.SystemInfo[0].Substrate_ID;




                        $scope.TSEReappUndercoat.UndercoatSelect = success.data.SystemInfo[0].Value3;
                        $scope.TSEReappUndercoat.UndercoatSelectChildInput = success.data.SystemInfo[0].Value4;
                        $scope.TSEReappUndercoat.Ratio1 = success.data.SystemInfo[0].Value5;
                        $scope.TSEReappUndercoat.Ratio2 = success.data.SystemInfo[0].Value6;
                        $scope.TSEReappUndercoat.Hardener = success.data.SystemInfo[0].Value7;

                        $scope.TSEReappUnderbody.UnderbodySelect = success.data.SystemInfo[1].ApplicationTypeValue;
                        $scope.TSEReappUnderbody.BodyFillerInput = success.data.SystemInfo[1].Value3;
                        $scope.TSEReappUnderbody.UnderbodySelectChild = success.data.SystemInfo[1].Value4;
                        $scope.TSEReappUnderbody.UnderbodySelectChildInput = success.data.SystemInfo[1].Value5;

                        $scope.TSEReappBasecoat.BasecoatSelect = success.data.SystemInfo[2].ApplicationTypeValue;
                        $scope.TSEReappBasecoat.MetallicBasecoat = success.data.SystemInfo[2].Value3;
                        $scope.TSEReappBasecoat.Hardener = success.data.SystemInfo[2].Value4;
                        $scope.TSEReappBasecoat.Ratio1 = success.data.SystemInfo[2].Value4;
                        $scope.TSEReappBasecoat.Ratio2 = success.data.SystemInfo[2].Value6;

                        $scope.TSEReappClearcoat.ClearcoatSelect = success.data.SystemInfo[3].ApplicationTypeValue;
                        $scope.TSEReappClearcoat.Clear = success.data.SystemInfo[3].Value3;
                        $scope.TSEReappClearcoat.ClearcoatSelectNoOfCost = success.data.SystemInfo[3].Value4;
                        $scope.TSEReappClearcoat.Hardener = success.data.SystemInfo[3].Value5;
                        $scope.TSEReappClearcoat.Ratio1 = success.data.SystemInfo[3].Value6;
                        $scope.TSEReappClearcoat.Ratio2 = success.data.SystemInfo[3].Value7;

                        $scope.TSEReappThinner.ThinnerSelect = success.data.SystemInfo[4].ApplicationTypeValue;
                        $scope.TSEReappThinner.ThinnerSelectChildInput = success.data.SystemInfo[4].Value3;
                        $scope.TSEReappThinner.MixingRatio1 = success.data.SystemInfo[4].Value4;
                        $scope.TSEReappThinner.MixingRatio2 = success.data.SystemInfo[4].Value5;


                    }, function (error) {
                        console.log(error);
                    });
                    PendingComplaintPrintService.GetComplaintHandlerDetails($scope.ComplaintId, 2).then(function (success) {
                        //$scope.TSE = success.data.Model;
                        $scope.Thead = success.data.Model;
                        $scope.Thead.PhotoURL = success.data.PhotoInfo;
                        $scope.Thead.ReApplicationDate = $filter('date')(new Date(success.data.Model.ReApplicationDate), 'dd/MMM/yyyy');
                        $scope.ReappSubstrate = success.data.SystemInfo[0].Substrate_ID;

                        $scope.ReappUndercoat.UndercoatSelect = success.data.SystemInfo[0].Value3;
                        $scope.ReappUndercoat.UndercoatSelectChildInput = success.data.SystemInfo[0].Value4;
                        $scope.ReappUndercoat.Ratio1 = success.data.SystemInfo[0].Value5;
                        $scope.ReappUndercoat.Ratio2 = success.data.SystemInfo[0].Value6;
                        $scope.ReappUndercoat.Hardener = success.data.SystemInfo[0].Value7;

                        $scope.ReappUnderbody.UnderbodySelect = success.data.SystemInfo[1].ApplicationTypeValue;
                        $scope.ReappUnderbody.BodyFillerInput = success.data.SystemInfo[1].Value3;
                        $scope.ReappUnderbody.UnderbodySelectChild = success.data.SystemInfo[1].Value4;
                        $scope.ReappUnderbody.UnderbodySelectChildInput = success.data.SystemInfo[1].Value5;

                        $scope.ReappBasecoat.BasecoatSelect = success.data.SystemInfo[2].ApplicationTypeValue;
                        $scope.ReappBasecoat.MetallicBasecoat = success.data.SystemInfo[2].Value3;
                        $scope.ReappBasecoat.Hardener = success.data.SystemInfo[2].Value4;
                        $scope.ReappBasecoat.Ratio1 = success.data.SystemInfo[2].Value5;
                        $scope.ReappBasecoat.Ratio2 = success.data.SystemInfo[2].Value6;

                        $scope.ReappClearcoat.ClearcoatSelect = success.data.SystemInfo[3].ApplicationTypeValue;
                        $scope.ReappClearcoat.Clear = success.data.SystemInfo[3].Value3;
                        $scope.ReappClearcoat.ClearcoatSelectNoOfCost = success.data.SystemInfo[3].Value4;
                        $scope.ReappClearcoat.Hardener = success.data.SystemInfo[3].Value5;
                        $scope.ReappClearcoat.Ratio1 = success.data.SystemInfo[3].Value6;
                        $scope.ReappClearcoat.Ratio2 = success.data.SystemInfo[3].Value7;

                        $scope.ReappThinner.ThinnerSelect = success.data.SystemInfo[4].ApplicationTypeValue;
                        $scope.ReappThinner.ThinnerSelectChildInput = success.data.SystemInfo[4].Value3;
                        $scope.ReappThinner.MixingRatio1 = success.data.SystemInfo[4].Value4;
                        $scope.ReappThinner.MixingRatio2 = success.data.SystemInfo[4].Value5;
                    }, function (error) {
                        console.log(error);
                    });

                    PendingComplaintPrintService.GetComplaintRCA($scope.ComplaintId, 6).then(function (success) {
                        $scope.Plnt = success.data;
                        $scope.Plnt.DateOfExpectedClosure = $filter('date')(new Date(success.data.DateOfExpectedClosure), 'dd/MMM/yyyy');
                    }, function (error) {
                        console.log(error);
                    });
                }
                else if ($scope.status == 'Pending Receipt - Plant') {
                    $scope.RCA = true;
                    $scope.ComplaintHandler = true;
                    $scope.ComplaintManager = false;
                    $scope.TSEManager = true;
                    $scope.RCAPlant = true;
                    $scope.PlantSubmit = $rootScope.session.Role.indexOf("Plant") != -1 ? true : false;
                    $scope.PlantApproval = false;
                    $scope.StockReceipt = $rootScope.session.Role.indexOf("Plant") != -1 ? true : false;
                    $scope.CHApprovalAction = true;
                    PendingComplaintPrintService.GetComplaintRCA($scope.ComplaintId, 6).then(function (success) {
                        $scope.Plnt = success.data;
                        $scope.Plnt.DateOfExpectedClosure = $filter('date')(new Date(success.data.DateOfExpectedClosure), 'dd/MMM/yyyy');
                    }, function (error) {
                        console.log(error);
                    });
                    PendingComplaintPrintService.GetComplaintHandlerDetails($scope.ComplaintId, 4).then(function (success) {
                        if (success.data.Model == null) {
                            $scope.TSEManager = false;
                        }
                        $scope.TSE = success.data.Model;
                        $scope.TSE.PhotoURL = success.data.PhotoInfo;
                        $scope.TSE.ReApplicationDate = $filter('date')(new Date(success.data.Model.ReApplicationDate), 'dd/MMM/yyyy');
                        $scope.TSEReappSubstrate = success.data.SystemInfo[0].Substrate_ID;

                        $scope.TSEReappUndercoat.UndercoatSelect = success.data.SystemInfo[0].Value3;
                        $scope.TSEReappUndercoat.UndercoatSelectChildInput = success.data.SystemInfo[0].Value4;
                        $scope.TSEReappUndercoat.Ratio1 = success.data.SystemInfo[0].Value5;
                        $scope.TSEReappUndercoat.Ratio2 = success.data.SystemInfo[0].Value6;
                        $scope.TSEReappUndercoat.Hardener = success.data.SystemInfo[0].Value7;

                        $scope.TSEReappUnderbody.UnderbodySelect = success.data.SystemInfo[1].ApplicationTypeValue;
                        $scope.TSEReappUnderbody.BodyFillerInput = success.data.SystemInfo[1].Value3;
                        $scope.TSEReappUnderbody.UnderbodySelectChild = success.data.SystemInfo[1].Value4;
                        $scope.TSEReappUnderbody.UnderbodySelectChildInput = success.data.SystemInfo[1].Value5;

                        $scope.TSEReappBasecoat.BasecoatSelect = success.data.SystemInfo[2].ApplicationTypeValue;
                        $scope.TSEReappBasecoat.MetallicBasecoat = success.data.SystemInfo[2].Value3;
                        $scope.TSEReappBasecoat.Hardener = success.data.SystemInfo[2].Value4;
                        $scope.TSEReappBasecoat.Ratio1 = success.data.SystemInfo[2].Value4;
                        $scope.TSEReappBasecoat.Ratio2 = success.data.SystemInfo[2].Value6;

                        $scope.TSEReappClearcoat.ClearcoatSelect = success.data.SystemInfo[3].ApplicationTypeValue;
                        $scope.TSEReappClearcoat.Clear = success.data.SystemInfo[3].Value3;
                        $scope.TSEReappClearcoat.ClearcoatSelectNoOfCost = success.data.SystemInfo[3].Value4;
                        $scope.TSEReappClearcoat.Hardener = success.data.SystemInfo[3].Value5;
                        $scope.TSEReappClearcoat.Ratio1 = success.data.SystemInfo[3].Value6;
                        $scope.TSEReappClearcoat.Ratio2 = success.data.SystemInfo[3].Value7;

                        $scope.TSEReappThinner.ThinnerSelect = success.data.SystemInfo[4].ApplicationTypeValue;
                        $scope.TSEReappThinner.ThinnerSelectChildInput = success.data.SystemInfo[4].Value3;
                        $scope.TSEReappThinner.MixingRatio1 = success.data.SystemInfo[4].Value4;
                        $scope.TSEReappThinner.MixingRatio2 = success.data.SystemInfo[4].Value5;


                    }, function (error) {
                        console.log(error);
                    });
                    PendingComplaintPrintService.GetComplaintHandlerDetails($scope.ComplaintId, 2).then(function (success) {
                        //$scope.TSE = success.data.Model;
                        $scope.Thead = success.data.Model;
                        $scope.Thead.PhotoURL = success.data.PhotoInfo;
                        $scope.Thead.ReApplicationDate = $filter('date')(new Date(success.data.Model.ReApplicationDate), 'dd/MMM/yyyy');
                        $scope.ReappSubstrate = success.data.SystemInfo[0].Substrate_ID;

                        $scope.ReappUndercoat.UndercoatSelect = success.data.SystemInfo[0].Value3;
                        $scope.ReappUndercoat.UndercoatSelectChildInput = success.data.SystemInfo[0].Value4;
                        $scope.ReappUndercoat.Ratio1 = success.data.SystemInfo[0].Value5;
                        $scope.ReappUndercoat.Ratio2 = success.data.SystemInfo[0].Value6;
                        $scope.ReappUndercoat.Hardener = success.data.SystemInfo[0].Value7;

                        $scope.ReappUnderbody.UnderbodySelect = success.data.SystemInfo[1].ApplicationTypeValue;
                        $scope.ReappUnderbody.BodyFillerInput = success.data.SystemInfo[1].Value3;
                        $scope.ReappUnderbody.UnderbodySelectChild = success.data.SystemInfo[1].Value4;
                        $scope.ReappUnderbody.UnderbodySelectChildInput = success.data.SystemInfo[1].Value5;

                        $scope.ReappBasecoat.BasecoatSelect = success.data.SystemInfo[2].ApplicationTypeValue;
                        $scope.ReappBasecoat.MetallicBasecoat = success.data.SystemInfo[2].Value3;
                        $scope.ReappBasecoat.Hardener = success.data.SystemInfo[2].Value4;
                        $scope.ReappBasecoat.Ratio1 = success.data.SystemInfo[2].Value5;
                        $scope.ReappBasecoat.Ratio2 = success.data.SystemInfo[2].Value6;

                        $scope.ReappClearcoat.ClearcoatSelect = success.data.SystemInfo[3].ApplicationTypeValue;
                        $scope.ReappClearcoat.Clear = success.data.SystemInfo[3].Value3;
                        $scope.ReappClearcoat.ClearcoatSelectNoOfCost = success.data.SystemInfo[3].Value4;
                        $scope.ReappClearcoat.Hardener = success.data.SystemInfo[3].Value5;
                        $scope.ReappClearcoat.Ratio1 = success.data.SystemInfo[3].Value6;
                        $scope.ReappClearcoat.Ratio2 = success.data.SystemInfo[3].Value7;

                        $scope.ReappThinner.ThinnerSelect = success.data.SystemInfo[4].ApplicationTypeValue;
                        $scope.ReappThinner.ThinnerSelectChildInput = success.data.SystemInfo[4].Value3;
                        $scope.ReappThinner.MixingRatio1 = success.data.SystemInfo[4].Value4;
                        $scope.ReappThinner.MixingRatio2 = success.data.SystemInfo[4].Value5;
                    }, function (error) {
                        console.log(error);
                    });

                }
                else if ($scope.status == 'Pending RCA - R&D') {
                    $scope.RCA = true;
                    $scope.ComplaintHandler = true;
                    $scope.ComplaintManager = false;
                    $scope.TSEManager = true;
                    $scope.RCAPlant = true;
                    $scope.PlantSubmit = true;
                    $scope.PlantApproval = false;
                    $scope.StockReceipt = false;
                    $scope.RCARD = $rootScope.session.Role.indexOf("RD") != -1 ? true : false;
                    $scope.RDSubmit = false;
                    $scope.RDApproval = false;
                    $scope.RDStockReceipt = false;
                    $scope.CHApprovalAction = true;
                    PendingComplaintPrintService.GetComplaintRCA($scope.ComplaintId, 6).then(function (success) {
                        $scope.Plnt = angular.copy(success.data);
                        $scope.Plnt.DateOfExpectedClosure = $filter('date')(new Date(success.data.DateOfExpectedClosure), 'dd/MMM/yyyy');

                    }, function (error) {
                        console.log(error);
                    });
                    PendingComplaintPrintService.GetComplaintRCA($scope.ComplaintId, 8).then(function (success) {
                        if (success.data != null) {
                            $scope.RD = success.data;
                            $scope.RD.DateOfExpectedClosure = $filter('date')(new Date(success.data.DateOfExpectedClosure), 'dd/MMM/yyyy');
                        }
                    }, function (error) {
                        console.log(error);
                    });
                    PendingComplaintPrintService.GetComplaintHandlerDetails($scope.ComplaintId, 4).then(function (success) {
                        if (success.data.Model == null) {
                            $scope.TSEManager = false;
                        }
                        $scope.TSE = success.data.Model;
                        if (success.data.PhotoInfo.length > 0) {
                            $scope.TSE.PhotoURL = success.data.PhotoInfo;
                        }
                        if (success.data.SystemInfo.length > 0) {
                            $scope.TSEReappSubstrate = success.data.SystemInfo[0].Substrate_ID;
                            $scope.TSE.ReApplicationDate = $filter('date')(new Date(success.data.Model.ReApplicationDate), 'dd/MMM/yyyy');
                            $scope.TSEReappUndercoat.UndercoatSelect = success.data.SystemInfo[0].Value3;
                            $scope.TSEReappUndercoat.UndercoatSelectChildInput = success.data.SystemInfo[0].Value4;
                            $scope.TSEReappUndercoat.Ratio1 = success.data.SystemInfo[0].Value5;
                            $scope.TSEReappUndercoat.Ratio2 = success.data.SystemInfo[0].Value6;
                            $scope.TSEReappUndercoat.Hardener = success.data.SystemInfo[0].Value7;

                            $scope.TSEReappUnderbody.UnderbodySelect = success.data.SystemInfo[1].ApplicationTypeValue;
                            $scope.TSEReappUnderbody.BodyFillerInput = success.data.SystemInfo[1].Value3;
                            $scope.TSEReappUnderbody.UnderbodySelectChild = success.data.SystemInfo[1].Value4;
                            $scope.TSEReappUnderbody.UnderbodySelectChildInput = success.data.SystemInfo[1].Value5;

                            $scope.TSEReappBasecoat.BasecoatSelect = success.data.SystemInfo[2].ApplicationTypeValue;
                            $scope.TSEReappBasecoat.MetallicBasecoat = success.data.SystemInfo[2].Value3;
                            $scope.TSEReappBasecoat.Hardener = success.data.SystemInfo[2].Value4;
                            $scope.TSEReappBasecoat.Ratio1 = success.data.SystemInfo[2].Value4;
                            $scope.TSEReappBasecoat.Ratio2 = success.data.SystemInfo[2].Value6;

                            $scope.TSEReappClearcoat.ClearcoatSelect = success.data.SystemInfo[3].ApplicationTypeValue;
                            $scope.TSEReappClearcoat.Clear = success.data.SystemInfo[3].Value3;
                            $scope.TSEReappClearcoat.ClearcoatSelectNoOfCost = success.data.SystemInfo[3].Value4;
                            $scope.TSEReappClearcoat.Hardener = success.data.SystemInfo[3].Value5;
                            $scope.TSEReappClearcoat.Ratio1 = success.data.SystemInfo[3].Value6;
                            $scope.TSEReappClearcoat.Ratio2 = success.data.SystemInfo[3].Value7;

                            $scope.TSEReappThinner.ThinnerSelect = success.data.SystemInfo[4].ApplicationTypeValue;
                            $scope.TSEReappThinner.ThinnerSelectChildInput = success.data.SystemInfo[4].Value3;
                            $scope.TSEReappThinner.MixingRatio1 = success.data.SystemInfo[4].Value4;
                            $scope.TSEReappThinner.MixingRatio2 = success.data.SystemInfo[4].Value5;
                        }

                    }, function (error) {
                        console.log(error);
                    });
                    PendingComplaintPrintService.GetComplaintHandlerDetails($scope.ComplaintId, 2).then(function (success) {
                        //$scope.TSE = success.data.Model;
                        $scope.Thead = success.data.Model;
                        $scope.Thead.ReApplicationDate = $filter('date')(new Date(success.data.Model.ReApplicationDate), 'dd/MMM/yyyy');
                        if (success.data.PhotoInfo.length > 0) {
                            $scope.Thead.PhotoURL = success.data.PhotoInfo;
                        }
                        if (success.data.SystemInfo.length > 0) {


                            $scope.ReappSubstrate = success.data.SystemInfo[0].Substrate_ID;

                            $scope.ReappUndercoat.UndercoatSelect = success.data.SystemInfo[0].Value3;
                            $scope.ReappUndercoat.UndercoatSelectChildInput = success.data.SystemInfo[0].Value4;
                            $scope.ReappUndercoat.Ratio1 = success.data.SystemInfo[0].Value5;
                            $scope.ReappUndercoat.Ratio2 = success.data.SystemInfo[0].Value6;
                            $scope.ReappUndercoat.Hardener = success.data.SystemInfo[0].Value7;

                            $scope.ReappUnderbody.UnderbodySelect = success.data.SystemInfo[1].ApplicationTypeValue;
                            $scope.ReappUnderbody.BodyFillerInput = success.data.SystemInfo[1].Value3;
                            $scope.ReappUnderbody.UnderbodySelectChild = success.data.SystemInfo[1].Value4;
                            $scope.ReappUnderbody.UnderbodySelectChildInput = success.data.SystemInfo[1].Value5;

                            $scope.ReappBasecoat.BasecoatSelect = success.data.SystemInfo[2].ApplicationTypeValue;
                            $scope.ReappBasecoat.MetallicBasecoat = success.data.SystemInfo[2].Value3;
                            $scope.ReappBasecoat.Hardener = success.data.SystemInfo[2].Value4;
                            $scope.ReappBasecoat.Ratio1 = success.data.SystemInfo[2].Value5;
                            $scope.ReappBasecoat.Ratio2 = success.data.SystemInfo[2].Value6;

                            $scope.ReappClearcoat.ClearcoatSelect = success.data.SystemInfo[3].ApplicationTypeValue;
                            $scope.ReappClearcoat.Clear = success.data.SystemInfo[3].Value3;
                            $scope.ReappClearcoat.ClearcoatSelectNoOfCost = success.data.SystemInfo[3].Value4;
                            $scope.ReappClearcoat.Hardener = success.data.SystemInfo[3].Value5;
                            $scope.ReappClearcoat.Ratio1 = success.data.SystemInfo[3].Value6;
                            $scope.ReappClearcoat.Ratio2 = success.data.SystemInfo[3].Value7;

                            $scope.ReappThinner.ThinnerSelect = success.data.SystemInfo[4].ApplicationTypeValue;
                            $scope.ReappThinner.ThinnerSelectChildInput = success.data.SystemInfo[4].Value3;
                            $scope.ReappThinner.MixingRatio1 = success.data.SystemInfo[4].Value4;
                            $scope.ReappThinner.MixingRatio2 = success.data.SystemInfo[4].Value5;
                        }
                    }, function (error) {
                        console.log(error);
                    });

                }
                else if ($scope.status == 'Pending R&D - BM') {
                    $scope.RCA = true;
                    $scope.ComplaintHandler = true;
                    $scope.ComplaintManager = false;
                    $scope.TSEManager = true;
                    $scope.RCAPlant = true;
                    $scope.PlantSubmit = true;
                    $scope.PlantApproval = false;
                    $scope.StockReceipt = false;
                    $scope.RCARD = true;
                    $scope.RDSubmit = true;
                    $scope.RDBMApproval = $rootScope.session.Role.indexOf("BM") != -1 ? true : false;
                    $scope.RDBHApproval = false;
                    $scope.RDStockReceipt = false;
                    $scope.CHApprovalAction = true;
                    PendingComplaintPrintService.GetComplaintRCA($scope.ComplaintId, 6).then(function (success) {
                        if (success.data == null) {
                            $scope.RCAPlant = false;
                        }
                        $scope.Plnt = success.data;
                        $scope.Plnt.DateOfExpectedClosure = $filter('date')(new Date(success.data.DateOfExpectedClosure), 'dd/MMM/yyyy');
                    }, function (error) {
                        console.log(error);
                    });
                    PendingComplaintPrintService.GetComplaintRCA($scope.ComplaintId, 8).then(function (success) {
                        if (success.data == null) {
                            $scope.RCARD = false;
                        }
                        $scope.RD = success.data;
                        $scope.RD.DateOfExpectedClosure = $filter('date')(new Date(success.data.DateOfExpectedClosure), 'dd/MMM/yyyy');
                    }, function (error) {
                        console.log(error);
                    });
                    PendingComplaintPrintService.GetComplaintHandlerDetails($scope.ComplaintId, 4).then(function (success) {
                        if (success.data.Model == null) {
                            $scope.TSEManager = false;
                        }
                        $scope.TSE = success.data.Model;
                        $scope.TSE.PhotoURL = success.data.PhotoInfo;
                        $scope.TSE.ReApplicationDate = $filter('date')(new Date(success.data.Model.ReApplicationDate), 'dd/MMM/yyyy');
                        $scope.TSEReappSubstrate = success.data.SystemInfo[0].Substrate_ID;

                        $scope.TSEReappUndercoat.UndercoatSelect = success.data.SystemInfo[0].Value3;
                        $scope.TSEReappUndercoat.UndercoatSelectChildInput = success.data.SystemInfo[0].Value4;
                        $scope.TSEReappUndercoat.Ratio1 = success.data.SystemInfo[0].Value5;
                        $scope.TSEReappUndercoat.Ratio2 = success.data.SystemInfo[0].Value6;
                        $scope.TSEReappUndercoat.Hardener = success.data.SystemInfo[0].Value7;

                        $scope.TSEReappUnderbody.UnderbodySelect = success.data.SystemInfo[1].ApplicationTypeValue;
                        $scope.TSEReappUnderbody.BodyFillerInput = success.data.SystemInfo[1].Value3;
                        $scope.TSEReappUnderbody.UnderbodySelectChild = success.data.SystemInfo[1].Value4;
                        $scope.TSEReappUnderbody.UnderbodySelectChildInput = success.data.SystemInfo[1].Value5;

                        $scope.TSEReappBasecoat.BasecoatSelect = success.data.SystemInfo[2].ApplicationTypeValue;
                        $scope.TSEReappBasecoat.MetallicBasecoat = success.data.SystemInfo[2].Value3;
                        $scope.TSEReappBasecoat.Hardener = success.data.SystemInfo[2].Value4;
                        $scope.TSEReappBasecoat.Ratio1 = success.data.SystemInfo[2].Value4;
                        $scope.TSEReappBasecoat.Ratio2 = success.data.SystemInfo[2].Value6;

                        $scope.TSEReappClearcoat.ClearcoatSelect = success.data.SystemInfo[3].ApplicationTypeValue;
                        $scope.TSEReappClearcoat.Clear = success.data.SystemInfo[3].Value3;
                        $scope.TSEReappClearcoat.ClearcoatSelectNoOfCost = success.data.SystemInfo[3].Value4;
                        $scope.TSEReappClearcoat.Hardener = success.data.SystemInfo[3].Value5;
                        $scope.TSEReappClearcoat.Ratio1 = success.data.SystemInfo[3].Value6;
                        $scope.TSEReappClearcoat.Ratio2 = success.data.SystemInfo[3].Value7;

                        $scope.TSEReappThinner.ThinnerSelect = success.data.SystemInfo[4].ApplicationTypeValue;
                        $scope.TSEReappThinner.ThinnerSelectChildInput = success.data.SystemInfo[4].Value3;
                        $scope.TSEReappThinner.MixingRatio1 = success.data.SystemInfo[4].Value4;
                        $scope.TSEReappThinner.MixingRatio2 = success.data.SystemInfo[4].Value5;


                    }, function (error) {
                        console.log(error);
                    });
                    PendingComplaintPrintService.GetComplaintHandlerDetails($scope.ComplaintId, 2).then(function (success) {
                        //$scope.TSE = success.data.Model;
                        $scope.Thead = success.data.Model;
                        $scope.Thead.PhotoURL = success.data.PhotoInfo;
                        $scope.Thead.ReApplicationDate = $filter('date')(new Date(success.data.Model.ReApplicationDate), 'dd/MMM/yyyy');
                        $scope.ReappSubstrate = success.data.SystemInfo[0].Substrate_ID;

                        $scope.ReappUndercoat.UndercoatSelect = success.data.SystemInfo[0].Value3;
                        $scope.ReappUndercoat.UndercoatSelectChildInput = success.data.SystemInfo[0].Value4;
                        $scope.ReappUndercoat.Ratio1 = success.data.SystemInfo[0].Value5;
                        $scope.ReappUndercoat.Ratio2 = success.data.SystemInfo[0].Value6;
                        $scope.ReappUndercoat.Hardener = success.data.SystemInfo[0].Value7;

                        $scope.ReappUnderbody.UnderbodySelect = success.data.SystemInfo[1].ApplicationTypeValue;
                        $scope.ReappUnderbody.BodyFillerInput = success.data.SystemInfo[1].Value3;
                        $scope.ReappUnderbody.UnderbodySelectChild = success.data.SystemInfo[1].Value4;
                        $scope.ReappUnderbody.UnderbodySelectChildInput = success.data.SystemInfo[1].Value5;

                        $scope.ReappBasecoat.BasecoatSelect = success.data.SystemInfo[2].ApplicationTypeValue;
                        $scope.ReappBasecoat.MetallicBasecoat = success.data.SystemInfo[2].Value3;
                        $scope.ReappBasecoat.Hardener = success.data.SystemInfo[2].Value4;
                        $scope.ReappBasecoat.Ratio1 = success.data.SystemInfo[2].Value5;
                        $scope.ReappBasecoat.Ratio2 = success.data.SystemInfo[2].Value6;

                        $scope.ReappClearcoat.ClearcoatSelect = success.data.SystemInfo[3].ApplicationTypeValue;
                        $scope.ReappClearcoat.Clear = success.data.SystemInfo[3].Value3;
                        $scope.ReappClearcoat.ClearcoatSelectNoOfCost = success.data.SystemInfo[3].Value4;
                        $scope.ReappClearcoat.Hardener = success.data.SystemInfo[3].Value5;
                        $scope.ReappClearcoat.Ratio1 = success.data.SystemInfo[3].Value6;
                        $scope.ReappClearcoat.Ratio2 = success.data.SystemInfo[3].Value7;

                        $scope.ReappThinner.ThinnerSelect = success.data.SystemInfo[4].ApplicationTypeValue;
                        $scope.ReappThinner.ThinnerSelectChildInput = success.data.SystemInfo[4].Value3;
                        $scope.ReappThinner.MixingRatio1 = success.data.SystemInfo[4].Value4;
                        $scope.ReappThinner.MixingRatio2 = success.data.SystemInfo[4].Value5;
                    }, function (error) {
                        console.log(error);
                    });

                }
                else if ($scope.status == 'Pending R&D - Business Head') {
                    $scope.RCA = true;
                    $scope.ComplaintHandler = true;
                    $scope.ComplaintManager = false;
                    $scope.TSEManager = true;
                    $scope.RCAPlant = true;
                    $scope.PlantSubmit = true;
                    $scope.PlantApproval = false;
                    $scope.StockReceipt = false;
                    $scope.RCARD = true;
                    $scope.RDSubmit = true;
                    $scope.RDBMApproval = false;
                    $scope.RDBHApproval = $rootScope.session.Role.indexOf("BH") != -1 ? true : false;
                    $scope.RDStockReceipt = false;
                    $scope.CHApprovalAction = true;
                    PendingComplaintPrintService.GetComplaintRCA($scope.ComplaintId, 6).then(function (success) {
                        if (success.data == null) {
                            $scope.RCAPlant = false;
                        }
                        $scope.Plnt = success.data;
                        $scope.Plnt.DateOfExpectedClosure = $filter('date')(new Date(success.data.DateOfExpectedClosure), 'dd/MMM/yyyy');
                    }, function (error) {
                        console.log(error);
                    });
                    PendingComplaintPrintService.GetComplaintRCA($scope.ComplaintId, 8).then(function (success) {
                        if (success.data == null) {
                            $scope.RCARD = false;
                        }
                        $scope.RD = success.data;
                        $scope.RD.DateOfExpectedClosure = $filter('date')(new Date(success.data.DateOfExpectedClosure), 'dd/MMM/yyyy');
                    }, function (error) {
                        console.log(error);
                    });
                    PendingComplaintPrintService.GetComplaintHandlerDetails($scope.ComplaintId, 4).then(function (success) {
                        if (success.data.Model == null) {
                            $scope.TSEManager = false;
                        }
                        $scope.TSE = success.data.Model;
                        if (success.data.PhotoInfo.length > 0) {
                            $scope.TSE.PhotoURL = success.data.PhotoInfo;

                        }
                        if (success.data.SystemInfo.length > 0) {

                            $scope.TSEReappSubstrate = success.data.SystemInfo[0].Substrate_ID;

                            $scope.TSEReappUndercoat.UndercoatSelect = success.data.SystemInfo[0].Value3;
                            $scope.TSEReappUndercoat.UndercoatSelectChildInput = success.data.SystemInfo[0].Value4;
                            $scope.TSEReappUndercoat.Ratio1 = success.data.SystemInfo[0].Value5;
                            $scope.TSEReappUndercoat.Ratio2 = success.data.SystemInfo[0].Value6;
                            $scope.TSEReappUndercoat.Hardener = success.data.SystemInfo[0].Value7;

                            $scope.TSEReappUnderbody.UnderbodySelect = success.data.SystemInfo[1].ApplicationTypeValue;
                            $scope.TSEReappUnderbody.BodyFillerInput = success.data.SystemInfo[1].Value3;
                            $scope.TSEReappUnderbody.UnderbodySelectChild = success.data.SystemInfo[1].Value4;
                            $scope.TSEReappUnderbody.UnderbodySelectChildInput = success.data.SystemInfo[1].Value5;

                            $scope.TSEReappBasecoat.BasecoatSelect = success.data.SystemInfo[2].ApplicationTypeValue;
                            $scope.TSEReappBasecoat.MetallicBasecoat = success.data.SystemInfo[2].Value3;
                            $scope.TSEReappBasecoat.Hardener = success.data.SystemInfo[2].Value4;
                            $scope.TSEReappBasecoat.Ratio1 = success.data.SystemInfo[2].Value4;
                            $scope.TSEReappBasecoat.Ratio2 = success.data.SystemInfo[2].Value6;

                            $scope.TSEReappClearcoat.ClearcoatSelect = success.data.SystemInfo[3].ApplicationTypeValue;
                            $scope.TSEReappClearcoat.Clear = success.data.SystemInfo[3].Value3;
                            $scope.TSEReappClearcoat.ClearcoatSelectNoOfCost = success.data.SystemInfo[3].Value4;
                            $scope.TSEReappClearcoat.Hardener = success.data.SystemInfo[3].Value5;
                            $scope.TSEReappClearcoat.Ratio1 = success.data.SystemInfo[3].Value6;
                            $scope.TSEReappClearcoat.Ratio2 = success.data.SystemInfo[3].Value7;

                            $scope.TSEReappThinner.ThinnerSelect = success.data.SystemInfo[4].ApplicationTypeValue;
                            $scope.TSEReappThinner.ThinnerSelectChildInput = success.data.SystemInfo[4].Value3;
                            $scope.TSEReappThinner.MixingRatio1 = success.data.SystemInfo[4].Value4;
                            $scope.TSEReappThinner.MixingRatio2 = success.data.SystemInfo[4].Value5;
                        }
                        $scope.TSE.ReApplicationDate = $filter('date')(new Date(success.data.Model.ReApplicationDate), 'dd/MMM/yyyy');
                    }, function (error) {
                        console.log(error);
                    });
                    PendingComplaintPrintService.GetComplaintHandlerDetails($scope.ComplaintId, 2).then(function (success) {
                        //$scope.TSE = success.data.Model;
                        $scope.Thead = success.data.Model;
                        $scope.Thead.ReApplicationDate = $filter('date')(new Date(success.data.Model.ReApplicationDate), 'dd/MMM/yyyy');
                        if (success.data.PhotoInfo.length > 0) {
                            $scope.Thead.PhotoURL = success.data.PhotoInfo;
                        }
                        if (success.data.SystemInfo.length > 0) {


                            $scope.ReappSubstrate = success.data.SystemInfo[0].Substrate_ID;

                            $scope.ReappUndercoat.UndercoatSelect = success.data.SystemInfo[0].Value3;
                            $scope.ReappUndercoat.UndercoatSelectChildInput = success.data.SystemInfo[0].Value4;
                            $scope.ReappUndercoat.Ratio1 = success.data.SystemInfo[0].Value5;
                            $scope.ReappUndercoat.Ratio2 = success.data.SystemInfo[0].Value6;
                            $scope.ReappUndercoat.Hardener = success.data.SystemInfo[0].Value7;

                            $scope.ReappUnderbody.UnderbodySelect = success.data.SystemInfo[1].ApplicationTypeValue;
                            $scope.ReappUnderbody.BodyFillerInput = success.data.SystemInfo[1].Value3;
                            $scope.ReappUnderbody.UnderbodySelectChild = success.data.SystemInfo[1].Value4;
                            $scope.ReappUnderbody.UnderbodySelectChildInput = success.data.SystemInfo[1].Value5;

                            $scope.ReappBasecoat.BasecoatSelect = success.data.SystemInfo[2].ApplicationTypeValue;
                            $scope.ReappBasecoat.MetallicBasecoat = success.data.SystemInfo[2].Value3;
                            $scope.ReappBasecoat.Hardener = success.data.SystemInfo[2].Value4;
                            $scope.ReappBasecoat.Ratio1 = success.data.SystemInfo[2].Value5;
                            $scope.ReappBasecoat.Ratio2 = success.data.SystemInfo[2].Value6;

                            $scope.ReappClearcoat.ClearcoatSelect = success.data.SystemInfo[3].ApplicationTypeValue;
                            $scope.ReappClearcoat.Clear = success.data.SystemInfo[3].Value3;
                            $scope.ReappClearcoat.ClearcoatSelectNoOfCost = success.data.SystemInfo[3].Value4;
                            $scope.ReappClearcoat.Hardener = success.data.SystemInfo[3].Value5;
                            $scope.ReappClearcoat.Ratio1 = success.data.SystemInfo[3].Value6;
                            $scope.ReappClearcoat.Ratio2 = success.data.SystemInfo[3].Value7;

                            $scope.ReappThinner.ThinnerSelect = success.data.SystemInfo[4].ApplicationTypeValue;
                            $scope.ReappThinner.ThinnerSelectChildInput = success.data.SystemInfo[4].Value3;
                            $scope.ReappThinner.MixingRatio1 = success.data.SystemInfo[4].Value4;
                            $scope.ReappThinner.MixingRatio2 = success.data.SystemInfo[4].Value5;
                        }
                    }, function (error) {
                        console.log(error);
                    });

                }
                else if ($scope.status == 'Pending Receipt R&D - Plant') {
                    $scope.RCA = true;
                    $scope.ComplaintHandler = true;
                    $scope.ComplaintManager = false;
                    $scope.TSEManager = true;
                    $scope.RCAPlant = true;
                    $scope.PlantSubmit = true;
                    $scope.PlantApproval = false;
                    $scope.StockReceipt = false;
                    $scope.RCARD = true;
                    $scope.RDSubmit = true;
                    $scope.RDApproval = false;
                    $scope.RDStockReceipt = $rootScope.session.Role.indexOf("Plant") != -1 ? true : false;
                    $scope.CHApprovalAction = true;
                    PendingComplaintPrintService.GetComplaintRCA($scope.ComplaintId, 6).then(function (success) {
                        if (success.data == null) {
                            $scope.RCAPlant = false;
                        }
                        $scope.Plnt = success.data;
                        $scope.Plnt.DateOfExpectedClosure = $filter('date')(new Date(success.data.DateOfExpectedClosure), 'dd/MMM/yyyy');
                    }, function (error) {
                        console.log(error);
                    });
                    PendingComplaintPrintService.GetComplaintRCA($scope.ComplaintId, 8).then(function (success) {
                        if (success.data == null) {
                            $scope.RCARD = false;
                        }
                        $scope.RD = success.data;
                        $scope.RD.DateOfExpectedClosure = $filter('date')(new Date(success.data.DateOfExpectedClosure), 'dd/MMM/yyyy');
                    }, function (error) {
                        console.log(error);
                    });
                    PendingComplaintPrintService.GetComplaintHandlerDetails($scope.ComplaintId, 4).then(function (success) {
                        if (success.data.Model == null) {
                            $scope.TSEManager = false;
                        }
                        $scope.TSE = success.data.Model;
                        if (success.data.PhotoInfo.length > 0) {
                            $scope.TSE.PhotoURL = success.data.PhotoInfo;
                        }
                        if (success.data.SystemInfo.length > 0) {


                            $scope.TSEReappSubstrate = success.data.SystemInfo[0].Substrate_ID;

                            $scope.TSEReappUndercoat.UndercoatSelect = success.data.SystemInfo[0].Value3;
                            $scope.TSEReappUndercoat.UndercoatSelectChildInput = success.data.SystemInfo[0].Value4;
                            $scope.TSEReappUndercoat.Ratio1 = success.data.SystemInfo[0].Value5;
                            $scope.TSEReappUndercoat.Ratio2 = success.data.SystemInfo[0].Value6;
                            $scope.TSEReappUndercoat.Hardener = success.data.SystemInfo[0].Value7;

                            $scope.TSEReappUnderbody.UnderbodySelect = success.data.SystemInfo[1].ApplicationTypeValue;
                            $scope.TSEReappUnderbody.BodyFillerInput = success.data.SystemInfo[1].Value3;
                            $scope.TSEReappUnderbody.UnderbodySelectChild = success.data.SystemInfo[1].Value4;
                            $scope.TSEReappUnderbody.UnderbodySelectChildInput = success.data.SystemInfo[1].Value5;

                            $scope.TSEReappBasecoat.BasecoatSelect = success.data.SystemInfo[2].ApplicationTypeValue;
                            $scope.TSEReappBasecoat.MetallicBasecoat = success.data.SystemInfo[2].Value3;
                            $scope.TSEReappBasecoat.Hardener = success.data.SystemInfo[2].Value4;
                            $scope.TSEReappBasecoat.Ratio1 = success.data.SystemInfo[2].Value4;
                            $scope.TSEReappBasecoat.Ratio2 = success.data.SystemInfo[2].Value6;

                            $scope.TSEReappClearcoat.ClearcoatSelect = success.data.SystemInfo[3].ApplicationTypeValue;
                            $scope.TSEReappClearcoat.Clear = success.data.SystemInfo[3].Value3;
                            $scope.TSEReappClearcoat.ClearcoatSelectNoOfCost = success.data.SystemInfo[3].Value4;
                            $scope.TSEReappClearcoat.Hardener = success.data.SystemInfo[3].Value5;
                            $scope.TSEReappClearcoat.Ratio1 = success.data.SystemInfo[3].Value6;
                            $scope.TSEReappClearcoat.Ratio2 = success.data.SystemInfo[3].Value7;

                            $scope.TSEReappThinner.ThinnerSelect = success.data.SystemInfo[4].ApplicationTypeValue;
                            $scope.TSEReappThinner.ThinnerSelectChildInput = success.data.SystemInfo[4].Value3;
                            $scope.TSEReappThinner.MixingRatio1 = success.data.SystemInfo[4].Value4;
                            $scope.TSEReappThinner.MixingRatio2 = success.data.SystemInfo[4].Value5;

                        }
                        $scope.TSE.ReApplicationDate = $filter('date')(new Date(success.data.Model.ReApplicationDate), 'dd/MMM/yyyy');
                    }, function (error) {
                        console.log(error);
                    });
                    PendingComplaintPrintService.GetComplaintHandlerDetails($scope.ComplaintId, 2).then(function (success) {
                        //$scope.TSE = success.data.Model;
                        $scope.Thead = success.data.Model;
                        $scope.Thead.ReApplicationDate = $filter('date')(new Date(success.data.Model.ReApplicationDate), 'dd/MMM/yyyy');
                        if (success.data.PhotoInfo.length > 0) {
                            $scope.Thead.PhotoURL = success.data.PhotoInfo;
                        }
                        if (success.data.SystemInfo.length > 0) {
                            $scope.ReappSubstrate = success.data.SystemInfo[0].Substrate_ID;

                            $scope.ReappUndercoat.UndercoatSelect = success.data.SystemInfo[0].Value3;
                            $scope.ReappUndercoat.UndercoatSelectChildInput = success.data.SystemInfo[0].Value4;
                            $scope.ReappUndercoat.Ratio1 = success.data.SystemInfo[0].Value5;
                            $scope.ReappUndercoat.Ratio2 = success.data.SystemInfo[0].Value6;
                            $scope.ReappUndercoat.Hardener = success.data.SystemInfo[0].Value7;

                            $scope.ReappUnderbody.UnderbodySelect = success.data.SystemInfo[1].ApplicationTypeValue;
                            $scope.ReappUnderbody.BodyFillerInput = success.data.SystemInfo[1].Value3;
                            $scope.ReappUnderbody.UnderbodySelectChild = success.data.SystemInfo[1].Value4;
                            $scope.ReappUnderbody.UnderbodySelectChildInput = success.data.SystemInfo[1].Value5;

                            $scope.ReappBasecoat.BasecoatSelect = success.data.SystemInfo[2].ApplicationTypeValue;
                            $scope.ReappBasecoat.MetallicBasecoat = success.data.SystemInfo[2].Value3;
                            $scope.ReappBasecoat.Hardener = success.data.SystemInfo[2].Value4;
                            $scope.ReappBasecoat.Ratio1 = success.data.SystemInfo[2].Value5;
                            $scope.ReappBasecoat.Ratio2 = success.data.SystemInfo[2].Value6;

                            $scope.ReappClearcoat.ClearcoatSelect = success.data.SystemInfo[3].ApplicationTypeValue;
                            $scope.ReappClearcoat.Clear = success.data.SystemInfo[3].Value3;
                            $scope.ReappClearcoat.ClearcoatSelectNoOfCost = success.data.SystemInfo[3].Value4;
                            $scope.ReappClearcoat.Hardener = success.data.SystemInfo[3].Value5;
                            $scope.ReappClearcoat.Ratio1 = success.data.SystemInfo[3].Value6;
                            $scope.ReappClearcoat.Ratio2 = success.data.SystemInfo[3].Value7;

                            $scope.ReappThinner.ThinnerSelect = success.data.SystemInfo[4].ApplicationTypeValue;
                            $scope.ReappThinner.ThinnerSelectChildInput = success.data.SystemInfo[4].Value3;
                            $scope.ReappThinner.MixingRatio1 = success.data.SystemInfo[4].Value4;
                            $scope.ReappThinner.MixingRatio2 = success.data.SystemInfo[4].Value5;
                        }
                    }, function (error) {
                        console.log(error);
                    });

                }
                else if ($scope.status == 'Pending Quarantine - Complaint Manager') {
                    $scope.RCA = true;
                    $scope.ComplaintHandler = true;
                    $scope.ComplaintManager = false;
                    $scope.TSEManager = true;

                    $scope.RCARD = false;
                    $scope.Quarantine = $rootScope.session.Role.indexOf("CM") != -1 ? true : false;
                    $scope.CMSubmit = false;
                    $scope.CMStockReceipt = false;
                    $scope.CMBMApproval = false;
                    $scope.CMStockReceipt = false;
                    $scope.CHApprovalAction = true;
                    $scope.RCAPlant = true;
                    $scope.PlantSubmit = true;
                    $scope.PlantApproval = true;
                    $scope.StockReceipt = false;
                    $scope.RCARD = true;
                    $scope.RDSubmit = true;
                    $scope.RDApproval = true;
                    PendingComplaintPrintService.GetComplaintRCA($scope.ComplaintId, 6).then(function (success) {
                        if (success.data == null) {
                            $scope.RCAPlant = false;
                        }
                        $scope.Plnt = success.data;
                        $scope.Plnt.DateOfExpectedClosure = $filter('date')(new Date(success.data.DateOfExpectedClosure), 'dd/MMM/yyyy');
                    }, function (error) {
                        $scope.RCAPlant = false;
                        console.log(error);
                    });
                    PendingComplaintPrintService.GetComplaintRCA($scope.ComplaintId, 8).then(function (success) {
                        if (success.data == null) {
                            $scope.RCARD = false;
                        }
                        $scope.RD = success.data;
                        $scope.RD.DateOfExpectedClosure = $filter('date')(new Date(success.data.DateOfExpectedClosure), 'dd/MMM/yyyy');
                    }, function (error) {
                        $scope.RCARD = false;
                        console.log(error);
                    });
                    PendingComplaintPrintService.GetComplaintHandlerDetails($scope.ComplaintId, 4).then(function (success) {
                        if (success.data.Model == null) {
                            $scope.TSEManager = false;
                        }
                        $scope.TSE = success.data.Model;
                        if (success.data.PhotoInfo.length > 0) {
                            $scope.TSE.PhotoURL = success.data.PhotoInfo;
                        }
                        if (success.data.SystemInfo.length > 0) {


                            $scope.TSEReappSubstrate = success.data.SystemInfo[0].Substrate_ID;

                            $scope.TSEReappUndercoat.UndercoatSelect = success.data.SystemInfo[0].Value3;
                            $scope.TSEReappUndercoat.UndercoatSelectChildInput = success.data.SystemInfo[0].Value4;
                            $scope.TSEReappUndercoat.Ratio1 = success.data.SystemInfo[0].Value5;
                            $scope.TSEReappUndercoat.Ratio2 = success.data.SystemInfo[0].Value6;
                            $scope.TSEReappUndercoat.Hardener = success.data.SystemInfo[0].Value7;

                            $scope.TSEReappUnderbody.UnderbodySelect = success.data.SystemInfo[1].ApplicationTypeValue;
                            $scope.TSEReappUnderbody.BodyFillerInput = success.data.SystemInfo[1].Value3;
                            $scope.TSEReappUnderbody.UnderbodySelectChild = success.data.SystemInfo[1].Value4;
                            $scope.TSEReappUnderbody.UnderbodySelectChildInput = success.data.SystemInfo[1].Value5;

                            $scope.TSEReappBasecoat.BasecoatSelect = success.data.SystemInfo[2].ApplicationTypeValue;
                            $scope.TSEReappBasecoat.MetallicBasecoat = success.data.SystemInfo[2].Value3;
                            $scope.TSEReappBasecoat.Hardener = success.data.SystemInfo[2].Value4;
                            $scope.TSEReappBasecoat.Ratio1 = success.data.SystemInfo[2].Value4;
                            $scope.TSEReappBasecoat.Ratio2 = success.data.SystemInfo[2].Value6;

                            $scope.TSEReappClearcoat.ClearcoatSelect = success.data.SystemInfo[3].ApplicationTypeValue;
                            $scope.TSEReappClearcoat.Clear = success.data.SystemInfo[3].Value3;
                            $scope.TSEReappClearcoat.ClearcoatSelectNoOfCost = success.data.SystemInfo[3].Value4;
                            $scope.TSEReappClearcoat.Hardener = success.data.SystemInfo[3].Value5;
                            $scope.TSEReappClearcoat.Ratio1 = success.data.SystemInfo[3].Value6;
                            $scope.TSEReappClearcoat.Ratio2 = success.data.SystemInfo[3].Value7;

                            $scope.TSEReappThinner.ThinnerSelect = success.data.SystemInfo[4].ApplicationTypeValue;
                            $scope.TSEReappThinner.ThinnerSelectChildInput = success.data.SystemInfo[4].Value3;
                            $scope.TSEReappThinner.MixingRatio1 = success.data.SystemInfo[4].Value4;
                            $scope.TSEReappThinner.MixingRatio2 = success.data.SystemInfo[4].Value5;

                        }
                        $scope.TSE.ReApplicationDate = $filter('date')(new Date(success.data.Model.ReApplicationDate), 'dd/MMM/yyyy');
                    }, function (error) {
                        $scope.TSEManager = false;
                        console.log(error);
                    });
                    PendingComplaintPrintService.GetComplaintHandlerDetails($scope.ComplaintId, 2).then(function (success) {
                        //$scope.TSE = success.data.Model;
                        $scope.Thead = success.data.Model;
                        $scope.Thead.ReApplicationDate = $filter('date')(new Date(success.data.Model.ReApplicationDate), 'dd/MMM/yyyy');
                        if (success.data.PhotoInfo.length > 0) {
                            $scope.Thead.PhotoURL = success.data.PhotoInfo;
                        }
                        if (success.data.SystemInfo.length > 0) {
                            $scope.ReappSubstrate = success.data.SystemInfo[0].Substrate_ID;

                            $scope.ReappUndercoat.UndercoatSelect = success.data.SystemInfo[0].Value3;
                            $scope.ReappUndercoat.UndercoatSelectChildInput = success.data.SystemInfo[0].Value4;
                            $scope.ReappUndercoat.Ratio1 = success.data.SystemInfo[0].Value5;
                            $scope.ReappUndercoat.Ratio2 = success.data.SystemInfo[0].Value6;
                            $scope.ReappUndercoat.Hardener = success.data.SystemInfo[0].Value7;

                            $scope.ReappUnderbody.UnderbodySelect = success.data.SystemInfo[1].ApplicationTypeValue;
                            $scope.ReappUnderbody.BodyFillerInput = success.data.SystemInfo[1].Value3;
                            $scope.ReappUnderbody.UnderbodySelectChild = success.data.SystemInfo[1].Value4;
                            $scope.ReappUnderbody.UnderbodySelectChildInput = success.data.SystemInfo[1].Value5;

                            $scope.ReappBasecoat.BasecoatSelect = success.data.SystemInfo[2].ApplicationTypeValue;
                            $scope.ReappBasecoat.MetallicBasecoat = success.data.SystemInfo[2].Value3;
                            $scope.ReappBasecoat.Hardener = success.data.SystemInfo[2].Value4;
                            $scope.ReappBasecoat.Ratio1 = success.data.SystemInfo[2].Value5;
                            $scope.ReappBasecoat.Ratio2 = success.data.SystemInfo[2].Value6;

                            $scope.ReappClearcoat.ClearcoatSelect = success.data.SystemInfo[3].ApplicationTypeValue;
                            $scope.ReappClearcoat.Clear = success.data.SystemInfo[3].Value3;
                            $scope.ReappClearcoat.ClearcoatSelectNoOfCost = success.data.SystemInfo[3].Value4;
                            $scope.ReappClearcoat.Hardener = success.data.SystemInfo[3].Value5;
                            $scope.ReappClearcoat.Ratio1 = success.data.SystemInfo[3].Value6;
                            $scope.ReappClearcoat.Ratio2 = success.data.SystemInfo[3].Value7;

                            $scope.ReappThinner.ThinnerSelect = success.data.SystemInfo[4].ApplicationTypeValue;
                            $scope.ReappThinner.ThinnerSelectChildInput = success.data.SystemInfo[4].Value3;
                            $scope.ReappThinner.MixingRatio1 = success.data.SystemInfo[4].Value4;
                            $scope.ReappThinner.MixingRatio2 = success.data.SystemInfo[4].Value5;
                        }
                    }, function (error) {
                        console.log(error);
                    });


                }
                else if ($scope.status == 'Pending Quarantine - BM') {
                    $scope.RCA = true;
                    $scope.ComplaintHandler = true;
                    $scope.ComplaintManager = false;
                    $scope.TSEManager = true;
                    $scope.RCAPlant = false;
                    $scope.RCARD = false;
                    $scope.Quarantine = $rootScope.session.Role.indexOf("BM") != -1 ? true : false;
                    $scope.CMSubmit = true;
                    $scope.CMStockReceipt = false;
                    $scope.CMBMApproval = true;
                    $scope.CMStockReceipt = false;
                    PendingComplaintPrintService.GetQuarantine($scope.ComplaintId).then(function (success) {
                        $scope.CM = success.data;
                        $scope.CM.DateOfExpectedClosure = $filter('date')(new Date(success.data.DateOfExpectedClosure), 'dd/MMM/yyyy');
                    }, function (error) {
                        console.log(error);
                    });
                    $scope.CHApprovalAction = true;
                    $scope.RCAPlant = true;
                    $scope.PlantSubmit = true;
                    $scope.PlantApproval = true;
                    $scope.StockReceipt = false;
                    $scope.RCARD = true;
                    $scope.RDSubmit = true;
                    $scope.RDApproval = true;
                    PendingComplaintPrintService.GetComplaintRCA($scope.ComplaintId, 6).then(function (success) {
                        if (success.data == null) {
                            $scope.RCAPlant = false;
                        }
                        $scope.Plnt = success.data;
                        $scope.Plnt.DateOfExpectedClosure = $filter('date')(new Date(success.data.DateOfExpectedClosure), 'dd/MMM/yyyy');
                    }, function (error) {
                        console.log(error);
                    });
                    PendingComplaintPrintService.GetComplaintRCA($scope.ComplaintId, 8).then(function (success) {
                        if (success.data == null) {
                            $scope.RCARD = false;
                        }
                        $scope.RD = success.data;
                        $scope.RD.DateOfExpectedClosure = $filter('date')(new Date(success.data.DateOfExpectedClosure), 'dd/MMM/yyyy');
                    }, function (error) {
                        console.log(error);
                    });
                    PendingComplaintPrintService.GetComplaintHandlerDetails($scope.ComplaintId, 4).then(function (success) {
                        if (success.data.Model == null) {
                            $scope.TSEManager = false;
                        }
                        $scope.TSE = success.data.Model;
                        if (success.data.PhotoInfo.length > 0) {
                            $scope.TSE.PhotoURL = success.data.PhotoInfo;
                        }
                        if (success.data.SystemInfo.length > 0) {


                            $scope.TSEReappSubstrate = success.data.SystemInfo[0].Substrate_ID;

                            $scope.TSEReappUndercoat.UndercoatSelect = success.data.SystemInfo[0].Value3;
                            $scope.TSEReappUndercoat.UndercoatSelectChildInput = success.data.SystemInfo[0].Value4;
                            $scope.TSEReappUndercoat.Ratio1 = success.data.SystemInfo[0].Value5;
                            $scope.TSEReappUndercoat.Ratio2 = success.data.SystemInfo[0].Value6;
                            $scope.TSEReappUndercoat.Hardener = success.data.SystemInfo[0].Value7;

                            $scope.TSEReappUnderbody.UnderbodySelect = success.data.SystemInfo[1].ApplicationTypeValue;
                            $scope.TSEReappUnderbody.BodyFillerInput = success.data.SystemInfo[1].Value3;
                            $scope.TSEReappUnderbody.UnderbodySelectChild = success.data.SystemInfo[1].Value4;
                            $scope.TSEReappUnderbody.UnderbodySelectChildInput = success.data.SystemInfo[1].Value5;

                            $scope.TSEReappBasecoat.BasecoatSelect = success.data.SystemInfo[2].ApplicationTypeValue;
                            $scope.TSEReappBasecoat.MetallicBasecoat = success.data.SystemInfo[2].Value3;
                            $scope.TSEReappBasecoat.Hardener = success.data.SystemInfo[2].Value4;
                            $scope.TSEReappBasecoat.Ratio1 = success.data.SystemInfo[2].Value4;
                            $scope.TSEReappBasecoat.Ratio2 = success.data.SystemInfo[2].Value6;

                            $scope.TSEReappClearcoat.ClearcoatSelect = success.data.SystemInfo[3].ApplicationTypeValue;
                            $scope.TSEReappClearcoat.Clear = success.data.SystemInfo[3].Value3;
                            $scope.TSEReappClearcoat.ClearcoatSelectNoOfCost = success.data.SystemInfo[3].Value4;
                            $scope.TSEReappClearcoat.Hardener = success.data.SystemInfo[3].Value5;
                            $scope.TSEReappClearcoat.Ratio1 = success.data.SystemInfo[3].Value6;
                            $scope.TSEReappClearcoat.Ratio2 = success.data.SystemInfo[3].Value7;

                            $scope.TSEReappThinner.ThinnerSelect = success.data.SystemInfo[4].ApplicationTypeValue;
                            $scope.TSEReappThinner.ThinnerSelectChildInput = success.data.SystemInfo[4].Value3;
                            $scope.TSEReappThinner.MixingRatio1 = success.data.SystemInfo[4].Value4;
                            $scope.TSEReappThinner.MixingRatio2 = success.data.SystemInfo[4].Value5;

                        }
                        $scope.TSE.ReApplicationDate = $filter('date')(new Date(success.data.Model.ReApplicationDate), 'dd/MMM/yyyy');
                    }, function (error) {
                        console.log(error);
                    });
                    PendingComplaintPrintService.GetComplaintHandlerDetails($scope.ComplaintId, 2).then(function (success) {
                        //$scope.TSE = success.data.Model;
                        $scope.Thead = success.data.Model;
                        $scope.Thead.ReApplicationDate = $filter('date')(new Date(success.data.Model.ReApplicationDate), 'dd/MMM/yyyy');
                        if (success.data.PhotoInfo.length > 0) {
                            $scope.Thead.PhotoURL = success.data.PhotoInfo;
                        }
                        if (success.data.SystemInfo.length > 0) {
                            $scope.ReappSubstrate = success.data.SystemInfo[0].Substrate_ID;

                            $scope.ReappUndercoat.UndercoatSelect = success.data.SystemInfo[0].Value3;
                            $scope.ReappUndercoat.UndercoatSelectChildInput = success.data.SystemInfo[0].Value4;
                            $scope.ReappUndercoat.Ratio1 = success.data.SystemInfo[0].Value5;
                            $scope.ReappUndercoat.Ratio2 = success.data.SystemInfo[0].Value6;
                            $scope.ReappUndercoat.Hardener = success.data.SystemInfo[0].Value7;

                            $scope.ReappUnderbody.UnderbodySelect = success.data.SystemInfo[1].ApplicationTypeValue;
                            $scope.ReappUnderbody.BodyFillerInput = success.data.SystemInfo[1].Value3;
                            $scope.ReappUnderbody.UnderbodySelectChild = success.data.SystemInfo[1].Value4;
                            $scope.ReappUnderbody.UnderbodySelectChildInput = success.data.SystemInfo[1].Value5;

                            $scope.ReappBasecoat.BasecoatSelect = success.data.SystemInfo[2].ApplicationTypeValue;
                            $scope.ReappBasecoat.MetallicBasecoat = success.data.SystemInfo[2].Value3;
                            $scope.ReappBasecoat.Hardener = success.data.SystemInfo[2].Value4;
                            $scope.ReappBasecoat.Ratio1 = success.data.SystemInfo[2].Value5;
                            $scope.ReappBasecoat.Ratio2 = success.data.SystemInfo[2].Value6;

                            $scope.ReappClearcoat.ClearcoatSelect = success.data.SystemInfo[3].ApplicationTypeValue;
                            $scope.ReappClearcoat.Clear = success.data.SystemInfo[3].Value3;
                            $scope.ReappClearcoat.ClearcoatSelectNoOfCost = success.data.SystemInfo[3].Value4;
                            $scope.ReappClearcoat.Hardener = success.data.SystemInfo[3].Value5;
                            $scope.ReappClearcoat.Ratio1 = success.data.SystemInfo[3].Value6;
                            $scope.ReappClearcoat.Ratio2 = success.data.SystemInfo[3].Value7;

                            $scope.ReappThinner.ThinnerSelect = success.data.SystemInfo[4].ApplicationTypeValue;
                            $scope.ReappThinner.ThinnerSelectChildInput = success.data.SystemInfo[4].Value3;
                            $scope.ReappThinner.MixingRatio1 = success.data.SystemInfo[4].Value4;
                            $scope.ReappThinner.MixingRatio2 = success.data.SystemInfo[4].Value5;
                        }
                    }, function (error) {
                        console.log(error);
                    });

                }
                else if ($scope.status == 'Pending Disposal - Plant') {
                    $scope.RCA = true;
                    $scope.ComplaintHandler = true;
                    $scope.ComplaintManager = false;
                    $scope.TSEManager = true;
                    $scope.RCAPlant = true;
                    $scope.RCARD = false;
                    $scope.Quarantine = $rootScope.session.Role.indexOf("Plant") != -1 ? true : false;
                    $scope.CMSubmit = true;
                    $scope.CMStockReceipt = false;
                    $scope.CMBMApproval = false;
                    $scope.CMStockReceipt = true;
                    PendingComplaintPrintService.GetQuarantine($scope.ComplaintId).then(function (success) {
                        $scope.CM = success.data;
                        $scope.CM.DateOfExpectedClosure = $filter('date')(new Date(success.data.DateOfExpectedClosure), 'dd/MMM/yyyy');
                    }, function (error) {
                        console.log(error);
                    });
                    $scope.RCARD = true;
                    $scope.RDSubmit = true;
                    $scope.RDBMApproval = false;
                    $scope.RDBHApproval = false;
                    $scope.RDStockReceipt = false;
                    $scope.CHApprovalAction = true;
                    $scope.PlantSubmit = true;
                    $scope.PlantApproval = true;
                    $scope.StockReceipt = false;

                    PendingComplaintPrintService.GetComplaintRCA($scope.ComplaintId, 6).then(function (success) {
                        if (success.data == null) {
                            $scope.RCAPlant = false;
                        }
                        $scope.Plnt = success.data;
                    }, function (error) {
                        console.log(error);
                    });
                    PendingComplaintPrintService.GetComplaintRCA($scope.ComplaintId, 8).then(function (success) {
                        if (success.data == null) {
                            $scope.RCARD = false;
                        }
                        $scope.RD = success.data;
                    }, function (error) {
                        console.log(error);
                    });
                    PendingComplaintPrintService.GetComplaintHandlerDetails($scope.ComplaintId, 4).then(function (success) {
                        if (success.data.Model == null) {
                            $scope.TSEManager = false;
                        }
                        $scope.TSE = success.data.Model;
                        $scope.TSE.PhotoURL = success.data.PhotoInfo;

                        $scope.TSEReappSubstrate = success.data.SystemInfo[0].Substrate_ID;

                        $scope.TSEReappUndercoat.UndercoatSelect = success.data.SystemInfo[0].Value3;
                        $scope.TSEReappUndercoat.UndercoatSelectChildInput = success.data.SystemInfo[0].Value4;
                        $scope.TSEReappUndercoat.Ratio1 = success.data.SystemInfo[0].Value5;
                        $scope.TSEReappUndercoat.Ratio2 = success.data.SystemInfo[0].Value6;
                        $scope.TSEReappUndercoat.Hardener = success.data.SystemInfo[0].Value7;

                        $scope.TSEReappUnderbody.UnderbodySelect = success.data.SystemInfo[1].ApplicationTypeValue;
                        $scope.TSEReappUnderbody.BodyFillerInput = success.data.SystemInfo[1].Value3;
                        $scope.TSEReappUnderbody.UnderbodySelectChild = success.data.SystemInfo[1].Value4;
                        $scope.TSEReappUnderbody.UnderbodySelectChildInput = success.data.SystemInfo[1].Value5;

                        $scope.TSEReappBasecoat.BasecoatSelect = success.data.SystemInfo[2].ApplicationTypeValue;
                        $scope.TSEReappBasecoat.MetallicBasecoat = success.data.SystemInfo[2].Value3;
                        $scope.TSEReappBasecoat.Hardener = success.data.SystemInfo[2].Value4;
                        $scope.TSEReappBasecoat.Ratio1 = success.data.SystemInfo[2].Value4;
                        $scope.TSEReappBasecoat.Ratio2 = success.data.SystemInfo[2].Value6;

                        $scope.TSEReappClearcoat.ClearcoatSelect = success.data.SystemInfo[3].ApplicationTypeValue;
                        $scope.TSEReappClearcoat.Clear = success.data.SystemInfo[3].Value3;
                        $scope.TSEReappClearcoat.ClearcoatSelectNoOfCost = success.data.SystemInfo[3].Value4;
                        $scope.TSEReappClearcoat.Hardener = success.data.SystemInfo[3].Value5;
                        $scope.TSEReappClearcoat.Ratio1 = success.data.SystemInfo[3].Value6;
                        $scope.TSEReappClearcoat.Ratio2 = success.data.SystemInfo[3].Value7;

                        $scope.TSEReappThinner.ThinnerSelect = success.data.SystemInfo[4].ApplicationTypeValue;
                        $scope.TSEReappThinner.ThinnerSelectChildInput = success.data.SystemInfo[4].Value3;
                        $scope.TSEReappThinner.MixingRatio1 = success.data.SystemInfo[4].Value4;
                        $scope.TSEReappThinner.MixingRatio2 = success.data.SystemInfo[4].Value5;


                    }, function (error) {
                        console.log(error);
                    });
                    PendingComplaintPrintService.GetComplaintHandlerDetails($scope.ComplaintId, 2).then(function (success) {
                        //$scope.TSE = success.data.Model;
                        $scope.Thead = success.data.Model;
                        $scope.Thead.PhotoURL = success.data.PhotoInfo;

                        $scope.ReappSubstrate = success.data.SystemInfo[0].Substrate_ID;

                        $scope.ReappUndercoat.UndercoatSelect = success.data.SystemInfo[0].Value3;
                        $scope.ReappUndercoat.UndercoatSelectChildInput = success.data.SystemInfo[0].Value4;
                        $scope.ReappUndercoat.Ratio1 = success.data.SystemInfo[0].Value5;
                        $scope.ReappUndercoat.Ratio2 = success.data.SystemInfo[0].Value6;
                        $scope.ReappUndercoat.Hardener = success.data.SystemInfo[0].Value7;

                        $scope.ReappUnderbody.UnderbodySelect = success.data.SystemInfo[1].ApplicationTypeValue;
                        $scope.ReappUnderbody.BodyFillerInput = success.data.SystemInfo[1].Value3;
                        $scope.ReappUnderbody.UnderbodySelectChild = success.data.SystemInfo[1].Value4;
                        $scope.ReappUnderbody.UnderbodySelectChildInput = success.data.SystemInfo[1].Value5;

                        $scope.ReappBasecoat.BasecoatSelect = success.data.SystemInfo[2].ApplicationTypeValue;
                        $scope.ReappBasecoat.MetallicBasecoat = success.data.SystemInfo[2].Value3;
                        $scope.ReappBasecoat.Hardener = success.data.SystemInfo[2].Value4;
                        $scope.ReappBasecoat.Ratio1 = success.data.SystemInfo[2].Value5;
                        $scope.ReappBasecoat.Ratio2 = success.data.SystemInfo[2].Value6;

                        $scope.ReappClearcoat.ClearcoatSelect = success.data.SystemInfo[3].ApplicationTypeValue;
                        $scope.ReappClearcoat.Clear = success.data.SystemInfo[3].Value3;
                        $scope.ReappClearcoat.ClearcoatSelectNoOfCost = success.data.SystemInfo[3].Value4;
                        $scope.ReappClearcoat.Hardener = success.data.SystemInfo[3].Value5;
                        $scope.ReappClearcoat.Ratio1 = success.data.SystemInfo[3].Value6;
                        $scope.ReappClearcoat.Ratio2 = success.data.SystemInfo[3].Value7;

                        $scope.ReappThinner.ThinnerSelect = success.data.SystemInfo[4].ApplicationTypeValue;
                        $scope.ReappThinner.ThinnerSelectChildInput = success.data.SystemInfo[4].Value3;
                        $scope.ReappThinner.MixingRatio1 = success.data.SystemInfo[4].Value4;
                        $scope.ReappThinner.MixingRatio2 = success.data.SystemInfo[4].Value5;
                    }, function (error) {
                        console.log(error);
                    });


                }
        }, function (error) {
            console.log(error);
        });
    };


    $scope.DealerName = function () {

        angular.forEach($scope.DealerDetails, function (value, key) {
            if (value.DealerID == $scope.Request.DealerID) {
                $scope.Request.DealerName = value.DealerName;
                $scope.Request.SalesOffice = value.DepotName;
                $scope.Request.DealerCode = value.DealerCode;

            }

        });

    }


    $scope.BrandName = function () {

        console.log( $rootScope.ProMastr);

        if ($scope.Complaint.ProductCode != null)
        { 
            var keepgoin = true;

        angular.forEach($rootScope.ProMastr, function (value, key) {

            if (value.Product_ID == $scope.Complaint.ProductCode && keepgoin) {

                $scope.Complaint.BrandID = value.Brand_ID;
                $scope.Complaint.ProductCode = value.ProductCode;
                $scope.Complaint.ProductDescription = value.ProductDescription;
                keepgoin = false;
            };
          
            });

        PendingComplaintPrintService.GetBrandName($scope.Complaint.BrandID).then(function (success) {

            $scope.Complaint.BrandName = success.data;
        },
            function (error) {
                console.log(error);
            }); 
    }
    };

    

    //GetComplaintList
    $scope.GetComplaintList = function (obj) {
        var deferred = $q.defer();
        console.log(obj.ComplaintCategory_ID);
        PendingComplaintPrintService.GetComplaintList(obj.ComplaintCategory_ID).then(function (success) {
            console.log("inside GET COMPLAINT LIST");

            obj.ComplaintLst = success.data;

            for (var j = 0; j <= obj.SelectedComplaintsArray.length; j++) {
                $scope.SelectComplaints(obj, obj.SelectedComplaintsArray[j]);
            }
            console.log("obj ComplaintLst:",obj.ComplaintLst);
            deferred.resolve(obj.ComplaintLst = success.data);
        },
            function (error) {
                console.log(error);
                deferred.reject(obj.ComplaintLst = []);
            });

        return deferred.promise;
    };

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
    };


    //PendingComplaintPrintService.GetProductId().then(function (success) {
    //    console.log("inside GetProductId");
    //    $scope.ProductMaster = success.data;
    //    console.log($scope.ProductMaster);
    //},
    //    function (error) {
    //        console.log(error);
    //    });


    $scope.Print = function () {
        var innerContents = document.getElementById('PrintDiv').innerHTML;
        var popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
        popupWinindow.document.open();
        popupWinindow.document.write('<html><head><link rel="stylesheet" type="text/css" href="../css/style.css" /></head><body onload="window.print()">' + innerContents + '</html>');
        popupWinindow.document.close();
    };


    $scope.Back = function () {
        $window.location.href = '#/cr';
    };


    $scope.init();

});