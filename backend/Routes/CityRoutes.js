const express = require("express");
const router = express.Router();
const City = require("../Controlers/CityControler");

// Routes For City
router.post("/", City.CreateCity);
router.get("/", City.GetAllCities);
router.get("/:id", City.GetCityById);
router.delete("/:id", City.DeleteCity);
router.put("/:id", City.UpdateCity);

module.exports = router;
