require("dotenv").config()
const express = require("express")
const session = require("express-session");
const bodyparser = require("body-parser")
const app = express()

app.use(express.json())

app.use(
    session({
        secret: process.env.SESSION_KEY, 
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false } 
    })
);

app.use(bodyparser.urlencoded({ extended: true }));

const signupRoute = require("./routers/signupRouter")
app.use("/auth", signupRoute)

const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
    console.log("Server up");
})