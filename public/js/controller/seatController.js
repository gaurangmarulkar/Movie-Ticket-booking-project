'use strict';
//
  module.exports=function($scope,$http){
    //$scope.city='city';
//
//   // var refresh=function(){
//   //   $http.get('/seat/getSeat').success(function(response){
//   //     console.log('READ IS SUCCESSFUL');
//   //     $scope.seatList=response;//$scope.moviList=response;    shows entered city name with buttons on webpage
//   //     $scope.sit="";
//   //   });
//   // };
//
//   refresh();
//
// $scope.addSeat=function(sit){  //$scope.addCity=function(movi)
// //
// //console.log(place);
//
// //var serviceName='place'//*
// $http.post('/seat/addSeat/',seat).success(function(response){
//   //$scope.addCity=place;
//   console.log(response);
//   console.log("CREATE IS SUCCESSFUL");
//   refresh();
//   });
//
// //console.log($scope.contact);
// };//add (post) ends
//
// $scope.removeSeat=function(sit)    $scope.removeCity=function(place){
//   $http.delete('/seat/deleteSeat/'+ sit._id).success(function(response){//$http.delete('/city/deleteCity/'+ place._id).success(function(response){
//     console.log(response);
//     console.log('DELETED SUCCESSFUL');
//     refresh();
//   });
// };//remove(delete) ends
//
// $scope.editSeat=function(sit){   //same as above for $scope and $http
//   $http.get('/seat/getSeat/'+ sit._id).success(function(response){
//     $scope.sit=response[0];    //$scope.city=response[0];
//   });
// };//edit(get) ends
//
// $scope.updateSeat=function(){
//   console.log("REACHED UPATE");
//   console.log($scope.sit._id);   //console.log($scope.city._id);
//   $http.put('/seat/updateSeat/'+$scope.sit._id,$scope.sit).success(function(response){
//     console.log(response);
//     refresh();
//   });
// }//updateCity ends
// };

$("#selectClass").on('change', function(){
  if($(this).val()=="Gold"){
    $(".sclass",).attr("disabled","disabled");
  }
  else{
    $(".sclass",).removeAttr("disabled");
  }
});

$("#selectClass").on('change', function(){
  if($(this).val()=="Silver"){
    $(".gclass",).attr("disabled","disabled");
  }
  else{
    $(".gclass",).removeAttr("disabled");
  }
});

// $("#selectClass").on('change', function(){
//   if($(this).val()=="Silver"){
//     $(".gclass",).attr("disabled","disabled");
//   }
//   else{
//     $(".sclass",).removeAttr("disabled");
//   }
// });

var seats=document.getElementById('seats');
$('input[type=checkbox]').on('change',function(e){
  if($('input[type=checkbox]:checked').length > seats.value){
    $(this).prop('checked',false);
    alert("Please increase the number of seats");
  }
});

$('select[class="selectClass"]').change(function(){
  var text=$(this).find("option:selected").text();
  if (text !=""){
    text="Buy"+text;
  }
  $('#seatCls').val(text);
});

var currNum=0;
var txtArea=document.getElementById("totalAmount");
var form=document.getElementById("A");
function add_sub(e1){
  if(el.checked)
  {
    currNum+=parseInt(el.value,10);
  }
  else{
    currNum-=parseInt(el.value,10);
  }
  txtArea.value=currNum;
}

from.addEventListener("click",function(ev){
  if(ev.target.getAttribute("Type")=="checkbox"){
    add_sub(ev.target);
    }
  },false);
};
