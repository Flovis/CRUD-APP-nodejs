const express = require("express");
const app = express();
const expHbs = require("express-handlebars");
const path = require("path");

const PORT = process.env.PORT | 4000;

const router = require("./src/routes/index");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//confirguration du HDB
app.engine("hbs", expHbs({ extname: ".hbs" }));
app.set("view engine", "hbs");

app.use("/", router);

// app.get("/", (req, res) => {
//     res.render("home");
// });

app.listen(PORT, () => {
    console.log("is running");
});
