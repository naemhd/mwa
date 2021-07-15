const express=require("express")
const citiesController=require("../controllers/cities.controller")

const router=express.Router();

router.route("/cities")
    .get(citiesController.getAll)
    .post(citiesController.create)

router.route("/cities/:cityId")
    .get(citiesController.getOne)
    .delete(citiesController.deleteOne)

module.exports=router;