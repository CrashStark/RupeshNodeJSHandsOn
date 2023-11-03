const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/olympics",
    {
       
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>{
        console.log("Connected to Atlas");
    }).catch((error)=>
    {
        console.log(error);
        console.log("Connection Establishment Failed");
    })