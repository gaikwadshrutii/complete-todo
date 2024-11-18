const { register, login, logout } = require("../controller/auth.controller")

const router = require("express").Router()

router
    .post("/signup", register)
    .post("/singin", login)
    .post("/signout", logout)
module.exports = router