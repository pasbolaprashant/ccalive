var app = angular.module('DealerModule', []);
app.service('DealerService',function($http){
this.save = function (obj) {
    console.log(obj);
    return $http.post('/api/Dealer/save', obj, {})
};

this.List = function () {
    return $http.get('/api/Dealer/List')
};
this.update = function (obj) {
    console.log(obj);
    return $http.post('/api/Dealer/update', obj, {});
};

this.delete = function (obj) {
    console.log(obj);
    return $http.post('/api/Dealer/delete', obj, {});
};

});


app.controller('DealerController', function ($scope,DealerService) {
    console.log("Dealer");




    $scope.Dealershow = true;
    $scope.DealerAdd = true;
    $scope.DealerSave = false;
    $scope.Dealertotal = false;
    $scope.UpdateDealer = false;



    $scope.init = function () {

     

        DealerService.List()
        .then(function (success) {
            console.log(success);
            if (success.data != null) {
                $scope.DealerArray = success.data;
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

        }
        DealerService.save(obj)
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

    




    $scope.AddDealer = function () {
        $scope.Dealershow = false;
        $scope.DealerSave = true;
        $scope.Dealertotal = true;
        $scope.UpdateDealer = false;
    };


    $scope.Back = function () {



        $scope.Dealershow = true;
        $scope.DealerAdd = true;
        $scope.DealerSave = false;
        $scope.Dealertotal = false;
        $scope.UpdateDealer = false;


    };




    $scope.Edit = function (DealerID, DealerName, DealerCode, DealerAddress) {
        console.log(DealerID);
        $scope.DealerID = DealerID;
        $scope.DealerName = DealerName;
        $scope.DealerCode = DealerCode;
        $scope.DealerAddress = DealerAddress;


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



});
