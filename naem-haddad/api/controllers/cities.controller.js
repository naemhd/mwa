const db=require("../data/db")
const Cities=db.model("City")

module.exports.getAll=function(req,res){
    let offset=0;
    let count=10;
    let maxCount=50;
    if(req.query && req.query.offset){
        offset=parseInt(req.query.offset);
    }
    if(req.query && req.query.count){
        count=parseInt(req.query.count);
    }
    if(count>maxCount){
        count=maxCount;
    }
    let lat=null;
    let lng=null;
    let max=null;
    let query={};
    console.log(req.query)
    if(req.query && req.query.lat && req.query.lng && req.query.max){
        lat=parseFloat(req.query.lat);
        lng=parseFloat(req.query.lng);
        max=parseInt(req.query.max);

        if(isNaN(lat) || isNaN(lng) || isNaN(max)){
           console.log("error parsing code.. skipping") 
        }else{
            query={
                "loc":{
                    $near:{
                        $geometry:{
                            type:"Point",
                            coordinates:[lng,lat]
                        },
                        $maxDistance:max,
                        $minDistance:0
                    }
                }
            }
        }
    }
    
    Cities.find(query).skip(offset).limit(count).exec(function(err,cities){
        if(err){
            res.status(500).json({message:err})
        }else{
            if(Cities){
                // console.log(cities)
                
                res.status(200).json(cities)
            }else{
                res.status(404).json({message:"error finding cities"})
            }
        }
    })
}

module.exports.getOne=function(req,res){
    Cities.findById(req.params.cityId).exec(function(err,city){
        if(err){
            res.status(500).json({message:err})
        }else{
            if(city){
                res.status(200).json(city)
            }else{
                res.status(404).json({message:"error finding city"})
            }
        }
    })
}

module.exports.deleteOne=function(req,res){
    Cities.findByIdAndDelete(req.params.cityId).exec(function(err,city){
        if(err){
            res.status(500).json({message:err})
        }else{
            if(city){
                res.status(200).json({status:"city removed"})
            }else{
                res.status(404).json({message:"error finding city"})
            }
        }
    })
}

module.exports.create=function(req,res){

    const newcity={
        city:req.body.city,
        zip:req.body.zip,
        pop:req.body.pop,
        state:req.body.state,
        loc:req.body.loc
    }

    console.log(newcity);

    Cities.create(newcity,function(err,newDbcity){
        if(err){
            res.status(500).json({message:err})
        }else{
            if(newDbcity){
                res.status(201).json({newDbcity})
            }else{
                res.status(400).json({message:"error inserting new game"})
            }
        }
    })
}