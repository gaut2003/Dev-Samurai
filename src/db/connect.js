const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/registration").then(() => {
    console.log("connection Successful");
}).catch((e) => {
    console.log("Db connection failed");
})
/*
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://admin:nMk5Ou302BjbD4nj@cluster0.del1gqg.mongodb.net/?retryWrites=true&w=majority').then(() => {
    console.log("connection Successful");
}).catch((e) => {
    console.log("Db connection failed");
})
*/