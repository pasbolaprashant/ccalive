var app = angular.module('ComplaintCategoryModule', []);
app.service('ComplaintCategoryService', function ($http) {
    this.save = function (obj) {
        console.log(obj);
        return $http.post('/api/ComplaintCategory/save', obj, {});
    };

    this.List = function () {
        return $http.get('/api/ComplaintCategory/List')
    };

    this.update = function (obj) {
        console.log(obj)
        return $http.post('/api/ComplaintCategory/update', obj, {});
    };
    this.delete = function (obj) {
        console.log(obj);
        return $http.post('/api/ComplaintCategory/delete', obj, {});
    };

	this.UploadComplaintCategoryExel = function (fd) {

		return $http.post('/api/ComplaintCategory/UploadComplaintCategoryExel', fd, {
			transformRequest: angular.identity,
			headers: { 'Content-Type': undefined }

		});

	};
});


app.controller('ComplaintCategoryController', function ($scope, ComplaintCategoryService, $rootScope) {
        console.log("ComplaintCategory");


    $scope.Categoryshow = true;
    $scope.Complaintshow = true;
    $scope.ComplaintSave = false;
    $scope.ComplaintBrand = true;
	$scope.Complainttotal = false;
	$scope.UploadFile = false;



    $scope.init = function () {

        $scope.Categoryshow = true;
       
        $scope.Complaintshow = true;
        $scope.ComplaintSave = false;
        $scope.ComplaintBrand = true;
		$scope.Complainttotal = false;
		$scope.UploadFile = false;

        ComplaintCategoryService.List()
        .then(function(success){
            console.log(success);
            if (success.data != null) {
                $scope.ComplaintCategoryArray = success.data;
            };
        },
        function(error){
            console.log(error);
        });
       

    };




    $scope.AddComplaint = function () {
        $scope.ComplaintCategory = '';
        $scope.Categoryshow = false;
        $scope.Complaintshow = false;
        $scope.ComplaintSave = true;
        $scope.ComplaintBrand = false;
		$scope.Complainttotal = true;

		$scope.UploadFile = false;

    };


    $scope.Back = function () {
        $scope.init();
        $scope.Categoryshow = true;
    };



    $scope.Save = function () {
        if (!$scope.ComplaintCategory) {
            console.log("hi");
            return false;
        }
        var obj = {
            complaintCategory: $scope.ComplaintCategory,
        }
        ComplaintCategoryService.save(obj)
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




    $scope.Edit = function (ComplaintCategoryID, ComplaintCategory) {
        console.log(ComplaintCategoryID);
        $scope.ComplaintCategoryID = ComplaintCategoryID;
        $scope.ComplaintCategory = ComplaintCategory;



        $scope.Categoryshow = false;
        $scope.Complaintshow = false;
        $scope.ComplaintSave = true;
        $scope.ComplaintBrand = true;
        $scope.Complainttotal = false;

    }


    $scope.update = function () {
        console.log('ComplaintCategoryID');
        var obj = {
            ComplaintCategory : $scope.ComplaintCategory,
            ComplaintCategoryID: $scope.ComplaintCategoryID,
        };
        ComplaintCategoryService.update(obj)
        .then(function(success){
            console.log(success);
            if (success.data != null) {


                $scope.init();
            }
        },
        function(error){
            console.log(error);
        });

    };




    $scope.Delete = function (ComplaintCategoryID) {
        console.log(ComplaintCategoryID);

        var obj = {
            ComplaintCategoryID: ComplaintCategoryID,
        }
        ComplaintCategoryService.delete(obj)
       .then(function (success) {
           console.log(success);
           $scope.init();
       },
       function (error) {
           console.log(error);
       });

    };

    $scope.init();








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
		ComplaintCategoryService.UploadComplaintCategoryExel(fd)

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
		$scope.UploadFile = true;
	
		$scope.Complaintshow = false;
		$scope.Categoryshow = false;
	}

});