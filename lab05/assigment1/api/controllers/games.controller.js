const { response } = require('express');
const mongoose = require('mongoose');
const Game = mongoose.model("Game");


module.exports.getAll = (req, res) => {
    count = 10;
    if (req.query.limit) {
        count = parseInt(req.query.limit);
    }
    Game.find().limit(count).exec((err, games) => {
        console.log("This Is Games (docs)", games);
        res.status(200).json(games);
    })
}

module.exports.getGame = (req, res) => {
    Game.find({ "_id": req.params.gameId }).limit(1).exec((err, games) => {
        console.log("This Is Games (docs)", games);
        res.status(200).json(games);
    })
}

module.exports.createGame = (req, res) => {
    Game.create({
        title: req.body.title,
        year: parseInt(req.body.year),
        price: parseFloat(req.body.price),
        designer: req.body.designer,
        minPlayers: parseInt(req.body.minPlayers),
        maxPlayers: parseInt(req.body.maxPlayers),
        rate: parseFloat(req.body.rate)
    },
        function (err, game) {
            if (err) {
                console.log("Error creating the game");
                res.status(400).json(err);
            } else {
                console.log("Game created successfully", game);
                res.status(201).json(game);
            }
        });
}

module.exports.updateGame = function (req, res) {
    const gameId = req.params.gameId;
    Game.findById(gameId).select("-reviews -publisher").exec(function (err, game) {
        const response = { status: 204 };
        if (err) {
            console.log("Error finding game");
            response.status = 500;
            response.message = err;
        } else if (!game) {
            response.status = 404;
            response.message = { "message": "Game ID not found" };
        }
        if (response.status !== 204) {
            res.status(response.status).json(response.message);
        } else {
            game.title = req.body.title;
            game.year = parseInt(req.body.year);
            game.price = parseFloat(req.body.price);
            game.designer = req.body.designer;
            game.minPlayers = parseInt(req.body.minPlayers);
            game.maxPlayers = parseInt(req.body.maxPlayers);
            game.rate = parseFloat(req.body.rate);
            game.minAge = parseInt(req.body.minAge);
            game.save(function (err, updatedGame) {
                if (err) {
                    response.status = 500;
                    response.message = err;
                }
                res.status(response.status).json(response.message);
            });
        }
    });
};


module.exports.deleteGame = function (req, res) {
    const gameId = req.params.gameId;
    console.log("DELETE gameId ", gameId);
    Game.findByIdAndRemove(gameId).exec(function (err, deletedGame) {
        const response = { status: 204 };
        if (err) {
            console.log("Error finding game");
            response.status = 500;
            response.message = err;
        } else if (!deletedGame) {
            response.status = 404;
            response.message = { "message": "Game ID not found" };
        }
        res.status(response.status).json(response.message);
    });
};
