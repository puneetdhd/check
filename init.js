const mongoose = require('mongoose');

const Chat=require("./models/chat.js");



main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/chat');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
};


Chat.insertMany({
    from:"puneeta",
    to:"priyanka",
    message:"hey bbg",
    created_at: new Date()
});
