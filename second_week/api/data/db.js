const mongoose = require("mongoose");
require("./game-model");
require("./user-model");


const dbUrl = "mongodb://127.0.0.1/meanGames";
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on("connected", function () {
    console.log("db connected");
})

mongoose.connection.on("disconnected", function () {
    console.log("db disconnected");
})

mongoose.connection.on("error", function () {
    console.log("db error connecting");
})

process.on("SIGINT", function () {
    mongoose.connection.close(function () {
        console.log("db disconnected application closed");
        process.exit(0);
    });
});

process.on("SIGTERM", function () {
    mongoose.connection.close(function () {
        console.log("disconnected by app");
        process.exit(0);
    });
});


process.once("SIGUSR2", function () {
    mongoose.connection.close(function () {
        console.log("disconnected by app");
        process.kill(process.pid, "SIGUSR2");
    });
});


module.exports=mongoose;