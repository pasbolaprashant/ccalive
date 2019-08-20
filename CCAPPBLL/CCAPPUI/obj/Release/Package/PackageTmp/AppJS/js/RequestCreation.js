var app = angular.module('RequestCreationModule', []);

app.service('RequestCreationService', function ($http) {
    //getCOmplaintTYpe

    this.GetComplaintList = function (ComplaintCategoryId) {

        return $http.get('/api/Complaint/GetComplaintType/?ComplaintCategoryId=' + ComplaintCategoryId);
    };
    //GetComplaintCategory
    this.GetComplaintCategory = function (id) {

        return $http.get('/api/Complaint/GetComplaintCategory/', {});
    };
    this.GetData= function (obj) {

        return $http.post('/api/RequestCreation/GetData/', obj);
    };

    this.DealerDetails = function (obj) {

        return $http.get('/api/DealerMaster/DealerDetails/', {});
    };

    this.GetProductId = function (obj) {

        return $http.get('/api/ProductMaster/GetProductId/', {});
    };

    this.GetBrandName = function (id) {

        return $http.get('/api/ProductMaster/GetBrandName/?Brand_Id='+id);
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



    this.CreateRequest = function(ReqDtl) {

        return $http.post('/api/RequestCreation/RecieveData/', ReqDtl);
    };

    this.uploadImage = function (fd) {

        return $http.post("/api/RequestCreation/uploadImg", fd, {
                        transformRequest: angular.identity,
                        headers: { 'Content-Type': undefined }

                    });
    };
    
});
app.directive('fileModel', ['$parse', function ($parse) {
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
app.controller('RequestCreationController', function ($scope, $http, $location, $rootScope, RequestCreationService,  $q, $filter) {

    $scope.Request = {

        CustomerName : '',
        CustomerNo : '',
        CustomerAddress : '',
        CustomerEmail : '',
        CustomerAccountName : '',
        DateOfvehicleRepair :'',
        DealerID : '',
        CreatedBy : $rootScope.session.EMP_CODE
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


    $scope.init = function () {
        //alert('Error!! First name can not tbe empty.');

        //var obj = {
        //    Dealer_ID: '',
        //    CustomerName: '',
        //    CustomerPhone: '',
        //    CustomerAddress:'',
        //    CustomerEmail: '',
        //    CustomerAccountName: '',
        //    DateOfVehicleRepair: '',
        //    ComplaintQty:'',
        //    ComplaintDesc:'',
        //    ProductCode: ''
        //};





        console.log("insideinit");
        $scope.KeepGoing = false;
        $scope.ComplaintLst = [];
        $scope.AddRowArray = [];
        $scope.ComplaintCategory = [];
        $scope.DealerDetails = [];
        $scope.ProductMaster = [];
        $scope.SubstrateMaster = [];
        //$scope.SystemInfo = [];

        //get dealer details
        RequestCreationService.DealerDetails().then(function (success) {
            console.log("inside GetComplaintCategory");
            $scope.DealerDetails = success.data;
            console.log($scope.DealerDetails);
        },
            function (error) {
                console.log(error);
            });


        //get substrate id
        RequestCreationService.GetSubstrateId().then(function (success) {
            console.log("inside GetComplaintCategory");
            $scope.SubstrateMaster = success.data;
            console.log($scope.SubstrateMaster);
        },
            function (error) {
                console.log(error);
            });


        //get product ID
        RequestCreationService.GetProductId().then(function (success) {
            console.log("inside GetProductId");
            $scope.ProductMaster = success.data;
            console.log($scope.ProductMaster);
        },
            function (error) {
                console.log(error);
            });


        //GetComplaintCategory
        RequestCreationService.GetComplaintCategory().then(function (success) {
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

    $scope.uploadImage = function () {





        if (!$scope.Request.CustomerName) {
            swal("Customer Name is required"); //neto be added in DAL 
            return false;
        }
        if (!$scope.Request.CustomerNo) {
            swal("Customer Number is required");
            return false;
        }
        if (!$scope.Request.CustomerAddress) {
            swal("Customer Address is required");
            return false;
        }
        if (!$scope.Request.CustomerEmail) {
            swal("Customer Email is required");
            return false;
        }
        if (!$scope.Request.CustomerAccountName) {
            swal("Customer Account Name is required");
            return false;
        }
        if (!$scope.Request.DealerID) {
            swal("Dealer Code is required");
            return false;
        }

        if (!$scope.Request.DateOfvehicleRepair) {
            swal("Date Of vehicleRepair is required");
            return false;
        }
        if (!$scope.Complaint.ProductCode) {
            swal("Product Code is required");
            return false;
        }
        if (!$scope.Complaint.BatchNumber) {
            swal("Batch Number is mandatory");
            return false;
        }
        if ($scope.Complaint.QtyOfComplaintStock == '' || $scope.Complaint.QtyOfComplaintStock == null) {
            swal("PLease select Stock type");
            return false;
        }
        if (!$scope.Complaint.Quantity)
        {
            swal("Quantity is required");
            return false;
        }

      
                if ($scope.AddRowArray.length==0)
                {
                    swal('Please provide at least one complaint category and complaint type');
                    return false;
                }
                else
                {
                    for (var i = 0; i < $scope.AddRowArray.length; i++)
                    {
                        for (var j = 0; j < $scope.AddRowArray[i].ComplaintLst.length; j++)
                        {
                            if ($scope.AddRowArray[i].ComplaintLst[j].isSelected == true )
                            {
                                $scope.KeepGoing = true;                         
                                
                                break;
                            }
                            
                        }
                        if ($scope.KeepGoing == false)
                        {
                            swal('please select complaint type for Row:' + parseInt(i + 1));
                            return false;
                        }
                        $scope.KeepGoing = false;
                       
                    }
                    $scope.KeepGoing = false;
                   
                }
           
        //else
        //{

        //    angular.forEach($scope.AddRowArray, function (value, key) {
        //        if (value.SelectedComplaintsArray==null) {
        //            swal("Complaint type description required");
        //            return false;
                   
        //        }
        //        else {
        //            return true;
        //        }

        //    });
        //}


        //if (!$scope.Undercoat)
        //{ swal("UnderCoat section is unfilled! please fill that section"); return false;}

        //else if (!$scope.Underbody)
        //{ swal("Underbody section is unfilled! please fill that section"); return false;}

        //else if (!$scope.Basecoat)
        //{ swal("Basecoat section is unfilled! please fill that section"); return false;}

        //else if (!$scope.Clearcoat)
        //{ swal("Clearcoat section is unfilled! please fill that section"); return false;}
            
        //else if (!$scope.Thinner)
        //{ swal("Thinner section is unfilled! please fill that section"); return false;}

        //else if (!$scope.ProblemDescription)
        //{ swal("Problem Description is empty"); return false;}

        //if (!$scope.file.img1 || !$scope.file.img2 || !$scope.file.img3 || !$scope.file.img4)
        //{ swal("Images are not uploaded! please upload photos"); return false;}



        
        //request array single values
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
            CreatedBy: $scope.Request.CreatedBy,
            BatchNumber: $scope.Complaint.BatchNumber,
            QtyOfComplaintStock :$scope.Complaint.QtyOfComplaintStock
        };

        


        if ($scope.Undercoat == null)
        {
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
                UnderbodySelectChildInput:''
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
                Ratio:''

            };
        }
        if ($scope.Thinner == null) {
            $scope.Thinner = {
                ThinnerSelect: '',
                ThinnerSelectChildInput: '',
                MixingRatio: ''
               

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
        
        var SystemInfoData = [Undercoat, Underbody, Basecoat, Clearcoat, Thinner];

        var ReqDtl = {
            CustomerComplaint: obj,
            SystemInformation: SystemInfoData,
            ComplaintTypeArray: $scope.AddRowArray,
            //UploadPhotoModel: $scope.file
        };
        console.log("reqData",$scope.Request);
        console.log("Complaint Data", $scope.Complaint);
        console.log("rowdata", $scope.AddRowArray);
        console.log(ReqDtl);
        

        var fd = new FormData();
        
        fd.append('file1', $scope.file.img1);
        fd.append('file2', $scope.file.img2);
        fd.append('file3', $scope.file.img3);
        fd.append('file4', $scope.file.img4);
        fd.append('data', angular.toJson(ReqDtl));

      
        swal({
            title: "Are you sure?",
            text: "you are going to create request",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, Create",
            cancelButtonText: "No, cancel plx!",
            closeOnConfirm: false,
            closeOnCancel: false
        },
            function (isConfirm) {
                if (isConfirm) {

                    RequestCreationService.uploadImage(fd).then(function (success) {
                        console.log("SUCCESS DATA", success.data);
                        swal("Done!", "Process Done successfully! Your Complaint Number is :" + success.data, "success");

                    },
                        function (error) {
                            console.log(error.data);
                            swal("error", error.data, "error");
                            //swal(error.data);
                        });
                }
                
            });

    } 


    //GetComplaintList
    $scope.GetComplaintList = function (obj) {
        console.log(obj.ComplaintCategory_ID);
        RequestCreationService.GetComplaintList(obj.ComplaintCategory_ID).then(function (success) {
            console.log("inside GET COMPLAINT LIST");

            obj.ComplaintLst = success.data;

            console.log(obj.ComplaintLst);
        },
            function (error) {
                console.log(error);
            });


    }

    $scope.SaveData = function (Request, Complaint) {
        console.log(Request);
        console.log(obj);
        console.log(Complaint);
        var obj = {
            DealerCode: Request.DealerID,
            CustomerName: Request.CustomerName,
            CustomerPhone: Request.CustomerNo,
            CustomerAddress: Request.CustomerAddress,
            CustomerEmail: Request.CustomerEmail,
            CustomerAccountName: Request.CustomerAccountName,
            DateOfVehicleRepair: Request.DateOfvehicleRepair,
            ComplaintQty: Complaint.Quantity,
            ComplaintDesc: $scope.ProblemDescription,
            ProductCode: Complaint.ProductCode


        };
        RequestCreationService.GetData(obj).then(function (success) {

        },
            function (error) {
                console.log(error);
            });

    }

    $scope.DealerName = function () {

        angular.forEach($scope.DealerDetails, function (value, key) {
            if (value.Dealer_ID == $scope.Request.DealerID) {
                $scope.Request.DealerName = value.DealerName;
                $scope.Request.SalesOffice = value.DealerAddress;
            }

        });

    }


    //$scope.Product_Description = function () {

    //    angular.forEach($scope.ProductMaster, function (value, key) {
    //        if (value.Product_ID == $scope.Complaint.ProductCode) {
    //            $scope.ProductDescription = value.ProductDescription;
    //        }

    //    });

    //}


    $scope.BrandName = function () {
        angular.forEach($scope.ProductMaster, function (value, key) {
            console.log("we are in brand name");
            console.log($scope.Complaint.BrandID);
            if (value.Product_ID == $scope.Complaint.ProductCode) {

                $scope.Complaint.BrandID = value.Brand_ID;
            }

        });

        RequestCreationService.GetBrandName($scope.Complaint.BrandID).then(function (success) {

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
        RequestCreationService.GetBatchAndMfg($scope.Complaint.ProductCode).then(function (success) {
            $scope.Batch = success.data;
            $scope.Complaint.ManuFactureDate = '';
            console.log("batch data: ", $scope.Batch);
        },
            function (error) {
                console.log(error);
            });




    }

    $scope.GetManufactureDate = function (id)
    {
        for (var i = 0; i < $scope.Batch.length; i++)
        {
            if ($scope.Batch[i].ProductBatch_ID == id)
            {
               // var date = new Date($scope.Batch[i].ManufactureDate);
                $scope.Complaint.ManuFactureDate = $filter('date')(new Date($scope.Batch[i].ManufactureDate), 'MM/dd/yyyy');
            }
        }
    }

    $scope.SystemInformation = function (Underbody, Undercoat, Basecoat, Clearcoat, Thinner) {

        $scope.SystemInfo = [{ Underbody }, { Undercoat }, { Basecoat }, { Clearcoat }, { Thinner }];
        console.log($scope.SystemInfo);
        RequestCreationService.SystemInformation($scope.SystemInfo).then(function (success) {


        },
            function (error) {
                console.log(error);
            });

    }

    $scope.ComplaintInfo = function (Complaint) {

        console.log(Complaint);
    }

    $scope.CustInfo = function (Request) {

        console.log(Request);
    }





    $scope.SAVE = function () {
        console.log($scope.AddRowArray);
    }

    $scope.SelectComplaints = function (obj, Id) {
        console.log(Id);
        var Idx = obj.SelectedComplaintsArray.indexOf(Id);
        if (Idx < 0) {
            obj.SelectedComplaintsArray.push(Id);
        } else {
            obj.SelectedComplaintsArray.splice(Idx, 1);
        }
    }



    $scope.AddRow = function () {
        $scope.AddRowArray.push({
            ComplaintCategory: $scope.MainArray,
            SelectedComplaintsArray: []
        });
        console.log($scope.AddRowArray);
    }
    $scope.DeleteRow = function () {

        $scope.AddRowArray.pop({
            ComplaintCategory: $scope.MainArray,
            SelectedComplaintsArray: []
        });
        console.log($scope.AddRowArray);
    }

    //$scope.CreateRequest = function () {
    //    console.log($scope.Request.CustomerName);
        

       

    //    //request array single values
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
    //        ProductCode: $scope.Complaint.ProductCode
    //    };

    //    //var SystemInfoData =
    //    //    {
    //    var Undercoat = {
    //        Complaint_ID: '',
    //        Substrate_ID: $scope.Substrate,
    //        CoatType_ID: '',
    //        ApplicationType: 'Undercoat',
    //        ApplicationTypeValue: 'Primer',
    //        Value3: $scope.Undercoat.UndercoatSelect,
    //        Value4: $scope.Undercoat.UndercoatSelectChildInput,
    //        Value5: $scope.Undercoat.Ratio,
    //        Value6: $scope.Undercoat.Hardener,
    //        Value7: '',
    //        Value8: ''
    //    };
    //    var Underbody = {
    //        Complaint_ID: '',
    //        Substrate_ID: $scope.Substrate,
    //        CoatType_ID: '',
    //        ApplicationType: 'Underbody',
    //        ApplicationTypeValue: $scope.Underbody.UnderbodySelect,
    //        Value3: $scope.Underbody.BodyFillerInput,
    //        Value4: $scope.Underbody.UnderbodySelectChild,
    //        Value5: $scope.Underbody.UnderbodySelectChildInput,
    //        Value6: '',
    //        Value7: '',
    //        Value8: ''
    //    };

    //    var Basecoat = {
    //        Complaint_ID: '',
    //        Substrate_ID: $scope.Substrate,
    //        CoatType_ID: '',
    //        ApplicationType: 'Basecoat',
    //        ApplicationTypeValue: $scope.Basecoat.BasecoatSelect,
    //        Value3: $scope.Basecoat.MetallicBasecoat,
    //        Value4: $scope.Basecoat.Ratio,
    //        Value5: '',
    //        Value6: '',
    //        Value7: '',
    //        Value8: ''
    //    };

    //    var Clearcoat = {
    //        Complaint_ID: '',
    //        Substrate_ID: $scope.Substrate,
    //        CoatType_ID: '',
    //        ApplicationType: 'Clearcoat',
    //        ApplicationTypeValue: $scope.Clearcoat.ClearcoatSelect,
    //        Value3: $scope.Clearcoat.ClearcoatSelectNoOfCost,
    //        Value4: $scope.Clearcoat.Hardener,
    //        Value5: $scope.Clearcoat.Ratio,
    //        Value6: '',
    //        Value7: '',
    //        Value8: ''
    //    };
    //    var Thinner = {
    //        Complaint_ID: '',
    //        Substrate_ID: $scope.Substrate,
    //        CoatType_ID: '',
    //        ApplicationType: 'Thinner',
    //        ApplicationTypeValue: $scope.Thinner.ThinnerSelect,
    //        Value3: $scope.Thinner.ThinnerSelectChildInput,
    //        Value4: $scope.Thinner.MixingRatio,
    //        Value5: '',
    //        Value6: '',
    //        Value7: '',
    //        Value8: ''
    //    };

    //    //};
    //    var SystemInfoData = [Undercoat, Underbody, Basecoat, Clearcoat, Thinner];
        
    //    var ReqDtl = {
    //        CustomerComplaint: obj,
    //        SystemInformation: SystemInfoData,
    //        ComplaintTypeArray: $scope.AddRowArray,
    //        UploadPhotoModel: $scope.file
    //    };
    //    //ReqDtl = [{ obj }, { SystemInfoData }]
    //    if (!ReqDtl.CustomerComplaint) {

    //        alert('Error!! First name can not tbe empty.');
    //        return false;
    //    } 


    //    //if (!ReqDtl.SystemInformation.Underbody.UnderbodySelect) {

    //    //    alert('Error!! First name can not tbe empty.');
    //    //    return false;
    //    //} 
    //    console.log(ReqDtl);
    //    RequestCreationService.CreateRequest(ReqDtl).then(function (success) {
    //        console.log("Api hit");

    //    },
    //        function (error) {
    //            console.log(error);
    //        });
    //}
    
    /*----------------------------------------------------------------------------------------------------------------------------------*/

    //$scope.ParentArray =
    //    [{
    //        //ParentArray: $scope.ApprovalList,
    //        BuTypeListArray: [],
    //        DivisionListArray: [],
    //        SegmentListArray: [],
    //        //  ResionListArray: [],
    //        ZoneListArray: [],
    //    }
    //    ];

    //$scope.DataArray = [];


    //$scope.Remove = function (ApprovalMatrix_Id, index) {
    //    console.log(index);
    //    $scope.ParentArray.splice(index, 1);

    //    var data = {
    //        ApprovalMatrix_Id: ApprovalMatrix_Id,
    //    }
    //    console.log(data);
    //    RequestCreationService.removeApproval(data).then(function success(data) {
    //        console.log(data);
    //        swal(data.data);
    //    }, function error(data)
    //        { console.log(data); });


    //};
    
    //$scope.Add = function (pt) {
    //    $scope.ParentArray.push(
    //        {
    //            BuTypeListArray: $scope.BUArrayInd,
    //            DivisionListArray: $scope.DivisionArrayInd,
    //            SegmentListArray: $scope.SegmentArrayInd,
    //            ZoneListArray: $scope.ZoneArrayId,
    //            isNew: 1,
    //            isEdit: 0,

    //        });
    //    console.log("inside add");
    //    console.log("Rahul", $scope.ParentArray);
    //    console.log($scope.ParentArray);
    //};

   

    //***************************************************************************************************************************************//
    //$scope.GetDept = function (dp, item) {
    //    var data = {
    //        SBU_Name: dp,
    //    };
    //    RequestCreationService.GetDept(item).success(function (data) {
    //        item.DivisionListArray = data;
    //        $scope.DivisionArrayInd = data;
    //        console.log("GetDept:", data);
    //        item.SegmentArrayInd = [];
    //        item.ZoneListArray = [];
    //    }).error(function (data) {
    //        console.log("Error in loading datra from EDB");
    //    });
    //};

    //$scope.GetDeptSegment = function (dt, item) {
    //    var data = {
    //        Dept_name: dt,
    //    };
    //    console.log(data)
    //    RequestCreationService.GetDeptSegment(item).success(function (data) {
    //        item.SegmentListArray = data;

    //        $scope.SegmentArrayInd = data;
    //        console.log("GetDeptSegment:", data);

    //        item.ZoneListArray = [];
    //    }).error(function (data) {
    //        console.log("Error in loading datra from EDB");
    //    });
    //};


    //$scope.GetZoneNameBySegment = function (dt, item) {
    //    var data = {
    //        Dept_name: dt,
    //    };
    //    console.log(data)
    //    RequestCreationService.GetZoneNameBySegment(item).success(function (data) {
    //        item.ZoneListArray = data;

    //        $scope.ZoneArrayId = data;
    //        console.log("GetZoneNameBySegment:", data);
    //    }).error(function (data) {
    //        console.log("Error in loading datra from EDB");
    //    });
    //};

    //console.log("Rahul" + $scope.ParentArray);
    


    
   


    //$scope.Update = function () {

    //    var keepgoin = true;
    //    console.log($scope.ApprovalList);
    //    angular.forEach($scope.ApprovalList, function (value, key) {
    //        if (!value.SBU_Name) {
    //            console.log("inside SBU_Name");
    //            keepgoin = false;
    //            return false;
    //        }
    //        if (!value.Dept_name) {
    //            console.log("inside Dept_name");
    //            keepgoin = false;
    //            return false; 
    //        }
    //        if (!value.Seg_Name) {
    //            console.log("inside Seg_Name");
    //            keepgoin = false;
    //            return false;
    //        }
    //        if (!value.SegmentHead) {
    //            console.log("inside SegmentHead");
    //            keepgoin = false;
    //            return false;
    //        }

    //        if (!value.RegionHead) {
    //            console.log("inside RegionHead");
    //            keepgoin = false;
    //            return false;
    //        }
    //        if (!value.CentralPlanner) {
    //            console.log("inside CentralPlanner");
    //            keepgoin = false;
    //            return false;
    //        }

    //    });
    //    console.log(keepgoin);
    //    if (keepgoin) {
    //        $scope.SaveArray = [];
    //        console.log("Rahul----------", $scope.ParentArray);
    //        // angular.forEach($scope.ParentArray, function (value, key) {

    //        angular.forEach($scope.ParentArray, function (value, key) {
    //            console.log(value);
    //            console.log(key);
    //            $scope.SaveArray.push({
    //                ApprovalMatrix_Id: value.ApprovalMatrix_Id,
    //                SBU_Name: value.SBU_Name,
    //                Dept_name: value.Dept_name,
    //                Seg_Name: value.Seg_Name,
    //                RegionHead: value.RegionHead,
    //                SegmentHead: value.SegmentHead,
    //                CentralPlanner: value.CentralPlanner,
    //                Zone: value.Zone,
    //                isNew: value.isNew,
    //                isEdit: value.isEdit,

    //            });
    //        });
    //        console.log("Heree ");
    //        console.log($scope.SaveArray);

    //        //SaveApproval



    //        RequestCreationService.SaveApproval($scope.SaveArray).then(function success(data) {
    //            console.log(data);
    //            swal(data.data);
    //            $scope.init();
    //        }, function error(data) {
    //            console.log(data);
    //        });
    //    }

    //    //////}
    //    //////else {
    //    //////    swal("Error", "Empty field not allowed","error" );
    //    //////}

    //}




    $scope.init();
});








