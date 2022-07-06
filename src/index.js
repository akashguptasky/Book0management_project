const express = require('express');
const mongoose = require('mongoose');
const router = require('./route/route')
const multer = require('multer');

const app = express();
app.use(express.json());
app.use(multer().any());

const url="";
mongoose.connect(url,{useNewUrlParser:true})
.then(()=>console.log("Mongoose connected"))
.catch(err=>console.log(err));

app.use('/',router);

app.listen(process.env.PORT || 3000 , function(){
    console.log('Express app running on port ' + (process.env.PORT || 3000))
})