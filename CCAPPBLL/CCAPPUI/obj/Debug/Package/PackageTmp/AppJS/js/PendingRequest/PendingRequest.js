var app = angular.module('PendingRequestModule', []);

app.service('PendingRequestService', function ($http) {
    //getCOmplaintTYpe
    var ComplaintID = 0;
    this.GetStatusDetails = function (ComplaintId) {

        return $http.get('/api/PendingRequest/GetStatusDetails?ComplaintID=' + ComplaintId);
    };

    this.GetComplaintEmployee = function (ComplaintId) {

        return $http.get('/api/PendingRequest/GetComplaintEmployee?ComplaintId=' + ComplaintId);
    };

    this.GetPendingRequestForApproval = function (EmpCode) {

        return $http.get('/api/PendingRequest/GetPendingRequestForApproval?EmpCode=' + EmpCode);
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

        return $http.get('/api/PendingRequest/GetQuarantine?ComplaintID=' + ComplaintId );
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

    this.CHRejectRCA = function (obj) {

        return $http.post('/api/PendingRequest/CHRejectRCA', obj, {});
    };
    this.CHRecommendforRCAPlnt = function (obj) {

        return $http.post('/api/PendingRequest/CHRecommendforRCAPlnt', obj, {}); 
    };

    this.PlntAssignToCM = function (fd) {

      //  return $http.post('/api/PendingRequest/PlntAssignToCM', obj, {});
        return $http.post("/api/PendingRequest/PlntAssignToCM", fd, {
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        });
    };

    this.RDAssignToCM = function (fd) {

      //  return $http.post('/api/PendingRequest/RDAssignToCM', obj, {});
        return $http.post("/api/PendingRequest/RDAssignToCM", fd, {
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        });
    };


    this.PlntAssignToBM = function (obj) {

        return $http.post('/api/PendingRequest/PlntAssignToBM', obj, {});
    };


    this.PlantStockReceipt = function (obj) {

        return $http.post('/api/PendingRequest/PlantStockReceipt', obj, {});
    };

    this.PlntAssignToRD = function (fd) {

        return $http.post("/api/PendingRequest/PlntAssignToRD", fd, {
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }

        });

         //return $http.post('/api/PendingRequest/PlntAssignToRD', obj, {});
    };

    this.SMPComplaintManager = function (fd) {

        return $http.post("/api/PendingRequest/SMPComplaintManager", fd, {
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        });
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

    this.BMApproveSelling = function (obj) {

        return $http.post('/api/PendingRequest/BMApproveSelling', obj, {});
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

                                                                                                      //----------------prashant ------------//

    this.CMReprocessingSubmit = function (obj) {

        return $http.post('/api/PendingRequest/CMReprocessingSubmit', obj, {});
    };

    this.CMSellingSubmit = function (obj) {

        return $http.post('/api/PendingRequest/CMSellingSubmit', obj, {});
    };

    this.CMClosingComplaintSubmit = function (obj) {

        return $http.post('/api/PendingRequest/CMClosingComplaintSubmit', obj, {});
    };
                                                                                           //----------------prashant ------------//


    this.BMApproveQurantine = function (obj) {

        return $http.post('/api/PendingRequest/BMApproveQurantine', obj, {});
    };

    this.BMRejectQurantine = function (obj) {

        return $http.post('/api/PendingRequest/BMRejectQurantine', obj, {});
    };

    this.QurantineReceipt = function (obj) {

        return $http.post('/api/PendingRequest/QurantineReceipt', obj, {});
    };

    this.InitiateQuartine = function (fd) {

      //  return $http.post('/api/PendingRequest/InitiateQuartine', obj, {});

        return $http.post("/api/PendingRequest/InitiateQuartine", fd, {
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }

        });
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
   
    this.Reconsider = function (obj) {

        return $http.post('/api/PendingRequest/Reconsider/', obj);
    };

    this.ReconsiderCM = function (obj) {

        return $http.post('/api/PendingRequest/ReconsiderCM/', obj);                 //-----Reconsider for complaint manager -----//
    };


    this.BMReconsiderPlant = function (obj) {

        return $http.post('/api/PendingRequest/BMReconsiderPlant/', obj);
    };

    this.BHReconsiderPlant = function (obj) {

        return $http.post('/api/PendingRequest/BHReconsiderPlant/', obj);
    };

    this.BMReconsiderRD = function (obj) {

        return $http.post('/api/PendingRequest/BMReconsiderRD/', obj);
    };
    this.BMReconsiderQuartine = function (obj) {

        return $http.post('/api/PendingRequest/BMReconsiderQuartine/', obj);
    };

    this.BMReconsiderSelling = function (obj) {

        return $http.post('/api/PendingRequest/BMReconsiderSelling/', obj);
    };
    
    



    this.BHReconsiderRD = function (obj) {

        return $http.post('/api/PendingRequest/BHReconsiderRD/', obj);
    };


    this.ProductManufacturingLocationList = function () {

        return $http.get('/api/ProductManufacturerLocation/List')                         //------ProductManufacturingLocationList --------------//
    };

});

app.controller('PendingRequestController', function ($scope, $http, $location, $rootScope, HomeService, PendingRequestService, $q, $filter, $uibModal) {

    $scope.S1 = true;
    $scope.S2 = false;
    $scope.S3 = false;
    $scope.S4 = false;
    $scope.S5 = false;
    $scope.S6 = false;
    $scope.S7 = false;
    $scope.S8 = false;

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
    $scope.SMPNonPaInt = false;

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
    $scope.SMP = {};


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
    $scope.viewSMP = false;
    $scope.init = function () {
        $scope.S1 = true;
        $scope.S2 = false;
        $scope.S3 = false;
        $scope.S4 = false;
        $scope.S5 = false;
        $scope.S6 = false;
        $scope.S7 = false;
        $scope.S8 = false;



        $scope.viewSMP = true;
        $scope.ShowGrid = true;
        $scope.ShowDetails = false;

        $scope.RCARD = false;

        $scope.TSERemarks = '';
        $scope.RCAtoBeDone = '';
        $scope.CMRemarks = '';

        $scope.CHRemarks = '';
        $scope.TSERemarks = '';

        $scope.Thead.RCAtoBeDone = '';
        $scope.Thead = [];
        $scope.TSE = [];
        $scope.Plnt = [];
        $scope.SMP = [];
        $scope.RD = [];
        $scope.CM = {};

        $scope.RecvRD = {};
        $scope.Recv = {};

        $scope.BMpntApp = false;
        $scope.BMrdApp = false;
        $scope.BMSellingApproval = false;
        
        $scope.TSECode = '';

        //$scope.Plnt.Remarks = '';
        //$scope.Plnt.RCAComments = '';



        $scope.GetPendingRequest($rootScope.session.EMP_CODE);

        PendingRequestService.DealerDetails().then(function (success) {
            console.log("inside GetComplaintCategory");
            $scope.DealerDetails = success.data;
            console.log($scope.DealerDetails);
        },
            function (error) {
                console.log(error);
            });


        //get substrate id
        PendingRequestService.GetSubstrateId().then(function (success) {
            console.log("inside GetComplaintCategory");
            $scope.SubstrateMaster = success.data;
            console.log($scope.SubstrateMaster);
        },
            function (error) {
                console.log(error);
            });


        //get product ID
        PendingRequestService.GetProductId().then(function (success) {
            console.log("inside GetProductId");
            $scope.ProductMaster = success.data;
            console.log($scope.ProductMaster);
        },
            function (error) {
                console.log(error);
            });


        //GetComplaintCategory
        PendingRequestService
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

        PendingRequestService.ProductManufacturingLocationList()
            .then(function (success) {
                $scope.ProductManufacturingLocationArray = success.data;
                console.log("ProductManufacturingLocationArray", $scope.ProductManufacturingLocationArray);
                if (success.data != null) {
                    $scope.ProductLocationArray = success.data;
                };
            },
            function (error) {
                console.log(error);

            });


    }

    //$scope.clearF = function ()
    //{
    //    $scope.CM = {};
    //}
    //$scope.ClearFun2 = function () {
    //    $scope.CM = {};
    //}
    //$scope.ClearFun3 = function () {
    //    $scope.CM = {};
    //}
    //$scope.ClearFun4 = function () {
    //    $scope.CM = {};
    //}





    $scope.GetCurrentWindow = function (curr) {
        if (curr == 'S1') {
            $scope.S1 = true;
            $scope.S2 = false;
            $scope.S3 = false;
            $scope.S4 = false;
            $scope.S5 = false;
            $scope.S6 = false;
            $scope.S8 = false;
        }
        else if (curr == 'S2') {
            $scope.S1 = false;
            $scope.S2 = true;
            $scope.S3 = false;
            $scope.S4 = false;
            $scope.S5 = false;
            $scope.S6 = false;
            $scope.S7 = false;
            $scope.S8 = false;
        }
        else if (curr == 'S3') {
            $scope.S1 = false;
            $scope.S2 = false;
            $scope.S3 = true;
            $scope.S4 = false;
            $scope.S5 = false;
            $scope.S6 = false;
            $scope.S7 = false;
            $scope.S8 = false;
        }
        else if (curr == 'S4') {
            $scope.S1 = false;
            $scope.S2 = false;
            $scope.S3 = false;
            $scope.S4 = true;
            $scope.S5 = false;
            $scope.S6 = false;
            $scope.S7 = false;
            $scope.S8 = false;
        }
        else if (curr == 'S5') {
            $scope.S1 = false;
            $scope.S2 = false;
            $scope.S3 = false;
            $scope.S4 = false;
            $scope.S5 = true;
            $scope.S6 = false;
            $scope.S7 = false;
            $scope.S8 = false;
        }
        else if (curr == 'S6') {
            $scope.S1 = false;
            $scope.S2 = false;
            $scope.S3 = false;
            $scope.S4 = false;
            $scope.S5 = false;
            $scope.S6 = true;
            $scope.S7 = false;
            $scope.S8 = false;
        }
        else if (curr == 'S7') {
            $scope.S1 = false;
            $scope.S2 = false;
            $scope.S3 = false;
            $scope.S4 = false;
            $scope.S5 = false;
            $scope.S6 = false;
            $scope.S7 = true;
            $scope.S8 = false;
        }
        else if (curr == 'S8') {
            $scope.S1 = false;
            $scope.S2 = false;
            $scope.S3 = false;
            $scope.S4 = false;
            $scope.S5 = false;
            $scope.S6 = false;
            $scope.S7 = false;
            $scope.S8 = true;
        }
    }

    $scope.OpenStatus = function (id) {
        //$scope.items.IndexId = _Item;
        //console.log($scope.items);

        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'partial/StatusModal.html',
            controller: 'ModalInstanceCtrl_StatusPending',
            size: 'lg',
            resolve: {
                items: function () {
                    return id;
                }
            }
        });
        PendingRequestService.ComplaintID = id;
        modalInstance.result.then(function (items) {
            $scope.RequestID = items;
            console.log(items);
            // $scope.invoice.row[$scope.items.IndexId].
        });
    };

    $scope.GetPendingRequest = function (EmpCode) {
        PendingRequestService.GetPendingRequestForApproval(EmpCode).then(function (success) {

            $scope.PendingRequest = success.data;
            console.log("PendingRequest", $scope.PendingRequest);
        },
            function (error) {
                console.log(error);
            });

    };
    $scope.GetTSE = function () {
        PendingRequestService.GetTSEList().then(function (success) {

            $scope.TSEList = success.data;
            console.log($scope.TSEList);
        },
            function (error) {
                console.log(error);
            });

    };


    $scope.GetComplaintDetails = function (ComplaintId, status, StatusId, CreatedBy) {
        $scope.S1 = true;

        console.log("ProductManufacturingLocationList:", $scope.ProductManufacturingLocationArray);

        $scope.RCA = false;
        PendingRequestService.GetComplaintEmployee(ComplaintId).then(function (success) {
            $scope.EmployeeDetails = success.data;
        }, function (error) {
            console.log(error);
        });
        PendingRequestService.GetComplaintDetails(ComplaintId).then(function (success) {
            //$scope.GetCurrentWindow('S1');
            $scope.Thead = {};
            $scope.ShowGrid = false;
            $scope.ShowDetails = true;
            $scope.ComplaintDtl = success.data;
            console.log($scope.DealerDetails);
            $scope.Complaint_Id = ComplaintId;
            $scope.Request.DealerID = $scope.ComplaintDtl.CustomerComplaint.Dealer_ID;
            $scope.Thead.Complaint_ID = ComplaintId;
            $scope.Plnt.Complaint_ID = ComplaintId;
            $scope.RD.Complaint_ID = ComplaintId;
            $scope.CM.Complaint_Id = ComplaintId;
            $scope.SMP.Complaint_Id = ComplaintId;

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
            $scope.Complaint.ProductShelfLife = $scope.ComplaintDtl.CustomerComplaint.ProductShelfLife;

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


            if (status == 'Pending Complaint Creation') {
                HomeService.ReqIds = {
                    Cpmplaint_Id: ComplaintId,
                    Created_By: CreatedBy,
                  //  Status_Id: FutStatusId,
                    ComplaintNumber:  $scope.ComplaintDtl.CustomerComplaint.ComplaintNumber,
                };
                console.log(HomeService.ReqIds);
                window.location.href = '#/Ruser/';
                //break;
                //return false;
            }



          else  if (status == 'Pending - Complaint Handler') {
                $scope.ComplaintHandler = true;
                $scope.ComplaintManager = false;
                $scope.TSE = false;
                $scope.CHLogin = $rootScope.session.Role.indexOf("CH") != -1 ? true : false;
                if ($scope.CHLogin == false) {
                    $scope.CHLogin = $rootScope.session.Role.indexOf("Admin") != -1 ? true : false;
                }
                $scope.GetTSE();


            }


            else if (status == 'Pending - Complaint Manager') {
                $scope.ComplaintHandler = false;
                $scope.SMPNonPaInt = false;
                $scope.Quarantine = false;
                $scope.RCAPlant = false;

                $scope.ComplaintManager = $rootScope.session.Role.indexOf("CM") != -1 ? true : false;
                $scope.TSEManager = false;
                //GetComplaintHandlerDetails
                $scope.GetTSE();
                PendingRequestService.GetComplaintHandlerDetails(ComplaintId, 2).then(function (success) {
                    $scope.Thead = success.data.Model;
                    console.log("Thead Model:", $scope.Thead);

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
            else if (status == 'Pending - TSE') {
                $scope.ComplaintHandler = true;
                $scope.ComplaintManager = false;
                $scope.TSEManager = $rootScope.session.Role.indexOf("TSE") != -1 ? true : false;
                $scope.PedingApprovalCH = false;
                $scope.PedingApprovalCM = false;
                $scope.CHLogin = false;

                $scope.CHApprovalAction = false;
                //GetComplaintHandlerDetails
                $scope.GetTSE();
                PendingRequestService.GetComplaintHandlerDetails(ComplaintId, 2).then(function (success) {
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
            else if (status == 'Pending Approval - CH') {
                $scope.ComplaintHandler = true;
                $scope.ComplaintManager = false;
                $scope.TSEManager = true;
                $scope.PedingApprovalCH = $rootScope.session.Role.indexOf("CH") != -1 ? true : false;
                $scope.CHApprovalAction = $rootScope.session.Role.indexOf("CH") != -1 ? true : false;
                if ($scope.PedingApprovalCH == false) {
                    $scope.PedingApprovalCH = $rootScope.session.Role.indexOf("Admin") != -1 ? true : false;
                    $scope.CHApprovalAction = $rootScope.session.Role.indexOf("Admin") != -1 ? true : false;
                }
                //GetComplaintHandlerDetails
                $scope.GetTSE();
                PendingRequestService.GetComplaintHandlerDetails(ComplaintId, 4).then(function (success) {
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
                PendingRequestService.GetComplaintHandlerDetails(ComplaintId, 2).then(function (success) {
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

            else if (status == 'Pending TSE Approval - CM') {
                $scope.PedingApprovalCM = true;
                $scope.ComplaintHandler = true;
                $scope.ComplaintManager = false;
                $scope.TSEManager = true;
                $scope.PedingApprovalCH = false;
                $scope.CHApprovalAction = $rootScope.session.Role.indexOf("CM") != -1 ? true : false;
                //GetComplaintHandlerDetails
                $scope.GetTSE();
                PendingRequestService.GetComplaintHandlerDetails(ComplaintId, 4).then(function (success) {
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
                PendingRequestService.GetComplaintHandlerDetails(ComplaintId, 2).then(function (success) {
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
            else if (status == 'Pending RCA - Plant') {
                $scope.RCA = true;
                $scope.ComplaintHandler = true;
                $scope.ComplaintManager = false;
                $scope.TSEManager = true;
                $scope.RCAPlant = $rootScope.session.Role.indexOf("_Plant") != -1 ? true : false;
                $scope.PlantSubmit = false;
                $scope.PlantApproval = false;
                $scope.StockReceipt = false;
                $scope.CHApprovalAction = true;
                $scope.Quarantine = false;

                $scope.SMPNonPaInt = false;
                PendingRequestService.GetComplaintRCA(ComplaintId, 6).then(function (success) {
                    if (success.data != null) {
                        $scope.Plnt = success.data;
                        $scope.Plnt.DateOfExpectedClosure = $filter('date')(new Date(success.data.DateOfExpectedClosure), 'dd/MMM/yyyy');
                    }
                }, function (error) {
                    console.log(error);
                });
                PendingRequestService.GetComplaintHandlerDetails(ComplaintId, 4).then(function (success) {
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
                PendingRequestService.GetComplaintHandlerDetails(ComplaintId, 2).then(function (success) {
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
            else if (status == 'Pending - Business Manager') {
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
                $scope.SMPNonPaInt = false;
                PendingRequestService.GetComplaintHandlerDetails(ComplaintId, 4).then(function (success) {
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
                PendingRequestService.GetComplaintHandlerDetails(ComplaintId, 2).then(function (success) {
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

                PendingRequestService.GetComplaintRCA(ComplaintId, 6).then(function (success) {
                    $scope.Plnt = success.data;
                    $scope.Plnt.DateOfExpectedClosure = $filter('date')(new Date(success.data.DateOfExpectedClosure), 'dd/MMM/yyyy');
                }, function (error) {
                    console.log(error);
                });

            }
            else if (status == 'Pending Plant - Business Head') {
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
                $scope.SMPNonPaInt = false;
                $scope.Quarantine = true;
                PendingRequestService.GetComplaintRCA(ComplaintId, 6).then(function (success) {
                    if (success.data == null) {
                        $scope.RCAPlant = false;
                    }
                    else
                    {
                        $scope.BHpntApp = true;
                        $scope.BHrdApp = false;
                    }
                    $scope.Plnt = success.data;
                }, function (error) {
                    console.log(error);
                    });
                PendingRequestService.GetComplaintRCA(ComplaintId, 3).then(function (success) {
                    if (success.data == null) {
                        $scope.Quarantine = false;
                    }
                    $scope.CMSubmit = true;
                    $scope.CM = success.data;
                }, function (error) {
                    console.log(error);
                });

                PendingRequestService.GetComplaintHandlerDetails(ComplaintId, 4).then(function (success) {
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
                PendingRequestService.GetComplaintHandlerDetails(ComplaintId, 2).then(function (success) {
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

                PendingRequestService.GetComplaintRCA(ComplaintId, 6).then(function (success) {
                    $scope.Plnt = success.data;
                    $scope.Plnt.DateOfExpectedClosure = $filter('date')(new Date(success.data.DateOfExpectedClosure), 'dd/MMM/yyyy');
                }, function (error) {
                    console.log(error);
                });
            }
            else if (status == 'Pending Receipt - Plant' || status == 'Pending Receipt - SMP' || status == 'Pending Receipt - Non Paint') {
                $scope.RCA = true;
                $scope.SMPNonPaInt = false;
                $scope.ComplaintHandler = true;
                $scope.ComplaintManager = false;
                $scope.TSEManager = true;
                $scope.RCAPlant = true;
                $scope.Quarantine = true;


                $scope.CMStockReceipt = false;
                


                if (status == 'Pending Receipt - Plant')
                {
                    $scope.PlantSubmit = $rootScope.session.Role.indexOf("Plant") != -1 ? true : false;


                }
                else if (status == 'Pending Receipt - SMP' )

                {
                    $scope.PlantSubmit = $rootScope.session.Role.indexOf("SMP") != -1 ? true : false;
                }

                else  {
                    $scope.PlantSubmit = $rootScope.session.Role.indexOf("NonPaint") != -1 ? true : false;
                }




                
                if (status == 'Pending Receipt - Plant') {
                    $scope.StockReceipt = $rootScope.session.Role.indexOf("Plant") != -1 ? true : false;
                }
               else if (status == 'Pending Receipt - SMP') {
                    $scope.StockReceipt = $rootScope.session.Role.indexOf("SMP") != -1 ? true : false;
                }
                else  {
                    $scope.StockReceipt = $rootScope.session.Role.indexOf("NonPaint") != -1 ? true : false;
                }


              



             //   $scope.PlantSubmit = $rootScope.session.Role.indexOf("Plant") != -1 ? true : false; 
                $scope.PlantApproval = false;
            //    $scope.StockReceipt = $rootScope.session.Role.indexOf("Plant") != -1 ? true : false;
                $scope.CHApprovalAction = true;
                PendingRequestService.GetComplaintRCA(ComplaintId, 6).then(function (success) {
                    if (success.data == null) {
                        $scope.RCAPlant = false;
                    }
                    else{

                        $scope.Plnt = success.data;
                    }
                //    $scope.Plnt.DateOfExpectedClosure = $filter('date')(new Date(success.data.DateOfExpectedClosure), 'dd/MMM/yyyy');
                //}, function (error) {
                    console.log(error);
                    });
                PendingRequestService.GetComplaintRCA(ComplaintId, 3).then(function (success) {
                    $scope.CMSubmit = true;
                    $scope.CM = success.data;
                    $scope.CM.DateOfExpectedClosure = $filter('date')(new Date(success.data.DateOfExpectedClosure), 'dd/MMM/yyyy');
                }, function (error) {
                    console.log(error);
                    });



                PendingRequestService.GetComplaintRCA(ComplaintId, 10).then(function (success) {
                    if (success.data == null) {
                        //$scope.SMPNonPaInt = false;

                        PendingRequestService.GetComplaintRCA(ComplaintId, 11).then(function (success) {
                            if (success.data == null) {
                                $scope.SMPNonPaInt = false;

                            }
                            else {
                                $scope.SMPNonPaInt = true;
                                $scope.SmpTbView = true;
                                $scope.NonSmpTbView = false;
                            //    $scope.CM.IsSelected = null;
                                $scope.SMP = success.data;
                            }
                        }, function (error) {
                            $scope.SMPNonPaInt = false;
                            console.log(error);
                        });
                    }
                    else {
                        $scope.SMPNonPaInt = true;

                        $scope.SmpTbView = true;
                        $scope.NonSmpTbView = false;
                     //   $scope.CM.IsSelected = null;
                        $scope.SMP = success.data;
                    }
                }, function (error) {
                    $scope.SMPNonPaInt = false;
                    console.log(error);
                });






                PendingRequestService.GetComplaintHandlerDetails(ComplaintId, 4).then(function (success) {
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
                PendingRequestService.GetComplaintHandlerDetails(ComplaintId, 2).then(function (success) {
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
            else if (status == 'Pending RCA - R&D') {
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
                $scope.SMPNonPaInt = false;
                PendingRequestService.GetComplaintRCA(ComplaintId, 6).then(function (success) {

                    if (success.data != null)
                        {
                    $scope.Plnt = angular.copy(success.data);
                    $scope.Plnt.DateOfExpectedClosure = $filter('date')(new Date(success.data.DateOfExpectedClosure), 'dd/MMM/yyyy');
                    }
                    else 
                    {
                        $scope.RCAPlant = false;
                    }
                }, function (error) {
                    console.log(error);
                });
                PendingRequestService.GetComplaintRCA(ComplaintId, 8).then(function (success) {
                    if (success.data != null) {
                        $scope.RD = success.data;
                        $scope.RD.DateOfExpectedClosure = $filter('date')(new Date(success.data.DateOfExpectedClosure), 'dd/MMM/yyyy');
                    }
                }, function (error) {
                    console.log(error);
                });
                PendingRequestService.GetComplaintHandlerDetails(ComplaintId, 4).then(function (success) {
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
                PendingRequestService.GetComplaintHandlerDetails(ComplaintId, 2).then(function (success) {
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
            else if (status == 'Pending R&D - BM') {
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
                $scope.SMPNonPaInt = false;
                PendingRequestService.GetComplaintRCA(ComplaintId, 6).then(function (success) {
                    if (success.data == null) {
                        $scope.RCAPlant = false;
                    }
                    $scope.Plnt = success.data;
                    $scope.Plnt.DateOfExpectedClosure = $filter('date')(new Date(success.data.DateOfExpectedClosure), 'dd/MMM/yyyy');
                }, function (error) {
                    console.log(error);
                });
                PendingRequestService.GetComplaintRCA(ComplaintId, 8).then(function (success) {
                    if (success.data == null) {
                        $scope.RCARD = false;
                    }

                    $scope.RD = success.data;
                    $scope.RD.DateOfExpectedClosure = $filter('date')(new Date(success.data.DateOfExpectedClosure), 'dd/MMM/yyyy');
                }, function (error) {
                    console.log(error);
                });
                PendingRequestService.GetComplaintHandlerDetails(ComplaintId, 4).then(function (success) {
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
                PendingRequestService.GetComplaintHandlerDetails(ComplaintId, 2).then(function (success) {
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
            else if (status == 'Pending R&D - Business Head') {
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
                $scope.SMPNonPaInt = false;
                $scope.Quarantine = true;

                PendingRequestService.GetComplaintRCA(ComplaintId, 6).then(function (success) {
                    if (success.data == null) {
                        $scope.RCAPlant = false;
                    }
                    $scope.Plnt = success.data;
                    $scope.Plnt.DateOfExpectedClosure = $filter('date')(new Date(success.data.DateOfExpectedClosure), 'dd/MMM/yyyy');
                }, function (error) {
                    console.log(error);
                });
                PendingRequestService.GetComplaintRCA(ComplaintId, 8).then(function (success) {
                    if (success.data == null) {
                        $scope.RCARD = false;
                    }
                    $scope.RD = success.data;
                    $scope.RD.DateOfExpectedClosure = $filter('date')(new Date(success.data.DateOfExpectedClosure), 'dd/MMM/yyyy');
                }, function (error) {
                    console.log(error);
                    });
                PendingRequestService.GetComplaintRCA(ComplaintId, 3).then(function (success) {
                    if (success.data == null) {
                        $scope.Quarantine = false;
                    }
                    $scope.CMSubmit = true;
                    $scope.CM = success.data;
                    $scope.CM.DateOfExpectedClosure = $filter('date')(new Date(success.data.DateOfExpectedClosure), 'dd/MMM/yyyy');
                }, function (error) {
                    console.log(error);
                });

                PendingRequestService.GetComplaintHandlerDetails(ComplaintId, 4).then(function (success) {
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
                PendingRequestService.GetComplaintHandlerDetails(ComplaintId, 2).then(function (success) {
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
            else if (status == 'Pending Receipt R&D - Plant') {
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
                $scope.SMPNonPaInt = false;
                $scope.Quarantine = true;

                $scope.RDStockReceipt = $rootScope.session.Role.indexOf("Plant") != -1 ? true : false;
                $scope.CHApprovalAction = true;
                PendingRequestService.GetComplaintRCA(ComplaintId, 6).then(function (success) {
                    if (success.data == null) {
                        $scope.RCAPlant = false;
                    }
                    $scope.Plnt = success.data;
                    $scope.Plnt.DateOfExpectedClosure = $filter('date')(new Date(success.data.DateOfExpectedClosure), 'dd/MMM/yyyy');
                }, function (error) {
                    console.log(error);
                });
                PendingRequestService.GetComplaintRCA(ComplaintId, 8).then(function (success) {
                    if (success.data == null) {
                        $scope.RCARD = false;
                    }
                    $scope.RD = success.data;
                    $scope.RD.DateOfExpectedClosure = $filter('date')(new Date(success.data.DateOfExpectedClosure), 'dd/MMM/yyyy');
                }, function (error) {
                    console.log(error);
                    });
                PendingRequestService.GetComplaintRCA(ComplaintId, 3).then(function (success) {
                    if (success.data == null) {
                        $scope.Quarantine = false;
                    }
                    $scope.CMSubmit = true;
                    $scope.CM = success.data;
                    $scope.CM.DateOfExpectedClosure = $filter('date')(new Date(success.data.DateOfExpectedClosure), 'dd/MMM/yyyy');
                }, function (error) {
                    console.log(error);
                });
                PendingRequestService.GetComplaintHandlerDetails(ComplaintId, 4).then(function (success) {
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
                PendingRequestService.GetComplaintHandlerDetails(ComplaintId, 2).then(function (success) {
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
            else if (status == 'Pending RCA - Complaint Manager' || status == 'Pending Quarantine - Complaint Manager') {

                

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
                //   $scope.RCAPlant = true;
                $scope.PlantSubmit = true;
                $scope.PlantApproval = true;
                $scope.StockReceipt = false;
                $scope.RCARD = true;
                $scope.RDSubmit = true;
                $scope.RDApproval = true;
                $scope.SMPNonPaInt = false;



                //  $scope.SMPNonPaInt = false;

                if ($scope.SMP != null) {
                    $scope.SMPNonPaInt = true;


                }


                if ($scope.Plnt != null) {
                    $scope.RCAPlant = true;
                }

                if ($scope.RD != null) {
                    $scope.RCARD = true;
                }

                if (status == 'Pending Quarantine - Complaint Manager')
                {
                    $scope.CM.IsSelected = 'Quarantine';
                }

                if (status == 'Pending RCA - Complaint Manager') {
                    $scope.CM.IsSelected = 'Reprocessing';
                }

                PendingRequestService.GetComplaintRCA(ComplaintId, 3).then(function (success) {
                    if (success.data == null) {
                       
                    }
                    else
                    {
                        $scope.CM = success.data;
                        $scope.CM.DateOfExpectedClosure = $filter('date')(new Date(success.data.DateOfExpectedClosure), 'dd/MMM/yyyy');

                    }
                }, function (error) {
                    $scope.RCAPlant = false;
                    console.log(error);
                });



                PendingRequestService.GetComplaintRCA(ComplaintId, 6).then(function (success) {
                    if (success.data == null) {
                        $scope.RCAPlant = false;
                    }
                    $scope.Plnt = success.data;
                    $scope.Plnt.DateOfExpectedClosure = $filter('date')(new Date(success.data.DateOfExpectedClosure), 'dd/MMM/yyyy');
                }, function (error) {
                    $scope.RCAPlant = false;
                    console.log(error);
                });
                PendingRequestService.GetComplaintRCA(ComplaintId, 8).then(function (success) {
                    if (success.data == null) {
                        $scope.RCARD = false;
                    }
                    else {
                        $scope.RD = success.data;
                        if (success.data.DateOfExpectedClosure != null) {
                            $scope.RD.DateOfExpectedClosure = $filter('date')(new Date(success.data.DateOfExpectedClosure), 'dd/MMM/yyyy');
                        }
                    }
                }, function (error) {
                    $scope.RCARD = false;
                    console.log(error);
                });

                PendingRequestService.GetComplaintRCA(ComplaintId, 10).then(function (success) {
                    if (success.data == null) {
                        //$scope.SMPNonPaInt = false;

                        PendingRequestService.GetComplaintRCA(ComplaintId, 11).then(function (success) {
                            if (success.data == null) {
                                $scope.SMPNonPaInt = false;

                            }
                            else {
                                $scope.SmpTbView = true;
                                $scope.NonSmpTbView = false;
                                $scope.CM.IsSelected = null;
                                $scope.SMP = success.data;
                            }
                        }, function (error) {
                            $scope.SMPNonPaInt = false;
                            console.log(error);
                        });
                      }
                    else {
                        $scope.SmpTbView = true;
                        $scope.NonSmpTbView = false;
                        $scope.CM.IsSelected = null;
                        $scope.SMP = success.data;
                    }
                }, function (error) {
                    $scope.SMPNonPaInt = false;
                    console.log(error);
                });

               

                PendingRequestService.GetComplaintHandlerDetails(ComplaintId, 4).then(function (success) {
                    if (success.data.Model == null) {
                        $scope.TSEManager = false;
                    }
                    else {
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
                    }
                }, function (error) {
                    $scope.TSEManager = false;
                    console.log(error);
                });
                PendingRequestService.GetComplaintHandlerDetails(ComplaintId, 2).then(function (success) {
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
            else if (status == 'Pending Quarantine - BM') {
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


              

                PendingRequestService.GetQuarantine(ComplaintId).then(function (success) {
                    $scope.CM = success.data;
                    if (status == 'Pending Quarantine - BM') {
                        $scope.CM.IsSelected == 'Quarantine';
                    }


                    console.log("Complaint Manager quarentine",$scope.CM);
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
                PendingRequestService.GetComplaintRCA(ComplaintId, 6).then(function (success) {
                    if (success.data == null) {
                        $scope.RCAPlant = false;
                    }
                    $scope.RCAPlant = true;
                    $scope.Plnt = success.data;
                    //$scope.Plnt.DateOfExpectedClosure = $filter('date')(new Date(success.data.DateOfExpectedClosure), 'dd/MMM/yyyy');
                }, function (error) {
                    console.log(error);
                });
                PendingRequestService.GetComplaintRCA(ComplaintId, 8).then(function (success) {
                    if (success.data == null) {
                        $scope.RCARD = false;
                    }
                    $scope.RD = success.data;
                    //$scope.RD.DateOfExpectedClosure = $filter('date')(new Date(success.data.DateOfExpectedClosure), 'dd/MMM/yyyy');
                }, function (error) {
                    console.log(error);
                    });

                PendingRequestService.GetComplaintRCA(ComplaintId, 10).then(function (success) {
                    if (success.data == null) {
                        //$scope.SMPNonPaInt = false;

                        PendingRequestService.GetComplaintRCA(ComplaintId, 11).then(function (success) {
                            if (success.data == null) {
                                $scope.SMPNonPaInt = false;

                            }
                            else {
                                $scope.SmpTbView = true;
                                $scope.NonSmpTbView = false;
                                $scope.CM.IsSelected = null;
                                $scope.SMP = success.data;
                            }
                        }, function (error) {
                            $scope.SMPNonPaInt = false;
                            console.log(error);
                        });
                    }
                    else {
                        $scope.SmpTbView = true;
                        $scope.NonSmpTbView = false;
                        $scope.CM.IsSelected = null;
                        $scope.SMP = success.data;
                    }
                }, function (error) {
                    $scope.SMPNonPaInt = false;
                    console.log(error);
                });




                PendingRequestService.GetComplaintHandlerDetails(ComplaintId, 4).then(function (success) {
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
                PendingRequestService.GetComplaintHandlerDetails(ComplaintId, 2).then(function (success) {
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
            else if (status == 'Pending Disposal - Plant') {
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
                $scope.SMPNonPaInt = false;

                PendingRequestService.GetQuarantine(ComplaintId).then(function (success) {
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

                PendingRequestService.GetComplaintRCA(ComplaintId, 6).then(function (success) {
                    if (success.data == null) {
                        $scope.RCAPlant = false;
                    }
                    $scope.Plnt = success.data;
                }, function (error) {
                    console.log(error);
                });
                PendingRequestService.GetComplaintRCA(ComplaintId, 8).then(function (success) {
                    if (success.data == null) {
                        $scope.RCARD = false;
                    }
                    $scope.RD = success.data;
                }, function (error) {
                    console.log(error);
                });
                PendingRequestService.GetComplaintHandlerDetails(ComplaintId, 4).then(function (success) {
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
                PendingRequestService.GetComplaintHandlerDetails(ComplaintId, 2).then(function (success) {
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
            else if (status == 'Pending RCA - SMP' || status == 'Pending RCA - NonPaint') {

                console.log("fjkd djfdsj djfhsdj jdfs jdfhdj", $scope.PendingRequest);
                                
                if (status == 'Pending RCA - SMP') {

                    $scope.SMPButtonShow = true;
                    $scope.SmpTbView = true;
                    $scope.NonSmpTbView = false;
                }
                else {
                    $scope.SMPButtonShow = false;
                    $scope.SmpTbView = false;
                    $scope.NonSmpTbView = true;
                }



                $scope.SmpTbView = true;
                $scope.NonSmpTbView = false;

                
                $scope.SMPCMApproval = true;
                $scope.SMPNonPaInt = true;

                $scope.RCA = true;
                $scope.ComplaintHandler = true;
                $scope.ComplaintManager = false;
                $scope.TSEManager = true;
                $scope.RCAPlant = false;
                $scope.PlantSubmit = true;
                $scope.PlantApproval = false;
                $scope.StockReceipt = false;
                $scope.RCARD = $rootScope.session.Role.indexOf("_OutSourced") != -1 ? true : false;
                $scope.RDSubmit = false;
                $scope.RDApproval = false;
                $scope.RDStockReceipt = false;
                $scope.CHApprovalAction = true;



                PendingRequestService.GetComplaintRCA(ComplaintId, 10).then(function (success) {
                    if (success.data != null) {
                        $scope.SMP = success.data;
                        $scope.SMP.DateOfExpectedClosure = $filter('date')(new Date(success.data.DateOfExpectedClosure), 'dd/MMM/yyyy');
                    }
                }, function (error) {
                    console.log(error);
                });
                PendingRequestService.GetComplaintRCA(ComplaintId, 11).then(function (success) {
                    if (success.data != null) {
                        $scope.SMP = success.data;
                        $scope.SMP.DateOfExpectedClosure = $filter('date')(new Date(success.data.DateOfExpectedClosure), 'dd/MMM/yyyy');
                    }
                }, function (error) {
                    console.log(error);
                });



                PendingRequestService.GetComplaintHandlerDetails(ComplaintId, 4).then(function (success) {
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
                PendingRequestService.GetComplaintHandlerDetails(ComplaintId, 2).then(function (success) {
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
            else if (status == 'Pending Reprocessing- BM') {
                $scope.RCA = true;
                $scope.ComplaintHandler = true;
                $scope.ComplaintManager = false;
                $scope.TSEManager = true;
                $scope.RCAPlant = true;
                $scope.PlantSubmit = true;
                $scope.PlantApproval = false;
                $scope.StockReceipt = false;
                $scope.RCARD = true;
                $scope.Quarantine = true;
                $scope.RDSubmit = true;
                $scope.CMSubmit = true;

                //$scope.BMpntApp = false;
                //$scope.BMrdApp = false;


               


              //   BMPlantApproval

                 $scope.BMPlantApproval = $rootScope.session.Role.indexOf("BM") != -1 ? true : false;
                $scope.RDBHApproval = false;
                $scope.RDStockReceipt = false;
                $scope.CHApprovalAction = true;
                $scope.CMBMApproval = false;
                
              
                PendingRequestService.GetComplaintRCA(ComplaintId, 6).then(function (success) {
                    if (success.data == null) {
                        $scope.RCAPlant = false;
                    }
                    else {
                        $scope.BMpntApp = true;
                        $scope.BMrdApp = false;
                        $scope.BMsmpNonPaintApp = false;

                    }

                    $scope.Plnt = success.data;
                //    $scope.Plnt.DateOfExpectedClosure = $filter('date')(new Date(success.data.DateOfExpectedClosure), 'dd/MMM/yyyy');
                }, function (error) {
                    console.log(error);
                });
                PendingRequestService.GetComplaintRCA(ComplaintId, 8).then(function (success) {
                    if (success.data == null) {
                        $scope.RCARD = false;
                    }
                    else {
                        $scope.BMpntApp = false;
                        $scope.BMrdApp = true;
                        $scope.BMsmpNonPaintApp = false;

                    }

                    $scope.RD = success.data;
                //    $scope.RD.DateOfExpectedClosure = $filter('date')(new Date(success.data.DateOfExpectedClosure), 'dd/MMM/yyyy');
                }, function (error) {
                    console.log(error);
                    });


                PendingRequestService.GetComplaintRCA(ComplaintId, 10).then(function (success) {
                    if (success.data == null) {
                        //$scope.SMPNonPaInt = false;

                        PendingRequestService.GetComplaintRCA(ComplaintId, 11).then(function (success) {
                            if (success.data == null) {
                                $scope.SMPNonPaInt = false;

                            }
                            else {
                                $scope.SMPNonPaInt = true;
                                $scope.SmpTbView = false;
                                $scope.NonSmpTbView = true;

                               // $scope.CM.IsSelected = null;

                              
                                    $scope.BMpntApp = true;
                                    $scope.BMrdApp = false;
                                $scope.BMsmpNonPaintApp = false;


                                $scope.SMP = success.data;
                            }
                        }, function (error) {
                            $scope.SMPNonPaInt = false;
                            console.log(error);
                        });
                    }
                    else {

                      
                            $scope.BMpntApp = true;
                            $scope.BMrdApp = false;
                        $scope.BMsmpNonPaintApp = false;


                        $scope.SMPNonPaInt = true;

                        $scope.SmpTbView = true;
                        $scope.NonSmpTbView = false;

                   //     $scope.CM.IsSelected = null;
                        $scope.SMP = success.data;

                        console.log("BM REPROCESSING SMP",$scope.SMP);

                    }
                }, function (error) {
                    $scope.SMPNonPaInt = false;
                    console.log(error);
                });







                PendingRequestService.GetComplaintRCA(ComplaintId, 3).then(function (success) {
                    if (success.data == null) {
                        $scope.Quarantine = false;
                    }

                    $scope.CMSubmit = true;
                    $scope.CM = success.data;
                    $scope.CM.DateOfExpectedClosure = $filter('date')(new Date(success.data.DateOfExpectedClosure), 'dd/MMM/yyyy');
                }, function (error) {
                    console.log(error);
                });
                PendingRequestService.GetComplaintHandlerDetails(ComplaintId, 4).then(function (success) {
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
                PendingRequestService.GetComplaintHandlerDetails(ComplaintId, 2).then(function (success) {
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
             else if (status == 'Pending Selling- BM') {
                $scope.RCA = true;
                $scope.ComplaintHandler = true;
                $scope.ComplaintManager = false;
                $scope.TSEManager = true;
                $scope.RCAPlant = true;
                $scope.PlantSubmit = true;
                $scope.PlantApproval = false;
                $scope.StockReceipt = false;
                $scope.RCARD = true;
                $scope.Quarantine = true;
                $scope.RDSubmit = true;
                $scope.CMSubmit = true;

                $scope.BMpntApp = true;
                $scope.BMPlantApproval = false;

                //   BMPlantApproval

                $scope.BMSellingApproval = $rootScope.session.Role.indexOf("BM") != -1 ? true : false;

                $scope.RDBHApproval = false;
                $scope.RDStockReceipt = false;
                $scope.CHApprovalAction = true;
                $scope.CMBMApproval = false;
                

                $scope.SMPNonPaInt = false;
                PendingRequestService.GetComplaintRCA(ComplaintId, 6).then(function (success) {
                    if (success.data == null) {
                        $scope.RCAPlant = false;
                    }
                    else {
                        $scope.BMpntApp = false;
                        $scope.BMrdApp = false;
                    }

                    $scope.Plnt = success.data;
                    //    $scope.Plnt.DateOfExpectedClosure = $filter('date')(new Date(success.data.DateOfExpectedClosure), 'dd/MMM/yyyy');
                    }, function (error) {
                    console.log(error);
                });
                PendingRequestService.GetComplaintRCA(ComplaintId, 8).then(function (success) {
                    if (success.data == null) {
                        $scope.RCARD = false;
                    }
                    else {
                        $scope.BMpntApp = false;
                        $scope.BMrdApp = false;
                    }

                    $scope.RD = success.data;
                    //    $scope.RD.DateOfExpectedClosure = $filter('date')(new Date(success.data.DateOfExpectedClosure), 'dd/MMM/yyyy');
                    }, function (error) {
                    console.log(error);
                    });


                PendingRequestService.GetComplaintRCA(ComplaintId, 10).then(function (success) {
                    if (success.data == null) {
                       // $scope.SMPNonPaInt = false;

                        PendingRequestService.GetComplaintRCA(ComplaintId, 10).then(function (success) {
                            if (success.data == null) {
                                $scope.SMPNonPaInt = false;
                            }
                            else {
                                $scope.SMPNonPaInt = true;
                                $scope.SmpTbView = false;
                                $scope.NonSmpTbView = true;
                                
                                $scope.CM.IsSelected = null;
                                $scope.SMP = success.data;
                            }
                        }, function (error) {
                            $scope.SMPNonPaInt = false;
                            console.log(error);
                        });




                    }
                    else {
                        $scope.SMPNonPaInt = true;
                        $scope.SmpTbView = true;
                        $scope.NonSmpTbView = false;

                        $scope.CM.IsSelected = null;
                        $scope.SMP = success.data;
                    }
                }, function (error) {
                    $scope.SMPNonPaInt = false;
                    console.log(error);
                });



                PendingRequestService.GetComplaintRCA(ComplaintId, 3).then(function (success) {
                    if (success.data == null) {
                        $scope.Quarantine = false;
                    }

                    $scope.CMSubmit = true;
                    $scope.CM = success.data;
                    $scope.CM.DateOfExpectedClosure = $filter('date')(new Date(success.data.DateOfExpectedClosure), 'dd/MMM/yyyy');
                }, function (error) {
                    console.log(error);
                });
                PendingRequestService.GetComplaintHandlerDetails(ComplaintId, 4).then(function (success) {
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
                PendingRequestService.GetComplaintHandlerDetails(ComplaintId, 2).then(function (success) {
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


        },
            function (error) {
                console.log(error);
            });

        PendingRequestService.GetStatusDetails(ComplaintId).then(function (success) {
            console.log("inside GetComplaintCategory");
            $scope.PendingStatusData = success.data;
            console.log($scope.DealerDetails);
        },
            function (error) {
                console.log(error);
            });

    }

    $scope.BrandName = function () {
        angular.forEach($scope.ProductMaster, function (value, key) {

            if (value.Product_ID == $scope.Complaint.ProductCode) {

                $scope.Complaint.BrandID = value.Brand_ID;
            }

        });

        PendingRequestService.GetBrandName($scope.Complaint.BrandID).then(function (success) {

            $scope.Complaint.BrandName = success.data;
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
        PendingRequestService.GetBatchAndMfg($scope.Complaint.ProductCode).then(function (success) {
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
                $scope.Complaint.ManuFactureDate = $filter('date')(new Date($scope.ComplaintDtl.CustomerComplaint.ManuFactureDate), 'MMM yyyy');
                $scope.Complaint.ShelfLife = $filter('date')(new Date($scope.ComplaintDtl.CustomerComplaint.ShelfLife), 'MMM yyyy');
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
            }
        }
    }
    //GetComplaintList
    $scope.GetComplaintList = function (obj) {
        var deferred = $q.defer();
        console.log(obj.ComplaintCategory_ID);
        PendingRequestService.GetComplaintList(obj.ComplaintCategory_ID).then(function (success) {
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

    $scope.RecommendForClosure = function () {

        // $scope.Thead.Location_Id = $scope.Location_Id;

        //if ($scope.Thead.ProcessReplicated == false) {
        //    swal('Error: Please replicate process to continue');
        //    return false;
        //}
        //if ($scope.Thead.ComplaintObserved != false) {

        //    swal('Error: please confirm whether no complaint has been obeserved');
        //    return false;
        //}
        //if ($scope.Thead.SystemFollowed == '' || $scope.Thead.SystemFollowed == null) {

        //    swal('Error: Please select system followed');
        //    return false;
        //}


       
        if ($scope.Thead.Location_Id == null) {

            swal('Error: Please provide  Location');
            return false;
        }

        if ($scope.Thead.ApplicationComments == '') {

            swal('Error: Please provide application comments');
            return false;
        }


        if ($scope.Thead.ProblemDescription == '') {
            swal('Error: Please provide comments on customer communication');
            return false;
        }

        //-------------comment before start -----------------//

        //if ($scope.IsInCan == true)
        //{
        //    if ($scope.Complaint.EvidenceAvailable == null )
        //    {
        //        swal('Please select whether evidence available show the mentioned problem on Request Tab ?')
        //        return false;
        //    }
        //    if ($scope.Complaint.VerifiedInSameBatch == null ) {
        //        swal('Please select whether cross-verified the problem in the same batch on Request Tab ?')
        //        return false;
        //    }
        //    if ($scope.Complaint.VerifiedInSameBatch == true) {

        //        if ($scope.Complaint.IsSelf == null ) {
        //            swal('Please select whether Cross verfication has been conducted by Self on Request Tab ?')
        //            return false;
        //        }
        //        if ($scope.Complaint.AvailableForFutureEvidence == null ) {
        //            swal('Please select whether evidence (pictures/video) of cross verification available for future reference on Request Tab ?')
        //            return false;
        //        }
        //        if ($scope.Complaint.SufficientEvidence == null ) {
        //            swal('Please select whether sufficient evidence available to validate the Complaint on Request Tab ?')
        //            return false;
        //        }
        //    }
        //}

        //-------------comment before end -----------------//


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
                Hardener: '',
                Ratio1: '',
                Ratio2: '',
            };
        }
        if ($scope.ReappClearcoat == null) {
            $scope.ReappClearcoat = {
                ClearcoatSelect: '',
                ClearcoatSelectNoOfCost: '',
                Hardener: '',
                Ratio1: '',
                Ratio2: '',
                Clear: ''

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

        var Undercoat = {
            Complaint_ID: '',
            Substrate_ID: $scope.ReappSubstrate,
            CoatType_ID: '',
            ComplaintHandler_Id: '',
            ApplicationType: 'Undercoat',
            ApplicationTypeValue: 'Primer',
            Value3: $scope.ReappUndercoat.UndercoatSelect,
            Value4: $scope.ReappUndercoat.UndercoatSelectChildInput,
            Value5: $scope.ReappUndercoat.Ratio1,
            Value6: $scope.ReappUndercoat.Ratio2,
            Value7: $scope.ReappUndercoat.Hardener,
            Value8: '',
            CreatedBy: $rootScope.session.EMP_CODE
        };

        var Underbody = {
            Complaint_ID: '',
            Substrate_ID: $scope.ReappSubstrate,
            CoatType_ID: '',
            ComplaintHandler_Id: '',
            ApplicationType: 'Underbody',
            ApplicationTypeValue: $scope.ReappUnderbody.UnderbodySelect,
            Value3: $scope.ReappUnderbody.BodyFillerInput,
            Value4: $scope.ReappUnderbody.UnderbodySelectChild,
            Value5: $scope.ReappUnderbody.UnderbodySelectChildInput,
            Value6: '',
            Value7: '',
            Value8: '',
            CreatedBy: $rootScope.session.EMP_CODE
        };

        var Basecoat = {
            Complaint_ID: '',
            Substrate_ID: $scope.ReappSubstrate,
            CoatType_ID: '',
            ComplaintHandler_Id: '',
            ApplicationType: 'Basecoat',
            ApplicationTypeValue: $scope.ReappBasecoat.BasecoatSelect,
            Value3: $scope.ReappBasecoat.MetallicBasecoat,
            Value4: $scope.ReappBasecoat.Hardener,
            Value5: $scope.ReappBasecoat.Ratio1,
            Value6: $scope.ReappBasecoat.Ratio2,
            Value7: '',
            Value8: '',
            CreatedBy: $rootScope.session.EMP_CODE
        };

        var Clearcoat = {
            Complaint_ID: '',
            Substrate_ID: $scope.ReappSubstrate,
            CoatType_ID: '',
            ComplaintHandler_Id: '',
            ApplicationType: 'Clearcoat',
            ApplicationTypeValue: $scope.ReappClearcoat.ClearcoatSelect,
            Value3: $scope.ReappClearcoat.Clear,
            Value4: $scope.ReappClearcoat.ClearcoatSelectNoOfCost,
            Value5: $scope.ReappClearcoat.Hardener,
            Value6: $scope.ReappClearcoat.Ratio1,
            Value7: $scope.ReappClearcoat.Ratio2,
            Value8: '',
            CreatedBy: $rootScope.session.EMP_CODE
        };

        var Thinner = {
            Complaint_ID: '',
            Substrate_ID: $scope.ReappSubstrate,
            CoatType_ID: '',
            ApplicationType: 'Thinner',
            ComplaintHandler_Id: '',
            ApplicationTypeValue: $scope.ReappThinner.ThinnerSelect,
            Value3: $scope.ReappThinner.ThinnerSelectChildInput,
            Value4: $scope.ReappThinner.MixingRatio1,
            Value5: $scope.ReappThinner.MixingRatio2,
            Value6: '',
            Value7: '',
            Value8: '',
            CreatedBy: $rootScope.session.EMP_CODE
        };

        var SystemInfoData = [Undercoat, Underbody, Basecoat, Clearcoat, Thinner];
        $scope.Thead.CreatedBy = $rootScope.session.EMP_CODE;

        var Question = {

            EvidenceAvailable: $scope.Complaint.EvidenceAvailable,
            VerifiedInSameBatch: $scope.Complaint.VerifiedInSameBatch,
            IsSelf: $scope.Complaint.IsSelf,
            AvailableForFutureEvidence: $scope.Complaint.AvailableForFutureEvidence,
            SufficientEvidence: $scope.Complaint.SufficientEvidence,
            RemarksForQuetsionaire: $scope.Complaint.RemarksForQuetsionaire,

        }

        var ReqDtl = {
            Model: $scope.Thead,
            SystemInfo: SystemInfoData,
            Questionaire: Question,
            Remarks: $scope.CHRemarks,

        };
        console.log(ReqDtl);
        var fd = new FormData();

        fd.append('file1', $scope.Reappimg1);
        fd.append('file2', $scope.Reappimg2);
        fd.append('file3', $scope.Reappimg3);

        fd.append('data', angular.toJson(ReqDtl));


        swal({
            title: "Are you sure?",
            text: "Complaint will be assigned to Complaint Manager ?",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Continue",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: true
        },
            function () {

                PendingRequestService.uploadImage(fd).then(function (success) {
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

    $scope.AssignTSE = function () {
        //if ($scope.Thead.ProcessReplicated == false) {
        //    swal('Error: Please replicate process to continue');
        //    return false;
        //}
        //if ($scope.Thead.ComplaintObserved != false) {

        //    swal('Error: please confirm whether no complaint has been obeserved');
        //    return false;
        //}
        //if ($scope.Thead.SystemFollowed == '' || $scope.Thead.SystemFollowed == null) {

        //    swal('Error: Please select system followed');
        //    return false;
        //}
        if ($scope.Thead.ApplicationComments == '') {

            swal('Error: Please provide application comments');
            return false;
        }


        if ($scope.Thead.ProblemDescription == '') {
            swal('Error: Please provide comments on customer communication');
            return false;
        }
        if ($scope.TSECode == '' || $scope.TSECode == null) {
            swal('Error: Please select TSE to continue');
            return false;
        }
        //if ($scope.IsInCan == true) {
        //    if ($scope.Complaint.EvidenceAvailable == null ) {
        //        swal('Please select whether evidence available show the mentioned problem on Request Tab ?')
        //        return false;
        //    }
        //    if ($scope.Complaint.VerifiedInSameBatch == null ) {
        //        swal('Please select whether cross-verified the problem in the same batch on Request Tab ?')
        //        return false;
        //    }
        //    if ($scope.Complaint.VerifiedInSameBatch == true) {

        //        if ($scope.Complaint.IsSelf == null ) {
        //            swal('Please select whether Cross verfication has been conducted by Self on Request Tab ?')
        //            return false;
        //        }
        //        if ($scope.Complaint.AvailableForFutureEvidence == null ) {
        //            swal('Please select whether evidence (pictures/video) of cross verification available for future reference on Request Tab ?')
        //            return false;
        //        }
        //        if ($scope.Complaint.SufficientEvidence == null ) {
        //            swal('Please select whether sufficient evidence available to validate the Complaint on Request Tab ?')
        //            return false;
        //        }
        //    }
        //}



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
                Hardener: '',
            };
        }
        if ($scope.ReappClearcoat == null) {
            $scope.ReappClearcoat = {
                ClearcoatSelect: '',
                ClearcoatSelectNoOfCost: '',
                ClearcoatSelectNoOfCost: '',
                Hardener: '',
                Ratio1: '',
                Ratio2: '',
                Clear: ''

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

        var Undercoat = {
            Complaint_ID: '',
            Substrate_ID: $scope.ReappSubstrate,
            CoatType_ID: '',
            ComplaintHandler_Id: '',
            ApplicationType: 'Undercoat',
            ApplicationTypeValue: 'Primer',
            Value3: $scope.ReappUndercoat.UndercoatSelect,
            Value4: $scope.ReappUndercoat.UndercoatSelectChildInput,
            Value5: $scope.ReappUndercoat.Ratio1,
            Value6: $scope.ReappUndercoat.Ratio2,
            Value7: $scope.ReappUndercoat.Hardener,
            Value8: '',
            CreatedBy: $rootScope.session.EMP_CODE
        };

        var Underbody = {
            Complaint_ID: '',
            Substrate_ID: $scope.ReappSubstrate,
            CoatType_ID: '',
            ComplaintHandler_Id: '',
            ApplicationType: 'Underbody',
            ApplicationTypeValue: $scope.ReappUnderbody.UnderbodySelect,
            Value3: $scope.ReappUnderbody.BodyFillerInput,
            Value4: $scope.ReappUnderbody.UnderbodySelectChild,
            Value5: $scope.ReappUnderbody.UnderbodySelectChildInput,
            Value6: '',
            Value7: '',
            Value8: '',
            CreatedBy: $rootScope.session.EMP_CODE
        };

        var Basecoat = {
            Complaint_ID: '',
            Substrate_ID: $scope.ReappSubstrate,
            CoatType_ID: '',
            ComplaintHandler_Id: '',
            ApplicationType: 'Basecoat',
            ApplicationTypeValue: $scope.ReappBasecoat.BasecoatSelect,
            Value3: $scope.ReappBasecoat.MetallicBasecoat,
            Value4: $scope.ReappBasecoat.Hardener,
            Value5: $scope.ReappBasecoat.Ratio1,
            Value6: $scope.ReappBasecoat.Ratio2,
            Value7: '',
            Value8: '',
            CreatedBy: $rootScope.session.EMP_CODE
        };

        var Clearcoat = {
            Complaint_ID: '',
            Substrate_ID: $scope.ReappSubstrate,
            CoatType_ID: '',
            ComplaintHandler_Id: '',
            ApplicationType: 'Clearcoat',
            ApplicationTypeValue: $scope.ReappClearcoat.ClearcoatSelect,
            Value3: $scope.ReappClearcoat.Clear,
            Value4: $scope.ReappClearcoat.ClearcoatSelectNoOfCost,
            Value5: $scope.ReappClearcoat.Hardener,
            Value6: $scope.ReappClearcoat.Ratio1,
            Value7: $scope.ReappClearcoat.Ratio2,
            Value8: '',
            CreatedBy: $rootScope.session.EMP_CODE
        };

        var Thinner = {
            Complaint_ID: '',
            Substrate_ID: $scope.ReappSubstrate,
            CoatType_ID: '',
            ApplicationType: 'Thinner',
            ComplaintHandler_Id: '',
            ApplicationTypeValue: $scope.ReappThinner.ThinnerSelect,
            Value3: $scope.ReappThinner.ThinnerSelectChildInput,
            Value4: $scope.ReappThinner.MixingRatio1,
            Value5: $scope.ReappThinner.MixingRatio2,
            Value6: '',
            Value7: '',
            Value8: '',
            CreatedBy: $rootScope.session.EMP_CODE
        };

        var SystemInfoData = [Undercoat, Underbody, Basecoat, Clearcoat, Thinner];
        $scope.Thead.CreatedBy = $rootScope.session.EMP_CODE;
        var Question = {

            EvidenceAvailable: $scope.Complaint.EvidenceAvailable,
            VerifiedInSameBatch: $scope.Complaint.VerifiedInSameBatch,
            IsSelf: $scope.Complaint.IsSelf,
            AvailableForFutureEvidence: $scope.Complaint.AvailableForFutureEvidence,
            SufficientEvidence: $scope.Complaint.SufficientEvidence,
            RemarksForQuetsionaire: $scope.Complaint.RemarksForQuetsionaire,

        }
        var ReqDtl = {
            Model: $scope.Thead,
            SystemInfo: SystemInfoData,
            Questionaire: Question,
            Remarks: $scope.CHRemarks,

        };
        console.log(ReqDtl);
        var fd = new FormData();

        fd.append('file1', $scope.Reappimg1);
        fd.append('file2', $scope.Reappimg2);
        fd.append('file3', $scope.Reappimg3);

        fd.append('data', angular.toJson(ReqDtl));


        var data = {
            ComplaintID: $scope.Thead.Complaint_ID,
            AssignTo: $scope.TSECode,
            Remarks: $scope.CHRemarks,
            EmpCode: $rootScope.session.EMP_CODE

        }
        fd.append('AssignInfo', angular.toJson(data));
        //CMAssignToTSE
        swal({
            title: "Are you sure?",
            text: "Complaint will be Assigned to TSE",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Continue",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: true
        },
            function () {
                PendingRequestService.CMAssignToTSE(fd).then(function (success) {
                    swal(success.data);
                    $scope.init();
                },
                    function (error) {
                        console.log(error);

                    });
            });

    }

    $scope.AssignCH = function () {
        //if ($scope.TSE.ProcessReplicated == false) {

        //    swal('Error: Please replicate for assigning it to Complaint Handler ');
        //    return false;
        //}

        //if ($scope.TSE.ApplicationComments == '') {

        //    swal('Error: Please provide application comments');
        //    return false;
        //}
        //if ($scope.TSE.ApplicationComments == '') {

        //    swal('Error: Please provide application comments');
        //    return false;
        //}

        //if ($scope.TSE.ProblemDescription == '') {
        //    swal('Error: Please provide comments on customer communication');
        //    return false;
        //}



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
                Clear: ''

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

        var Undercoat = {
            Complaint_ID: '',
            Substrate_ID: $scope.TSEReappSubstrate,
            CoatType_ID: '',
            ComplaintHandler_Id: '',
            ApplicationType: 'Undercoat',
            ApplicationTypeValue: 'Primer',
            Value3: $scope.TSEReappUndercoat.UndercoatSelect,
            Value4: $scope.TSEReappUndercoat.UndercoatSelectChildInput,
            Value5: $scope.TSEReappUndercoat.Ratio1,
            Value6: $scope.TSEReappUndercoat.Ratio2,
            Value7: $scope.TSEReappUndercoat.Hardener,
            Value8: '',
            CreatedBy: $rootScope.session.EMP_CODE
        };

        var Underbody = {
            Complaint_ID: '',
            Substrate_ID: $scope.TSEReappSubstrate,
            CoatType_ID: '',
            ComplaintHandler_Id: '',
            ApplicationType: 'Underbody',
            ApplicationTypeValue: $scope.TSEReappUnderbody.UnderbodySelect,
            Value3: $scope.TSEReappUnderbody.BodyFillerInput,
            Value4: $scope.TSEReappUnderbody.UnderbodySelectChild,
            Value5: $scope.TSEReappUnderbody.UnderbodySelectChildInput,
            Value6: '',
            Value7: '',
            Value8: '',
            CreatedBy: $rootScope.session.EMP_CODE
        };

        var Basecoat = {
            Complaint_ID: '',
            Substrate_ID: $scope.TSEReappSubstrate,
            CoatType_ID: '',
            ComplaintHandler_Id: '',
            ApplicationType: 'Basecoat',
            ApplicationTypeValue: $scope.TSEReappBasecoat.BasecoatSelect,
            Value3: $scope.TSEReappBasecoat.MetallicBasecoat,
            Value4: $scope.TSEReappBasecoat.Hardener,
            Value5: $scope.TSEReappBasecoat.Ratio1,
            Value6: $scope.TSEReappBasecoat.Ratio2,
            Value7: '',
            Value8: '',
            CreatedBy: $rootScope.session.EMP_CODE
        };

        var Clearcoat = {
            Complaint_ID: '',
            Substrate_ID: $scope.TSEReappSubstrate,
            CoatType_ID: '',
            ComplaintHandler_Id: '',
            ApplicationType: 'Clearcoat',
            ApplicationTypeValue: $scope.TSEReappClearcoat.ClearcoatSelect,
            Value3: $scope.TSEReappClearcoat.Clear,
            Value4: $scope.TSEReappClearcoat.ClearcoatSelectNoOfCost,
            Value5: $scope.TSEReappClearcoat.Hardener,
            Value6: $scope.TSEReappClearcoat.Ratio1,
            Value7: $scope.TSEReappClearcoat.Ratio2,
            Value8: '',
            CreatedBy: $rootScope.session.EMP_CODE
        };

        var Thinner = {
            Complaint_ID: '',
            Substrate_ID: $scope.TSEReappSubstrate,
            CoatType_ID: '',
            ApplicationType: 'Thinner',
            ComplaintHandler_Id: '',
            ApplicationTypeValue: $scope.TSEReappThinner.ThinnerSelect,
            Value3: $scope.TSEReappThinner.ThinnerSelectChildInput,
            Value4: $scope.TSEReappThinner.MixingRatio1,
            Value5: $scope.TSEReappThinner.MixingRatio2,
            Value6: '',
            Value7: '',
            Value8: '',
            CreatedBy: $rootScope.session.EMP_CODE
        };

        var SystemInfoData = [Undercoat, Underbody, Basecoat, Clearcoat, Thinner];
        $scope.TSE.CreatedBy = $rootScope.session.EMP_CODE;
        var Question = {

            EvidenceAvailable: $scope.Complaint.EvidenceAvailable,
            VerifiedInSameBatch: $scope.Complaint.VerifiedInSameBatch,
            IsSelf: $scope.Complaint.IsSelf,
            AvailableForFutureEvidence: $scope.Complaint.AvailableForFutureEvidence,
            SufficientEvidence: $scope.Complaint.SufficientEvidence,
            RemarksForQuetsionaire: $scope.Complaint.RemarksForQuetsionaire,

        }

        var ReqDtl = {
            Model: $scope.TSE,
            SystemInfo: SystemInfoData,
            Questionaire: Question,
            Remarks: $scope.TSERemarks,

        };
        console.log(ReqDtl);
        var fd = new FormData();

        fd.append('file1', $scope.TSEimg1);
        fd.append('file2', $scope.TSEimg2);
        fd.append('file3', $scope.TSEimg3);

        fd.append('data', angular.toJson(ReqDtl));


        swal({
            title: "Are you sure?",
            text: "Request will be assigned to Complaint Handler?",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Continue",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: true
        },
            function () {

                PendingRequestService.AssignToCH(fd).then(function (success) {
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

    $scope.CHRecommendComplaintForRCA = function () {
        //if ($scope.TSE.ComplaintObserved == true && $scope.RCAtoBeDone == null) {
        //    swal('Please Select from RCA would be done.');
        //    return false;
        //}

        var data = {
            ComplaintID: $scope.Thead.Complaint_ID,
            Location: '',
            Remarks: $scope.TSERemarks,
            EmpCode: $rootScope.session.EMP_CODE,
            IsComplaint: $scope.TSE.ComplaintObserved

        }
        //CMAssignToTSE
        swal({
            title: "Are you sure?",
            text: "Complaint will be assigned to Complinat Manager for Approval",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Continue",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: true
        },
            function () {
                PendingRequestService.CHRecommendforRCAPlnt(data).then(function (success) {
                    swal(success.data);
                    $scope.init();
                },
                    function (error) {
                        console.log(error);

                    });
            });

    }

    $scope.ApproveComplaintForRCA = function () {

        console.log($scope.Thead);

        console.log($scope.Thead.RequestRCAOutType);

        console.log($scope.Thead.IsComplaintValid);
        //if ($scope.Thead.ComplaintObserved == false) {
        //    swal('RCA Can only be initiated if complaint observed');
        //    return false;
        //}

        //  if ($scope.Thead.ComplaintObserved == true) {
        if ($scope.Thead.Location_Id == null) {
            swal('Please Select from Location.');
            return false;
        }
        //}

        if ($scope.Thead.RCAtoBeDone == null) {
            swal('Please Select from RCA would be done.');
            return false;
                   

        }

        if ($scope.Thead.RCAtoBeDone == "OutSourced") {

            console.log($scope.Thead.RequestRCAOutType);

            if ($scope.Thead.RequestRCAOutType == null)
            {
                swal('Please Select from Location SMP / Non Paint.');
                return false;
            }

        }

        if ($scope.Thead.IsCompensationRequire == null) {
            swal('Please Select from Compensation Require.');
            return false;
        }
        if ($scope.Thead.IsComplaintValid == null) {
            swal('Please Select from Complaint Valid.');
            return false;
        }


        var data = {
            ComplaintID: $scope.Thead.Complaint_ID,
            Location: $scope.Thead.RCAtoBeDone,
            Remarks: $scope.CMRemarks,
            EmpCode: $rootScope.session.EMP_CODE,
            IsComplaint: true,

            IsComplaintValid: $scope.Thead.IsComplaintValid,
            IsCompensationRequire: $scope.Thead.IsCompensationRequire,
            RequestRCAOutType: $scope.Thead.RequestRCAOutType
        }

        console.log($scope.Thead.RequestRCAOutType);


        //CMAssignToTSE
        swal({
            title: "Are you sure?",
            text: "Complaint will be assigned for RCA",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Continue",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: true
        },
            function () {
                PendingRequestService.CHApprovalRCAPlnt(data).then(function (success) {
                    swal(success.data);
                    $scope.init();
                },
                    function (error) {
                        console.log(error);

                    });
            });

    }

    $scope.ApproveComplaintForTSERCA = function () {
        if ($scope.RCAtoBeDone == null) {
            swal('Please Select from RCA would be done.');
            return false;
        }

        var data = {
            ComplaintID: $scope.TSE.Complaint_ID,
            Location: $scope.RCAtoBeDone,
            Remarks: $scope.TSERemarks,
            EmpCode: $rootScope.session.EMP_CODE,
            IsComplaint: true

        }
        //CMAssignToTSE
        swal({
            title: "Are you sure?",
            text: "Complaint will be assigned for RCA",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Continue",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: true
        },
            function () {
                PendingRequestService.CHApprovalRCAPlnt(data).then(function (success) {
                    swal(success.data);
                    $scope.init();
                },
                    function (error) {
                        console.log(error);

                    });
            });

    }


    $scope.RejectComplaintForTSERCA = function () {
        var data = {
            ComplaintID: $scope.TSE.Complaint_ID,
            Location: $scope.RCAtoBeDone,
            Remarks: $scope.TSERemarks,
            EmpCode: $rootScope.session.EMP_CODE,
            IsComplaint: true

        }
        //CMAssignToTSE
        swal({
            title: "Are you sure?",
            text: "Complaint will be rejected",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Continue",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: true
        },
            function () {
                PendingRequestService.CHRejectRCA(data).then(function (success) {
                    swal(success.data);
                    $scope.init();
                },
                    function (error) {
                        console.log(error);

                    });
            });

    }




    $scope.PlntAssignCM = function () {

        console.log($scope.File1);


        if ($scope.Plnt.RCAComments == '' || $scope.Plnt.RCAComments == null) {
            swal('Please enter RCA Comments');
            return false;
        }
        $scope.Plnt.CreatedBy = $rootScope.session.EMP_CODE;
        $scope.Plnt.Department_ID = 6;

        console.log($scope.Plnt);
        console.log("RCAComments :", $scope.Plnt.RCAComments);
        console.log("IsRectifiable :", $scope.Plnt.IsRectifiable);
        console.log("Remarks :", $scope.Plnt.Remarks);
        console.log("IsReprocessing :", $scope.Plnt.IsReprocessing);
        console.log("ClosureComments :", $scope.Plnt.ClosureComments);


        var data = {
            Complaint_ID: $scope.Plnt.Complaint_ID,
            RCAComments: $scope.Plnt.RCAComments,
            Remarks: $scope.Plnt.RCAComments,
            EmpCode: $rootScope.session.EMP_CODE,
            Department_ID: $scope.Plnt.Department_ID,
            CreatedBy: $rootScope.session.EMP_CODE,

            IsRectifiable: $scope.Plnt.IsRectifiable,
            IsReprocessing: $scope.Plnt.IsReprocessing,
            Remarks: $scope.Plnt.Remarks,
            ClosureComments: $scope.Plnt.ClosureComments,

            IsRelated: $scope.Plnt.IsRelated,

            Description: $scope.Plnt.Description,
            ImmediateAction: $scope.Plnt.ImmediateAction,
            CorrectiveAction: $scope.Plnt.CorrectiveAction,
            PreventiveAction: $scope.Plnt.PreventiveAction

        }

        console.log(data);

        var fd = new FormData();


        fd.append('file', $scope.File1);
        fd.append('data', angular.toJson(data));


        console.log(fd);

        //CMAssignToTSE
        swal({
            title: "Are you sure?",
            text: "Complaint will be assigend to Complaint Manager?",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Continue",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: true
        }, function () {
            PendingRequestService.PlntAssignToCM(fd).then(function (success) {
                swal(success.data);
                $scope.init();
            },
                function (error) {
                    console.log(error);

                });
        });







        //if ($scope.Plnt.RCAComments == '' || $scope.Plnt.RCAComments == null) {
        //    swal('Please enter RCA Comments');
        //    return false;
        //}
        //$scope.Plnt.CreatedBy = $rootScope.session.EMP_CODE;
        //$scope.Plnt.Department_ID = 6;

        ////CMAssignToTSE
        //swal({
        //    title: "Are you sure?",
        //    text: "RCA will be assigned to Business Manager",
        //    type: "warning",
        //    showCancelButton: true,
        //    confirmButtonColor: "#DD6B55",
        //    confirmButtonText: "Continue",
        //    cancelButtonText: "Cancel",
        //    closeOnConfirm: false,
        //    closeOnCancel: true
        //},
        //    function () {
        //        PendingRequestService.PlntAssignToCM($scope.Plnt).then(function (success) {
        //            swal(success.data);
        //            $scope.init();
        //        },
        //            function (error) {
        //                console.log(error);

        //            });
        //    });

    }

    $scope.RDAssignCM = function () {

        console.log($scope.File1);


        if ($scope.RD.RCAComments == '' || $scope.RD.RCAComments == null) {
            swal('Please enter RCA Comments');
            return false;
        }
        $scope.RD.CreatedBy = $rootScope.session.EMP_CODE;
        $scope.RD.Department_ID = 8;

        console.log($scope.Plnt);
        console.log("RCAComments :", $scope.RD.RCAComments);
        console.log("IsRectifiable :", $scope.RD.IsRectifiable);
        console.log("Remarks :", $scope.RD.Remarks);
        console.log("IsReprocessing :", $scope.RD.IsReprocessing);
        console.log("ClosureComments :", $scope.RD.ClosureComments);


        var data = {
            Complaint_ID: $scope.RD.Complaint_ID,
            RCAComments: $scope.RD.RCAComments,
            Remarks: $scope.RD.RCAComments,
            EmpCode: $rootScope.session.EMP_CODE,
            Department_ID: $scope.RD.Department_ID,
            CreatedBy: $rootScope.session.EMP_CODE,

            IsRectifiable: $scope.RD.IsRectifiable,
            IsReprocessing: $scope.RD.IsReprocessing,
            Remarks: $scope.RD.Remarks,
            ClosureComments: $scope.RD.ClosureComments,

            // IsRelated: $scope.RD.IsRelated,

            Description: $scope.RD.Description,
            ImmediateAction: $scope.RD.ImmediateAction,
            CorrectiveAction: $scope.RD.CorrectiveAction,
            PreventiveAction: $scope.RD.PreventiveAction

        }

        console.log(data);

        var fd = new FormData();


        fd.append('file', $scope.File1);
        fd.append('data', angular.toJson(data));


        console.log(fd);

        //CMAssignToTSE
        swal({
            title: "Are you sure?",
            text: "Complaint will be assigend to Complaint Manager?",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Continue",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: true
        }, function () {
            PendingRequestService.RDAssignToCM(fd).then(function (success) {
                swal(success.data);
                $scope.init();
            },
                function (error) {
                    console.log(error);

                });
        });







        //if ($scope.RD.RCAComments == '' || $scope.RD.RCAComments == null) {
        //    swal('Please enter RCA Comments');
        //    return false;
        //}
        //$scope.RD.CreatedBy = $rootScope.session.EMP_CODE;
        //$scope.RD.Department_ID = 8;

        ////CMAssignToTSE
        //swal({
        //    title: "Are you sure?",
        //    text: "RCA will be assigned to Business Manager",
        //    type: "warning",
        //    showCancelButton: true,
        //    confirmButtonColor: "#DD6B55",
        //    confirmButtonText: "Continue",
        //    cancelButtonText: "Cancel",
        //    closeOnConfirm: false,
        //    closeOnCancel: true
        //},
        //    function () {
        //        PendingRequestService.RDAssignToBM($scope.RD).then(function (success) {
        //            swal(success.data);
        //            $scope.init();
        //        },
        //            function (error) {
        //                console.log(error);

        //            });
        //    });

    }

    $scope.CMCloseRequest = function () {
        var data = {
            ComplaintID: $scope.Thead.Complaint_ID,
            Location: $scope.RCAtoBeDone,
            Remarks: $scope.CMRemarks,
            EmpCode: $rootScope.session.EMP_CODE

        }
        //CMAssignToTSE
        swal({
            title: "Are you sure?",
            text: "Complaint will be Closed",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Continue",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: true
        },
            function () {
                PendingRequestService.CMCloseRequest(data).then(function (success) {
                    swal(success.data);
                    $scope.init();
                },
                    function (error) {
                        console.log(error);

                    });
            });

    }

    $scope.CMAssignRCA = function () {
        var data = {
            ComplaintID: $scope.Thead.Complaint_ID,
            Location: $scope.RCAtoBeDone,
            Remarks: '',
            EmpCode: $rootScope.session.EMP_CODE

        }
        //CMAssignToTSE
        swal({
            title: "Are you sure?",
            text: "Complaint will be Closed",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Continue",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: true
        },
            function () {
                PendingRequestService.CMCloseRequest(data).then(function (success) {
                    swal(success.data);
                    $scope.init();
                },
                    function (error) {
                        console.log(error);

                    });
            });

    }


    $scope.PlntAssignBM = function () {
        if ($scope.CM.RCAComments == '' || $scope.CM.RCAComments == null) {
            swal('Please enter RCA Comments');
            return false;
        }
        $scope.CM.CreatedBy = $rootScope.session.EMP_CODE;
       
        var obj = {
            AffectedProductUnit: $scope.CM.AffectedProductUnit,
            AffectedProductVol: $scope.CM.AffectedProductVol,
            Complaint_ID: $scope.CM.Complaint_ID,
            DateOfExpectedClosure: $scope.CM.DateOfExpectedClosure,
            IsRectifiable: $scope.CM.IsRectifiable,

            IsReprocessing: $scope.CM.IsReprocessing,
            RCAComments: $scope.CM.RCAComments,
            Remarks: $scope.CM.Remarks,
            ReprocessingComments: $scope.CM.ReprocessingComments,


            ReprocessingCost: $scope.CM.ReprocessingCost,
            ReprocessingCostCurrency: $scope.CM.ReprocessingCostCurrency,
            SiteReprocessing: $scope.CM.SiteReprocessing,
            StockSAPProductUnit: $scope.CM.StockSAPProductUnit,

            StockSAPProductVol: $scope.CM.StockSAPProductVol,
            SysValueProductUnit: $scope.CM.SysValueProductUnit,
            SysValueProductVol: $scope.CM.SysValueProductVol,
            CreatedBy: $rootScope.session.EMP_CODE,
            Department_ID: 3
            //UploadPhotoModel: $scope.file
        };

        console.log(obj);

        //CMAssignToTSE
        swal({
            title: "Are you sure?",
            text: "RCA will be assigned to Business Manager",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Continue",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: true
        },
            function () {
                PendingRequestService.PlntAssignToBM(obj).then(function (success) {
                    swal(success.data);
                    $scope.init();
                },
                    function (error) {
                        console.log(error);

                    });
            });

    }


    $scope.BMApprove = function () {
        if ($scope.CM.RemarksBM == null || $scope.CM.RemarksBM == '') {
            swal('Please enter comments');
            return false;
        }
        var data = {
            ComplaintID: $scope.CM.Complaint_ID,
            Location: '',
            Remarks: $scope.CM.RemarksBM,
            EmpCode: $rootScope.session.EMP_CODE,
            IsComplaint: false

        }
        //CMAssignToTSE
        swal({
            title: "Are you sure?",
            text: "RCA will be approved",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Continue",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: true
        }, function () {
            PendingRequestService.BMApprovePlant(data).then(function (success) {
                swal(success.data);
                $scope.init();
            },
                function (error) {
                    console.log(error);

                });
        });

    }

    $scope.BHApprove = function () {

        var data = {
            ComplaintID: $scope.CM.Complaint_ID,
            Location: '',
            Remarks: $scope.CM.Remarks,
            EmpCode: $rootScope.session.EMP_CODE,
            IsComplaint: false

        }
        //CMAssignToTSE
        swal({
            title: "Are you sure?",
            text: "RCA will be approved",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Continue",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: true
        }, function () {
            PendingRequestService.BHApprovePlant(data).then(function (success) {
                swal(success.data);
                $scope.init();
            },
                function (error) {
                    console.log(error);

                });
        });

    }




    $scope.BMReject = function () {

        var data = {
            ComplaintID: $scope.Plnt.Complaint_ID,
            Location: '',
            Remarks: $scope.Plnt.Remarks,
            EmpCode: $rootScope.session.EMP_CODE,
            IsComplaint: false

        }
        //CMAssignToTSE
        swal({
            title: "Are you sure?",
            text: "RCA will be rejected",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Continue",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: true
        }, function () {
            PendingRequestService.BMRejectPlant(data).then(function (success) {
                swal(success.data);
                $scope.init();
            },
                function (error) {
                    console.log(error);

                });
        });

    }


    $scope.BMReconsider = function () {

        var data = {
            ComplaintID: $scope.Plnt.Complaint_ID,
            Location: '',
            Remarks: $scope.Plnt.RemarksBM,
            EmpCode: $rootScope.session.EMP_CODE,
            IsComplaint: false

        }
        //CMAssignToTSE
        swal({
            title: "Are you sure?",
            text: "RCA will be assigned to Plant",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Continue",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: true
        }, function () {
            PendingRequestService.BMReconsiderPlant(data).then(function (success) {
                swal(success.data);
                $scope.init();
            },
                function (error) {
                    console.log(error);

                });
        });

    }

    $scope.BHReject = function () {

        var data = {
            ComplaintID: $scope.Plnt.Complaint_ID,
            Location: '',
            Remarks: $scope.Plnt.Remarks,
            EmpCode: $rootScope.session.EMP_CODE,
            IsComplaint: false

        }
        //CMAssignToTSE
        swal({
            title: "Are you sure?",
            text: "RCA will be rejected",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Continue",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: true
        }, function () {
            PendingRequestService.BHRejectPlant(data).then(function (success) {
                swal(success.data);
                $scope.init();
            },
                function (error) {
                    console.log(error);

                });
        });

    }

    $scope.BHReconsider = function () {


        var data = {
            ComplaintID: $scope.Plnt.Complaint_ID,
            Location: '',
            Remarks: $scope.Plnt.Remarks,
            EmpCode: $rootScope.session.EMP_CODE,
            IsComplaint: false

        }
        //CMAssignToTSE
        swal({
            title: "Are you sure?",
            text: "RCA will be assigned to Plant",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Continue",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: true
        }, function () {
            PendingRequestService.BHReconsiderPlant(data).then(function (success) {
                swal(success.data);
                $scope.init();
            },
                function (error) {
                    console.log(error);

                });
        });

    }


    $scope.BMApproveRD = function () {
        if ($scope.CM.RemarksBM == null || $scope.CM.RemarksBM == '') {
            swal('Please enter comments');
            return false;
        }
        var data = {
            ComplaintID: $scope.CM.Complaint_ID,
            Location: '',
            Remarks: $scope.CM.RemarksBM,
            EmpCode: $rootScope.session.EMP_CODE,
            IsComplaint: false

        }
        //CMAssignToTSE
        swal({
            title: "Are you sure?",
            text: "RCA will be approved",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Continue",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: true
        }, function () {
            PendingRequestService.BMApproveRD(data).then(function (success) {
                swal(success.data);
                $scope.init();
            },
                function (error) {
                    console.log(error);

                });
        });

    }

    
    $scope.BMApproveSelling = function () {
        if ($scope.CM.RemarksBM == null || $scope.CM.RemarksBM == '') {
            swal('Please enter comments');
            return false;
        }
        var data = {
            ComplaintID: $scope.CM.Complaint_ID,
            Location: '',
            Remarks: $scope.CM.RemarksBM,
            EmpCode: $rootScope.session.EMP_CODE,
            IsComplaint: false

        }
        //CMAssignToTSE
        swal({
            title: "Are you sure?",
            text: "RCA will be approved",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Continue",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: true
        }, function () {
            PendingRequestService.BMApproveSelling(data).then(function (success) {
                swal(success.data);
                $scope.init();
            },
                function (error) {
                    console.log(error);

                });
        });

    }


    $scope.BHApproveRD = function () {
        if ($scope.CM.Remarks == null || $scope.CM.Remarks == '') {
            swal('Please enter comments');
            return false;
        }
        var data = {
            ComplaintID: $scope.CM.Complaint_ID,
            Location: '',
            Remarks: $scope.CM.Remarks,
            EmpCode: $rootScope.session.EMP_CODE,
            IsComplaint: false

        }
        //CMAssignToTSE
        swal({
            title: "Are you sure?",
            text: "RCA will be approved",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Continue",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: true
        }, function () {
            PendingRequestService.BHApproveRD(data).then(function (success) {
                swal(success.data);
                $scope.init();
            },
                function (error) {
                    console.log(error);

                });
        });

    }

    $scope.BMRejectRD = function () {
        //if ($scope.RCAtoBeDone == null) {
        //    swal('Please Select from RCA would be done.');
        //    return false;
        //}

        var data = {
            ComplaintID: $scope.RD.Complaint_ID,
            Location: '',
            Remarks: $scope.RD.Remarks,
            EmpCode: $rootScope.session.EMP_CODE,
            IsComplaint: false

        }
        //CMAssignToTSE
        swal({
            title: "Are you sure?",
            text: "RCA will be rejected",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Continue",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: true
        }, function () {
            PendingRequestService.BMRejectRD(data).then(function (success) {
                swal(success.data);
                $scope.init();
            },
                function (error) {
                    console.log(error);

                });
        });

    }


    $scope.BMReconsiderRD = function () {
        //if ($scope.RCAtoBeDone == null) {
        //    swal('Please Select from RCA would be done.');
        //    return false;
        //}

        var data = {
            ComplaintID: $scope.RD.Complaint_ID,
            Location: '',
            Remarks: $scope.RD.Remarks,
            EmpCode: $rootScope.session.EMP_CODE,
            IsComplaint: false

        }
        //CMAssignToTSE
        swal({
            title: "Are you sure?",
            text: "RCA will be assigned to Complaint Manager",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Continue",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: true
        }, function () {
            PendingRequestService.BMReconsiderRD(data).then(function (success) {
                swal(success.data);
                $scope.init();
            },
                function (error) {
                    console.log(error);

                });
        });

    }

    $scope.BHRejectRD = function () {
        if ($scope.RCAtoBeDone == null) {
            swal('Please Select from RCA would be done.');
            return false;
        }

        var data = {
            ComplaintID: $scope.RD.Complaint_ID,
            Location: '',
            Remarks: $scope.RD.Remarks,
            EmpCode: $rootScope.session.EMP_CODE,
            IsComplaint: false

        }
        //CMAssignToTSE
        swal({
            title: "Are you sure?",
            text: "RCA will be rejected",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Continue",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: true
        }, function () {
            PendingRequestService.BHRejectRD(data).then(function (success) {
                swal(success.data);
                $scope.init();
            },
                function (error) {
                    console.log(error);

                });
        });

    }

    
    $scope.BMReconsiderQuartine = function () {
        if ($scope.RCAtoBeDone == null) {
            swal('Please Select from RCA would be done.');
            return false;
        }

        console.log($scope.CM);

        var data = {
            ComplaintID: $scope.CM.Complaint_Id,
            Location: '',
            Remarks: $scope.CM.Remarks,
            EmpCode: $rootScope.session.EMP_CODE,
            IsComplaint: false

        }


        console.log(data);
        //CMAssignToTSE
        swal({
            title: "Are you sure?",
            text: "RCA will be assigned Complaint Manager",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Continue",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: true
        }, function () {
            PendingRequestService.BMReconsiderQuartine(data).then(function (success) {
                swal(success.data);
                $scope.init();
            },
                function (error) {
                    console.log(error);

                });
        });

    }
    

    $scope.BMReconsiderSelling = function () {
        //if ($scope.RCAtoBeDone == null) {
        //    swal('Please Select from RCA would be done.');
        //    return false;
        //}

        console.log($scope.CM);

        var data = {
            ComplaintID: $scope.CM.Complaint_ID,
            Location: '',
            Remarks: $scope.CM.RemarksBM,
            EmpCode: $rootScope.session.EMP_CODE,
            IsComplaint: false

        }


        console.log(data);
        //CMAssignToTSE
        swal({
            title: "Are you sure?",
            text: "RCA will be Complaint Manager",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Continue",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: true
        }, function () {
            PendingRequestService.BMReconsiderSelling(data).then(function (success) {
                swal(success.data);
                $scope.init();
            },
                function (error) {
                    console.log(error);

                });
        });

    }


    $scope.BHReconsiderRD = function () {


        var data = {
            ComplaintID: $scope.RD.Complaint_ID,
            Location: '',
            Remarks: $scope.RD.Remarks,
            EmpCode: $rootScope.session.EMP_CODE,
            IsComplaint: false

        }
        //CMAssignToTSE
        swal({
            title: "Are you sure?",
            text: "RCA will be assigned to R&D",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Continue",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: true
        }, function () {
            PendingRequestService.BHReconsiderRD(data).then(function (success) {
                swal(success.data);
                $scope.init();
            },
                function (error) {
                    console.log(error);

                });
        });

    }

    //----------------PRASHANT----------//

    $scope.Quartine = function () {

        console.log($scope.File1);


        if ($scope.RD.RCAComments == '' || $scope.RD.RCAComments == null) {
            swal('Please enter RCA Comments');
            return false;
        }
        $scope.RD.CreatedBy = $rootScope.session.EMP_CODE;
        $scope.RD.Department_ID = 8;

        var data = {
            Complaint_ID: $scope.RD.Complaint_ID,
            RCAComments: $scope.RD.RCAComments,
            Remarks: $scope.RD.RCAComments,
            EmpCode: $rootScope.session.EMP_CODE,
            Department_ID: $scope.RD.Department_ID,
            CreatedBy: $rootScope.session.EMP_CODE,

            IsRectifiable: $scope.RD.IsRectifiable,
            IsReprocessing: $scope.RD.IsReprocessing,
            Remarks: $scope.RD.Remarks,
            ClosureComments: $scope.RD.ClosureComments,

            Description: $scope.RD.Description,
            ImmediateAction: $scope.RD.ImmediateAction,
            CorrectiveAction: $scope.RD.CorrectiveAction,
            PreventiveAction: $scope.RD.PreventiveAction,
            IsComplaint: false
        }





        console.log(data);

        var fd = new FormData();


        fd.append('file', $scope.File1);
        fd.append('data', angular.toJson(data));


        console.log(fd);

        //CMAssignToTSE
        swal({
            title: "Are you sure?",
            text: "Quarantine process will be initiated",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Continue",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: true
        }, function () {
            PendingRequestService.InitiateQuartine(fd).then(function (success) {
                swal(success.data);
                $scope.init();
            },
                function (error) {
                    console.log(error);

                });
        });






        //$scope.RD.CreatedBy = $rootScope.session.EMP_CODE;
        //$scope.RD.Department_ID = 8;

        ////var data = {
        ////    ComplaintID: $scope.RD.Complaint_ID,
        ////    Location: '',
        ////    Remarks: $scope.Remarks,
        ////    EmpCode: $rootScope.session.EMP_CODE,
        ////    IsComplaint: false

        ////}


        //var obj = {
        //    Complaint_ID: $scope.RD.Complaint_ID,
        //    Location: '',
        //    ClosureComments: $scope.RD.ClosureComments,

        //    CreatedBy: $rootScope.session.EMP_CODE,
        //    Department_ID: 8,
        //    IsRectifiable: $scope.RD.IsRectifiable,
        //    IsReprocessing: $scope.RD.IsReprocessing,

        //    RCAComments: $scope.RD.RCAComments,
        //    Remarks: $scope.RD.Remarks,

        //    EmpCode: $rootScope.session.EMP_CODE,
        //    IsComplaint: false

        //}


        //console.log("RD", $scope.RD);

        //console.log(obj);


        ////CMAssignToTSE
        //swal({
        //    title: "Are you sure?",
        //    text: "Quarantine process will be initiated",
        //    type: "warning",
        //    showCancelButton: true,
        //    confirmButtonColor: "#DD6B55",
        //    confirmButtonText: "Continue",
        //    cancelButtonText: "Cancel",
        //    closeOnConfirm: false,
        //    closeOnCancel: true
        //}, function () {
        //    PendingRequestService.InitiateQuartine(obj).then(function (success) {
        //        swal(success.data);
        //        $scope.init();
        //    },
        //        function (error) {
        //            console.log(error);

        //        });
        //});

    }

    $scope.CMQuartineSubmit = function () {

        $scope.CM.CreatedBy = $rootScope.session.EMP_CODE;
        if ($scope.CM.StockSAPProductVol == '' || $scope.CM.StockSAPProductVol == null) {
            swal('Please enter stock from SAP system');
            return false;
        }

        if ($scope.CM.StockSAPProductUnit == '' || $scope.CM.StockSAPProductUnit == null) {
            swal('Please enter stock unit from SAP system');
            return false;
        }
        if ($scope.CM.SysValueProductVol == '' || $scope.CM.SysValueProductVol == null) {
            swal('Please enter system value');
            return false;
        }

        if ($scope.CM.SysValueProductUnit == '' || $scope.CM.SysValueProductUnit == null) {
            swal('Please enter system valune unit');
            return false;
        }
        if ($scope.CM.AffectedBatchNumbers == '' || $scope.CM.AffectedBatchNumbers == null) {
            swal('Please enter affected batch numbers');
            return false;
        }
        if ($scope.CM.ExpectedCostOfQuartine == '' || $scope.CM.ExpectedCostOfQuartine == null) {
            swal('Please enter expected cost of qurantine');
            return false;
        }
        if ($scope.CM.ExpectedCostOfQuartineCurr == '' || $scope.CM.ExpectedCostOfQuartineCurr == null) {
            swal('Please enter currency for expected cost of qurantine');
            return false;
        }
        if ($scope.CM.DateOfExpectedClosure == '' || $scope.CM.DateOfExpectedClosure == null) {
            swal('Please enter expected date of clousure');
            return false;
        }
        //CMAssignToTSEif
        swal({
            title: "Are you sure?",
            text: "You want to submit Quarantine Details?",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Continue",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: true
        }, function () {
            PendingRequestService.CMSubmitQurantine($scope.CM).then(function (success) {
                swal(success.data);
                $scope.init();
            },
                function (error) {
                    console.log(error);

                });
        });

    }

    $scope.CMReprocessingSubmit = function () {

        $scope.CM.CreatedBy = $rootScope.session.EMP_CODE;

        $scope.CM.Department_ID = 3;


        if ($scope.CM.ReprocessingComments == '' || $scope.CM.ReprocessingComments == null) {
            swal('Please enter Reprocessing Comments');
            return false;
        }

        if ($scope.CM.ClosureComments == '' || $scope.CM.ClosureComments == null) {
            swal('Please enter Closure Comments');
            return false;
        }
        if ($scope.CM.AffectedProductVol == '' || $scope.CM.AffectedProductVol == null) {
            swal('Please enter Affected Product Vol');
            return false;
        }

        if ($scope.CM.AffectedProductUnit == '' || $scope.CM.AffectedProductUnit == null) {
            swal('Please enter Affected Product Unit');
            return false;
        }
        if ($scope.CM.StockSAPProductVol == '' || $scope.CM.StockSAPProductVol == null) {
            swal('Please enter Stock SAP Product Vol');
            return false;
        }
        if ($scope.CM.StockSAPProductUnit == '' || $scope.CM.StockSAPProductUnit == null) {
            swal('Please enter Stock SAP Product Unit');
            return false;
        }
        if ($scope.CM.SysValueProductVol == '' || $scope.CM.SysValueProductVol == null) {
            swal('Please enter Sys Value Product Vol');
            return false;
        }
        if ($scope.CM.SysValueProductUnit == '' || $scope.CM.SysValueProductUnit == null) {
            swal('Please enter Sys Value Product Unit');
            return false;

        }



        if ($scope.CM.SiteReprocessing == '' || $scope.CM.SiteReprocessing == null) {
            swal('Please enter Site Reprocessing');
            return false;
        }
        if ($scope.CM.ReprocessingCost == '' || $scope.CM.ReprocessingCost == null) {
            swal('Please enter currency for Reprocessing Cost');
            return false;
        }
        if ($scope.CM.ReprocessingCostCurrency == '' || $scope.CM.ReprocessingCostCurrency == null) {
            swal('Please enter Reprocessing Cost Currency');
            return false;
        }

        if ($scope.CM.DateOfExpectedClosure == '' || $scope.CM.DateOfExpectedClosure == null) {
            swal('Please enter expected date of clousure');
            return false;
        }


        console.log("CM ",$scope.CM);


        //CMAssignToTSEif
        swal({
            title: "Are you sure?",
            text: "You want to submit Reprocessint Details?",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Continue",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: true
        }, function () {
            PendingRequestService.CMReprocessingSubmit($scope.CM).then(function (success) {
                swal(success.data);
                $scope.init();
            },
                function (error) {
                    console.log(error);

                });
        });

    }

    $scope.CMSellingSubmit = function () {

        $scope.CM.CreatedBy = $rootScope.session.EMP_CODE;

        $scope.CM.Department_ID = 3;
        

        console.log("CM ", $scope.CM);


        //CMAssignToTSEif
        swal({
            title: "Are you sure?",
            text: "You want to submit Selling Details?",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Continue",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: true
        }, function () {
            PendingRequestService.CMSellingSubmit($scope.CM).then(function (success) {
                swal(success.data);
                $scope.init();
            },
                function (error) {
                    console.log(error);

                });
        });

    }


    $scope.CMClosingComplaintSubmit = function()
    {
        $scope.CM.CreatedBy = $rootScope.session.EMP_CODE;

        $scope.CM.Department_ID = 3;


        console.log("CM ", $scope.CM);


        //CMAssignToTSEif
        swal({
            title: "Are you sure?",
            text: "You want to Close RCA?",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Continue",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: true
        }, function () {
            PendingRequestService.CMClosingComplaintSubmit($scope.CM).then(function (success) {
                swal(success.data);
                $scope.init();
            },
                function (error) {
                    console.log(error);

                });
        });

    }

    
     //----------------PRASHANT----------//


    $scope.BMApprovesQuartine = function () {
        if ($scope.CM.Remarks == null) {
            swal('Please enter remarks.');
            return false;
        }

        var data = {
            ComplaintID: $scope.CM.Complaint_Id,
            Location: '',
            Remarks: $scope.CM.Remarks,
            EmpCode: $rootScope.session.EMP_CODE,
            IsComplaint: false

        }

        console.log(data);

        //CMAssignToTSE
        swal({
            title: "Are you sure?",
            text: "Quarantine will be approved.",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Continue",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: true
        }, function () {
            PendingRequestService.BMApproveQurantine(data).then(function (success) {
                swal(success.data);
                $scope.init();
            },
                function (error) {
                    console.log(error);

                });
        });

    }

    $scope.BMRejectsQuartine = function () {
        if ($scope.CM.Remarks == null) {
            swal('Please enter remarks.');
            return false;
        }

        var data = {
            ComplaintID: $scope.CM.Complaint_ID,
            Location: '',
            Remarks: $scope.CM.Remarks,
            EmpCode: $rootScope.session.EMP_CODE,
            IsComplaint: false

        }
        //CMAssignToTSE
        swal({
            title: "Are you sure?",
            text: "Quarantine will be rejected.",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Continue",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: true
        }, function () {
            PendingRequestService.BMRejectQurantine(data).then(function (success) {
                swal(success.data);
                $scope.init();
            },
                function (error) {
                    console.log(error);

                });
        });

    }


    $scope.PlntQurantineReceipt = function () {

        $scope.CM.CreatedBy = $rootScope.session.EMP_CODE;
        if ($scope.CM.StockReceived == '' || $scope.CM.StockReceived == null) {
            swal('Please confirm whether stock has been received');
            return false;
        }
        if ($scope.CM.DisposalComplete == '' || $scope.CM.DisposalComplete == null) {
            swal('Please confirm whether disposal is complete');
            return false;
        }

        //CMAssignToTSEif
        swal({
            title: "Are you sure?",
            text: "You want to complete disposal?",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Continue",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: true
        }, function () {
            PendingRequestService.QurantineReceipt($scope.CM).then(function (success) {
                swal(success.data);
                $scope.init();
            },
                function (error) {
                    console.log(error);

                });
        });

    }

    $scope.StockReceived = function () {

        if ($scope.Recv.StockReceived == false) {
            swal('Please Receive stock to continue');
            return false;
        }

        if ($scope.Recv.ReproccessingComplete == false) {
            swal('Please confirm whether is complete');
            return false;
        }

        if ($scope.Recv.BatchNumber == '' || $scope.Recv.BatchNumber == null) {
            swal('Please enter batch number');
            return false;
        }

        $scope.Recv.Complaint_Id = $scope.Plnt.Complaint_ID;
        $scope.Recv.CreatedBy = $rootScope.session.EMP_CODE;

        //CMAssignToTSE
        swal({
            title: "Are you sure?",
            text: "Initiate Stock receipt",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Continue",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: true
        }, function () {
            PendingRequestService.PlantStockReceipt($scope.Recv).then(function (success) {
                swal(success.data);
                $scope.init();
            },
                function (error) {
                    console.log(error);

                });
        });

    }

    $scope.StockReceivedRD = function () {

        if ($scope.RecvRD.StockReceived == false) {
            swal('Please Receive stock to continue');
            return false;
        }

        if ($scope.RecvRD.ReproccessingComplete == false) {
            swal('Please confirm whether is complete');
            return false;
        }

        if ($scope.RecvRD.BatchNumber == '' || $scope.RecvRD.BatchNumber == null) {
            swal('Please enter batch number');
            return false;
        }

        $scope.RecvRD.Complaint_Id = $scope.RD.Complaint_ID;
        $scope.RecvRD.CreatedBy = $rootScope.session.EMP_CODE;

        //CMAssignToTSE
        swal({
            title: "Are you sure?",
            text: "Initiate Stock receipt?",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Continue",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: true
        }, function () {
            PendingRequestService.PlantStockReceipt($scope.RecvRD).then(function (success) {
                swal(success.data);
                $scope.init();
            },
                function (error) {
                    console.log(error);

                });

        });

    }

    $scope.PlntAssignRD = function () {



        console.log($scope.File1);


        if ($scope.Plnt.RCAComments == '' || $scope.Plnt.RCAComments == null) {
            swal('Please enter RCA Comments');
            return false;
        }
        $scope.Plnt.CreatedBy = $rootScope.session.EMP_CODE;
        $scope.Plnt.Department_ID = 6;

        console.log($scope.Plnt);
        console.log("RCAComments :",$scope.Plnt.RCAComments);
        console.log("IsRectifiable :",$scope.Plnt.IsRectifiable);
        console.log("Remarks :",$scope.Plnt.Remarks);
        console.log("IsReprocessing :",$scope.Plnt.IsReprocessing);
        console.log("ClosureComments :",$scope.Plnt.ClosureComments);


        var data = {
            Complaint_ID: $scope.Plnt.Complaint_ID,
            RCAComments: $scope.Plnt.RCAComments,
            Remarks: $scope.Plnt.RCAComments,
            EmpCode: $rootScope.session.EMP_CODE,
            Department_ID: $scope.Plnt.Department_ID,
            CreatedBy: $rootScope.session.EMP_CODE,

            IsRectifiable: $scope.Plnt.IsRectifiable,
            IsReprocessing: $scope.Plnt.IsReprocessing,
            Remarks: $scope.Plnt.Remarks,
            ClosureComments: $scope.Plnt.ClosureComments,

            IsRelated:$scope.Plnt.IsRelated,

            Description: $scope.Plnt.Description,          
            ImmediateAction: $scope.Plnt.ImmediateAction,
            CorrectiveAction: $scope.Plnt.CorrectiveAction,
            PreventiveAction: $scope.Plnt.PreventiveAction

        }

        console.log(data);

        var fd = new FormData();


        fd.append('file', $scope.File1);
        fd.append('data', angular.toJson(data));


        console.log(fd);

        //CMAssignToTSE
        swal({
            title: "Are you sure?",
            text: "Complaint will be assigend to R&D?",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Continue",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: true
        }, function () {
            PendingRequestService.PlntAssignToRD(fd).then(function (success) {
                swal(success.data);
                $scope.init();
            },
                function (error) {
                    console.log(error);

                });
        });


    }


    

    $scope.SMPComplaintManager = function () {

        console.log($scope.SMP); 
        $scope.SMP.Department_ID = 10;


        console.log($scope.SMP.IsValidate);
        console.log($scope.SMP.Isconfirmed);

        if (!$scope.SMP.IsValidate) {
            console.log($scope.SMP.IsValidate == false);
            if ($scope.SMP.IsValidate == false)
            { }

            else {
                swal('Please select RCA IsValidate');
                return false;
            }
        }


        if (!$scope.SMP.Isconfirmed) {
            console.log($scope.SMP.Isconfirmed == false);
            if ($scope.SMP.Isconfirmed == false)
            { }

            else {
                swal('Please select RCA Isconfirmed');
                return false;
            }
        }


        //if ($scope.SMP.Isconfirmed == '' || $scope.SMP.Isconfirmed == null) {
        //    swal('Please select RCA Isconfirmed');
        //    return false;
        //}


        var data = {
            Complaint_ID: $scope.SMP.Complaint_Id,
            Isconfirmed: $scope.SMP.Isconfirmed,
            IsValidate: $scope.SMP.IsValidate,
            Reason: $scope.SMP.Reason,
            CreatedBy: $rootScope.session.EMP_CODE,
            Department_ID: $scope.SMP.Department_ID,
            CreatedBy: $rootScope.session.EMP_CODE,
            Remarks: $scope.SMP.Remarks
        }

        console.log("SMP OBJECT", data);

        var fd = new FormData();


        fd.append('file', $scope.File1);
        fd.append('data', angular.toJson(data));


        //console.log(fd);

        //CMAssignToTSE
        swal({
            title: "Are you sure?",
            text: "Complaint will be assigend to Complaint Manager?",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Continue",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: true
        }, function () {
            PendingRequestService.SMPComplaintManager(fd).then(function (success) {
                swal(success.data);
                $scope.init();
            },
                function (error) {
                    console.log(error);

                });
        });


    };



    $scope.NonPaintComplaintManager = function () {

        console.log($scope.SMP);
        $scope.SMP.Department_ID = 11;


        if (!$scope.SMP.IsValidate) {
            console.log($scope.SMP.IsValidate == false);
            if ($scope.SMP.IsValidate == false)
            { }

            else {
                swal('Please select RCA IsValidate');
                return false;
            }
        }


        if (!$scope.SMP.Isconfirmed) {
            console.log($scope.SMP.Isconfirmed == false);
            if ($scope.SMP.Isconfirmed == false)
            { }

            else {
                swal('Please select RCA Isconfirmed');
                return false;
            }
        }







        //if ($scope.SMP.IsValidate == '' || $scope.SMP.IsValidate == null) {
        //    swal('Please select RCA IsValidate');
        //    return false;
        //}


        //if ($scope.SMP.Isconfirmed == '' || $scope.SMP.Isconfirmed == null) {
        //    swal('Please select RCA Isconfirmed');
        //    return false;
        //}


        var data = {
            Complaint_ID: $scope.SMP.Complaint_Id,
            Isconfirmed: $scope.SMP.Isconfirmed,
            IsValidate: $scope.SMP.IsValidate,
            Reason: $scope.SMP.Reason,
            CreatedBy: $rootScope.session.EMP_CODE,
            Department_ID: $scope.SMP.Department_ID,
            CreatedBy: $rootScope.session.EMP_CODE,
            Remarks: $scope.SMP.Remarks
        }

        console.log("SMP OBJECT", data);

        var fd = new FormData();


        fd.append('file', $scope.File1);
        fd.append('data', angular.toJson(data));


        //console.log(fd);

        //CMAssignToTSE
        swal({
            title: "Are you sure?",
            text: "Complaint will be assigend to Complaint Manager?",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Continue",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: true
        }, function () {
            PendingRequestService.SMPComplaintManager(fd).then(function (success) {
                swal(success.data);
                $scope.init();
            },
                function (error) {
                    console.log(error);

                });
        });


    }







    //Reconsider to user by complaintHandler
    $scope.Reconsider = function () {
        var obj = {
            AssignTo:$scope.Request.CreatedBy ,
            ModifiedBy: $rootScope.session.EMP_CODE,
            Complaint_ID: $scope.Complaint_Id,
            Remarks: $scope.CHRemarks,
            ComplaintNumber: $scope.ComplaintNumber,
            RoleID: $rootScope.session.Role,
        };
        console.log("obj", obj);
        swal({
            title: "Are you sure?",
            text: "you are going to Reconsider request",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Submit",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: true
        },
            function (isConfirm) {
                if (isConfirm) {

                    PendingRequestService.Reconsider(obj).then(function (success) {
                        swal("success", "Assigned to user", "success");
                        $scope.init();
                    },
                        function (error) {
                            console.log(error);

                        }); 
                }

            });
        ///////
    }



    //Reconsider to user by complaint Manger
    $scope.ReconsiderCM = function () {
        var obj = {
            AssignTo: $scope.Request.CreatedBy,
            ModifiedBy: $rootScope.session.EMP_CODE,
            Complaint_ID: $scope.Complaint_Id,
            Remarks: $scope.CMRemarks,
            ComplaintNumber: $scope.ComplaintNumber,
            RoleID: $rootScope.session.Role,
        };
        console.log("obj", obj);
        swal({
            title: "Are you sure?",
            text: "you are going to Reconsider request",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Submit",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: true
        },
            function (isConfirm) {
                if (isConfirm) {

                    PendingRequestService.ReconsiderCM(obj).then(function (success) {
                        swal("success", "Assigned to user", "success");
                        $scope.init();
                    },
                        function (error) {
                            console.log(error);

                        });
                }

            });
        ///////
    }

    //$scope.OutGrid = function ()
    //{
    //    $scope.viewSMP=true;
    //}

    
    $scope.init();


});

app.controller('ModalInstanceCtrl_StatusPending', function ($scope, $uibModalInstance, PendingRequestService, $q) {
    $scope.PendingStatusData = {};
    $scope.grid = {};
    $scope.initStatus = function () {
        PendingRequestService.GetStatusDetails(PendingRequestService.ComplaintID).then(function (success) {
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