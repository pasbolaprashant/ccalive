var module = angular.module('DashboardModule', []);

module.service('DashboardService', function ($http) {
    this.GetTotalRequest = function (obj) {

        return $http.get('/api/PendingRequest/GetTotalRequest?EmpCode=' + obj);
    };
    this.GetTotalInProgressRequest = function (obj) {

        return $http.get('/api/PendingRequest/GetTotalInProgressRequest?EmpCode=' + obj);
    };
    this.GetTotalApprovedRequest = function (obj) {

        return $http.get('/api/PendingRequest/GetTotalApprovedRequest?EmpCode=' + obj);
    };




    this.GetTotalRejectedRequest = function (obj) {

        return $http.get('/api/PendingRequest/GetTotalRejectedRequest?EmpCode=' + obj);
    };
    this.GetTotalInProcessCompRequest = function (obj) {

        return $http.get('/api/PendingRequest/GetTotalInProcessCompRequest?EmpCode=' + obj);
    };
    this.GetTotalPendingRequestForApproval = function (obj) {

        return $http.get('/api/PendingRequest/GetTotalPendingRequestForApproval?EmpCode=' + obj);
    };

    this.GetTotalRejectedCompRequest = function (obj) {

        return $http.get('/api/PendingRequest/GetTotalRejectedCompRequest?EmpCode=' + obj);
    };

    this.GetTotalApprovedCompRequest = function (obj) {

        return $http.get('/api/PendingRequest/GetTotalApprovedCompRequest?EmpCode=' + obj);
    };

    //--------------------------------//
    this.GetTotalPendingRequestForPlant = function (obj) {

        return $http.get('/api/PendingRequest/GetTotalPendingRequestForPlant?EmpCode=' + obj);
    };

    this.GetTotalPendingRequestForRnD = function (obj) {

        return $http.get('/api/PendingRequest/GetTotalPendingRequestForRnD?EmpCode=' + obj);
    };

    this.GetTotalPendingRequestForRnDBM = function (obj) {

        return $http.get('/api/PendingRequest/GetTotalPendingRequestForRnDBM?EmpCode=' + obj);
    };




    this.GetTotalPendingRequestForQuarantine = function (obj) {

        return $http.get('/api/PendingRequest/GetTotalPendingRequestForQuarantine?EmpCode=' + obj);
    };

    this.GetTotalPendingRequestForBusinessManager = function (obj) {

        return $http.get('/api/PendingRequest/GetTotalPendingRequestForBusinessManager?EmpCode=' + obj);
    };

    this.GetTotalRCAReject = function (obj) {

        return $http.get('/api/PendingRequest/GetTotalRejectedRequest?EmpCode=' + obj);
    };
    this.GetTotalRCACompCount = function (obj) {

        return $http.get('/api/PendingRequest/GetTotalRCACompCount?EmpCode=' + obj);
    };

    // ------PIE CHART ---------//


    this.GetTotal_CH_Request = function (obj) {

        return $http.get('/api/PendingRequest/GetTotal_CH_Request?EmpCode=' + obj);
    };
    this.GetTotal_TSE_Request = function (obj) {

        return $http.get('/api/PendingRequest/GetTotal_TSE_Request?EmpCode=' + obj);
    };




    this.GetPendingRequestForApproval = function (EmpCode) {

        return $http.get('/api/Compensation/GetPendingCompensationRequest?EmpCode=' + EmpCode);
    };

    this.GetManufacturing_productStream_ApprovedComplaint = function (EmpCode) {

        return $http.get('/api/PendingRequest/GetManufacturing_productStream_ApprovedComplaint?EmpCode=' + EmpCode);
    };

    this.GetBrand_productStream_ApprovedComplaint = function (EmpCode) {

        return $http.get('/api/PendingRequest/GetBrand_productStream_ApprovedComplaint?EmpCode=' + EmpCode);
    };

    this.GetSegment_productStream_ApprovedComplaint = function (EmpCode) {

        return $http.get('/api/PendingRequest/GetSegment_productStream_ApprovedComplaint?EmpCode=' + EmpCode);
    };


    

    this.ProductManufacturingLocationList = function () {

        return $http.get('/api/ProductManufacturerLocation/List')                         //------ProductManufacturingLocationList --------------//
    };

    this.ProductManufacturingLocationList = function () {

        return $http.get('/api/ProductManufacturerLocation/List')                         //------ProductManufacturingLocationList --------------//
    };

    this.StreamList = function (EmpCode) {

        return $http.get('/api/PendingRequest/StreamList?EmpCode=' + EmpCode);
    };


    this.StreamListDist = function (EmpCode) {

        return $http.get('/api/PendingRequest/StreamList?EmpCode=' + EmpCode);
    };


    this.StreamList1 = function (EmpCode) {

        return $http.get('/api/PendingRequest/StreamList?EmpCode=' + EmpCode);
    };


    this.GetEmployeeResponse = function(EmpCode) {

        return $http.get('/api/PendingRequest/GetEmployeeResponse?EmpCode=' + EmpCode);
    };

});

module.controller('DashboardController', function ($scope, DashboardService, $http, $filter, $rootScope, $q) {

    console.log('inside partial controller');



    $scope.init = function () {
        console.log('inside init-dash');


        var i = $rootScope.Maininit();
        i.then(function (v) {
            console.log('inside init - rootscope');
            $scope.usedID = $rootScope.session.EMP_CODE;
            $scope.RoleName = $rootScope.session.Role;
            //$rootScope.isAdmin = $rootScope.session.isAdmin;

            console.log('inside init - variables');

            $scope.GetFormData($scope.usedID);

            console.log('inside init - server callends');
        },
            function (err) {
                console.log('error');
            }
        )

        //$scope.maxdate=new Date();
        //$scope.mindate= $scope.maxdate;
        //$scope.mindate.setDate($scope.mindate.getMonth() -1);

    };

    $scope.GetFormData = function (id) {
        $scope.pieLabels = ["In Process", "Approved", "Rejected"];
        $scope.pieData = "";


        $scope.pieLabels1 = ["Approved For Compensation", "Approved (CH)", "Approved By TSE"];
        $scope.pieData1 = "";

        $scope.color = ['#2ca02c', '#1f77b4', '#d62728'];
        $scope.color1 = ['#2ca02c', '#1f77b4', '#d62728'];





        $scope.doc_classes_colors = [
            "#339E42",
            "#039BE5",
            "#EF6C00",
            "#A1887F",
            "#607D8B",
            "#039BE5",
            "#009688",
            "#536DFE",
            "#AB47BC",
            "#E53935",
            "#3F51B5"
        ];
        $scope.getRandomColor = function () {
            $scope.bgColor = $scope.doc_classes_colors[Math.floor(Math.random() * $scope.doc_classes_colors.length)];
        };


        DashboardService.GetEmployeeResponse(id).then(function (success) {

            $scope.ResponseArray = success.data;
            console.log("Employee Response Array", $scope.ResponseArray);

           
            //angular.forEach($scope.ResponseArray, function(value01, key) {


            //    angular.forEach(value.detail, function(value02, key) {
            //        var Idx = $scope.StreamListArray.part2.find(x => x == value.strms);
            //        if (Idx == null) {
            //            $scope.StreamListArray.part2.push(value.strms);
            //        }
            //    });


            //    var Idx = $scope.StreamListArray.part2.find(x => x == value.strms);
            //    if (Idx == null) {
            //        $scope.StreamListArray.part2.push(value.strms);
            //    }
            //});












        },
            function (error) {
                console.log(error);
            });





















        DashboardService.GetTotalRequest(id).then(function (success) {

            $scope.TotalRequest = success.data.Count;

        },
            function (error) {
                console.log(error);
            });

        DashboardService.GetTotalInProgressRequest(id).then(function (success) {

            $scope.InProcess = success.data.Count;

        },
            function (error) {
                console.log(error);
            });
        DashboardService.GetTotalApprovedRequest(id).then(function (success) {

            $scope.Approved = success.data.Count;

        },
            function (error) {
                console.log(error);
            });
        DashboardService.GetTotalRejectedRequest(id).then(function (success) {

            $scope.Reject = success.data.Count;

        },
            function (error) {
                console.log(error);
            });


        DashboardService.GetTotalPendingRequestForApproval(id).then(function (success) {

            $scope.TotalPendingComplaints = success.data.Count;

        },
            function (error) {
                console.log(error);
            });



        DashboardService.GetTotalRequest(id).then(function (success) {

            $scope.TotalRequest = success.data.Count;

            //    console.log($scope.TotalRequest);
            return DashboardService.GetTotalInProgressRequest(id);
        }).then(function (success) {
            //   $scope.InProcess = success.data.Count;
            $scope.InProcess = angular.copy(success.data.Count);
            $scope.pieData = $scope.pieData + "," + success.data.Count;
            return DashboardService.GetTotalApprovedRequest(id)
        }).then(function (success) {
            // console.log("Approved array:", success);

            $scope.Approved = angular.copy(success.data.Count);
            $scope.pieData = $scope.pieData + "," + success.data.Count;
            return DashboardService.GetTotalRejectedRequest(id)
        }).then(function (success) {
            console.log("Rejected array:", success);
            //$scope.Reject = success.data.Count;
            $scope.Rejected = angular.copy(success.data.Count);
            $scope.pieData = $scope.pieData + "," + success.data.Count;
            $scope.pieData = $scope.pieData.split(',');
            $scope.pieData.splice(0, 1);
            $scope.pieType = 'pie';
        }, function (error) {
            console.log(error);
        });


        DashboardService.GetTotal_CH_Request(id).then(function (success) {

            $scope.CH = angular.copy(success.data.Count);
            // console.log("CH Request", $scope.CH);

            $scope.pieData1 = $scope.pieData1 + "," + success.data.Count;
            // console.log($scope.TotalRequest);
            return DashboardService.GetTotal_TSE_Request(id);
        }).then(function (success) {
            //   $scope.InProcess = success.data.Count;
            $scope.TSE = angular.copy(success.data.Count);
            // console.log("TSE Request", $scope.TSE);
            $scope.pieData1 = $scope.pieData1 + "," + success.data.Count;
            return DashboardService.GetPendingRequestForApproval(id)
        }).then(function (success) {


            $scope.copm = angular.copy(success.data.length);
            //  console.log("copm Request", $scope.copm);

            $scope.pieData1 = $scope.pieData1 + "," + success.data.length;
            $scope.pieData1 = $scope.pieData1.split(',');
            $scope.pieData1.splice(0, 1);
            $scope.pieType = 'pie';
        }, function (error) {
            console.log(error);
        });





        DashboardService.GetTotalApprovedCompRequest(id).then(function (success) {
            $scope.ApprovedComp = success.data.Count;
            DashboardService.GetTotalInProcessCompRequest(id).then(function (success) {
                $scope.TotalInProcessComp = success.data.Count;
                DashboardService.GetTotalRejectedCompRequest(id).then(function (success) {
                    $scope.RejectedComp = success.data.Count;
                    //$scope.Piecart();
                },
                    function (error) {
                        console.log(error);
                    });
            },
                function (error) {
                    console.log(error);
                });
        },
            function (error) {
                console.log(error);
            });



        


                                                                    //------------------Approved Complaints - Manufacturing Plant Complaints and their Product Streams   (start) -----------//

        DashboardService.ProductManufacturingLocationList().then(function (success) {

            $scope.ProductManufacturingLocationArray = success.data;
  
            return DashboardService.StreamList(id);
        }).then(function (success) {
            $scope.StreamListArray = success.data;
            console.log("stream string series1:", $scope.StreamListArray);
            
          
            $scope.StreamListArray.part2 = [];
          
            angular.forEach($scope.StreamListArray, function (value, key) {
                var Idx = $scope.StreamListArray.part2.find(x => x == value.strms);
                if (Idx == null) {
                    $scope.StreamListArray.part2.push(value.strms);
                }
            });
            
           // console.log("stream string  part1:", $scope.StreamListArray.part1);
            console.log("stream string  part 1:", $scope.StreamListArray.part2);


            return DashboardService.GetManufacturing_productStream_ApprovedComplaint(id)
        }).then(function (success) {
            $scope.GetManufacturing_productStream = success.data;
            console.log("Product Manufacturing product Stream Array:", $scope.GetManufacturing_productStream);


            $scope.StreamListArray.part3 = [];
            $scope.myArray = [];
           
            var myObject = {}

                angular.forEach($scope.GetManufacturing_productStream, function (value, key) {
                    var obj = {};
                    $scope.StreamListArray.part3 = '';

                    $scope.StreamListArray.part3 +=  value.ManufacturingLocation ;

                    obj.y = $scope.StreamListArray.part3;
                    angular.forEach(value.Cplids, function (value1, key) {

                        obj[value1.strms] = value1.complaint_Count;
                    });
                  
                 //   console.log(obj);
                  $scope.myArray.push(obj);

                });

            console.log("My Array Manufacturing AND Stream ", $scope.myArray);

            var data = $scope.myArray;
            formatY = function (y) {
                return '' + y;
            };
            formatX = function (x) {
                return x.src.y;
            };



                config = {
                    data: data,
                    xkey: 'y',
                    ykeys: $scope.StreamListArray.part2,
                    labels: ['Stream', 'Location'],
                    fillOpacity: 0.6,
                    hideHover: 'auto',
                    stacked: true,
                    resize: true,
                    pointFillColors: ['#ffffff'],
                    pointStrokeColors: ['black'],
                    barColors: ['blue', 'green', 'orange'],
                    yLabelFormat: formatY,
                    xLabelFormat: formatX,
                    hoverCallback: function (index, options, content, row) {

                        var str = '';
                        for (var key in row) {
                            if (row.hasOwnProperty(key)) {
                                var val = row[key];
                           //     console.log(val);
                                str = str + val;
                                 }
                        }

                        return str;
                    }
                };

            config.element = 'bar-chart';
            Morris.Bar(config);
            //--------------end-----------//


            console.log(config);


        }, function (error) {
            console.log(error);
        });

                                                                              //-------------end-------------------------//


                                                                       //------------------ Approved Complaints- Product Brand Complaints & their Product Stream (Stacked Bar graph)   (start) -----------//


        DashboardService.StreamListDist(id).then(function (success) {
            $scope.Stream = success.data;
            $scope.labels2 = $scope.Stream;
            $scope.StreamArray1 = [];

            angular.forEach($scope.Stream, function (value, key) {
                var Idx = $scope.StreamArray1.find(x => x == value.strms);
                if (Idx == null) {
                    $scope.StreamArray1.push(value.strms);
                }
            });

            console.log("stream string  part 2:", $scope.StreamArray1);
            return DashboardService.GetBrand_productStream_ApprovedComplaint(id);
        }).then(function (success) {
             $scope.GetBrand_productStreamArray = success.data;
           
            console.log("Get Data stream string  brand: ", $scope.GetBrand_productStreamArray);
            console.log("stream & brand labels:", $scope.labels2);

            $scope.StreamListArray2 = [];
         
            $scope.myArray1 = [];

       
            angular.forEach($scope.GetBrand_productStreamArray, function (value, key) {
                var obj1 = {};
                $scope.StreamListArray2 = '';

                $scope.StreamListArray2 += value.BrandName;

                obj1.y = $scope.StreamListArray2;
                angular.forEach(value.Cplids, function (value1, key) {

                    obj1[value1.strms] = value1.complaint_Count;
                });

                //   console.log(obj);
                $scope.myArray1.push(obj1);

            });

            console.log("My Array Brand AND Stream ", $scope.myArray1);


            var data1 = $scope.myArray1;
            formatY = function (y) {
                return '' + y;
            };
            formatX = function (x) {
                return x.src.y;
            };



            config1 = {
                data: data1,
                xkey: 'y',
                ykeys: $scope.StreamArray1,
                labels: ['Stream', 'Brand'],
                fillOpacity: 0.6,
                hideHover: 'auto',
                stacked: true,
                resize: true,
                pointFillColors: ['#ffffff'],
                pointStrokeColors: ['black'],
                barColors: ['red', 'yello', 'gray'],
                yLabelFormat: formatY,
                xLabelFormat: formatX,
                hoverCallback: function (index, options, content, row) {

                    var str = '';
                    for (var key in row) {
                        if (row.hasOwnProperty(key)) {
                            var val = row[key];
                            //     console.log(val);
                            str = str +" "  + val;
                        }
                    }

                    return str;
                }
            };

            config1.element = 'bar-chart1';
            Morris.Bar(config1);
         
        },
            function (error) {
                console.log(error);
            });


                                                                                        //--------------------------------------- (end)--------------------------------//








                                                                  //------------------ Approved Complaints -Segment Complaints along with their Product Streams  (Stacked Bar graph)   (start) -----------//


        DashboardService.StreamList1(id).then(function (success) {
            $scope.Stream1 = success.data;
            $scope.labels3 = $scope.Stream1;
            $scope.StreamArray2 = [];

            angular.forEach($scope.Stream1, function (value, key) {
                var Idx = $scope.StreamArray2.find(x => x == value.strms);
                if (Idx == null) {
                    $scope.StreamArray2.push(value.strms);
                }
            });

            console.log("stream string  part 3:", $scope.StreamArray2);
            return DashboardService.GetSegment_productStream_ApprovedComplaint(id);
        }).then(function (success) {
            $scope.GetSegment_productStreamArray = success.data;

            console.log("Get Data stream string  Segment: ", $scope.GetSegment_productStreamArray);
            console.log("stream & Segment labels:", $scope.labels3);

            $scope.StreamListArray.part4 = [];

            $scope.myArray2 = [];


            angular.forEach($scope.GetSegment_productStreamArray, function (value, key) {
                var obj2 = {};
                $scope.StreamListArray.part4 = '';

                $scope.StreamListArray.part4 += value.Segment;

                obj2.y = $scope.StreamListArray.part4;
                angular.forEach(value.Cplids, function (value1, key) {

                    obj2[value1.strms] = value1.complaint_Count;
                });

                //   console.log(obj);
                $scope.myArray2.push(obj2);

            });

            console.log("My Array Brand AND Stream ", $scope.myArray2);

            console.log(" new new nnew new new Segment ", $scope.StreamArray2);


            var data2 = $scope.myArray2;
            formatY = function (y) {
                return '' + y;
            };
            formatX = function (x) {
                return x.src.y;
            };



            config2 = {
                data: data2,
                xkey: 'y',
                ykeys: $scope.StreamArray2,
                labels: ['Stream', 'Segment'],
                fillOpacity: 0.6,
                hideHover: 'auto',
                stacked: true,
                resize: true,
                pointFillColors: ['#ffffff'],
                pointStrokeColors: ['black'],
                barColors: ['Brown', 'yello', 'gray'],
                yLabelFormat: formatY,
                xLabelFormat: formatX,
                hoverCallback: function (index, options, content, row) {

                    var str = '';
                    for (var key in row) {
                        if (row.hasOwnProperty(key)) {
                            var val = row[key];
                            //     console.log(val);
                            str = str + " " + val;
                        }
                    }

                    return str;
                }
            };

            config2.element = 'bar-chart2';
            Morris.Bar(config2);

        },
            function (error) {
                console.log(error);
            });


                                                                                        //--------------------------------------- (end)--------------------------------//




        //DashboardService.GetManufacturing_productStream_ApprovedComplaint(id).then(function (success) {
        //    $scope.GetManufacturing_productStream = success.data;
        //    DashboardService.GetData = $scope.GetManufacturing_productStream;
        //    console.log("Get Data ", DashboardService.GetData);
        //     },
        //    function (error) {
        //        console.log(error);
        //    });




        //DashboardService.ProductManufacturingLocationList().then(function (success) {
        //        $scope.ProductManufacturingLocationArray = success.data;
        //        $scope.ProductManufacturingLocationArray.part1 = '';
        //        angular.forEach($scope.ProductManufacturingLocationArray, function (value, key) {
        //            $scope.ProductManufacturingLocationArray.part1 = $scope.ProductManufacturingLocationArray.part1 + ',' + value.ManufacturingLocation;
        //           console.log($scope.ProductManufacturingLocationArray.part1);
        //       });

        //        var str = $scope.ProductManufacturingLocationArray.part1;
        //        str = str.substring(1, str.length);     
        //        DashboardService.str = str;
        //      console.log("Product Manufacturing Location  string:", DashboardService.str);
        //    },
        //    function (error) {
        //        console.log(error);

        //    });

        //DashboardService.StreamList(id).then(function (success) {
        //        $scope.StreamListArray = success.data;
        //        console.log("Stream List Array", $scope.StreamListArray);
        //        $scope.StreamListArray.part1 = '';
        //        angular.forEach($scope.StreamListArray, function (value, key) {
        //            $scope.StreamListArray.part1 = $scope.StreamListArray.part1 + ',' + value.Stream;
        //        });

        //        var str1 = $scope.StreamListArray.part1;
        //        str1 = str1.substring(1, str1.length);
        //        DashboardService.str1 = str1;
        //      console.log("stream string:", DashboardService.str1);
        //    },
        //    function (error) {
        //        console.log(error);

        //    });









        ///////////////////////////////////////////////////




        //-------------------------------------prashant (30-08-2017)----------------------//

        DashboardService.GetTotalPendingRequestForPlant(id).then(function (success) {
            $scope.TotalPendingPlant = success.data.Count;
            //  console.log("Pending RCA-Plant:",success.data.Count);
        },
            function (error) {
                console.log(error);
            });

        DashboardService.GetTotalPendingRequestForRnD(id).then(function (success) {                   //------------ AFTER APPROVE  Pending RCA- BM  ----------//
            $scope.TotalPendingRnD = success.data.Count;
            // console.log("Pending RCA-RnD:", success.data.Count);
        },
            function (error) {
                console.log(error);
            });

        DashboardService.GetTotalPendingRequestForRnDBM(id).then(function (success) {                 //------------ AFTER APPROVE  Pending R&D - BM  ----------//
            $scope.TotalPendingRnDBM = success.data.Count;
            //  console.log("Pending RnD- BM", success.data.Count);
        },
            function (error) {
                console.log(error);
            });




        DashboardService.GetTotalPendingRequestForQuarantine(id).then(function (success) {
            $scope.TotalPendingQuarantine = success.data.Count;
            //    console.log("Pending Quarantine:", success.data.Count);
        },
            function (error) {
                console.log(error);
            });


        DashboardService.GetTotalPendingRequestForBusinessManager(id).then(function (success) {
            $scope.TotalPendingBusinessManager = success.data.Count;
            //    console.log("Pending Business Manager:", success.data.Count);
        },
            function (error) {
                console.log(error);
            });


        DashboardService.GetTotalRCAReject(id).then(function (success) {
            $scope.TotalRCAReject = success.data.Count;
            console.log("RCA Reject:", success.data.Count);
        },
            function (error) {
                console.log(error);
            });


        DashboardService.GetTotalRCACompCount(id).then(function (success) {
            $scope.TotalRCACompCount = success.data;
            console.log("RCA Comp Count Reject:", success.data);


            $scope.labels = '';
            $scope.commaTotalRCACompArray = [];
            $scope.commaTotalRCACompArray1 = [];
            $scope.commaTotalRCACompArray3 = [];
            $scope.commaTotalRCACompArray.part1 = '';
            $scope.commaTotalRCACompArray.part2 = '';
            $scope.commaTotalRCACompArray.part3 = '';

            //   console.log($scope.TotalRCACompCount);

            angular.forEach($scope.TotalRCACompCount, function (value, key) {
                $scope.labels = $scope.labels + ',' + value.monthName;
            });
            //  console.log($scope.labels);

            $scope.labels = $scope.labels.split(",");
            $scope.labels.splice(0, 1);

            angular.forEach($scope.TotalRCACompCount, function (value, key) {

                angular.forEach($scope.labels, function (value1, key1) {


                    if (value1 === value.monthName) {
                        $scope.commaTotalRCACompArray.part1 = $scope.commaTotalRCACompArray.part1 + ',' + value.TotalCount;
                    }

                    //  console.log("$scope.commaTotalRCACompArray.part1",$scope.commaTotalRCACompArray.part1);


                });

            });
            $scope.commaTotalRCACompArray.part1 = $scope.commaTotalRCACompArray.part1.split(",");
            $scope.commaTotalRCACompArray.part1.splice(0, 1);

            $scope.commaTotalRCACompArray1.push($scope.commaTotalRCACompArray.part1);
            var i = 0;
            angular.forEach($scope.TotalRCACompCount, function (value, key) {
                angular.forEach($scope.labels, function (value1, key1) {

                    if (value1 === value.monthName) {
                        $scope.commaTotalRCACompArray.part2 = $scope.commaTotalRCACompArray.part2 + ',' + value.RCACount;
                    }

                });
            });

            $scope.commaTotalRCACompArray.part2 = $scope.commaTotalRCACompArray.part2.split(",");
            $scope.commaTotalRCACompArray.part2.splice(0, 1);

            $scope.commaTotalRCACompArray1.push($scope.commaTotalRCACompArray.part2);





            angular.forEach($scope.TotalRCACompCount, function (value, key) {
                angular.forEach($scope.labels, function (value1, key1) {

                    if (value1 === value.monthName) {
                        $scope.commaTotalRCACompArray.part3 = $scope.commaTotalRCACompArray.part3 + ',' + value.CompCount;
                    }

                });
            });

            $scope.commaTotalRCACompArray.part3 = $scope.commaTotalRCACompArray.part3.split(",");
            $scope.commaTotalRCACompArray.part3.splice(0, 1);

            $scope.commaTotalRCACompArray1.push($scope.commaTotalRCACompArray.part3);

            //   console.log($scope.commaTotalRCACompArray);


            $scope.series = ['Total Count', 'RCA Count', 'Compensation Count'];
            $scope.onClick = function (points, evt) {
                console.log(points, evt);
            };

            $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }];
            $scope.options = {
                scales: {
                    yAxes: [
                        {
                            id: 'y-axis-1',
                            type: 'linear',
                            display: true,
                            position: 'left'
                        },
                        {
                            id: 'y-axis-2',
                            type: 'linear',
                            display: false,
                            position: 'right'
                        }

                    ]
                }
            };
            $scope.colours = ['#0EAEF3', '#224620', '#FFC300'];

        }).error(function (data) {
            console.log("Error in loading datra from EDB");
        });

    };

    //------------------date 5/2/2108---------------------//




    //$scope.Piecart = function () {
    //    $scope.labels = ["Approved Compensation", "Rejected Compensation", "In Process Compenstaion", "Pending Compenstaion"];

    //    $scope.data = [$scope.ApprovedComp, $scope.RejectedComp, $scope.TotalInProcessComp, $scope.TotalInProcessComp];
    //    console.log($scope.data);

    //}
    //$scope.labels = ["January", "February", "March", "April", "May", "June", "July" ,"Augest","September","October","November","December"];





   











    $scope.init();

});