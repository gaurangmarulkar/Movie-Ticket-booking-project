var express=require('express');
var router=express.Router();
bodyParser=require('body-parser'),

router.use(bodyParser.urlencoded({extended:true}))

var mongoose=require('mongoose');

var theatreSchema=mongoose.Schema({

  theaName: String,
  theaCity: String,
  theaTime: String

});

var Theatre=mongoose.model('Theatre',theatreSchema,'theatre');
router.get('/getTheatre',function(req,res){
  console.log("REACHED GET FUNCTION ON SERVER");
  Theatre.find({},function(err,docs){
    res.json(docs);
  });
});

router.get('/getTheatre/:id',function(req,res){
  console.log("REACHED GET FUNCTION ON SERVER");
  Theatre.find({_id:req.params.id},function(err,docs){
    res.json(docs);
  });
});

router.post('/addTheatre',function(req,res){
  console.log(req.body);

  var name=req.body.theaName;
  var name1=req.body.theaCity;
  var name2=req.body.theaTime;

  var theatre=new Theatre({
    theaName: name,
    theaCity: name1,
    theaTime: name2
  });

  theatre.save(function(err,docs){
    if(err)throw err;
    console.log("Theatre Saved Successfully");
    res.json(docs);
  });
})

router.delete('/deleteTheatre/:id',function(req,res){
  console.log("REACHED DELETE FUNCTION ON SERVER");
  Theatre.remove({_id:req.params.id},function(err,docs){
    res.json(docs);
  });
})

router.put('/updateTheatre/:id',function(req,res){
  console.log("REACHED PUT");
  console.log(req.body);
  Theatre.findOneAndUpdate({_id:req.params.id},req.body,function(err,data){
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
