var app = angular.module('ProductModule', []);
app.service('ProductService', function ($http) {
    this.save = function (obj) {
        console.log(obj);
        return $http.post('/api/Product/save', obj, {})
    };
    this.List = function () {

        return $http.get('/api/Product/List')
    };
    this.update = function (obj) {
        console.log(obj);
        return $http.post('/api/Product/update', obj, {});
    };
    this.delete = function (obj) {
        console.log(obj);
        return $http.post('/api/Product/delete', obj, {});
    };

    this.UploadProductExcel = function (fd) {
          return $http.post('/api/ProductMaster/UploadProductExcel', fd, {
			transformRequest: angular.identity,
			headers: { 'Content-Type': undefined }

		});
    };


    this.GetProductBatchList = function (id) {
        console.log(id);
        //return $http.get('/api/RequestCreation/GetProductBatchList?ProductID=' + ProductID);
        return $http.get('/api/BatchAndMfg/GetBatchAndMfg/?ProductId=' + id);

    };


    this.BatchSave = function (obj) {                                       //----------------------save batch against product ------------------//
        console.log(obj);
        return $http.post('/api/BatchAndMfg/BatchSave', obj, {})
    };
     
    this.UpdateBatch = function (obj) {                                    //----------------------update batch against product ------------------//
        console.log(obj); 
        return $http.post('/api/BatchAndMfg/UpdateBatch', obj, {});
    };
    this.deleteProductBatch = function (obj) {                                    //----------------------delete batch against product ------------------//
        console.log(obj);
        return $http.post('/api/BatchAndMfg/deleteProductBatch', obj, {});
    };

    this.UploadExcel = function (fd) {                                //----------------------upload excel against product ------------------//
        return $http.post('/api/BatchAndMfg/UploadExcel', fd, {
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }

        });
    };
    
});


app.controller('ProductController', function ($scope, ProductService, BrandService, $rootScope, $uibModal, $q, $filter) {
    console.log("product");

    $scope.currentPage = 1;

    $scope.Prduct = false;
    $scope.ProductShow = true;
    $scope.ProductView = true;
	$scope.ProductSave = false;


	$scope.Exit = false;
	$scope.UploadExcel = false;

    $scope.BatchView = function (ProductID) {
        $rootScope.ProductID = ProductID;

        window.location.href = '#/ProductBatchMaster/';
    };

    $scope.init = function () {
       
        $scope.Prduct = false;
        $scope.ProductShow = true;
		$scope.ProductView = true;
		$scope.Exit = false;
	
		$scope.UploadExcel = false;
		$scope.ShowBulkUpload = false;

        ProductService.List()
         .then(function (success) {
             console.log(success);
             if (success.data != null) {
                 $scope.ProductArray = success.data;
             };
         },
         function (error) {
             console.log(error);

         });

        BrandService.List()
            .then(function (success) {
            console.log(success);
            if (success.data != null) {
                $scope.BrandArray = success.data;
            };
        },
         function (error) {
             console.log(error);

         });
    };
     $scope.init();


    $scope.AddProduct = function () {
        $scope.Prduct = true;
        $scope.ProductShow = false;
        $scope.ProductView = false;
        $scope.ProductSave = true;
		$scope.EditButton = false;
	
		$scope.Exit = false;


        $scope.BrandName = "";
        $scope.BrandID = "";
        $scope.ProductName = "";
        $scope.ProductCode = "";
        $scope.ProductShelfLife = "";
        $scope.Stream = "";
        $scope.Segment = "";
           
     };

    $scope.Back = function () {

        $scope.init();

    };

    $scope.Save = function () {
        if (!$scope.ProductName) {
            swal("Please enter product name");
            return false;
        }
        else if (!$scope.BrandID) {
            swal("Please enter Brand name");
            return false;
        }
        else if (!$scope.ProductCode) {
            swal("Please enter product Code");
            return false;
        }



        swal({
            title: "Are you sure?",
            text: "You want to save this ",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Continue",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: true
        }, function () {

            var obj = {
                ProductName: $scope.ProductName,
                BrandID: $scope.BrandID,
                ProductCode: $scope.ProductCode,
                BrandName: $scope.BrandName,
                ProductShelfLife: $scope.ProductShelfLife,
                Stream :$scope.Stream,
                Segment: $scope.Segment
            }

            ProductService.save(obj)
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
        });
    };

    $scope.Edit = function (BrandID, BrandName, ProductID, ProductName, ProductCode, ProductShelfLife,Segment, Stream) {
        console.log(BrandID);
        $scope.BrandID = BrandID;
        $scope.BrandName = BrandName;
        $scope.ProductName = ProductName;
        $scope.ProductCode = ProductCode;
        $scope.ProductID = ProductID;
        $scope.ProductShelfLife = ProductShelfLife;
        $scope.Stream = Stream;
        $scope.Segment = Segment;



        $scope.Prduct = true;
        $scope.ProductShow = false;
        $scope.ProductView = false;
        $scope.ProductSave = false;
        $scope.EditButton = true;


    }

    $scope.Update = function () {
        console.log('BrandID');
       
        if (!$scope.ProductName) {
            swal("Please enter product name");
            return false;
        }
        else if (!$scope.BrandID) {
            swal("Please enter Brand name");
            return false;
        }
        else if (!$scope.ProductCode) {
            swal("Please enter product Code");
            return false;
        }

        swal({
            title: "Are you sure?",
            text: "You want to update this ",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Continue",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: true
        }, function () {
            var obj = {
                BrandID: $scope.BrandID,
                BrandName: $scope.BrandName,
                ProductName: $scope.ProductName,
                ProductCode: $scope.ProductCode,
                ProductShelfLife: $scope.ProductShelfLife,
                ProductID: $scope.ProductID,
                Stream: $scope.Stream,
                Segment: $scope.Segment

            }

            ProductService.update(obj)
                .then(function (success) {
                    console.log(success);
                     if (success.data.indexOf('error') == -1) {

                        swal("Success", "Successfully update", "success");

                        $scope.init();
                    }
                    else {
                        swal("Success", "could not be saved", "success");

                    }



                },

                function (error) {
                    console.log(error);
                });
        });

    };

    $scope.Delete = function ( ProductID) {
        console.log(ProductID);

       

        swal({
            title: "Are you sure?",
            text: "You want to delete this ",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Continue",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: true
        }, function () {
            var obj = {
                ProductID: ProductID,
            }

            ProductService.delete(obj)
                .then(function (success) {
                    console.log(success);
                    if (success.data.indexOf('error') == -1) {

                        swal("Success", "Successfully deleted", "success");

                        $scope.init();
                    }
                    else {
                        swal("Success", "could not be saved", "success");

                    }
                },
                function (error) {
                    console.log(error);
                });
        });

    };
   
    $scope.UploadExcelfunction = function () {

        console.log("UploadExcel ex");

		//if (!$scope.File1) {
		//    swal("Error", "BrandName Cannot Be Empty", "error");
		//    return false;
		//}
		if (!$scope.File1) {
			swal("Error", "Please upload the excel", "error");
			return false;
		}
		console.log($scope.files);
		var fd = new FormData();
		var Obj = {
			CreatedBy: $rootScope.session.EMP_CODE
		};
		console.log("Obj", Obj);
		fd.append('file', $scope.File1);
		fd.append('data', angular.toJson(Obj));
		ProductService.UploadProductExcel(fd)

			.then(function (success) {

				console.log("SUCCESS DATA", success.data);
				if (success.data == 3) {
					swal("error", "Column names are different!", "error");
				}
				else if (success.data == 2) {
					swal("error", "Excel sheet not in format!", "error");
				}

				else {
					swal("Save!", "Your Excel file has been Uploaded.", "success");
				}

				$scope.init();
				//swal("Save!", "Your file has been Uploaded.", "success");
			},
			function (error) {
				console.log(error.data);
				swal("error", error.data, "error");
			});
	};
    
	$scope.AddProductExcel = function () {

		$scope.ShowBulkUpload = true;
		$scope.ProductView = false;

		$scope.ProductShow = false; 
	
	}

    $scope.OpenStatus = function (id) {
        //$scope.items.IndexId = _Item;
        console.log("id", id);
        //InProcessRequestService.ComplaintID = id;
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'partial/ProductBatchMaster.html',
            controller: 'ModalInstanceCtrl_ProductBatchMaster',
            size: 'lg',
            resolve: {
                items: function () {
                    return id;
                }
            }
        });
        ProductService.ProductID = id;
        console.log("ProductService.ComplaintID", ProductService.ProductID);
        modalInstance.result.then(function (items) {
            $scope.RequestID = items;
            console.log(items);
            // $scope.invoice.row[$scope.items.IndexId].
        });
    };




	$scope.Exit = function () {

		$scope.init();

	}

});




app.controller('ModalInstanceCtrl_ProductBatchMaster', function ($scope, $uibModalInstance, ProductService, $q, $rootScope, $filter) {
    console.log("ModalInstanceCtrl_ProductBatchMaster", ProductService.ProductID);

    $scope.initStatus = function () {


        $scope.Batch = false;
        $scope.ProductBatchShow = true;
        $scope.ProductBatchView = true;
        //$scope.Exit = false;

        $scope.UploadExcel = false;
        $scope.ShowBulkBatchUpload = false;


        ProductService.GetProductBatchList(ProductService.ProductID).then(function (success) {
            console.log("inside GetComplaintCategory");
            $scope.ProductBatchArray = success.data;
            console.log($scope.ProductBatchArray);
        },
            function (error) {
                console.log(error);
            });

    };
    $scope.initStatus();




    $scope.AddProductBatch = function () {
        $scope.Prduct = true;
        $scope.ProductShow = false;
        $scope.ProductView = false;
        $scope.ProductBatchSave = true;
        $scope.EditButton = false;



        $scope.Batch = true;
        $scope.ProductBatchShow = false;
        $scope.ProductBatchView = false;
        //$scope.Exit = false;

        $scope.UploadExcel = false;
        $scope.ShowBulkBatchUpload = false;


        $scope.BatchNumber = "";
        $scope.ManufactureDate = "";
        $scope.ShelfLife = "";
        $scope.ShelfLifeDate = "";
    };


    //-----------for batch save --------//

    $scope.BatchSave = function () {
        if (!$scope.BatchNumber) {
            swal("Please enter BatchNumber name");
            return false;
        }
        else if (!$scope.ManufactureDate) {
            swal("Please enter Manufacture Date");
            return false;
        }
        else if (!$scope.ShelfLife) {
            swal("Please enter Shelf Life");
            return false;
        }
        else if (!$scope.ShelfLifeDate) {
            swal("Please enter Shelf Life Date");
            return false;
        }


        $scope.fORMATTEDdATE = $filter('date')($scope.ManufactureDate, 'MMMM dd yyyy');

        $scope.fORMATTEDdATE1 = $filter('date')($scope.ShelfLifeDate, 'MMMM dd yyyy');

        swal({
            title: "Are you sure?",
            text: "You want to update this ",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Continue",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: true
        }, function () {

            var obj = {
                BatchNumber: $scope.BatchNumber,
                ManufactureDate: $scope.fORMATTEDdATE,
                ShelfLife: $scope.ShelfLife,
                ShelfLifeDate: $scope.fORMATTEDdATE1,
                ProductID: ProductService.ProductID,
               CreatedBy : $rootScope.session.EMP_CODE
            }

            console.log(obj);

            
            ProductService.BatchSave(obj)
                .then(function (success) {
                    console.log(success);
                    if (success.data.indexOf('error') == -1) {

                        swal("Success", "Successfully update", "success");

                        $scope.initStatus();
                    }
                    else {
                        swal("Error", "could not be saved", "error");

                    }



                },

                function (error) {
                    console.log(error);
                });
        });
    };

    //------------edit -------------//
    $scope.EditBatch = function (dt) {
        console.log(dt);


      
        var manufature = Date.parse(dt.ManufactureDate);
        var ShelfLifeDate1 = Date.parse(dt.ShelfLifeDate);

        console.log(manufature);

        console.log(ShelfLifeDate1);

        console.log(dt.ManufactureDate);

        console.log(dt.ShelfLifeDate);

        $scope.ProductBatch_ID = dt.ProductBatch_ID;
        $scope.BatchNumber = dt.BatchNumber;
        $scope.ManufactureDate = manufature;                   // fORMATTEDdATE;
        $scope.ShelfLife = dt.ShelfLife;
        $scope.ShelfLifeDate = ShelfLifeDate1;
        ProductID: ProductService.ProductID;
       



        $scope.Batch = true;
        $scope.ProductBatchShow = false;
        $scope.ProductBatchView = false;


        $scope.ProductBatchSave = false;
        //$scope.EditButton = true;
    }

    //---------------------update ----------------//
    $scope.UpdateBatch = function () {
        if (!$scope.BatchNumber) {
            swal("Please enter BatchNumber name");
            return false;
        }
        else if (!$scope.ManufactureDate) {
            swal("Please enter Manufacture Date");
            return false;
        }
        else if (!$scope.ShelfLife) {
            swal("Please enter Shelf Life");
            return false;
        }
        else if (!$scope.ShelfLifeDate) {
            swal("Please enter Shelf Life Date");
            return false;
        }

        $scope.makeDdATE1 = $filter('date')($scope.ManufactureDate, 'MMMM dd yyyy');

        $scope.makeDdATE2 = $filter('date')($scope.ShelfLifeDate, 'MMMM dd yyyy');


        swal({
            title: "Are you sure?",
            text: "You want to update this ",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Continue",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: true
        }, function () {
            var obj = {

                BatchNumber: $scope.BatchNumber,
                ManufactureDate: $scope.makeDdATE1,
                ShelfLife: $scope.ShelfLife,
                ShelfLifeDate: $scope.makeDdATE2,
                ProductID: ProductService.ProductID,
                CreatedBy: $rootScope.session.EMP_CODE,
                ProductBatch_ID: $scope.ProductBatch_ID
              }


            console.log(ProductService.ProductID);

            console.log(obj);

            ProductService.UpdateBatch(obj)
                .then(function (success) {
                    console.log(success);
                    if (success.data.indexOf('error') == -1) {

                        swal("Success", "Successfully update", "success");

                        $scope.initStatus();
                    }
                    else {
                        swal("Error", "could not be update", "error");

                    }



                },

                function (error) {
                    console.log(error);
                });
        });

    };


    //------------------ delete ------------------//
    $scope.deleteProductBatch = function (ProductBatch_ID) {
        console.log(ProductBatch_ID);



        swal({
            title: "Are you sure?",
            text: "You want to delete this ",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Continue",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: true
        }, function () {
            var obj = {
                ProductBatch_ID: ProductBatch_ID,
                CreatedBy: $rootScope.session.EMP_CODE
            }

            console.log(ProductBatch_ID);
            ProductService.deleteProductBatch(obj)
                .then(function (success) {
                    console.log(success);
                    if (success.data.indexOf('error') == -1) {

                        swal("Success", "Successfully deleted", "success");

                        $scope.initStatus();
                    }
                    else {
                        swal("Error", "could not be deleted", "error");

                    }
                },
                function (error) {
                    console.log(error);
                });
        });

    };

    $scope.Back1 = function () {

        $scope.initStatus();

    };


    $scope.AddProductBatchExcel = function () {


        $scope.ProductBatchShow = false;
        $scope.ProductBatchView = false;
        $scope.ShowBulkBatchUpload = true;
    };


    $scope.UploadExcelfunction1 = function () {

        console.log("UploadExcel ex");

        //if (!$scope.File1) {
        //    swal("Error", "BrandName Cannot Be Empty", "error");
        //    return false;
        //}
        if (!$scope.File1) {
            swal("Error", "Please upload the excel", "error");
            return false;
        }
        console.log($scope.files);
        var fd = new FormData();
        var Obj = {
            CreatedBy: $rootScope.session.EMP_CODE
        };
        console.log("Obj", Obj);
        fd.append('file', $scope.File1);
        fd.append('data', angular.toJson(Obj));
        ProductService.UploadExcel(fd)

            .then(function (success) {

                console.log("SUCCESS DATA", success.data);
                if (success.data == 3) {
                    swal("error", "Column names are different!", "error");
                }
                else if (success.data == 2) {
                    swal("error", "Excel sheet not in format!", "error");
                }

                else {
                    swal("Save!", "Your Excel file has been Uploaded.", "success");
                }

                $scope.init();
                //swal("Save!", "Your file has been Uploaded.", "success");
            },
            function (error) {
                console.log(error.data);
                swal("error", error.data, "error");
            });
    };


    $scope.open1 = function () {
        $scope.popup1.opened = true;
    };
    $scope.open2 = function () {
        $scope.popup2.opened = true;
    };



    $scope.popup1 = {
        opened: false
    };
    $scope.popup2 = {
        opened: false
    };

    $scope.formats = ['MMMM yyyy', 'yyyy/MM', 'MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];
    //$scope.altInputFormats = ['M!/yyyy'];



    $scope.cancel = function () {
          $uibModalInstance.dismiss('cancel');
    };

});
