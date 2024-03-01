const mongoose=require("mongoose");



//this is basically the syntax for declaring a new collection schema

const chatschema=new mongoose.Schema({
    from:{
        type:String
    },
    to:{
        type: String
    },
    mgs:{
        type:String,
        maxLength:20
    }
});


const Chat= mongoose.model("Chat",chatschema);

//basically yahan hamare collection ka naam ho jata hai chats as humne ek ka naam chat diya ha so comp me uska name save hoga aas chats

module.exports=Chat;

//ye basically apne database ko export kar deta and we will require the database wherever needed