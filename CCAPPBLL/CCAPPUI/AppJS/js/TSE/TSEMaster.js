var app = angular.module('TSEModule', []);
app.service('TSEService', function ($http) {

	//this.Save = function (obj) {
	//	console.log(obj);
	//	return $http.post('/api/TSEMaster/Save', obj, {});
	//};

	//this.Delete = function (obj) {
	//	console.log(obj);
	//	return $http.post('/api/TSEMaster/Delete', obj, {});
	//};
	//this.Update = function (obj) {
	//	console.log(obj);
	//	return $http.post('/api/TSEMaster/Update', obj, {});
	//};	


	//this.List = function () {
	//	return $http.get('/api/TSEMaster/List')
	//};





	this.Update = function (obj) {
		console.log(obj);
		return $http.post('/api/TSEMaster/Update', obj, {});
	};
	this.save = function (obj) {
		console.log(obj);
		return $http.post('/api/TSEMaster/save', obj, {});
	};
	this.List = function () {
		return $http.get('/api/TSEMaster/List')
	};
	this.Delete = function (obj) {
		console.log(obj);
		return $http.post('/api/TSEMaster/Delete', obj, {})

	};

});


app.controller('TSEMasterController', function ($scope, TSEService, $rootScope) {
	console.log("TSE");

	
	//$scope.TSEGrid = true;
	//$scope.TSEGridView = true;

	//$scope.TSEAddDetail = false;




	//$scope.init = function () {


	//	$scope.TSEGrid = true;
	//	$scope.TSEGridView = true;
	//	$scope.TSEAddDetail = false;


	//	TSEService.List()
	//		.then(function (success) {
	//			console.log(success);
	//			if (success.data != null) {
	//				$scope.TSEArray = success.data;
	//			};
	//		},
	//		function (error) {
	//			console.log(error);

	//		});
	//};
	//$scope.init();




	//$scope.AddTSE = function () {

	//	//$scope.TSEArray = "";

	//	$scope.Area = "";
	//	$scope.EmpCode = "";



	//	$scope.TSEUpdate = false;
	//	$scope.TSEGrid = false;
	//	$scope.TSEGridView = false;
	//	$scope.TSESave = true;
	//	$scope.TSEAddDetail = true;
	//	//$scope.TSESave = true;
	//	//$scope.TSEtotal = true;

	//};

	//$scope.Back = function () {
	//	$scope.init();


	//};


	//$scope.Save = function () {
	//	//if (!$scope.BrandName) {
	//	//    swal("Error", "BrandName Cannot Be Empty", "error");
	//	//    return false;
	//	//}
	//	console.log("Hello");

	//	var obj = {
	//		Area: $scope.Area,
	//		EmpCode: $scope.EmpCode,
		
	//	};
	//	console.log(obj);
	//	TSEService.Save(obj)
	//		.then(function (success) {
	//			console.log(success);
	//			if (success.data.indexOf('error') == -1) {

	//				swal("Success", "Successfully saved", "success");

	//				$scope.init();
	//			}
	//			else {
	//				swal("Success", "could not be saved", "success");

	//			}


	//			$scope.init();
	//		});
			
	//};






	//$scope.Edit = function (pt) {
	//	console.log("TSEID");
	//	//$scope.TSEID = BrandID;
	//	//$scope.BrandName = BrandName;


	//	$scope.TSEID = pt.TSEID;
	//	$scope.Area = pt.Area;
	//	$scope.EmpCode = pt.EmpCode;


	//	$scope.TSEGrid = false;
	//	$scope.TSEGridView = false;
	//	$scope.TSEAddDetail = true;
	//	$scope.TSESave = false;
	//	$scope.TSEUpdate = true;




	//}



	//$scope.Delete = function (TSEID) {
	//	console.log(TSEID);

	//	var obj = {
	//		TSEID: TSEID,
	//	}
	//	TSEService.Delete(obj)
	//		.then(function (success) {
	//			console.log(success);
	//			$scope.init();
	//		},
	//		function (error) {
	//			console.log(error);
	//		});

	//};




	//$scope.Update = function () {
	//	console.log('TSEID');
	//	var obj = {
	//		TSEID: $scope.TSEID,
	//		Area: $scope.Area,
	//		EmpCode: $scope.EmpCode,

	//	}
	//	TSEService.Update(obj)
	//		.then(function (success) {
	//			console.log(success);
	//			if (success.data != null) {


	//				$scope.init();
	//			}
	//		},

	//		function (error) {
	//			console.log(error);
	//		});

	//};





	$scope.TSEMatrixArray = [];

	//$scope.TypeArray = [

	//	{ value: "Local" },
	//	{ value: "GroupAR" }
	//]


	$scope.AddMatrix = function () {

		$scope.TSEMatrixArray.push({

			EmpCode: "",
		});
	};


	$scope.RemoveMatrix = function (index, TSEID) {
		console.log(TSEID);
		$scope.TSEMatrixArray.splice(index, 1)


		if (TSEID) {


			var obj = {
				TSEID: TSEID,

			}
			console.log(obj);
			TSEService.Delete(obj)
				.then(function (success) {
					swal("Deleted!", "Data has been deleted.", "success");
					console.log(success);
					$scope.init();
				},
				function (error) {
					console.log(error);
				});
		}

	};




	//$scope.Delete = function (TSEID) {
	//	console.log(TSEID);
	//	swal({
	//		title: "Are you sure?",
	//		text: "You will not be able to recover this imaginary file!",
	//		type: "warning",
	//		showCancelButton: true,
	//		confirmButtonClass: "btn-danger",
	//		confirmButtonText: "Yes",
	//		cancelButtonText: "No",
	//		closeOnConfirm: false,
	//		closeOnCancel: true
	//	},
	//		function (isConfirm) {
	//			if (isConfirm) {

	//				console.log(TSEID);

	//				var obj = {
	//					TSEID: TSEID,

	//				}
	//				console.log(obj);
	//				TSEService.Delete(obj)
	//					.then(function (success) {
	//						swal("Deleted!", "Your file has been deleted.", "success");
	//						console.log(success);

	//						$scope.init();
	//					},
	//					function (error) {
	//						console.log(error);
	//					});

	//			}
	//		});
	//}



	$scope.Delete = function (TSEID) {
		console.log(TSEID);
		swal({
			title: "Are you sure?",
			text: "You will not be able to recover this imaginary file!",
			type: "warning",
			showCancelButton: true,
			confirmButtonClass: "btn-danger",
			confirmButtonText: "Yes",
			cancelButtonText: "No",
			closeOnConfirm: false,
			closeOnCancel: true
		},
			function (isConfirm) {
				if (isConfirm) {

					console.log(TSEID);

					var obj = {
						TSEID: TSEID,

					}
					console.log(obj);
					TSEService.Delete(obj)
						.then(function (success) {
							swal("Deleted!", "Your file has been deleted.", "success");
							console.log(success);

							$scope.init();
						},
						function (error) {
							console.log(error);
						});

				}
			});
	}
	



	$scope.init = function () {
		$scope.TSEMatrixArray = [];
		TSEService.List()
			.then(function (success) {
				console.log(success);
				if (success.data.length > 0) {
					angular.forEach(success.data, function (value, key) {
						$scope.TSEMatrixArray.push({


							EmpCode: value.EmpCode,
							TSEID: value.TSEID,
							AdminID: value.AdminID


						});
					});
					$scope.ShowSave = false;
				};
			},
			function (error) {
				console.log(error);
			});



	};
	$scope.init();







 //   $scope.Save = function () {



	//	console.log($scope.TSEMatrixArray);
	//	TSEService.save($scope.TSEMatrixArray)
	//		.then(function (success) {
	//			console.log(success);
	//			$scope.init();
	//		},
	//		function (error) {
	//			console.log(error);
	//		});
	//};


	$scope.Update = function () {
		console.log('AdminID');
		angular.forEach($scope.TSEMatrixArray, function (value, key) {

            console.log(value.EmpCode);
			if (!value.EmpCode) {

               // swal("success!", "data has been Update.", "success");

				return false;
			}

		});
		var obj = {


			EmployeeCode: $rootScope.session.EMP_CODE,
			TSEMasterBLL: $scope.TSEMatrixArray
		}
			
	
	

           TSEService.Update(obj).then(function (success) {
			swal("Update!", "data has been Update.", "success");
			console.log(success);
			if (success.data != null) {
				$scope.init();
			}
		},

			function (error) {
				console.log(error);
			});

	};





});
