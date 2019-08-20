var app = angular.module('homeApp', ['ngRoute','angular-loading-bar',
    'ui.bootstrap',
    'ui.select', 'ngSanitize',
    'ngAnimate',   
    '720kb.datepicker', 
    'angularjs-dropdown-multiselect',
    'angularUtils.directives.dirPagination', 
    'TechnicalHeadModule',
    'RequestCreationModule',
    , 'ProductModule', 'BrandModule', 'DealerModule', 'ComplaintCategoryModule',
    'ComplaintTypeModule', 'FlowMatrixModule', 'ComplaintStakeHoldersModule', 'ComplaintSystemInfoModule'
    , 'PendingRequestModule',
'InProcessRequestModule']);

app.factory('httpRequestInterceptor', function () {
    return {
        request: function (config) {
            var session = angular.fromJson(sessionStorage.getItem("app")) || {};
            console.log(session.data.userAuthKey);
            config.headers['Authorization'] = session.data.userAuthKey;
            console.log(config);
            return config;
        },

        responseError: function (response) {

        }
    };
});

app.filter('percentage', ['$filter', function ($filter) {
    return function (input, decimals) {
        return $filter('number')(input * 100, decimals) + '%';
    };
}]);

app.filter('propsGL', function () {
    return function (items, props) {
        var out = [];

        if (angular.isArray(items)) {
            var keys = Object.keys(props);

            items.forEach(function (item) {
                var itemMatches = false;

                for (var i = 0; i < keys.length; i++) {
                    var prop = keys[i];
                    // var text1 = props['CostCenter_code'].toLowerCase();
                    var text2 = props['SkuDesc'].toLowerCase();
                    if (item['SkuCode'].toString().toLowerCase().indexOf(text2) !== -1 || item['SkuDesc'].toString().toLowerCase().indexOf(text2) !== -1) {
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
         //.when('/', {
         //    templateUrl: '',
         ////    controller: 'HomeController'
         //})
        .when('/Request', {
            templateUrl: 'Partial/RequestCreation.html',
            controller: 'RequestCreationController'
        })

        .when('/Technical', {
            templateUrl: 'Partial/TechnicalHead.html',
            controller: 'TechnicalHeadController'
        })

        .when('/DealerMaster', {
            templateUrl: 'partial/DealerMaster.html',
            controller: 'DealerJsController'
        })
         .when('/DepotMaster', {
             templateUrl: 'partial/DepotMaster.html',
             controller: 'DepotJsController'
         })
         .when('/UomMaster', {
             templateUrl: 'partial/UomMaster.html',
             controller: 'UomMasterJsController'
         })
            .when('/ProductMaster', {
                templateUrl: 'partial/ProductMaster.html',
                controller: 'ProductMasterJsController'
            })

         .when('/ApprovalMatrix', {
             templateUrl: 'partial/ApprovalMatrix.html',
             controller: 'ApprovalMatrixJsController'
         })
              .when('/RequestDetails', {
                  templateUrl: 'partial/RequestDetails.html',
                  controller: 'RequestDetailsMatrixJsController'
              })



         .when('/InProcessRequest', {
             templateUrl: 'partial/InProcessRequest.html',
             controller: 'InProcessRequestJsController'
         })


         .when('/ApprovedRequest', {
             templateUrl: 'partial/ApprovedRequest.html',
             controller: 'ApprovedRequestJsController'
         })

    

         .when('/PendingRequest', {
             templateUrl: 'partial/PendingRequest.html',
             controller: 'PendingRequestJsController'
         })

    

         .when('/RejectRequest', {
             templateUrl: 'partial/RejectRequest.html',
             controller: 'RejectRequestJsController'
         })
          .when('/br', {
              templateUrl: 'partial/BillingRequest.html',
              controller: 'BillingRequestJsController'
          })
         .when('/rm', {
             templateUrl: 'partial/ReasonMaster.html',
             controller: 'ReasonMasterController'
         })
         .when('/nm', {
             templateUrl: 'partial/NotificationMaster.html',
             controller: 'NotificationMasterController'
         })
         .when('/cr', {
             templateUrl: 'partial/ClosedRequest.html',
             controller: 'ClosingRequestJsController'
        })
        .when('/cnr', {
            templateUrl: 'partial/AllRequest.html',
            controller: 'AllRequestJsController'
        })

        .when('/Product', {
            templateUrl: "Partial/Product.html",
            controller: 'ProductController'
        })
        .when('/Dealer', {
            templateUrl: "Partial/Dealer.html",
            controller: 'DealerController'
        })
        .when('/Brand', {
            templateUrl: "Partial/Brand.html",
            controller: 'BrandController'
        })
        .when('/ComplaintCategory', {
            templateUrl: "Partial/ComplaintCategory.html",
            controller: 'ComplaintCategoryController'
        })
        .when('/ComplaintType', {
            templateUrl: "Partial/ComplaintType.html",
            controller: 'ComplaintTypeController'
        })
        .when('/FlowMatrix', {
            templateUrl: "Partial/FlowMatrix.html",
            controller: 'FlowMatrixController'
        })
        .when('/ComplaintStakeHolders', {
            templateUrl: "Partial/ComplaintStakeHolders.html",
            controller: 'ComplaintStakeHoldersController'
        })
        .when('/ComplaintSystemInfo', {
            templateUrl: "Partial/ComplaintSystemInfo.html",
            controller: 'ComplaintSystemInfoController'
        })
        .when('/pr', {
            templateUrl: "Partial/PendingRequest.html",
            controller: 'PendingRequestController'
        })
        .when('/ipr', {
            templateUrl: "Partial/InProcessRequest.html",
            controller: 'InProcessRequestController'
        })

         .otherwise({ redirectTo: '/' });

});

app.service('HomeService', function ($http) {
    //this.getCountries = function () {
    //    return $http.get('/api/master/GetAllCountries');
    //};
    // app.service('HomeService', function ($http) {
    this.GetUserDetails = function (id) {
        return $http.post('/api/User/ValidateLFGUser', id, {});
    };
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

        HomeService.GetUserDetails(obj).then(function (success) {
            if (success.data != null) {
                if (success.EMP_CODE != '') {
                    console.log(success.data);
                    sessionStorage.setItem("app", angular.toJson(success.data));
                    var session = angular.fromJson(sessionStorage.getItem("app")) || {};
                    console.log(session);
                    $rootScope.GlobalMessage = '';
                    $rootScope.divGlobalMessage = false;
                    $rootScope.session = session;
                    $rootScope.EMP_CODE = $rootScope.session.EMP_CODE;
                    $scope.RoleName = $rootScope.session.Role;
                    $scope.SplitRole = '';

                    $rootScope.SplitRole = ($rootScope.session.Role.indexOf("President") != -1 || $rootScope.session.Role.indexOf("PostPresident") != -1) ? 'President' : ($rootScope.session.Role.indexOf("Purchase") != -1 || $rootScope.session.Role.indexOf("PostPurchase") != -1) ? 'Purchase' : ($rootScope.session.Role.indexOf("Finance") != -1 || $rootScope.session.Role.indexOf("PostFinance") != -1) ? 'Finance' : $rootScope.session.Role;
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

        return deferred.promise;
    }
    //----------------------------------------



    $scope.signout = function () {
        var data = {};
        sessionStorage.setItem("app", angular.toJson(data));
        $rootScope.session = {};
        window.location.assign('./login.html');

    };


    $rootScope.Maininit();
});





