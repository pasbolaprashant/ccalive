var app = angular.module('homeApp', ['720kb.datepicker', 'ngRoute', 'ngLoadingSpinner', 'datePicker',
    'ui.bootstrap',
    'ui.select', 'ngSanitize',
    'ngAnimate',   
    'angularjs-dropdown-multiselect',
    'angularUtils.directives.dirPagination', 
    'TechnicalHeadModule',
    'RequestCreationModule', 'ng-decimal',
    , 'ProductModule', 'BrandModule', 'DealerModule', 'ComplaintCategoryModule',
    'ComplaintTypeModule', 'FlowMatrixModule', 'ComplaintStakeHoldersModule', 'ComplaintSystemInfoModule'
    , 'PendingRequestModule',
    'InProcessRequestModule','ReSubmissionUserModule',
    'CompensationRequestModule', 'PendingCompensationRequestModule', 'ClosedRequestModule', 'RejectedRequestModule', 'ApprovedCompensationRequestModule',
    'RejectedCompensationRequestModule', 'DashboardModule', 'InProcessCompensationRequestModule', 'CCReportModule', 'chart.js', 'TSEModule', 'AdminModule', 'ALLComplaintRecordModule', 'checklist-model'
    , 'ProductManufacturerLocationModule', 'RequesterUserModule','CCA_ResponseReportModule']);

app.factory('httpRequestInterceptor', function () {
    return {
        request: function (config) {
            //var session = angular.fromJson(sessionStorage.getItem("app")) || {};
            //console.log(session.data.userAuthKey);
            config.headers['Authorization'] = '';
            //console.log(config);
            return config;
        },

        responseError: function (response) {

        }
    };
});

app.run(function ($rootScope, $templateCache) {
    $rootScope.$on('$routeChangeStart', function (event, next, current) {
        if (typeof (current) !== 'undefined') {
            $templateCache.remove(current.templateUrl);
        }
    });
});

app.filter('percentage', ['$filter', function ($filter) {
    return function (input, decimals) {
        return $filter('number')(input * 100, decimals) + '%';
    };
}]);

app.filter('propsFilter', function () {
    return function (items, props) {
        var out = [];

        if (angular.isArray(items)) {
            var keys = Object.keys(props);

            items.forEach(function (item) {
                var itemMatches = false;

                for (var i = 0; i < keys.length; i++) {
                    var prop = keys[i];
                    // var text1 = props['CostCenter_code'].toLowerCase();
                    var text2 = props['DealerName'].toLowerCase();
                    if (item['DealerCode'].toString().toLowerCase().indexOf(text2) !== -1 || item['DealerName'].toString().toLowerCase().indexOf(text2) !== -1) {
                        itemMatches = true;
                        break;
                    }
                }

                if (itemMatches) {
                    out.push(item);
                }
            });
        } else {
            // Let the output be the input untouched
            out = items;
        }

        return out;
    };
});

app.filter('propsProduct', function () {
    return function (items, props) {
        var out = [];

        if (angular.isArray(items)) {
            var keys = Object.keys(props);

            items.forEach(function (item) {
                var itemMatches = false;

                for (var i = 0; i < keys.length; i++) {
                    var prop = keys[i];
                    // var text1 = props['CostCenter_code'].toLowerCase();
                    var text2 = props['ProductDescription'].toLowerCase();
                    if (item['ProductCode'].toString().toLowerCase().indexOf(text2) !== -1 || item['ProductDescription'].toString().toLowerCase().indexOf(text2) !== -1) {
                        itemMatches = true;
                        break;
                    }
                }

                if (itemMatches) {
                    out.push(item);
                }
            });
        } else {
            // Let the output be the input untouched
            out = items;
        }

        return out;
    };
});


app.filter('propsBatch', function () {
    return function (items, props) {
        var out = [];

        if (angular.isArray(items)) {
            var keys = Object.keys(props);

            items.forEach(function (item) {
                var itemMatches = false;

                for (var i = 0; i < keys.length; i++) {
                    var prop = keys[i];
                    // var text1 = props['CostCenter_code'].toLowerCase();
                    var text2 = props['BatchNumber'].toLowerCase();
                    if (item['BatchNumber'].toString().toLowerCase().indexOf(text2) !== -1 || item['ProductDescription'].toString().toLowerCase().indexOf(text2) !== -1) {
                        itemMatches = true;
                        break;
                    }
                }

                if (itemMatches) {
                    out.push(item);
                }
            });
        } else {
            // Let the output be the input untouched
            out = items;
        }

        return out;
    };
});

app.filter('propsDL', function () {
    return function (items, props) {
        var out = [];

        if (angular.isArray(items)) {
            var keys = Object.keys(props);

            items.forEach(function (item) {
                var itemMatches = false;

                for (var i = 0; i < keys.length; i++) {
                    var prop = keys[i];
                    // var text1 = props['CostCenter_code'].toLowerCase();
                    var text2 = props['DealerName'].toLowerCase();
                    if (item['DealerCode'].toString().toLowerCase().indexOf(text2) !== -1 || item['DealerName'].toString().toLowerCase().indexOf(text2) !== -1) {
                        itemMatches = true;
                        break;
                    }
                }

                if (itemMatches) {
                    out.push(item);
                }
            });
        } else {
            // Let the output be the input untouched
            out = items;
        }

        return out;
    };
});

app.directive('numbersOnly', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {
            function fromUser(text) {
                if (text) {
                    var transformedInput = text.replace(/[^0-9]/g, '');

                    if (transformedInput !== text) {
                        ngModelCtrl.$setViewValue(transformedInput);
                        ngModelCtrl.$render();
                    }
                    return transformedInput;
                }
                return undefined;
            }
            ngModelCtrl.$parsers.push(fromUser);
        }
    };
});

app.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;

            element.bind('change', function () {
                scope.$apply(function () {
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);


app.config(function ($routeProvider, $httpProvider) {
    $routeProvider
         .when('/', {
             templateUrl: 'Partial/Dashboard.html',
             controller: 'DashboardController'
         })
        .when('/Request/', {
            templateUrl: 'Partial/RequestCreation.html',
            controller: 'RequestCreationController'
        })

        .when('/Technical/', {
            templateUrl: 'Partial/TechnicalHead.html',
            controller: 'TechnicalHeadController'
        })

        .when('/DealerMaster/', {
            templateUrl: 'partial/DealerMaster.html',
            controller: 'DealerJsController'
        })
         .when('/DepotMaster/', {
             templateUrl: 'partial/DepotMaster.html',
             controller: 'DepotJsController'
         })
         .when('/UomMaster/', {
             templateUrl: 'partial/UomMaster.html',
             controller: 'UomMasterJsController'
         })
            .when('/ProductMaster/', {
                templateUrl: 'partial/ProductMaster.html',
                controller: 'ProductMasterJsController'
            })

         .when('/ApprovalMatrix/', {
             templateUrl: 'partial/ApprovalMatrix.html',
             controller: 'ApprovalMatrixJsController'
         })
              .when('/RequestDetails/', {
                  templateUrl: 'partial/RequestDetails.html',
                  controller: 'RequestDetailsMatrixJsController'
              })



         .when('/InProcessRequest/', {
             templateUrl: 'partial/InProcessRequest.html',
             controller: 'InProcessRequestJsController'
         })


         .when('/ApprovedRequest/', {
             templateUrl: 'partial/ApprovedRequest.html',
             controller: 'ApprovedRequestJsController'
         })

    

         .when('/PendingRequest/', {
             templateUrl: 'partial/PendingRequest.html',
             controller: 'PendingRequestJsController'
         })

    

         .when('/RejectRequest/', {
             templateUrl: 'partial/RejectRequest.html',
             controller: 'RejectRequestJsController'
         })
          .when('/br/', {
              templateUrl: 'partial/BillingRequest.html',
              controller: 'BillingRequestJsController'
          })
         .when('/rm/', {
             templateUrl: 'partial/ReasonMaster.html',
             controller: 'ReasonMasterController'
         })
         .when('/nm/', {
             templateUrl: 'partial/NotificationMaster.html',
             controller: 'NotificationMasterController'
         })
         .when('/cr/', {
             templateUrl: 'partial/ClosedRequest.html',
             controller: 'ClosingRequestJsController'
        })
        .when('/cnr/', {
            templateUrl: 'partial/AllRequest.html',
            controller: 'AllRequestJsController'
        })

        .when('/Product/', {
            templateUrl: "Partial/Product.html",
            controller: 'ProductController'
        })
        .when('/Dealer/', {
            templateUrl: "Partial/Dealer.html",
            controller: 'DealerController'
        })
        .when('/Brand/', {
            templateUrl: "Partial/Brand.html",
            controller: 'BrandController'
        })
        .when('/ComplaintCategory/', {
            templateUrl: "Partial/ComplaintCategory.html",
            controller: 'ComplaintCategoryController'
        })
        .when('/ComplaintType/', {
            templateUrl: "Partial/ComplaintType.html",
            controller: 'ComplaintTypeController'
        })
        .when('/FlowMatrix/', {
            templateUrl: "Partial/FlowMatrix.html",
            controller: 'FlowMatrixController'
        })
        .when('/ComplaintStakeHolders/', {
            templateUrl: "Partial/ComplaintStakeHolders.html",
            controller: 'ComplaintStakeHoldersController'
        })
        .when('/ComplaintSystemInfo/', {
            templateUrl: "Partial/ComplaintSystemInfo.html",
            controller: 'ComplaintSystemInfoController'
        })
        .when('/pr/', {
            templateUrl: "Partial/PendingRequest.html",
            controller: 'PendingRequestController'
        })
        .when('/ipr/', {
            templateUrl: "Partial/InProcessRequest.html",
            controller: 'InProcessRequestController'
        })
        .when('/cpr/', {
            templateUrl: "Partial/CompensationForm.html",
            controller: 'CompensationRequestController'
        })
        .when('/pcpr/', {
            templateUrl: "Partial/PendingCompensation.html",
            controller: 'PendingCompensationRequestController'
        })
        .when('/cr/', {
            templateUrl: "Partial/ClosedRequest.html",
            controller: 'ClosedRequestController'
        })
        .when('/rr/', {
            templateUrl: "Partial/RejectedRequest.html",
            controller: 'RejectedRequestController'
        })
        .when('/acr/', {
            templateUrl: "Partial/ApprovedCompRequest.html",
            controller: 'ApprovedCompensationRequestController'
        })
         .when('/rcr/', {
             templateUrl: "Partial/RejectedCompRequest.html",
             controller: 'RejectedCompensationRequestController'
         })
            .when('/ipc/', {
                templateUrl: "Partial/InProcessCompRequest.html",
                controller: 'InProcessCompensationRequestController'
            })
        .when('/Rsu/', {
            templateUrl: 'partial/ReSubmissionUser.html',
            controller: 'ReSubmissionUserController'
        })
        .when('/Ruser/', {
            templateUrl: 'partial/RequesterUser.html',
            controller: 'RequesterUserController'
        })
    

          .when('/CCR/', {
              templateUrl: 'partial/CCReport.html',
              controller: 'CCReportController'
          })
          .when('/PendingComplaintPrint/', {
              templateUrl: 'partial/PendingComplaintPrint.html',
              controller: 'PendingComplaintPrintController'
        })
        .when('/TSE/', {
            templateUrl: 'partial/TSEMaster.html',
            controller: 'TSEMasterController'
        })
        .when('/Admin/', {
            templateUrl: 'partial/Admin.html',
            controller: 'AdminController'
        })
        .when('/ALLComplaintRecord/', {
            templateUrl: 'partial/ALLComplaintRecord.html',
            controller: 'ALLComplaintRecordController'
        })

        .when('/ProductManufacturerLocation/', {
            templateUrl: 'partial/ProductManufacturerLocation.html',
            controller: 'ProductManufacturerLocationController'
        })

        .when('/CCA_ResponseReport/', {
            templateUrl: 'partial/CCA_ResponseReport.html',
            controller: 'CCA_ResponseReportController'
        })

    
        .otherwise({ redirectTo: '/' });
    $httpProvider.interceptors.push('httpRequestInterceptor');

});

app.service('HomeService', function ($http) {
    //this.getCountries = function () {
    //    return $http.get('/api/master/GetAllCountries');
    //};
    // app.service('HomeService', function ($http) {

    var ReqIds = {
        Cpmplaint_Id: '',
       
        Created_By: '',
        Status_Id: '',
        ComplaintNumber:'',
    };
    this.GetUserDetails = function (id) {
        return $http.post('/api/User/ValidateLFGUser', id, {});
    };

    //this.GetValidateAccess = function (id) {
    //    return $http.post('/api/User/GetValidateAccess', id, {});
    //};
    this.GetValidateUser = function (EmpCode) {        return $http.get('/api/User/GetValidateAccess?EmpCode=' + EmpCode);    };
    
  
    //});
    this.getMenuData = function (data) {
        console.log(data);
        return $http.post('/api/IOS_WRM/getMenuData', data, {});
    };
});



app.controller('HomeController', function ($scope, HomeService, $http, $routeParams, $rootScope, $q) {

    //$rootScope.uid = "";
    $scope.LoggedInUser = '';
    $scope.RoleName = '';
    $scope.AdminSetup = false;
    $scope.SHSetup = false;
    $scope.DHSetup = false;
    $scope.FinanceSetup = false;
    $scope.Report = false;
    $scope.ApprovalScreen = false;
    $scope.ValidUser = false;
    $scope.GlobalMessage = '';
    $rootScope.divGlobalMessage = false;
    $rootScope.session = {};
    $rootScope.uid = "";

    $rootScope.PrintLog = true;

    console.log("homecontroller ");


    //-----------------------------------------------
    $rootScope.Maininit = function () {
        var deferred = $q.defer();
        console.log("at homecontroller");
        var array = location.search.substring(1).split('=');
        var KEy = '';
        var Value = '';
        if (array.length > 0) {
            KEy = array[0];
            Value = array[1];
        }
        if (KEy == 'udi') {
            var obj = {
                Oth_key: Value,
            };
            $scope.Emp = Value;
        }
        else {
            //if ($location.search().hasOwnProperty('udi')) {
            //    uid = $location.search()['udi'];
            //    //$rootScope.uid = uid;
            //    window.location.assign('./index.html?udi=' + uid);
            //}
        }
        //obj.Oth_key = 'NPI642';


        //-------------------------------------

        //HomeService.GetValidateAccess(obj).then(function (success) {

        //  if (success.data == 'Valid User')
        //  {

        HomeService.GetUserDetails(obj).then(function (success) {
            if (success.data != null) {
                if (success.EMP_CODE != '') {
                    console.log(success.data);
                    sessionStorage.setItem("app", angular.toJson(success.data));
                    var session = angular.fromJson(sessionStorage.getItem("app")) || {};
                    console.log(session);

                    //for access managemenet                    HomeService.GetValidateUser(session.EMP_CODE).then(function (success) {                        console.log(success.data);                        if (success.data === 'Valid User' || session.isAdmin === true || session.EMP_CODE === '0') {

                    $rootScope.GlobalMessage = '';
                    $rootScope.divGlobalMessage = false;
                    $rootScope.session = session;
                    $rootScope.EMP_CODE = $rootScope.session.EMP_CODE;
                    $scope.RoleName = $rootScope.session.Role;
                    $scope.SplitRole = '';

                    $scope.RoleName = $rootScope.session.Role.indexOf("User") != -1 ? "User" : $rootScope.session.Role.indexOf("Admin") != -1 ? "Admin" : $rootScope.session.Role;
                    console.log($rootScope.SplitRole);
                    // $scope.SplitRole = ($rootScope.session.Role.indexOf("Purchase") != -1 || $rootScope.session.Role.indexOf("PostPurchase") != -1) ? 'Purchase' : '';
                    // $scope.SplitRole = ($rootScope.session.Role.indexOf("Finance") != -1 || $rootScope.session.Role.indexOf("PostFinance") != -1) ? 'Finance' : '';
                    $rootScope.isAdmin = $rootScope.session.isAdmin;
                    if ($rootScope.session.EMP_CODE == '0') {
                        $scope.RoleName = 'Admin';
                        $rootScope.isAdmin = true;
                    }

                    if ($rootScope.session.IsDivisionHead) {
                        $rootScope.SplitRole = 'Divisional_head';
                    }

                    console.log('login');
                    $scope.LoggedInUser = session.Emp_First_name;
                    console.log($scope.LoggedInUser);
                    //window.location.assign('./index.html');
                    deferred.resolve($rootScope.session = session);

                } else {                    swal("You are not a valid user");                    return false;                }            });



                }
                else {
                    console.log('Error case');
                    $scope.RoleName = '';
                    deferred.reject($rootScope.session = {});
                }
            }
            else {
                console.log('Error case');
                $scope.RoleName = '';
                deferred.reject($rootScope.session = {});
            }

        },
            function (error) {
                console.log('Error case');
                $scope.RoleName = '';
                deferred.reject($rootScope.session = {});
            });

        //  }
        //   else {



        //    if (obj.Oth_key=='0')
        //    {
        //        HomeService.GetUserDetails(obj).then(function (success) {
        //            if (success.data != null) {
        //                if (success.EMP_CODE != '') {
        //                    console.log(success.data);
        //                    sessionStorage.setItem("app", angular.toJson(success.data));
        //                    var session = angular.fromJson(sessionStorage.getItem("app")) || {};
        //                    console.log(session);
        //                    $rootScope.GlobalMessage = '';
        //                    $rootScope.divGlobalMessage = false;
        //                    $rootScope.session = session;
        //                    $rootScope.EMP_CODE = $rootScope.session.EMP_CODE;
        //                    $scope.RoleName = $rootScope.session.Role;
        //                    $scope.SplitRole = '';

        //                    $scope.RoleName = $rootScope.session.Role.indexOf("User") != -1 ? "User" : $rootScope.session.Role.indexOf("Admin") != -1 ? "Admin" : $rootScope.session.Role;
        //                    console.log($rootScope.SplitRole);
        //                    // $scope.SplitRole = ($rootScope.session.Role.indexOf("Purchase") != -1 || $rootScope.session.Role.indexOf("PostPurchase") != -1) ? 'Purchase' : '';
        //                    // $scope.SplitRole = ($rootScope.session.Role.indexOf("Finance") != -1 || $rootScope.session.Role.indexOf("PostFinance") != -1) ? 'Finance' : '';
        //                    $rootScope.isAdmin = $rootScope.session.isAdmin;
        //                    if ($rootScope.session.EMP_CODE == '0') {
        //                        $scope.RoleName = 'Admin';
        //                        $rootScope.isAdmin = true;
        //                    }

        //                    if ($rootScope.session.IsDivisionHead) {
        //                        $rootScope.SplitRole = 'Divisional_head';
        //                    }

        //                    console.log('login');
        //                    $scope.LoggedInUser = session.Emp_First_name;
        //                    console.log($scope.LoggedInUser);
        //                    //window.location.assign('./index.html');
        //                    deferred.resolve($rootScope.session = session);
        //                }
        //                else {
        //                    console.log('Error case');
        //                    $scope.RoleName = '';
        //                    deferred.reject($rootScope.session = {});
        //                }
        //            }
        //            else {
        //                console.log('Error case');
        //                $scope.RoleName = '';
        //                deferred.reject($rootScope.session = {});
        //            }

        //        },
        //            function (error) {
        //                console.log('Error case');
        //                $scope.RoleName = '';
        //                deferred.reject($rootScope.session = {});
        //            });
        //    }
        //    else{

        //    swal("Error", success.data, "error");
        //   // closeWindow();
        //    }
        //}
        //  },
        //function (error) {
        //    console.log('Error case');
        //    $scope.RoleName = '';
        //    deferred.reject($rootScope.session = {});
        //});

        return deferred.promise;
    };
    //----------------------------------------



    $scope.signout = function () {
        var data = {};
        sessionStorage.setItem("app", angular.toJson(data));
        $rootScope.session = {};
        window.location.assign('./login.html');

    };







    $rootScope.Maininit();
});





