require('./config')
require('dotenv').config()
const express = require('express')
const { join } = require('path')
const passport = require('passport')
const {Strategy} = require('passport-local')
const {Strategy: JWTStrategy, ExtractJwt} = require('passport-jwt')

const app = express()
const {User} = require('./Models')

app.use(express.static(join(__dirname, 'client', 'build')))
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

app.use(passport.initialize())
app.use(passport.session())

passport.use(new Strategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET}, ({id}, cb) => User.findById(id)
.then(user => cb(null, user))
.catch(e => cb(e))))

require('./routes')(app)

// app.listen(3001)
require('mongoose').connection.once('open', () => app.listen(3001))
