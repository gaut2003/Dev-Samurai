const mongoose = require("mongoose");

const volunteerSchema = new mongoose.Schema({
    firstname:{
        type:String,
        require: true
    },
    lastname:{
        type:String,
        require: true
    },
    email:{
        type: String,
        require: true,
        unique: true,
    },
    phone:{
        type: Number,
        require: true,
        unique: true,
    },
    password:{
        type: String,
        require: true
    },
    confirmpassword:{
        type: String,
        require: true
    }
})
const Reginster = new mongoose.model("Register", volunteerSchema);
module.exports = Reginster;
