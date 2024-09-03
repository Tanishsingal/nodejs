const express = require('express');
let app=express();
const zod = require('zod');
let sch=zod.array(zod.number());
let schema=zod.object({
    email:zod.string().email(),
    password:zod.string().min(8, "Password must be at least 8 characters long") // Minimum length
    .max(20, "Password must be at most 20 characters long") // Maximum length
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter") // At least one uppercase letter
    .regex(/[a-z]/, "Password must contain at least one lowercase letter") // At least one lowercase letter
    .regex(/\d/, "Password must contain at least one number") // At least one number
    .regex(/[\W_]/, "Password must contain at least one special character"),
    kd:zod.array(zod.number()),
    country:zod.literal("IN").or(zod.literal('US'))
})
app.use(express.json());
app.post("/check",(req,res)=>{
    let kd=req.body.kd;
    //it validate the input
    let response=schema.safeParse(req.body);
    res.send({
        response
    });
    
    // res.send("you are having  "+kd.length+" kidneys");
})
//error handling middleware
//global catch if there is any error above it goes to global catch
// always defined at end
app.use(function(err,req,res,next){
    res.send("something went wrong")
})
// if we want to go to next error handling middleware we use next
app.listen(3000)