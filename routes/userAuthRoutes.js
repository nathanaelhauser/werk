const { User } = require('../Models')
const jwt = require('jsonwebtoken')
const passport = require('passport')

const { SocketioControllers: { announceLogin, announceLogout } } = require('../controllers')

module.exports = app => {
    app.post('/userAuth', (req, res) => {
        const { name, username, email, age, weight } = req.body
        User.register(new User({ name, username, email, age, weight }), req.body.password, e => {
            if (e) { console.log(e) }
            res.sendStatus(200)
        })
    })

    app.post('/login', (req, res) => {
        User.authenticate()(req.body.username, req.body.password, (e, user) => {
            if (e) { console.log(e) }
            if (user) {
                announceLogin(user._id)
                User.updateOne({ _id: user._id }, { isLoggedIn: true })
                    .then(() => res.json({ token: jwt.sign({ id: user._id }, process.env.SECRET) }))
                    .catch(e => console.log(e))
            } else {
                res.json(user)
            }
        })
    })

    app.get('/logout', passport.authenticate('jwt', { session: false }), (req, res) => {
        announceLogout(req.user._id)
        User.updateOne({ _id: req.user._id }, { isLoggedIn: false })
            .then(() => res.sendStatus(200))
            .catch(e => console.log(e))
    })

    app.get('/authorize', (req, res, next) => {
        passport.authenticate('jwt', (err, user, info) => {
            if (err) {
                next(err)
            }
            if (!user) {
                res.json({ isAuthorized: false })
            } else {
                req.logIn(user, err => {
                    if (err) {
                        next(err)
                    }
                    return res.json({ isAuthorized: true })
                })
            }

        })(req, res, next)
    })
}