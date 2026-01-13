const express = require("express");
const router = express.Router();
const Province = require("../Controlers/ProvinceControler");

// Routes For Province
router.post("/", Province.createProvince);
router.get("/", Province.GetAllProvince);
router.get("/:id", Province.GetProvinceById);
router.delete("/:id", Province.DeleteProvince);
router.put("/:id", Province.UpdateProvince);

module.exports = router;
