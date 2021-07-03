const mongoose = require("mongoose")
require("./jobs.model")

const dbUrl = "mongodb://mwa:cs572@127.0.0.1:27017/jobs_db"

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })

mongoose.connection.on("connected", function () {
    console.log("connected to db...");
})

mongoose.connection.on("disconnected", function () {
    console.log("disconnected from db...");
})

mongoose.connection.on("error", function (err) {
    console.log("Db error...", err);
})

process.on("SIGINT", function () {
    mongoose.connection.close(function () {
        console.log("Mongoose disconnected by app termination");
        process.exit(0);
    });
});

process.on("SIGTERM", function () {
    mongoose.connection.close(function () {
        console.log("Mongoose disconnected by app termination");
        process.exit(0);
    });
});

process.once("SIGUSR2", function () {
    mongoose.connection.close(function () {
        console.log("Mongoose disconnected by app termination");
        process.kill(process.pid, "SIGUSR2");
    });
})
module.exports = mongoose;