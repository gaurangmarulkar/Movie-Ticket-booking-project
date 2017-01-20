var express=require('express');
var router=express.Router();
bodyParser=require('body-parser'),

router.use(bodyParser.urlencoded({extended:true}))

var mongoose=require('mongoose');

var timeSchema=mongoose.Schema({

  clockTime: String    //clockName: String

});

var Time=mongoose.model('Time',timeSchema,'time');//collection,schema,table
//Time
router.get('/getTime',function(req,res){
  console.log("REACHED GET FUNCTION ON SERVER");
  Time.find({},function(err,docs){
    res.json(docs);
  });
});

router.get('/getTime/:id',function(req,res){
  console.log("REACHED GET FUNCTION ON SERVER");
  Time.find({_id:req.params.id},function(err,docs){
    res.json(docs);
  });
});

router.post('/addTime',function(req,res){
  console.log(req.body);

  var time=req.body.clockTime;    //var name=req.body.clockName;

  var time=new Time({
    clockTime: time     //clockName: name
  });

  time.save(function(err,docs){
    if(err)throw err;
    console.log("Time Saved Successfully");
    res.json(docs);
  });
})

router.delete('/deleteTime/:id',function(req,res){
  console.log("REACHED DELETE FUNCTION ON SERVER");
  Time.remove({_id:req.params.id},function(err,docs){
    res.json(docs);
  });
})

router.put('/updateTime/:id',function(req,res){
  console.log("REACHED PUT");
  console.log(req.body);
  Time.findOneAndUpdate({_id:req.params.id},req.body,function(err,data){
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
