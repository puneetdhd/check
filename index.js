const express= require("express");
const app= express();
const path= require("path");
const ejs= require("ejs");

const Chat=require("./models/chat.js");
//this basically takes 

const mongoose = require('mongoose');

main().then(()=>{
    console.log("connected")
})

.catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/chat');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


const templatePath= path.join(__dirname,'views');
//views is the name of folder having the template files

app.use(express.json())
app.set("view engine","ejs");
app.set("views",templatePath)
app.use(express.urlencoded({extended:false}))

app.use(express.static('public'))

app.get("/",(req,res)=>{
    res.render("home.ejs");
})
//index is working

app.get("/chats",async(req,res)=>{
    let chats= await chats.find();
    console.log(chats);
    res.render ("chats.ejs");

});

app.get("/exit",async(req,res)=>{
    res.render("exit.ejs");
})

let chat1=new Chat({
    from:"puneeta",
    to:"priyanka",
    message:"hey ",
    created_at: new Date()
});


chat1.save().then((res)=>{
    console.log(res);
});

app.listen(4000,()=>{
    console.log("server is listening on port 3000");
})