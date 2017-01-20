'use strict';

module.exports=function($scope,$http){
  //$scope.booking='booking';

  var refresh=function(){
    $http.get('/assignmovie/getAssignmovie').success(function(response){
      console.log('AssignmovieRead IS SUCCESSFUL');
      $scope.assignmovieList=response;//$scope.moviList=response;
      $scope.assignmovie="";
    });

    $http.get('/city/getCity').success(function(response){
      console.log('CityRead IS SUCCESSFUL');
      $scope.cityList=response;//$scope.moviList=response;    shows entered city name with buttons on webpage
      //$scope.place="";
    });
    $http.get('/time/getTime').success(function(response){
      console.log('ShowtimeRead IS SUCCESSFUL');
      $scope.timeList=response;//$scope.moviList=response;    shows entered city name with buttons on webpage
      //$scope.clock="";
    });
    $http.get('/theatre/getTheatre').success(function(response){
      console.log('TheatreRead IS SUCCESSFUL');
      $scope.theatreList=response;//$scope.moviList=response;
      //$scope.thea="";
    });
    $http.get('/movie/getMovie').success(function (response) {//movie  is schema from movi-schema
        console.log('MovieRead IS SUCCESSFUL');
        $scope.moviList = response;
        // /$scope.movi = "";//movi is model
    });


  };

  refresh();



$scope.addAssignmovie=function(assignmovie){  //$scope.addCity=function(movi)

  // var assign=document.getElementById("theatreSelect");  //theatre
  // var assign1=assign.options[assign.selectedIndex].text;
  // assignmovie.assignmovieThea=assign1;
  //
  // var cty=document.getElementById("citySelect");  //city
  // var cty1=cty.options[cty.selectedIndex].text;
  // assignmovie.assignmoviePlace=cty1;
  //
  // var mov=document.getElementById("movieSelect");  //movie
  // var mov1=mov.options[mov.selectedIndex].text;
  // assignmovie.assignmovieMovie=mov1;
  //
  // var Fromdate=document.getElementById("fromDate").value;
  // assignmovie.assignmovieFromdate=Fromdate;
  //
  // var Todate=document.getElementById("toDate").value;
  // assignmovie.assignmovieTodate=Todate;

  // var sTime="";
  // var x=0;
  //   for(x=0;x<timeSelect.length;x++)
  //     {
  //       if(timeSelect[x].selected)
  //         {
  //           sTime=sTime+","+timeSelect[x].value;
  //         }
  //     }
  //
  //     thea.theaTime=sTime;

$http.post('/assignmovie/addAssignmovie',assignmovie).success(function(response){
console.log(response);
  console.log("CREATE IS SUCCESSFUL");
  refresh();
  });
};//add (post) ends

$scope.removeAssignmovie=function(assignmovie){
  $http.delete('/assignmovie/deleteAssignmovie/'+ assignmovie._id).success(function(response){
    console.log(response);
    console.log('DELETED SUCCESSFUL');
    refresh();
  });
};//remove(delete) ends

$scope.editAssignmovie=function(assignmovie){
  $http.get('/assignmovie/getAssignmovie/'+assignmovie._id).success(function(response){
    $scope.assignmovie=response[0];   //$scope.theatre=response[0];
  });
};//edit(get) ends

$scope.updateAssignmovie=function(){
  console.log("REACHED UPATE");
  console.log($scope.assignmovie._id);    //console.log($scope.theatre._id);
  $http.put('/assignmovie/updateAssignmovie/'+$scope.assignmovie._id,$scope.assignmovie).success(function(response){
    console.log(response);
    refresh();
  });
}//updateCity ends
};//line no 3 ends
