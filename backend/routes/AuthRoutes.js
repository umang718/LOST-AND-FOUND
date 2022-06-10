const express = require("express");


// const { SignUpController } = require("../controllers/SignUpController");
const router = express.Router();

const { register, login } = require("../controllers/LoginController");


// router.route("/login").get(login);

router.post('/register', register);
router.post('/login', login );

module.exports = router