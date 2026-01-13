const express = require("express");
const router = express.Router();
const AdvStatus = require("../Controlers/AdvStatusControler");

// Routes For AdvStatus
router.post("/", AdvStatus.CreateAdvStatus);
router.get("/", AdvStatus.GetAllAdvStatus);
router.get("/:id", AdvStatus.GetAdvStatusById);
router.delete("/:id", AdvStatus.DeleteAdvStatus);
router.put("/:id", AdvStatus.UpdateAdvStatus);

module.exports = router;
