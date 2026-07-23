const express = require("express");
const app = express();

// app.use((req,res,next)=>{
//     console.log("Hi i am 1st middleware");
//     // res.send("Middleware finished.");
//     return next();
//     console.log("This wont execute,because of return."); //usually dont write anything after next().
// });

// app.use((req,res,next)=>{
//     console.log("Hi i am 2nd middleware");
//     next();
// });

//Utility Middleware(Logger-morgan)
// app.use((req,res,next)=>{
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method,req.hostname,req.path,req.time);      //write all middlewares in the starting of the page cauz after matched route respose will be sent and middleware wont run at all if written after the routes.
//     next();
// });

app.use("/random",(req,res,next)=>{                             //if path left empty, it means this middleware is for all routes.
    console.log("I am only for route random.");                 //this middleware is only for route random.
    next();
});

//kinda like authentication/protection layer
// app.use("/api",(req,res,next)=>{
//     let {token} = req.query;
//     if(token == "giveaccess"){                                  //if token passes in query is correct only then give access to data.
//         next();
//     }
//     res.send("Access Denied!");
// });

const checkToken = (req,res,next)=>{
    let {token} = req.query;
    if(token == "giveaccess"){                                  //if token passes in query is correct only then give access to data.
        next();
    }
    res.send("Access Denied!");
};

app.get("/api",checkToken,(req,res)=>{                          //can call middleware function before sending response.
    res.send("Data shown");
});

app.get("/",(req,res)=>{
    res.send("Hi i am root");
});

app.get("/random",(req,res)=>{
    res.send("This is a random page");
});

//404
app.use((req,res)=>{
    res.status(404).send("Page not found!");                    //custom errors can be made using middlewares(error handling).
});

app.listen(8080,()=>{
    console.log("server listening on port 8080.");
});