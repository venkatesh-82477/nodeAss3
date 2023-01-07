const express = require("express");

const app = express();

const firstMiddleware =(req,res,next)=>{
    console.log("This is the first middleware");
    next();
}
const secondMiddleware =(req,res,next)=>{
    console.log("This is the second middleware");
    next();
}

app.use(firstMiddleware);

app.get("/page1",function(req,res){
    console.log("This is the first middleware");
    res.send("<h2>Here we are executing first middleware</h2>")
})
app.get("/page2",secondMiddleware,function(req,res){
    console.log("This is the first and second middleware");
    res.send("<h2>Here we are executing first and second middleware</h2>")
})
app.get("/page3",secondMiddleware,function(req,res){
    console.log("This is the first and second middleware");
    res.send("<h2>Here we are executing first and second middleware</h2>")
})
app.get("/page4",function(req,res){
    console.log("This is the first middleware");
    res.send("<h2>Here we are executing first middleware</h2>")
})

app.listen(5550,function(){
    console.log("Server is started at port 5550");
})