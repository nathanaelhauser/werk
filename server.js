require('./config')
const express = require('express')
const { join } = require('path')
const passport = require('passport')
const {Strategy} = require('passport-local')
const {Strategy: JWTStrategy, ExtractJwt} =('passport-jwt')

const app = express()

app.use(express.static(join(__dirname, 'client', 'build')))
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

app.use(passport.initialize())
app.use(passport.session())

passport.use(new Strategy(User.Authenticate()))
passport.serializeUser(User.serializerUser())
passport.deserializeUser(User.deserializerUser())

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    
}, ({id}, cb) => User.findById(id)
.then(user => cb(null, user))
.catch(e => cb(e))))

require('./routes')(app)

// app.listen(3001)
require('mongoose').connection.once('open', () => app.listen(3001))
