var app = angular.module('ReSubmissionUserModule', []);

app.service('ReSubmissionUserService', function ($http) {
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
    //this.ReSubmitRequest = function (obj) {

     //   return $http.post('/api/RequestCreation/ReSubmitRequest', obj);
    //};
    this.ReSubmitRequest = function (fd) {

        return $http.post("/api/RequestCreation/ReSubmitRequest", fd, {
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }

        });
    };
    this.DeletePhoto = function (Id) {

        return $http.get('/api/RequestCreation/DeletePhoto?ComplaintPhoto_Id=' + Id);
    };

});

app.controller('ReSubmissionUserController', function ($scope, $http, $location, $rootScope,HomeService,ReSubmissionUserService, $uibModal, $q, $filter) {
    console.log("HomeService",HomeService.ReqIds);
    $scope.PhotoURL = [];
    $scope.S1 = true;
    $scope.S2 = false;
    $scope.S3 = false;
    $scope.S4 = false;
    $scope.S5 = false;
    $scope.infiniteScroll = {};
    $scope.infiniteScroll.numToAdd = 20;
    $scope.infiniteScroll.currentItems = 20;
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
    $scope.file = [
        img1 = null,
        img2 = null,
        img3 = null,
        img4 = null
    ];

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
    $rootScope.ComplaintId;
    $rootScope.ComplaintNumber;
    $scope.init = function () {
        $scope.S1 = true;
        $scope.ShowGrid = true;
        $scope.ShowDetails = false;
        $scope.GetPendingRequest($rootScope.session.EMP_CODE);
        $scope.DealerDetails();
    };

    $scope.DealerDetails = function () {
        ReSubmissionUserService.DealerDetails().then(function (success) {
            console.log("inside GetComplaintCategory");
            $scope.DealerDetails = success.data;
            console.log($scope.DealerDetails);
            $scope.GetProductId();
            //return ReSubmissionUserService.GetSubstrateId();
        },
            function (error) {
                console.log(error);
            });


    };
    $scope.GetProductId = function () {
        //get product ID
        ReSubmissionUserService.GetProductId().then(function (success) {
            console.log("inside ProductMaster");
            $scope.ProductMaster = success.data;
            console.log("inside ProductMaster", $scope.ProductMaster);
            $scope.GetSubstrateId();
        },
            function (error) {
                console.log(error);
            });



    };
    $scope.GetSubstrateId = function () {
        //get substrate id
        ReSubmissionUserService.GetSubstrateId().then(function (success) {
            console.log("inside GetComplaintCategory");
            $scope.SubstrateMaster = success.data;
            console.log($scope.SubstrateMaster);
            $scope.GetComplaintCategory();

        },
            function (error) {
                console.log(error);
            });


    };
    $scope.GetComplaintCategory = function () {
        //GetComplaintCategory
        ReSubmissionUserService.GetComplaintCategory().then(function (success) {
            console.log("inside GetComplaintCategory");
            $scope.ComplaintCategory = success.data;
            console.log($scope.ComplaintCategory);
            $scope.MainArray = angular.copy($scope.ComplaintCategory);
            console.log($scope.MainArray);
            //obj.ComplaintLst.push(success.data)
            $scope.GetComplaintDetails(HomeService.ReqIds.Cpmplaint_Id, HomeService.ReqIds.ComplaintNumber);
        },
            function (error) {
                console.log(error);
            });


    };

    $scope.GetCurrentWindow = function (curr) {
        if (curr == 'S1') {
            $scope.S1 = true;

        }

    }

    $scope.GetPendingRequest = function (EmpCode) {
        ReSubmissionUserService.GetPendingRequestForApproval(EmpCode).then(function (success) {

            $scope.PendingRequest = success.data;
            console.log($scope.DealerDetails);
        },
            function (error) {
                console.log(error);
            });

    };

    $scope.GetTSE = function () {
        ReSubmissionUserService.GetTSEList().then(function (success) {

            $scope.TSEList = success.data;
            console.log($scope.TSEList);
        },
            function (error) {
                console.log(error);
            });

    };
    $scope.EditForm = false;
    $scope.GetComplaintDetails = function (ComplaintId, ComplaintNumber) {
        ReSubmissionUserService.GetComplaintDetails(ComplaintId).then(function (success) {

            $scope.ShowGrid = false;
            $scope.ShowDetails = true;
            $scope.ComplaintDtl = success.data;
            console.log("ComplaintDtl",$scope.ComplaintDtl);

            $scope.Request.DealerID = $scope.ComplaintDtl.CustomerComplaint.Dealer_ID;
            $scope.Thead.Complaint_ID = $rootScope.ComplaintId;
            $scope.Plnt.Complaint_ID = $rootScope.ComplaintId;
            //$scope.RD.Complaint_ID = ComplaintId;
            //$scope.CM.Complaint_Id = ComplaintId;
            $scope.DealerName();
            //angular.forEach($scope.DealerDetails, function (value, key) {
            //    if (value.DealerID == $scope.Request.DealerID) {
            //        $scope.Request.DealerName = value.DealerName;
            //        $scope.Request.SalesOffice = value.DepotName;
            //    }

            //});
            $scope.Request.CustomerName = $scope.ComplaintDtl.CustomerComplaint.CustomerName;
            $scope.Request.CustomerNo = $scope.ComplaintDtl.CustomerComplaint.CustomerPhone;
            $scope.Request.CustomerAddress = $scope.ComplaintDtl.CustomerComplaint.CustomerAddress;
            $scope.Request.CustomerEmail = $scope.ComplaintDtl.CustomerComplaint.CustomerEmail;
            $scope.Request.CustomerAccountName = $scope.ComplaintDtl.CustomerComplaint.CustomerAccountName;
            $scope.Request.DateOfvehicleRepair = $filter('date')(new Date($scope.ComplaintDtl.CustomerComplaint.DateOfVehicleRepair), 'MM/dd/yyyy');
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
                $scope.SubstrateRelated = $scope.ComplaintDtl.SystemInformation[0].SubstrateRelated
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

        },
            function (error) {
                console.log(error);
            });
    }

  

    $scope.BrandName = function () {
        angular.forEach($scope.ProductMaster, function (value, key) {
            
            if (value.Product_ID == $scope.Complaint.ProductCode) {

                $scope.Complaint.BrandID = value.Brand_ID;
                $scope.SelectedProductCode = value.ProductCode;
            }

        });

        ReSubmissionUserService.GetBrandName($scope.Complaint.BrandID).then(function (success) {

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
        ReSubmissionUserService.GetBatchAndMfg($scope.Complaint.ProductCode).then(function (success) {
            $scope.Batch = success.data;
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
                $scope.Complaint.ManuFactureDate = $filter('date')(new Date($scope.Batch[i].ManufactureDate), 'MM/dd/yyyy');
                $scope.Complaint.ShelfLife = $filter('date')(new Date($scope.Batch[i].ShelfLifeDate), 'MM/dd/yyyy');
            }
        }
    }
    //GetComplaintList
    $scope.GetComplaintList = function (obj) {
        var deferred = $q.defer();
        console.log(obj.ComplaintCategory_ID);
        ReSubmissionUserService.GetComplaintList(obj.ComplaintCategory_ID).then(function (success) {
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
        console.log("DealerDetails", $scope.DealerDetails);
        angular.forEach($scope.DealerDetails, function (value, key) {
            if (value.DealerID == $scope.Request.DealerID) {
                $scope.Request.DealerName = value.DealerName;
                $scope.Request.SalesOffice = value.DepotName;
                $scope.SelectedDealerCode = value.DealerCode;
            }

        });

    }
    $scope.SelectCheckComplaints = function (obj, Id) {
        console.log(Id);
        var Idx = obj.SelectedComplaintsArray.indexOf(Id);
        if (Idx < 0) {
            obj.SelectedComplaintsArray.push(Id);
        } else {
            obj.SelectedComplaintsArray.splice(Idx, 1);
        }
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
    //$scope.ReSubmitRequest = function () {


    //    var obj = {
    //        Dealer_ID: $scope.Request.DealerID,
    //        CustomerName: $scope.Request.CustomerName,
    //        CustomerPhone: $scope.Request.CustomerNo,
    //        CustomerAddress: $scope.Request.CustomerAddress,
    //        CustomerEmail: $scope.Request.CustomerEmail,
    //        CustomerAccountName: $scope.Request.CustomerAccountName,
    //        DateOfVehicleRepair: $scope.Request.DateOfvehicleRepair,
    //        ComplaintQty: $scope.Complaint.Quantity,
    //        ComplaintDesc: $scope.ProblemDescription,
    //        ProductCode: $scope.Complaint.ProductCode,
    //        CreatedBy: $scope.Request.CreatedBy,
    //        BatchNumber: $scope.Complaint.BatchNumber,
    //        BatchNumber1: $scope.Complaint.BatchNumber1,
    //        QtyOfComplaintStock: $scope.Complaint.QtyOfComplaintStock,
    //        EvidenceAvailable: $scope.Complaint.EvidenceAvailable,
    //        VerifiedInSameBatch: $scope.Complaint.VerifiedInSameBatch,
    //        IsSelf: $scope.Complaint.IsSelf,
    //        AvailableForFutureEvidence: $scope.Complaint.AvailableForFutureEvidence,
    //        SufficientEvidence: $scope.Complaint.SufficientEvidence,
    //        RemarksForQuetsionaire: $scope.Complaint.RemarksForQuetsionaire,
    //        Tempreature: $scope.Tempreature,
    //        Humidity: $scope.Humidity,
    //        ManuFactureDate: $scope.Complaint.ManuFactureDate,
    //        ShelfLife: $scope.Complaint.ShelfLife,
    //        ComplaintId: $scope.ComplaintId,
    //        ComplaintNumber: $scope.ComplaintNumber

    //    };
    //    console.log("obj", obj);
    //    ReSubmissionUserService.ReSubmitRequest(obj).then(function (success) {

    //        window.location.reload();
    //        swal("success", "Resubmission Successful!", "success");
    //    },
    //        function (error) {
    //            console.log(error);

    //        });

    //}
    $scope.DeletePhoto = function (item) {
        //console.log("photo", item);

        item.IsDeleted = true;
        //console.log("photo", item);
        ReSubmissionUserService.DeletePhoto(item.ComplaintPhoto_ID).then(function (success) {
            console.log("Delete photo");

           
        },
            function (error) {
                console.log(error);
                
            });



    }


    $scope.ReSubmitRequest = function () {


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
                Hardener: '',
                Ratio1: '',
                Ratio2: '',
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

        var Undercoat = {
            Complaint_ID: '',
            Substrate_ID: $scope.Substrate,
            CoatType_ID: '',
            ApplicationType: 'Undercoat',
            ApplicationTypeValue: 'Primer',
            Value3: $scope.Undercoat.UndercoatSelect,
            Value4: $scope.Undercoat.UndercoatSelectChildInput,
            Value5: $scope.Undercoat.Ratio1,
            Value6: $scope.Undercoat.Ratio2,
            Value7: $scope.Undercoat.Hardener,
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
            Value4: $scope.Basecoat.Hardener,
            Value5: $scope.Basecoat.Ratio1,
            Value6: $scope.Basecoat.Ratio2,
            Value7: '',
            Value8: ''
        };

        var Clearcoat = {
            Complaint_ID: '',
            Substrate_ID: $scope.Substrate,
            CoatType_ID: '',
            ApplicationType: 'Clearcoat',
            ApplicationTypeValue: $scope.Clearcoat.ClearcoatSelect,
            Value3: $scope.Clearcoat.Clear,
            Value4: $scope.Clearcoat.ClearcoatSelectNoOfCost,
            Value5: $scope.Clearcoat.Hardener,
            Value6: $scope.Clearcoat.Ratio1,
            Value7: $scope.Clearcoat.Ratio2,
            Value8: ''
        };

        var Thinner = {
            Complaint_ID: '',
            Substrate_ID: $scope.Substrate,
            CoatType_ID: '',
            ApplicationType: 'Thinner',
            ApplicationTypeValue: $scope.Thinner.ThinnerSelect,
            Value3: $scope.Thinner.ThinnerSelectChildInput,
            Value4: $scope.Thinner.MixingRatio1,
            Value5: $scope.Thinner.MixingRatio2,
            Value6: '',
            Value7: '',
            Value8: ''
        };
        var SystemInfoData = [Undercoat, Underbody, Basecoat, Clearcoat, Thinner];

        var obj = {
            Dealer_ID: $scope.Request.DealerID,
            CustomerName: $scope.Request.CustomerName,
            CustomerPhone: $scope.Request.CustomerNo,
            CustomerAddress: $scope.Request.CustomerAddress,
            CustomerEmail: $scope.Request.CustomerEmail,
            CustomerAccountName: $scope.Request.CustomerAccountName,
            DateOfVehicleRepair: $scope.Request.DateOfvehicleRepair,
            ComplaintQty: $scope.Complaint.Quantity,
            ComplaintDesc: $scope.ProblemDescription,
            ProductCode: $scope.Complaint.ProductCode,
           // CreatedBy: $scope.Request.CreatedBy,
            CreatedBy:  $rootScope.session.EMP_CODE,


            BatchNumber: $scope.Complaint.BatchNumber,
            BatchNumber1: $scope.Complaint.BatchNumber1,
            QtyOfComplaintStock: $scope.Complaint.QtyOfComplaintStock,
            EvidenceAvailable: $scope.Complaint.EvidenceAvailable,
            VerifiedInSameBatch: $scope.Complaint.VerifiedInSameBatch,
            IsSelf: $scope.Complaint.IsSelf,
            AvailableForFutureEvidence: $scope.Complaint.AvailableForFutureEvidence,
            SufficientEvidence: $scope.Complaint.SufficientEvidence,
            RemarksForQuetsionaire: $scope.Complaint.RemarksForQuetsionaire,
            Tempreature: $scope.Tempreature,
            Humidity: $scope.Humidity,
            ManuFactureDate: $scope.Complaint.ManuFactureDate,
            ShelfLife: $scope.Complaint.ShelfLife,
            ComplaintId: HomeService.ReqIds.Cpmplaint_Id,
            ComplaintNumber: HomeService.ReqIds.ComplaintNumber
           
        };
       
        var ReqDtl = {
            CustomerComplaint: obj,
            SystemInformation: SystemInfoData,
            ComplaintTypeArray: $scope.AddRowArray

            //UploadPhotoModel: $scope.file
        };
        console.log(obj);


        var fd = new FormData();
        fd.append('data', angular.toJson(ReqDtl));

        if ($scope.file.img1 == null && $scope.file.img2 == null && $scope.file.img3 == null && $scope.file.img4 == null) {
            swal('Error: Upload atleast 1 image');
            

        }
        else { 
        fd.append('file1', $scope.file.img1);
        fd.append('file2', $scope.file.img2);
        fd.append('file3', $scope.file.img3);
        fd.append('file4', $scope.file.img4);
       
        }

        swal({
            title: "Are you sure?",
            text: "you are going to resubmit request",
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

                    ReSubmissionUserService.ReSubmitRequest(fd).then(function (success) {
                        var CompNumber = parseInt(success.data);
                        if (CompNumber > 0) {
                            console.log("SUCCESS DATA", success.data);
                            swal("Done!", "Resubmission successful! For Complaint Number :" + success.data, "success");
                            window.location.assign('./index.html?udi=' + $rootScope.session.Oth_key + '#/ipr');
                        }
                        else {
                            swal("Error!", success.data, "error");
                        }
                    },
                        function (error) {
                            console.log(error.data);
                            swal("error", error.data, "error");
                            //swal(error.data);
                        });
                }

            });

    } 

    $scope.init();


    $scope.InprocessBack = function () {
        window.location.assign('./index.html?udi=' + $rootScope.session.Oth_key + '#/ipr');
    };
    
});

