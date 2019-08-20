var app = angular.module('CompensationRequestModule', []);

app.service('CompensationRequestService', function ($http) {
    //getCOmplaintTYpe
    var ComplaintID = 0;
    this.GetStatusDetails = function (ComplaintId) {

        return $http.get('/api/PendingRequest/GetStatusDetails?ComplaintID=' + ComplaintId);
    };

    this.GetPendingRequestForApproval = function (EmpCode) {

        return $http.get('/api/Compensation/GetPendingCompensationRequest?EmpCode=' + EmpCode);
    };


    this.GetRequesterDetails = function (EmpCode) {

        return $http.get('/api/PendingRequest/GetRequesterDetails?EmpCode=' + EmpCode);
    };
    this.GetComplaintDetails = function (ComplaintId) {

        return $http.get('/api/RequestCreation/GetComplaintDetails?ComplaintId=' + ComplaintId);
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

    this.GetComplaintRCA = function (ComplaintId, Dept) {

        return $http.get('/api/PendingRequest/GetComplaintRCA?ComplaintID=' + ComplaintId + '&Department=' + Dept);
    };

    this.GetQuarantine = function (ComplaintId) {

        return $http.get('/api/PendingRequest/GetQuarantine?ComplaintID=' + ComplaintId);
    };

    this.GetData = function (obj) {

        return $http.post('/api/RequestCreation/GetData/', obj);
    };


    this.CMAssignToTSE = function (obj) {

        return $http.post("/api/PendingRequest/AssignToTSE", obj, {
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }

        });
    };
    this.CHApprovalRCAPlnt = function (obj) {

        return $http.post('/api/PendingRequest/CHApprovalRCAPlnt', obj, {});
    };
    this.CHRecommendforRCAPlnt = function (obj) {

        return $http.post('/api/PendingRequest/CHRecommendforRCAPlnt', obj, {});
    };

    this.PlntAssignToBM = function (obj) {

        return $http.post('/api/PendingRequest/PlntAssignToBM', obj, {});
    };

    this.RDAssignToBM = function (obj) {

        return $http.post('/api/PendingRequest/RDAssignToBM', obj, {});
    };

    this.PlantStockReceipt = function (obj) {

        return $http.post('/api/PendingRequest/PlantStockReceipt', obj, {});
    };

    this.PlntAssignToRD = function (obj) {

        return $http.post('/api/PendingRequest/PlntAssignToRD', obj, {});
    };

    this.CMCloseRequest = function (obj) {

        return $http.post('/api/PendingRequest/CMCloseRequest', obj, {});
    };


    this.BMApprovePlant = function (obj) {

        return $http.post('/api/PendingRequest/BMApprovePlant', obj, {});
    };

    this.BHApprovePlant = function (obj) {

        return $http.post('/api/PendingRequest/BHApprovePlant', obj, {});
    };

    this.BMRejectPlant = function (obj) {

        return $http.post('/api/PendingRequest/BMRejectPlant', obj, {});
    };

    this.BHRejectPlant = function (obj) {

        return $http.post('/api/PendingRequest/BHRejectPlant', obj, {});
    };

    this.BMApproveRD = function (obj) {

        return $http.post('/api/PendingRequest/BMApproveRD', obj, {});
    };

    this.BHApproveRD = function (obj) {

        return $http.post('/api/PendingRequest/BHApproveRD', obj, {});
    };

    this.BMRejectRD = function (obj) {

        return $http.post('/api/PendingRequest/BMRejectRD', obj, {});
    };

    this.BHRejectRD = function (obj) {

        return $http.post('/api/PendingRequest/BHRejectRD', obj, {});
    };

    this.CMSubmitQurantine = function (obj) {

        return $http.post('/api/PendingRequest/CMSubmitQurantine', obj, {});
    };

    this.BMApproveQurantine = function (obj) {

        return $http.post('/api/PendingRequest/BMApproveQurantine', obj, {});
    };

    this.BMRejectQurantine = function (obj) {

        return $http.post('/api/PendingRequest/BMRejectQurantine', obj, {});
    };

    this.QurantineReceipt = function (obj) {

        return $http.post('/api/PendingRequest/QurantineReceipt', obj, {});
    };

    this.CreateComp = function (obj) {

        return $http.post('/api/PendingRequest/CreateCompensation', obj, {});
    };

    this.InitiateQuartine = function (obj) {

        return $http.post('/api/PendingRequest/InitiateQuartine', obj, {});
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
    
    this.GetCompensationTypes = function () {

        return $http.get('/api/Compensation/GetCompensationTypes/', {});
    };
    this.GetSettlementModes = function () {

        return $http.get('/api/Compensation/GetSettlementModes/', {});
    };
});

app.controller('CompensationRequestController', function ($scope, $http, $location, $rootScope, CompensationRequestService, $q, $filter, $uibModal) {
    $scope.infiniteScroll = {};
    $scope.infiniteScroll.numToAdd = 20;
    $scope.infiniteScroll.currentItems = 20;
    $scope.S1 = true;
    $scope.S2 = false;
    $scope.S3 = false;
    $scope.S4 = false;
    $scope.S5 = false;
    $scope.S6 = false;
    $scope.S7 = false;
    $scope.ComplaintHandler = false;
    $scope.ComplaintManager = false;
    $scope.PedingApprovalCH = false;
    $scope.CHApprovalAction = false;
    $scope.CHLogin = false;
    $scope.PlantSubmit = false;
    $scope.StockReceipt = false;
    $scope.RCARD = false;
    $scope.CMSubmit = false;
    $scope.Quarantine = false;
    $scope.CompForm = {};
    $scope.Emp = {};
    $scope.CompensationForm = false;
    $scope.FormDetails = {
         Remark: null,
        CompensationTypeModel : []
    };
    
    $scope.Recv = {};
    $scope.RecvRD = {};
    $scope.RecvCM = {};
    $scope.RD = {};
    $scope.CM = {};
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
        $scope.S2 = false;
        $scope.S3 = false;
        $scope.S4 = false;
        $scope.S5 = false;
        $scope.S6 = false;
        $scope.S7 = false;
        $scope.ShowGrid = true;
        $scope.ShowDetails = false;
        $scope.GetPendingRequest($rootScope.session.EMP_CODE);
        $scope.Remark = "";

        CompensationRequestService.DealerDetails().then(function (success) {
            console.log("inside GetComplaintCategory");
            $scope.DealerDetails = success.data;
            console.log($scope.DealerDetails);
        },
            function (error) {
                console.log(error);
            });


        //get substrate id
        CompensationRequestService.GetSubstrateId().then(function (success) {
            console.log("inside GetComplaintCategory");
            $scope.SubstrateMaster = success.data;
            console.log($scope.SubstrateMaster);
        },
            function (error) {
                console.log(error);
            });


        //get product ID
        CompensationRequestService.GetProductId().then(function (success) {
            console.log("inside GetProductId");
            $scope.ProductMaster = success.data;
            console.log($scope.ProductMaster);
        },
            function (error) {
                console.log(error);
            });


        //GetComplaintCategory
        CompensationRequestService
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


        CompensationRequestService.GetCompensationTypes().then(function (success) {
            console.log("inside GetCompensationTypes");
            $scope.CompensationTypes = success.data;
            console.log($scope.GetCompensationTypes);
        },
            function (error) {
                console.log(error);
            });
        CompensationRequestService.GetSettlementModes().then(function (success) {
            console.log("inside GetSettlementModes");
            $scope.SettlementModes = success.data;
            console.log($scope.GetSettlementModes);
        },
            function (error) {
                console.log(error);
            });
    }

    $scope.GetCurrentWindow = function (curr) {
        if (curr == 'S1') {
            $scope.S1 = true;
            $scope.S2 = false;
            $scope.S3 = false;
            $scope.S4 = false;
            $scope.S5 = false;
            $scope.S6 = false;
        }
        else if (curr == 'S2') {
            $scope.S1 = false;
            $scope.S2 = true;
            $scope.S3 = false;
            $scope.S4 = false;
            $scope.S5 = false;
            $scope.S6 = false;
            $scope.S7 = false;

        }
        else if (curr == 'S3') {
            $scope.S1 = false;
            $scope.S2 = false;
            $scope.S3 = true;
            $scope.S4 = false;
            $scope.S5 = false;
            $scope.S6 = false;
            $scope.S7 = false;
        }
        else if (curr == 'S4') {
            $scope.S1 = false;
            $scope.S2 = false;
            $scope.S3 = false;
            $scope.S4 = true;
            $scope.S5 = false;
            $scope.S6 = false;
            $scope.S7 = false;
        }
        else if (curr == 'S5') {
            $scope.S1 = false;
            $scope.S2 = false;
            $scope.S3 = false;
            $scope.S4 = false;
            $scope.S5 = true;
            $scope.S6 = false;
            $scope.S7 = false;
        }
        else if (curr == 'S6') {
            $scope.S1 = false;
            $scope.S2 = false;
            $scope.S3 = false;
            $scope.S4 = false;
            $scope.S5 = false;
            $scope.S6 = true;
            $scope.S7 = false;
        }
        else if (curr == 'S7') {
            $scope.S1 = false;
            $scope.S2 = false;
            $scope.S3 = false;
            $scope.S4 = false;
            $scope.S5 = false;
            $scope.S6 = false;
            $scope.S7 = true;
        }

    }

    $scope.OpenStatus = function (id) {
        //$scope.items.IndexId = _Item;
        //console.log($scope.items);

        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'partial/StatusModal.html',
            controller: 'ModalInstanceCtrl_StatusCompensation',
            size: 'lg',
            resolve: {
                items: function () {
                    return id;
                }
            }
        });
        CompensationRequestService.ComplaintID = id;
        modalInstance.result.then(function (items) {
            $scope.RequestID = items;
            console.log(items);
            // $scope.invoice.row[$scope.items.IndexId].
        });
    };

    $scope.GetPendingRequest = function (EmpCode) {
        CompensationRequestService.GetPendingRequestForApproval(EmpCode).then(function (success) {

            $scope.PendingRequest = success.data;
            console.log($scope.DealerDetails);
        },
            function (error) {
                console.log(error);
            });

    };
    $scope.GetTSE = function () {
        CompensationRequestService.GetTSEList().then(function (success) {

            $scope.TSEList = success.data;
            console.log($scope.TSEList);
        },
            function (error) {
                console.log(error);
            });

    };


    $scope.GetComplaintDetails = function (ComplaintId, status) {
        $scope.S1 = true;
        //$scope.GetCurrentWindow('S1');

        CompensationRequestService.GetComplaintDetails(ComplaintId).then(function (success) {

            $scope.ShowGrid = false;
            $scope.ShowDetails = true;
            $scope.ComplaintDtl = success.data;
            console.log($scope.DealerDetails);
           $scope.CompensationForm = true;

            CompensationRequestService.GetRequesterDetails($scope.ComplaintDtl.CustomerComplaint.CreatedBy).then(function (success) {
                $scope.Emp = success.data;
            }, function (error) {
                console.log(error);
            });

            $scope.Request.DealerID = $scope.ComplaintDtl.CustomerComplaint.Dealer_ID;
            $scope.Thead.Complaint_ID = ComplaintId;
            $scope.Plnt.Complaint_ID = ComplaintId;
            $scope.RD.Complaint_ID = ComplaintId;
            $scope.CM.Complaint_Id = ComplaintId;
            $scope.CompForm.Complaint_Id = ComplaintId;
            $scope.FormDetails.Complaint_Id = ComplaintId;
            $scope.DealerName();

            $scope.CompForm.ComplaintNumber = $scope.ComplaintDtl.CustomerComplaint.ComplaintNumber;
            $scope.CompForm.CreationDate = $filter('date')(new Date($scope.ComplaintDtl.CustomerComplaint.CreationDate), 'dd/MMM/yyyy');
            $scope.CompForm.CustomerAccountName = $scope.ComplaintDtl.CustomerComplaint.CustomerAccountName;
            $scope.CompForm.CustomerPhone = $scope.ComplaintDtl.CustomerComplaint.CustomerPhone;
            $scope.CompForm.CustomerEmail = $scope.ComplaintDtl.CustomerComplaint.CustomerEmail;
            $scope.CompForm.CustomerAddress = $scope.ComplaintDtl.CustomerComplaint.CustomerAddress;
            $scope.CompForm.QtyOfComplaintStock = $scope.ComplaintDtl.CustomerComplaint.QtyOfComplaintStock;




            $scope.CompForm.Quantity = $scope.ComplaintDtl.CustomerComplaint.ComplaintQty;
            $scope.CompForm.CMApprovedDate = $filter('date')(new Date($scope.ComplaintDtl.CustomerComplaint.CMApprovedDate), 'dd/MMM/yyyy');

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
                    Hardener: '',
                     Ratio3: '',
                    Ratio4: '',
                    Thinner: ''
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
                    Hardener: '',
                    Ratio3: '',
                    Ratio4: '',
                    Thinner: ''
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
                $scope.SubstrateRelated = $scope.ComplaintDtl.SystemInformation[0].SubstrateRelated;
                $scope.ReappSubstrate = $scope.ComplaintDtl.SystemInformation[0].Substrate_ID;
                $scope.Undercoat.UndercoatSelect = $scope.ComplaintDtl.SystemInformation[0].Value3;
                $scope.Undercoat.UndercoatSelectChildInput = $scope.ComplaintDtl.SystemInformation[0].Value4;
                $scope.Undercoat.Ratio1 = parseInt($scope.ComplaintDtl.SystemInformation[0].Value5);
                $scope.Undercoat.Ratio2 = $scope.ComplaintDtl.SystemInformation[0].Value6;
                $scope.Undercoat.Hardener = $scope.ComplaintDtl.SystemInformation[0].Value7;
                $scope.Undercoat.Ratio3 = parseInt($scope.ComplaintDtl.SystemInformation[0].Value8);
                $scope.Undercoat.Ratio4 = $scope.ComplaintDtl.SystemInformation[0].Value9;
                $scope.Undercoat.Thinner = $scope.ComplaintDtl.SystemInformation[0].Value10;


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
                $scope.Basecoat.Thinner = $scope.ComplaintDtl.SystemInformation[2].Value10;
                $scope.Basecoat.Ratio3 = $scope.ComplaintDtl.SystemInformation[2].Value8;
                $scope.Basecoat.Ratio4 = $scope.ComplaintDtl.SystemInformation[2].Value9;


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
           
                $scope.ComplaintHandler = true;
                $scope.ComplaintManager = false;
                $scope.CHLogin = false;
                $scope.PedingApprovalCH = true;
                $scope.CHApprovalAction = true;
                //GetComplaintHandlerDetails
                $scope.GetTSE();
                CompensationRequestService.GetComplaintHandlerDetails(ComplaintId, 4).then(function (success) {
                    if (success.data.Model != null) {
                        $scope.TSEManager = true;
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
                    else {
                        $scope.TSEManager = false;
                    }


                }, function (error) {
                    console.log(error);
                });
                CompensationRequestService.GetComplaintHandlerDetails(ComplaintId, 2).then(function (success) {
                    //$scope.TSE = success.data.Model;
                    $scope.Thead = success.data.Model;
                    $scope.Thead.ReApplicationDate = $filter('date')(new Date(success.data.Model.ReApplicationDate), 'dd/MM/yyyy');

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
            //}

           



        },
            function (error) {
                console.log(error);
            });
    }

    $scope.BrandName = function () {
        angular.forEach($scope.ProductMaster, function (value, key) {
            
            if (value.Product_ID == $scope.Complaint.ProductCode) {

                $scope.Complaint.BrandID = value.Brand_ID;
                $scope.CompForm.ProductCode = value.ProductCode;
               
            }

        });

        CompensationRequestService.GetBrandName($scope.Complaint.BrandID).then(function (success) {

            $scope.Complaint.BrandName = success.data;
            $scope.CompForm.BrandName = success.data;
        },
            function (error) {
                console.log(error);
            });


        //for product description

        angular.forEach($scope.ProductMaster, function (value, key) {
            if (value.Product_ID == $scope.Complaint.ProductCode) {
                $scope.ProductDescription = value.ProductDescription;
                $scope.ProductShelfLife = value.ProductShelfLife;
            }

        });

        //getting batch number and mfg date
        CompensationRequestService.GetBatchAndMfg($scope.Complaint.ProductCode).then(function (success) {
            $scope.Batch = success.data;
            $scope.Complaint.ManuFactureDate = '';
            $scope.Batch.push({
                ProductBatch_ID: 0,
                BatchNumber: 'Other',
                ManufactureDate: '',
                ShelfLife: '',
                ShelfLifeDate: ''
            });
            if ($scope.Complaint.BatchNumber == 0) {
                $scope.Complaint.ManuFactureDate = $filter('date')(new Date($scope.ComplaintDtl.CustomerComplaint.ManuFactureDate), 'dd/MMM/yyyy');
                $scope.Complaint.ShelfLife = $filter('date')(new Date($scope.ComplaintDtl.CustomerComplaint.ShelfLife), 'dd/MMM/yyyy');
                $scope.CompForm.ManuFactureDate = $filter('date')(new Date($scope.ComplaintDtl.CustomerComplaint.ManuFactureDate), 'dd/MMM/yyyy');
                $scope.CompForm.ShelfLife = $filter('date')(new Date($scope.ComplaintDtl.CustomerComplaint.ShelfLife), 'dd/MMM/yyyy');

                $scope.CompForm.BatchNumber = $scope.ComplaintDtl.CustomerComplaint.BatchNumber1;
                console.log("batch data: ", $scope.Batch);
            }
            else {
                $scope.GetManufactureDate($scope.Complaint.BatchNumber);
            }
        },
            function (error) {
                console.log(error);
            });



        
    }

    $scope.GetManufactureDate = function (id) {
        for (var i = 0; i < $scope.Batch.length; i++) {
            if ($scope.Batch[i].ProductBatch_ID == id) {
                // var date = new Date($scope.Batch[i].ManufactureDate);
                $scope.Complaint.ManuFactureDate = $filter('date')(new Date($scope.Batch[i].ManufactureDate), 'dd/MMM/yyyy');
                $scope.Complaint.ShelfLife = $filter('date')(new Date($scope.Batch[i].ShelfLifeDate), 'dd/MMM/yyyy');

                $scope.CompForm.ManuFactureDate = $filter('date')(new Date($scope.Batch[i].ManufactureDate), 'dd/MMM/yyyy');
                $scope.CompForm.ShelfLife = $filter('date')(new Date($scope.Batch[i].ShelfLifeDate), 'dd/MMM/yyyy');
                $scope.CompForm.BatchNumber = $scope.Batch[i].BatchNumber;
            }
        }
    }
    //GetComplaintList
    $scope.GetComplaintList = function (obj) {
        var deferred = $q.defer();
        console.log(obj.ComplaintCategory_ID);
        CompensationRequestService.GetComplaintList(obj.ComplaintCategory_ID).then(function (success) {
            console.log("inside GET COMPLAINT LIST");

            obj.ComplaintLst = success.data;

            for (var j = 0; j <= obj.SelectedComplaintsArray.length; j++) {
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
            if (value.DealerID == $scope.Request.DealerID) {
                $scope.CompForm.DealerCode = value.DealerCode;
                $scope.CompForm.DealerName = value.DealerName;
                $scope.CompForm.SalesOffice = value.DepotName;
                $scope.Request.DealerName = value.DealerName;
                $scope.Request.SalesOffice = value.DepotName;
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

    $scope.CreateCompesnation = function () {
        console.log("$scope.CompensationTypes",$scope.CompensationTypes);
        $scope.FormDetails.CreatedBy = $rootScope.session.EMP_CODE;;
        $scope.FormDetails.Department_Id = 1;
        $scope.FormDetails.CompensationTypes = $scope.CompensationTypes;
        $scope.FormDetails.SettlementModes = $scope.SettlementModes;
       $scope.FormDetails.Remark = $scope.Remark;
        console.log("$scope.FormDetails", $scope.FormDetails);


        //var comptype = 0;
        //for (var i = 0; i < $scope.CompensationTypes.length; i++)
        //{
        //    comptype += parseFloat($scope.CompensationTypes[i].Value);
        //}

        //var settlementtype = 0;
        //for (var i = 0; i < $scope.SettlementModes.length; i++) {
        //    if ($scope.SettlementModes[i].CompensationDetails_ID == 4)
        //    {
        //        settlementtype += parseFloat($scope.SettlementModes[i].CreditNoteValue);
        //    }
        //    if ($scope.SettlementModes[i].CompensationDetails_ID == 5) {
        //        settlementtype += parseFloat($scope.SettlementModes[i].FOCValue);
        //    }
        //    if ($scope.SettlementModes[i].CompensationDetails_ID == 6) {

        //    } settlementtype += parseFloat($scope.SettlementModes[i].ReplacementValue);
            
        //}

        var comptype = 0;
        for (var i = 0; i < $scope.CompensationTypes.length; i++) {
            if ($scope.CompensationTypes[i].Value != null) {
                comptype += parseFloat($scope.CompensationTypes[i].Value);
            }
        }

        var settlementtype = 0;
        for (var i = 0; i < $scope.SettlementModes.length; i++) {
            if ($scope.SettlementModes[i].CompensationDetails_ID == 4 && $scope.SettlementModes[i].CreditNoteValue != null) {
                settlementtype += parseFloat($scope.SettlementModes[i].CreditNoteValue);
            }
            if ($scope.SettlementModes[i].CompensationDetails_ID == 5 && $scope.SettlementModes[i].FOCValue != null) {
                settlementtype += parseFloat($scope.SettlementModes[i].FOCValue);
            }
            if ($scope.SettlementModes[i].CompensationDetails_ID == 6 && $scope.SettlementModes[i].ReplacementValue != null) {
                settlementtype += parseFloat($scope.SettlementModes[i].ReplacementValue);
            } 

        }


        if (settlementtype > comptype)
        {
            swal('Error: Settlement amount cannot be greater then compensation amount');
            return false;
        }
        

        swal({
            title: "Are you sure?",
            text: "Compensation will be created",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Continue",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: true
        },
            function () {

                CompensationRequestService.CreateComp($scope.FormDetails).then(function (success) {
                    console.log("SUCCESS DATA", success.data);
                    swal(success.data);
                    $scope.init();
                },
                    function (error) {
                        console.log(error.data);
                        swal("error", error.data, "error");
                        //swal(error.data);
                    });


            });
    }



    
    $scope.init();


});

app.controller('ModalInstanceCtrl_StatusCompensation', function ($scope, $uibModalInstance, CompensationRequestService, $q) {
    $scope.PendingStatusData = {};
    $scope.grid = {};
    $scope.initStatus = function () {
        CompensationRequestService.GetStatusDetails(CompensationRequestService.ComplaintID).then(function (success) {
            console.log("inside GetComplaintCategory");
            $scope.PendingStatusData = success.data;
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