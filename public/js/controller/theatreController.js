'use strict';

module.exports=function($scope,$http){
  //$scope.theatre='theatre';

  var refresh=function(){
    $http.get('/theatre/getTheatre').success(function(response){
      console.log('READ IS SUCCESSFUL');
      $scope.theatreList=response;//$scope.moviList=response;
      $scope.thea="";
    });
  };

  refresh();

$scope.addTheatre=function(thea){  //$scope.addCity=function(movi)

  var cty=document.getElementById("citySelect");
  var cty1=cty.options[cty.selectedIndex].text;
  thea.theaCity=cty1;

  var sTime="";
  var x=0;
    for(x=0;x<timeSelect.length;x++)
      {
        if(timeSelect[x].selected)
          {
            sTime=sTime+","+timeSelect[x].value;
          }
      }

      thea.theaTime=sTime;

$http.post('/theatre/addTheatre/',thea).success(function(response){
console.log(response);
  console.log("CREATE IS SUCCESSFUL");
  refresh();
  });

//console.log($scope.contact);
};//add (post) ends

$scope.removeTheatre=function(thea){
  $http.delete('/theatre/deleteTheatre/'+ thea._id).success(function(response){
    console.log(response);
    console.log('DELETED SUCCESSFUL');
    refresh();
  });
};//remove(delete) ends

$scope.editTheatre=function(thea){
  $http.get('/theatre/getTheatre/'+thea._id).success(function(response){
    $scope.thea=response[0];   //$scope.theatre=response[0];
  });
};//edit(get) ends

$scope.updateTheatre=function(){
  console.log("REACHED UPATE");
  console.log($scope.thea._id);    //console.log($scope.theatre._id);
  $http.put('/theatre/updateTheatre/'+$scope.thea._id,$scope.thea).success(function(response){
    console.log(response);
    refresh();
  });
}//updateCity ends
};//line no 3 ends
