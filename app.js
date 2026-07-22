const express = require("express");
const app = express();

app.use((req,res)=>{
    console.log("Hi i am middleware");
    res.send("middleware finished");
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