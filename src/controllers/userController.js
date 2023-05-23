const User = require("../models/User");

//Faire que quand dans routes quand on appelle une
// une route que le controller associe a cette
//router soit aussi appelle
const allUSer = (req, res) => {
    res.render("home");
};

const userForm = (req, res) => {
    res.render("create", {title: "create"})
}

const createUser = (req, res) => {
    const {} = req.body;
}

module.exports = { allUSer, userForm, createUser};
