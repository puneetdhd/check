const mongoose=requre("mongoose");

mongoose.connect("mongodb://localhost:27017/chat")
.then(()=>{
    console.log('mongoose connected');
})
.catch((e)=>{
    console.log('failed');
})



const mongoose = require('mongoose');

main().then(()=>{
    console.log("connection successful");
})


.catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/chat');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}








//new login schema

const chats=new mongoose.schema({chats})