var app = angular.module('FlowMatrixModule', []);
app.service('FlowMatrixService', function ($http) {
	//this.update = function (obj) {
	//	console.log(obj);
	//	return $http.post('/api/FlowMatrix/update', obj, {});
	//};

	this.Update = function (obj) {
		console.log(obj);
		return $http.post('/api/FlowMatrix/Update', obj, {});
	};
	this.save = function (obj) {
		console.log(obj);
		return $http.post('/api/FlowMatrix/save', obj, {});
	};
	this.List = function () {
		return $http.get('/api/FlowMatrix/List')
	};
	this.Delete = function (obj) {
		console.log(obj);
		return $http.post('/api/FlowMatrix/Delete', obj, {})

    };

    this.GetBU = function () {
        return $http.get('/api/ComplaintStakeHolders/GetBU')
    };

	//this.List = function () {
	//    return $http.get('/api/FlowMatrix/Matrix')
	//}
});



app.controller('FlowMatrixController', function ($scope, FlowMatrixService) {
	console.log("FlowMatrix");


	$scope.FlowMatrixArray = [];

    $scope.TypeArray = [

        { value: "Local" },
        { value: "GroupAR" },
        { value: "SMP" },
        { value: "NonPaint" }
    ];


   






	$scope.AddMatrix = function () {

		$scope.FlowMatrixArray.push({
            SBU_Name: "",
			BM: "",
			Plant: "",
            RandD: "",
            OutSourced: "",
			BMLimit: 0.00,
            TypeArray: $scope.TypeArray,
            BU_Array: $scope.BU_Array,
			Type: "",
			FlowMatrixID: null,

		});
	};


	$scope.RemoveMatrix = function (index, FlowMatrixID) {
		console.log(FlowMatrixID);
		$scope.FlowMatrixArray.splice(index, 1)

		if (FlowMatrixID) {


			var obj = {
				FlowMatrixID: FlowMatrixID,

			}
			console.log(obj);
			FlowMatrixService.Delete(obj)
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




	$scope.Delete = function (FlowMatrixID) {
		console.log(FlowMatrixID);
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

					console.log(FlowMatrixID);

					var obj = {
						FlowMatrixID: FlowMatrixID,

					}
					console.log(obj);
					FlowMatrixService.Delete(obj)
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







	//$scope.FlowMatrixArray = [{
	//    Local_LOCAL: 1
	//},
	//  {
	//      GroupAr_AR: 1
	//  }];

	$scope.ShowSave = true;



	$scope.init = function () {
        $scope.FlowMatrixArray = [];


        FlowMatrixService.GetBU().then(function (success) {
            $scope.BU_Array = success.data;
            return FlowMatrixService.List()
        }).then(function (success) {
            console.log(success);
            if (success.data.length > 0) {
                angular.forEach(success.data, function (value, key) {
                    $scope.FlowMatrixArray.push({

                        SBU_Name: value.SBU_Name,
                        BM: value.BM,
                        Plant: value.Plant,
                        RandD: value.RandD_AR,
                        OutSourced: value.OutSourced,
                        BMLimit: value.BMLimit,
                        BU_Array: $scope.BU_Array,
                        TypeArray: $scope.TypeArray,
                        Type: value.Type,
                        FlowMatrixID: value.FlowMatrixID


                    });
                });
                //   $scope.FlowMatrixArray = success.data;
                $scope.ShowSave = false;
            };
        }, function (error) {
            console.log(error);
        });

















        //FlowMatrixService.GetBU().then(function (success) {

        //    $scope.BU_Array = success.data;
        //    console.log("BU Array:", $scope.BU_Array);
        //},
        //    function (error) {
        //        console.log(error);
        //    });


		//FlowMatrixService.List().then(function (success) {
		//		console.log(success);
		//		if (success.data.length > 0) {
		//			angular.forEach(success.data, function (value, key) {
		//				$scope.FlowMatrixArray.push({

  //                          SBU_Name: value.SBU_Name,
		//					BM: value.BM,
		//					Plant: value.Plant,
		//					RandD: value.RandD_AR,
  //                          BMLimit: value.BMLimit,
  //                          BU_Array: $scope.BU_Array,
		//					TypeArray: $scope.TypeArray,
		//					Type: value.Type,
		//					FlowMatrixID: value.FlowMatrixID


		//				});
		//			});
		//			//   $scope.FlowMatrixArray = success.data;
		//			$scope.ShowSave = false;
		//		};
		//	},
		//	function (error) {
		//		console.log(error);
		//	});


      



		//FlowMatrixService.Matrix()
		//	.then(function (success) {

		//		if (success.data != null) {
		//			console.log(success.data);
		//			$scope.FuelArray_Main = angular.copy(success.data.FuelType);

		//			$scope.UsedCarMatrixArray[0].FuelArray = success.data.FuelType;


		//			console.log($scope.FlowMatrixArray);

		//		};
		//	},
		//	function (error) {
		//		console.log(error);

		//	});
	};
	$scope.init();







	$scope.Save = function () {

		console.log($scope.FlowMatrixArray);
		FlowMatrixService.save($scope.FlowMatrixArray)
			.then(function (success) {
				console.log(success);
				$scope.init();
			},
			function (error) {
				console.log(error);
			});
	};


	$scope.Update = function () {
		//console.log('FlowMatrixID');
		angular.forEach($scope.FlowMatrixArray, function (value, key) {

			console.log(value);

            if (!value.SBU_Name) {

                return false;
            }

			if (!value.BM) {

				return false;
			}
			if (!value.BMLimit) {

				return false;
			}
			if (!value.Plant) {

				return false;
			}
			if (!value.RandD) {

				return false;
			}
		});

      

		FlowMatrixService.Update($scope.FlowMatrixArray).then(function (success) {
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




	//$scope.Update = function () {
	//	console.log("UpdateArray", $scope.FlowMatrixArray);
	//	FlowMatrixService.update($scope.FlowMatrixArray)
	//		.then(function (success) {
	//			console.log(success);
	//			swal("success", "Updated Successfully!", "success");
	//			$scope.init();
	//		},
	//		function (error) {
	//			console.log(error);
	//			swal("Error", error, "error");
	//		});
	//};

});