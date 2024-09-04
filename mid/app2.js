const express = require('express');
let app=express();
app.use(express.json());
app.post("/check",(req,res)=>{
    let kd=req.body.kd;
    res.send("you are having  "+kd.length+" kidneys");
})
//error handling middleware
//global catch if there is any error above it goes to global catch
// always defined at end
app.use(function(err,req,res,next){
    res.send("something went wrong")
})
// if we want to go to next error handling middleware we use next
app.listen(3000)