'use strict';

module.exports=function($scope,$http){

  var refresh=function(){
    $http.get('/time/getTime').success(function(response){
      console.log('READ IS SUCCESSFUL');
      $scope.timeList=response;//$scope.moviList=response;    shows entered city name with buttons on webpage
      $scope.clock="";
    });
  };

  refresh();

$scope.addTime=function(clock){  //$scope.addCity=function(movi)
//
//console.log(place);

//var serviceName='place'//*
$http.post('/time/addTime/',clock).success(function(response){
  //$scope.addCity=place;
  console.log(response);
  console.log("CREATE IS SUCCESSFUL");
  refresh();
  });

//console.log($scope.contact);
};//add (post) ends

  $scope.removeTime=function(clock){    //$scope.removeCity=function(place){
  $http.delete('/time/deleteTime/'+ clock._id).success(function(response){//$http.delete('/city/deleteCity/'+ place._id).success(function(response){
    console.log(response);
    console.log('DELETED SUCCESSFUL');
    refresh();
  });
};//remove(delete) ends

$scope.editTime=function(clock){   //same as above for $scope and $http
  $http.get('/time/getTime/'+ clock._id).success(function(response){
    $scope.clock=response[0];    //$scope.city=response[0];
  });
};//edit(get) ends

$scope.updateTime=function(){
  console.log("REACHED UPATE");
  console.log($scope.clock._id);   //console.log($scope.city._id);
  $http.put('/time/updateTime/'+$scope.clock._id,$scope.clock).success(function(response){
    console.log(response);
    refresh();
  });
}//updateCity ends
};//line no 3 ends
