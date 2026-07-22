const express = require("express");
const app = express();

app.use((req,res,next)=>{
    console.log("Hi i am 1st middleware");
    // res.send("Middleware finished.");
    return next();
    console.log("This wont execute,because of return."); //usually dont write anything after next().
});

app.use((req,res,next)=>{
    console.log("Hi i am 2nd middleware");
    next();
});

app.get("/",(req,res)=>{
    res.send("Hi i am root");
});

app.get("/random",(req,res)=>{
    res.send("This is a random page");
});

app.listen(8080,()=>{
    console.log("server listening on port 8080.");
});