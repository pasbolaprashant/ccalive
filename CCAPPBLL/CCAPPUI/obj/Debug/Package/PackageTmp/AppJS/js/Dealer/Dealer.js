var app = angular.module('DealerModule', []);
app.service('DealerService',function($http){
this.save = function (obj) {
    console.log(obj);
    return $http.post('/api/Dealer/save', obj, {})
};

this.List = function () {
    return $http.get('/api/Dealer/List')
};

this.DepotList = function () {
    return $http.get('/api/Dealer/DepotList')
};


this.update = function (obj) {
    console.log(obj);
    return $http.post('/api/Dealer/update', obj, {});
};

this.delete = function (obj) {
    console.log(obj);
    return $http.post('/api/Dealer/delete', obj, {});
};
	this.UploadDealerExel = function (fd) {

	return $http.post('/api/Dealer/UploadDealerExel', fd, {
		transformRequest: angular.identity,
		headers: { 'Content-Type': undefined }

	});

};
});


app.controller('DealerController', function ($scope, DealerService, $rootScope) {
    console.log("Dealer");




    $scope.Dealershow = true;
    //$scope.DealerAdd = true;
    $scope.DealerSave = false;
    $scope.Dealertotal = false;
    $scope.UpdateDealer = false;
	$scope.DealerBulk = true;


    $scope.init = function () {
		$scope.DealerLoad = false;
		$scope.DealerBulk = true;
		$scope.Dealershow = true;
		$scope.DealerAdd = true;
		$scope.DealerSave = false;
		$scope.Dealertotal = false;
		$scope.UpdateDealer = false;

        DealerService.List().then(function (success) {
            console.log(success);
            if (success.data != null) {
                $scope.DealerArray = success.data;
            };
        },
        function (error) {
            console.log(error);

            });

        DealerService.DepotList().then(function (success) {
            console.log(success);
            if (success.data != null) {
                $scope.DepotArray = success.data;
                console.log("Depot Array:",$scope.DepotArray);
            };
        },
            function (error) {
                console.log(error);

            });

    };
    $scope.init();







    $scope.Save = function () {
        if (!$scope.DealerName) {
            console.log("hi");
            return false;
        }
        var obj = {
            DealerName: $scope.DealerName,
            DealerCode: $scope.DealerCode,
            DealerAddress: $scope.DealerAddress,
            DepotId: $scope.DepotId ,
        
            Territory: $scope.Territory,
            SO:  $scope.SO,
            Area: $scope.Area,
            ASM: $scope.ASM ,
            Region:$scope.Region ,
            RM:$scope.RM ,
            NH: $scope.NH ,


        }
        DealerService.save(obj).then(function (success) {
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
    };

    




    $scope.AddDealer = function () {
        $scope.Dealershow = false;
        $scope.DealerSave = true;
        $scope.Dealertotal = true;
		$scope.UpdateDealer = false;
		$scope.DealerLoad = false;
		$scope.DealerBulk = false;
	
    };


    $scope.Back = function () {

		$scope.init();
		
		//$scope.DealerExcel = false;

    };




    $scope.Edit = function (pt) {



        console.log(pt);
        $scope.DealerID = pt.DealerID;
        $scope.DealerName = pt.DealerName;
        $scope.DealerCode = pt.DealerCode;
        $scope.DealerAddress = pt.DealerAddress;
        $scope.DepotId = pt.DepotId;
        
        $scope.Territory = pt.Territory;
        $scope.SO = pt.SO;
        $scope.Area = pt.Area;
        $scope.ASM = pt.ASM;


        $scope.Region = pt.Region;
        $scope.RM = pt.RM;
        $scope.NH = pt.NH;
      


        $scope.Dealershow = false;
        $scope.DealerSave = true;
        $scope.Dealertotal = false;
        $scope.UpdateDealer = true;
        $scope.DealerAdd = false;


    }



    $scope.update = function () {
        console.log('DealerID');
        var obj = {
            DealerID: $scope.DealerID,
            DealerName: $scope.DealerName,
            DealerCode: $scope.DealerCode,
            DealerAddress: $scope.DealerAddress,
            DepotId: $scope.DepotId,

            Territory: $scope.Territory,
            SO: $scope.SO,
            Area: $scope.Area,
            ASM: $scope.ASM,
            Region: $scope.Region,
            RM: $scope.RM,
            NH: $scope.NH,

        }
        DealerService.update(obj)
       .then(function (success) {
           console.log(success);
           if (success.data != null) {


               $scope.init();
           }
       },

       function (error) {
           console.log(error);
       });

    };





    $scope.Delete = function (DealerID) {
        console.log(DealerID);

        var obj = {
            DealerID: DealerID,




        }
        DealerService.delete(obj)
       .then(function (success) {
           console.log(success);
           $scope.init();
       },
       function (error) {
           console.log(error);
       });

    };



	$scope.UploadExcel = function () {
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
		DealerService.UploadDealerExel(fd)

			.then(function (success) {

				console.log("SUCCESS DATA", success.data);
				if (success.data == 3) {
					swal("error", "Column names are different!", "error");
				}
				else if (success.data == 2) {
					swal("error", "Excel sheet not in format!", "error");
				}

				else {
					swal("Save!", "Your file has been Uploaded.", "success");
				}

				$scope.init();
				//swal("Save!", "Your file has been Uploaded.", "success");
			},
			function (error) {
				console.log(error.data);
				swal("error", error.data, "error");
			});
	};



	$scope.BulkExcel = function () {

		$scope.DealerLoad = true;
		$scope.Dealershow = false
		$scope.DealerBulk = false;	
	}


});
