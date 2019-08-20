var app = angular.module('CCReportModule', []);

app.service('CCReportService', function ($http) {
    //getCOmplaintTYpe

    var ComplaintID = 0;

    this.GenerateCCReport = function () {

        return $http.get('/api/PendingRequest/GenerateCCReport');
    };
   

});

app.controller('CCReportController', function ($scope, $http, $location, $rootScope, HomeService, CCReportService, $uibModal, $q, $filter) {
    
    $scope.init = function () {      
        $scope.GetPendingRequest();

    }

   

    $scope.GetPendingRequest = function () {
        CCReportService.GenerateCCReport().then(function (success) {

            $scope.PendingRequest = success.data;
            console.log($scope.PendingRequest);
        },
            function (error) {
                console.log(error);
            });

    };

    $scope.Export = function () {
        //console.log('inside init');
        alasql.fn.datetime = function (dateStr) {

            var date = $filter('date')(dateStr, 'MMMM dd, yyyy');
            return date;
        };


        var res = alasql('SELECT * INTO XLSX ("CCReport.xlsx",{headers:true}) FROM ?', [$scope.PendingRequest]);
        //console.log(res);


    };


  


    $scope.init();


});

