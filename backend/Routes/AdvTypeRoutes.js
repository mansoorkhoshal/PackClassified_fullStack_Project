const express = require("express");
const router = express.Router();
const AdvType = require("../Controlers/AdvtypeControler");

// Routes For AdvType
router.post("/", AdvType.CreateAdvType);
router.get("/", AdvType.GetAllAdvType);
router.get("/:id", AdvType.GetAdvTypeById);
router.delete("/:id", AdvType.DeleteAdvType);
router.put("/:id", AdvType.UpdateAdvType);

module.exports = router;
