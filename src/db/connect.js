const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/registration").then(() => {
    console.log("connection Successful");
}).catch((e) => {
    console.log("Db connection failed");
})
