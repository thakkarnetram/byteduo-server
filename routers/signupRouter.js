const express = require("express")
const signup = require("../controllers/signupController")

const router = express.Router();

router.get("/github", signup.signupRedirect)
router.get("/github/callback", signup.signupCallback)

module.exports = router;