const express = require("express");
const router = express.Router();
const Country = require("../Controlers/CountryControler");

router.post("/", Country.CreateCountry);
router.get("/", Country.GetAllCountries);
router.get("/:id", Country.GetCountryById);
router.delete("/:id", Country.DeleteCountry);
router.put("/:id", Country.UpdateCountry);

module.exports = router;
