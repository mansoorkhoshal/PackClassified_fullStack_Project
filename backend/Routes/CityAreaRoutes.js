const express = require("express");
const router = express.Router();
const CityArea = require("../Controlers/CityAreaControler");

// Routes For CityArea
router.post("/", CityArea.CreateCityArea);
router.get("/", CityArea.GetAllCitiesArea);
router.get("/:id", CityArea.GetCityAreaById);
router.delete("/:id", CityArea.DeleteCityArea);
router.put("/:id", CityArea.UpdateCityArea);

module.exports = router;
