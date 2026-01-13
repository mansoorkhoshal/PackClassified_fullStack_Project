const express = require("express");
const router = express.Router();
const AdvImages = require("../Controlers/AdvImagesControler");

// Routes For AdvImages
router.post("/", AdvImages.CreateAdvImages);
router.get("/", AdvImages.GetAllAdvImages);
router.get("/:id", AdvImages.GetAdvImagesById);
router.delete("/:id", AdvImages.DeleteAdvImages);
router.put("/:id", AdvImages.UpdateAdvImages);

module.exports = router;
