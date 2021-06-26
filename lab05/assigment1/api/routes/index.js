const express=require("express")

const router=express.Router();

const gameController=require("../controllers/games.controller")

router.route("/games")
    .get(gameController.getAll)
    .post(gameController.createGame);
router.route("/games/:gameId")
    .get(gameController.getGame)
    .put(gameController.updateGame)
    .delete(gameController.deleteGame);

module.exports=router;

