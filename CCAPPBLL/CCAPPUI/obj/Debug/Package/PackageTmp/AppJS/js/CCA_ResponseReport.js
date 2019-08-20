var app = angular.module('CCA_ResponseReportModule', []);

app.service('CCResponsiveService', function ($http) {
    
    this.GetEmployeeResponse = function (EmpCode) {

        console.log(EmpCode);

        return $http.get('/api/PendingRequest/GetEmployeeResponse?EmpCode=' + EmpCode);
    };


    this.GetEmployeeResponseDetail = function (EmpCode) {

        return $http.get('/api/PendingRequest/GetEmployeeResponseDetail?EmpCode=' + EmpCode);
    }
    

    this.GetEmployeeList = function () {

        return $http.get('/api/PendingRequest/GetEmployeeList');
    };

    

});

app.controller('CCA_ResponseReportController', function ($scope, $http, $location, $rootScope, HomeService, CCResponsiveService, $uibModal, $q, $filter) {

    $scope.init = function () {
        $scope.avg = false;
        $scope.avgDtl = false;
        $scope.usedID = $rootScope.session.EMP_CODE;
        $scope.GetResponceRequest($scope.usedID);
      
    }

   
    $scope.GetResponceRequest = function (id) {

        console.log(id);
        CCResponsiveService.GetEmployeeResponse($scope.usedID).then(function (success) {
            console.log($scope.usedID);

            if (success.data != null) {
                $scope.avg = true;
                $scope.CCResponsiveReport = success.data;
                console.log($scope.CCResponsiveReport);

            }
          
        },
            function (error) {
                console.log(error);
            });

        
        CCResponsiveService.GetEmployeeList().then(function (success) {

            $scope.EmployeeArray = success.data;
            console.log($scope.EmployeeArray);
        },
            function (error) {
                console.log(error);
            });
    };

    //$scope.Export = function () {
    //     alasql.fn.datetime = function (dateStr) {
    //        var date = $filter('date')(dateStr, 'MMMM dd, yyyy');
    //        return date;
    //    };


    //    var res = alasql('SELECT * INTO XLSX ("CCReport.xlsx",{headers:true}) FROM ?', [$scope.PendingRequest]);
    //};

   
    $scope.AvgDetail = function (pt) {


        CCResponsiveService.GetEmployeeResponse(pt.EmpCode).then(function (success) {
            if (success.data != null) {
                $scope.avg = true;
                $scope.CCResponsiveReport = success.data;
                console.log($scope.CCResponsiveReport);

            }
        },
            function (error) {
                console.log(error);
            });

        //CCResponsiveService.GetEmployeeResponseDetail(pt.EmpCode).then(function (success) {
        //    if (success.data != null) {
        //        $scope.avgDtl = true;
        //        $scope.CCResponsiveReportDtl = success.data;
        //        console.log($scope.CCResponsiveReport);

        //    }
        //},
        //    function (error) {
        //        console.log(error);
        //    });
    };

     



    $scope.init();


});

