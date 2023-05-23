const express = require("express");
const router = express.Router();
const { allUSer, userForm, createUser } = require("../controllers/userController");

router.get("/", allUSer);

router.get("/create", userForm);

router.post("/create", createUser);

module.exports = router;
