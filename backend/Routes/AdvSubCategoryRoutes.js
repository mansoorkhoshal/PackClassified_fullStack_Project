const express = require("express");
const router = express.Router();
const AdvSubCategory = require("../Controlers/AdvSubCategoryControler");

// Routes For AdvSubCategory
router.post("/", AdvSubCategory.CreateAdvSubCategory);
router.get("/", AdvSubCategory.GetAllAdvSubCategory);
router.get("/:id", AdvSubCategory.GetAdvSubCategoryById);
router.delete("/:id", AdvSubCategory.DeleteAdvSubCategory);
router.put("/:id", AdvSubCategory.UpdateAdvSubCategory);

module.exports = router;
