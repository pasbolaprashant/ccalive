var app = angular.module('AdminModule', []);
app.service('AdminService', function ($http) {
	
	this.Update = function (obj) {
		console.log(obj);
		return $http.post('/api/Admin/Update', obj, {});
	};
	this.save = function (obj) {
		console.log(obj);
		return $http.post('/api/Admin/save', obj, {});
	};
	this.List = function () {
		return $http.get('/api/Admin/List')
	};
	this.Delete = function (obj) {
		console.log(obj);
		return $http.post('/api/Admin/Delete', obj, {})

	};
	
});



app.controller('AdminController', function ($scope, AdminService, $rootScope) {
	console.log("Admin");


	$scope.AdminMatrixArray = [];
	console.log($rootScope.session)
	//$scope.TypeArray = [

	//	{ value: "Local" },
	//	{ value: "GroupAR" }
	//]


	$scope.AddMatrix = function () {

		$scope.AdminMatrixArray.push({

			EmpCode: "",
		});
	};


	$scope.RemoveMatrix = function (index, AdminID) {
		console.log(AdminID);
		$scope.AdminMatrixArray.splice(index, 1)


		if (AdminID) {


			var obj = {
				AdminID: AdminID,

			}
			console.log(obj);
			AdminService.Delete(obj)
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




	$scope.Delete = function (AdminID) {
		console.log(AdminID);
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

					console.log(AdminID);

					var obj = {
						AdminID: AdminID,

					}
					console.log(obj);
					AdminService.Delete(obj)
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
		$scope.AdminMatrixArray = [];
		AdminService.List()
			.then(function (success) {
				console.log(success);
				if (success.data.length > 0) {
					angular.forEach(success.data, function (value, key) {
						$scope.AdminMatrixArray.push({

							
							EmpCode: value.EmpCode,
							
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







	$scope.Save = function () {

		console.log($scope.AdminMatrixArray);
		AdminMatrixService.save($scope.AdminMatrixArray)
			.then(function (success) {
				console.log(success);
				$scope.init();
			},
			function (error) {
				console.log(error);
			});
	};


	$scope.Update = function () {
		console.log('AdminID');
		angular.forEach($scope.AdminMatrixArray, function (value, key) {

			console.log(value);

			if (!value.EmpCode) {

				return false;
			}
			
		});
		var obj = {


			EmployeeCode: $rootScope.session.EMP_CODE,
			AdminBLL: $scope.AdminMatrixArray
		}

		AdminService.Update(obj).then(function (success) {
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