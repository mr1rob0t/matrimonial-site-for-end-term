const mongoose=require('mongoose');
const express=require('express');
const router=express.Router();
const app=express();
const cookieParser = require("cookie-parser");
mongoose.connect("mongodb+srv://vasudev2002:1234@crud.g2gos.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then(()=>console.log("connection established")).catch((err)=>console.log(err));
app.use(express.json());

app.use(cookieParser());
app.use('/public',express.static("public"));
app.use(require('./routes/auth'));
// app.use(require('./routes/admin'));

app.listen(5000,"localhost",()=>{console.log("Server started")});
