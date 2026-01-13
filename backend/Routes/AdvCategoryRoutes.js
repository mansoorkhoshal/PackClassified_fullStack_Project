const express = require("express");
const router = express.Router();
const AdvCategory = require("../Controlers/AdvCategoryControler");

// Routes For AdvCategory
router.post("/", AdvCategory.CreateAdvCategory);
router.get("/", AdvCategory.GetAllAdvCategory);
router.get("/:id", AdvCategory.GetAdvCategoryById);
router.delete("/:id", AdvCategory.DeleteAdvCategory);
router.put("/:id", AdvCategory.UpdateAdvCategory);

module.exports = router;
