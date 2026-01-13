const express = require("express");
const router = express.Router();
const Role = require("../Controlers/RoleControler");

// Routes For Role
router.post("/", Role.CreateRole);
router.get("/", Role.GetAllRole);
router.get("/:id", Role.GetRoleById);
router.delete("/:id", Role.DeleteRole);
router.put("/:id", Role.UpdateRole);

module.exports = router;
