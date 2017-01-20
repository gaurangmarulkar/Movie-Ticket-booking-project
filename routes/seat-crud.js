var express=require('express');
var router=express.Router();
bodyParser=require('body-parser'),

router.use(bodyParser.urlencoded({extended:true}))

var mongoose=require('mongoose');

var seatSchema=mongoose.Schema({

  sitName: String

});

var Seat=mongoose.model('Seat',seatSchema,'seat');
router.get('/getSeat',function(req,res){
  console.log("REACHED GET FUNCTION ON SERVER");
  Seat.find({},function(err,docs){
    res.json(docs);
  });
});

router.get('/getSeat/:id',function(req,res){
  console.log("REACHED GET FUNCTION ON SERVER");
  Seat.find({_id:req.params.id},function(err,docs){
    res.json(docs);
  });
});

router.post('/addSeat',function(req,res){
  console.log(req.body);

  var name=req.body.sitName;

  var seat=new Seat({
    sitName: name
  //Name: name
  //name: name
  });

  seat.save(function(err,docs){
    if(err)throw err;
    console.log("Theatre Saved Successfully");
    res.json(docs);
  });
})

router.delete('/deleteSeat/:id',function(req,res){
  console.log("REACHED DELETE FUNCTION ON SERVER");
  Seat.remove({_id:req.params.id},function(err,docs){
    res.json(docs);
  });
})

router.put('/updateSeat/:id',function(req,res){
  console.log("REACHED PUT");
  console.log(req.body);
  Seat.findOneAndUpdate({_id:req.params.id},req.body,function(err,data){
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
