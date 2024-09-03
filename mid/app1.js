const express = require('express');
let app=express();
function use(req,res,next){
    let user=req.headers.username;
    let pass=req.headers.password;
    if(!(user=="tanish" && pass=="pass") ){
        // if(!(kd==1 || kd==2)){
            res.status(400).send("something went wroong");
        // } 
    }
    else{
        next();
    }
}
function kidney(req,res,next){
    let kd=req.query.kd;
    if(!(kd==1 || kd==2) ){
            res.status(400).send("something went wroong");
        
    }else{
        next();
    }
}
app.get("/helth-check",use,kidney,(req,res)=>{
    res.send("everything is ok");
})
app.get("/heart-check",use,(req,res)=>{
    res.send("everything is ok");
})
app.listen(3000);