const express = require("express");
const router = express.Router();
const User = require("../Controlers/UserControler");
const uploads=require('../Middlware/uploadImage')
// Routes For User
router.post("/", uploads.single('image') ,User.CreateUser);
router.get("/", User.GetAllUser);
router.get("/:id", User.GetUserById);
router.delete("/:id", User.DeleteUser);
router.put("/:id", User.UpdateUser);

module.exports = router;
