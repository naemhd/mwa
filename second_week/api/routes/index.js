const express=require("express")

const router=express.Router();

const gameController=require("../controllers/games.controller")
const controllerUsers= require("../controllers/users.controller.js");

router.route("/games")
    .get(gameController.getAll)
    .post(gameController.createGame);
router.route("/games/:gameId")
    .get(gameController.getGame)
    .put(gameController.updateGame)
    .delete(gameController.deleteGame);

    

router.route("/users/register")
    .post(controllerUsers.register);
router.route("/users/login")
    .post(controllerUsers.login);


module.exports=router;

