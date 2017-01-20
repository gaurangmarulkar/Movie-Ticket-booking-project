'use strict';

module.exports=function($scope,$http){
  //$scope.city='city';

  var refresh=function(){
    $http.get('/city/getCity').success(function(response){
      console.log('READ IS SUCCESSFUL');
      $scope.cityList=response;//$scope.moviList=response;    shows entered city name with buttons on webpage
      $scope.place="";
    });
  };

  refresh();

$scope.addCity=function(place){  //$scope.addCity=function(movi)
//
//console.log(place);

//var serviceName='place'//*
$http.post('/city/addCity/',place).success(function(response){
  //$scope.addCity=place;
  console.log(response);
  console.log("CREATE IS SUCCESSFUL");
  refresh();
  });

//console.log($scope.contact);
};//add (post) ends

$scope.removeCity=function(place){    //$scope.removeCity=function(place){
  $http.delete('/city/deleteCity/'+ place._id).success(function(response){//$http.delete('/city/deleteCity/'+ place._id).success(function(response){
    console.log(response);
    console.log('DELETED SUCCESSFUL');
    refresh();
  });
};//remove(delete) ends

$scope.editCity=function(place){   //same as above for $scope and $http
  $http.get('/city/getCity/'+ place._id).success(function(response){
    $scope.place=response[0];    //$scope.city=response[0];
  });
};//edit(get) ends

$scope.updateCity=function(){
  console.log("REACHED UPATE");
  console.log($scope.place._id);   //console.log($scope.city._id);
  $http.put('/city/updateCity/'+$scope.place._id,$scope.place).success(function(response){
    console.log(response);
    refresh();
  });
}//updateCity ends
};//line no 3 ends
