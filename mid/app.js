const express = require('express');
let app=express();
app.get("/check",function(req,res){
    // in query parameter we use ?then the filed name and value 
    let user=req.headers.username;
    let pass=req.headers.password;
        let kd=req.query.kd;
    console.log(kd)
    if(!(user=="tanish" && pass=="pass" && (kd==1 || kd==2)) ){
        // if(!(kd==1 || kd==2)){
            res.status(400).send("something went wroong");
        // } 
    }
    res.send("ok you are perfect")
})

app.listen(3000)