const express = require("express");
const router = express.Router();
const { allUSer, userForm } = require("../controllers/userController");

router.get("/", allUSer);

router.get("/create", userForm);

module.exports = router;
