const express = require("express")
const signup = require("../controllers/signupController")

const router = express.Router();

router.get("/auth/github", signup.signupRedirect)
// router.get("/auth/github", signup.signupCallback)

module.exports = router;