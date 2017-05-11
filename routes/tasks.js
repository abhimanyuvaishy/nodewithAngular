var express=require('express');
var router=express.Router();
var mongojs=require('mongojs');
var db=mongojs('mongodb://ak_vaishy:root@ds133321.mlab.com:33321/angulardemo_customer',['customers']);
router.get('/tasks',function(req,res,next){
//res.send('Tasks page');
    db.customers.find(function(error,custom){
        if(error){
            res.send(error);
        }
        res.jsonp(custom);
    });
});

//for Single Row

router.get('/task/:id',function(req,res,next){
//res.send('Tasks page');
    db.customers.findOne({_id:mongojs.ObjectId(req.params.id)}, function(error,custom){
        if(error){
            res.send(error);
        }
        res.jsonp(custom);
    });
});

//post Data/Save Data.

router.post('/task',function(req,res,next){
    var customer=req.body;
    if(!customer.first_name){
        res.status(400);
        res.jsonp({
            "error":"bad data!"
        });
    }
    else{
        db.customers.save(customer,function(error,result){
            if(error){
                 res.send(error);
            }
            res.jsonp(result);
        });
    }

});

//delete

router.delete('/task/:id',function(req,res,next){
//res.send('Tasks preage');
    db.customers.remove({_id:mongojs.ObjectId(req.params.id)}, function(error,custom){
        if(error){
            res.send(error);
        }
        res.json(custom);
    });
});

// update


router.put('/task/:id',function(req,res,next){
//res.send('Tasks page');
    var customer=req.body();
    var updCustomer={};
    if(!updCustomer)
    {
        res.status(400);
        res.json({
        "error":"Bad Data"
        });
    }

    else
    {
     db.customers.update({_id:mongojs.ObjectId(req.params.id)},updCustomer,{}, function(error,custom){
        if(error){
            res.send(error);
        }
        res.json(custom);
    });
    }
  
});

module.exports=router;