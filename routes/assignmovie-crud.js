var express=require('express');
var router=express.Router();
bodyParser=require('body-parser'),

router.use(bodyParser.urlencoded({extended:true}))

var mongoose=require('mongoose');

var assignmovieSchema=mongoose.Schema({

  assignmoviePlace:String,//placeName: String,  //city
  assignmovieThea:String,//theaName: String,   //theatre
  assignmovieMovie:String,//moviTitle: String,  //movie
  assignmovieFromdate:String,//fromDate: String,   //from date
  assignmovieTodate:String  //toDate: String      //to date

});

var Assignmovie=mongoose.model('Assignmovie',assignmovieSchema,'assignmovie');//collection,schema,table
//City
router.get('/getAssignmovie',function(req,res){
  console.log("REACHED GET FUNCTION ON SERVER");
  Assignmovie.find({},function(err,docs){
    res.json(docs);
  });
});

router.get('/getAssignmovie/:id',function(req,res){
  console.log("REACHED GET FUNCTION ON SERVER");
  Assignmovie.find({_id:req.params.id},function(err,docs){
    res.json(docs);
  });
});

router.post('/addAssignmovie',function(req,res){
  console.log(req.body);

  var name=req.body.assignmoviePlace;
  var name1=req.body.assignmovieThea;
  var name2=req.body.assignmovieMovie;
  var name3=req.body.assignmovieFromdate;
  var name4=req.body.assignmovieTodate;

  var assignmovie=new Assignmovie({
    assignmoviePlace: name,
    assignmovieThea: name1,
    assignmovieMovie: name2,
    assignmovieFromdate: name3,
    assignmovieTodate: name4
  });

  assignmovie.save(function(err,docs){    //assignmovie.save(function(err,docs){
    if(err)throw err;
    console.log("assignmovie Saved Successfully");
    res.json(docs);
  });
})

router.delete('/deleteAssignmovie/:id',function(req,res){
  console.log("REACHED DELETE FUNCTION ON SERVER");
  Assignmovie.remove({_id:req.params.id},function(err,docs){
    res.json(docs);
  });
})

router.put('/updateAssignmovie/:id',function(req,res){
  console.log("REACHED PUT");
  console.log(req.body);
  Assignmovie.findOneAndUpdate({_id:req.params.id},req.body,function(err,data){
    console.log(data);
    res.json(data);
  });
})

// catch 404 and forward to error handler
router.use(function(req,res,next){
  var err=new Error('Not Found');
  err.status=404;
  next(err);
});

module.exports=router;
