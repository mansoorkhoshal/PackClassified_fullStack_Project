const express = require("express");
const router = express.Router();
const Advertisment = require("../Controlers/AdvertismentControler");

// Routes For Advertisment
router.post("/", Advertisment.CreateAdvertisment);
router.get("/", Advertisment.GetAllAdvertisment);
router.get("/:id", Advertisment.GetAdvertismentById);
router.delete("/:id", Advertisment.DeleteAdvertisment);
router.put("/:id", Advertisment.UpdateAdvertisment);

module.exports = router;
