require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const authCtrl = require('./authController')
const postCtrl = require('./controller')

const app = express()
const {CONNECTION_STRING, SERVER_PORT, SESSION_SECRET} = process.env

app.use(express.json())
app.use(
    session({
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: {maxAge: 1000 * 60 * 60 * 24 * 365}
    })
)
app.post(`/api/auth/register`, authCtrl.register)
app.post(`/api/auth/login`, authCtrl.login)

app.get(`/api/posts`, postCtrl.getPosts)
app.put(`/api/posts/:post_id`, postCtrl.editPost)
app.delete(`/api/posts/:post_id`, postCtrl.deletePost)



massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false},
}).then((dbInstance) => {
    app.set('db', dbInstance)
    console.log("DB ready!")
    app.listen(SERVER_PORT, () =>
    console.log(`Greetings from port ${SERVER_PORT}`)
    )
})

