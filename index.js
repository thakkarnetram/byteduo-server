require("dotenv").config()
const express = require("express")
const bodyparser = require("body-parser")
const app = express()

app.use(express.json())
app.use(bodyparser.urlencoded({ extended: true }));

const signupRoute = require("./routers/signupRouter")
app.use("/", signupRoute)

const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
    console.log("Server up");
})