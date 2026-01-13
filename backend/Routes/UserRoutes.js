const express = require("express");
const router = express.Router();
const User = require("../Controlers/UserControler");

// Routes For User
router.post("/", User.CreateUser);
router.get("/", User.GetAllUser);
router.get("/:id", User.GetUserById);
router.delete("/:id", User.DeleteUser);
router.put("/:id", User.UpdateUser);

module.exports = router;
