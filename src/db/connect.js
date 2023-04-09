const mongoose = require("mongoose");
const DB = 'mongodb+srv://krishanusitug:krishanu@cluster0.oqgucnf.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect("mongodb://localhost:27017/registration").then(() => {
    console.log("connection Successful");
}).catch((e) => {
    console.log("Db connection failed");
})
