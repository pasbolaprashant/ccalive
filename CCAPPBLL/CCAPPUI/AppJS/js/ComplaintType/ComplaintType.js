var app = angular.module('ComplaintTypeModule', []);
app.service('ComplaintTypeService', function ($http) {
    this.save = function (obj) {
        console.log(obj);
        return $http.post('/api/ComplaintType/save', obj, {});
    };
    this.List = function () {
        return $http.get('/api/ComplaintType/List')
    };
    this.update = function (obj) {
        console.log(obj);
        return $http.post('/api/ComplaintType/update', obj, {});
    };

    this.delete = function (obj) {
        console.log(obj);
        return $http.post('/api/ComplaintType/delete', obj, {});
    };

	this.UploadComplaintTypeExcel = function (fd) {

		return $http.post('/api/ComplaintType/UploadComplaintTypeExcel', fd, {
			transformRequest: angular.identity,
			headers: { 'Content-Type': undefined }

		});

	};


});

app.controller('ComplaintTypeController', function ($scope, ComplaintTypeService, ComplaintCategoryService, $rootScope) {
    console.log("ComplaintType");

    $scope.Complainttype = true;
    $scope.ComplainttypeSave = false;
    $scope.ComplainttypeBrand = false;
    $scope.Complainttypetotal = false;
	$scope.Categorytypeshow = true;
	//$scope.Complainttype = false;


	
	$scope.init = function () {
		$scope.ShowBulkUpload = false;
        $scope.Categorytypeshow = true;
        $scope.Complainttype = true;
        $scope.ComplainttypeSave = false;
        $scope.ComplainttypeBrand = false;
        $scope.Complainttypetotal = false;


        ComplaintTypeService.List()
        .then(function (success) {
            console.log(success);
            if (success.data != null) {
                $scope.ComplaintTypeArray = success.data;
            };
        },
        function (error) {
            console.log(error);
        });
        ComplaintCategoryService.List()
       .then(function (success) {
           console.log(success);
           if (success.data != null) {
               $scope.ComplaintCategoryArray = success.data;
           };
       },
       function (error) {
           console.log(error);
       });
};
  



    $scope.Save = function () {
        if (!$scope.ComplaintType) {
            console.log("hi");
            return false;
        }
        var obj = {
            ComplaintType: $scope.ComplaintType,
            ComplaintCategoryID: $scope.ComplaintCategoryID
        }
        console.log(obj);
        ComplaintTypeService.save(obj)
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
    };




    $scope.Back = function () {
        $scope.init();
        $scope.Categorytypeshow = true;
    };



    $scope.AddComplainttype = function () {
        $scope.ComplaintType = '';
        $scope.ComplaintCategoryID = '';


        $scope.Categorytypeshow = false;
        $scope.Complainttype = false;
        $scope.ComplainttypeSave = true;
        $scope.ComplainttypeBrand = false;
        $scope.Complainttypetotal = true;

    };




    $scope.Edit = function (ComplaintCategoryID, ComplaintCategory, ComplaintType, ComplaintTypeID) {
        console.log(ComplaintTypeID);
        $scope.ComplaintCategoryID = ComplaintCategoryID;
        $scope.ComplaintCategory = ComplaintCategory;
        $scope.ComplaintType = ComplaintType;
        $scope.ComplaintTypeID = ComplaintTypeID;
       

        $scope.Categorytypeshow = false;
        $scope.Complainttype = false;
        $scope.ComplainttypeSave = true;
        $scope.ComplainttypeBrand = true;
        $scope.Complainttypetotal = false;

    }




    $scope.update = function () {

        console.log('ComplaintCategoryID');
        var obj = {
            ComplaintCategoryID: $scope.ComplaintCategoryID,
            ComplaintType: $scope.ComplaintType,
            ComplaintTypeID: $scope.ComplaintTypeID,
            ComplaintCategory : $scope.ComplaintCategory

        }
        ComplaintTypeService.update(obj)
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

    $scope.init();


    $scope.Delete = function (ComplaintCategoryID) {
        console.log(ComplaintCategoryID);

        var obj = {
            ComplaintCategoryID: ComplaintCategoryID,
        }
        ComplaintTypeService.delete(obj)
       .then(function (success) {
           console.log(success);
           $scope.init();
       },
       function (error) {
           console.log(error);
       });

    };

	$scope.BulkExcel = function () {
		$scope.ShowBulkUpload = true;
		$scope.Categorytypeshow = false;
		$scope.Complainttype = false; 
	}
	


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
		ComplaintTypeService.UploadComplaintTypeExcel(fd)

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

	$scope.AddComplaintTypeExcel = function () {

	
		$scope.Categorytypeshow = true;
		//$scope.Complainttype = false;
	
		
	}

});

