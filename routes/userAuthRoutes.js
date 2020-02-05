const { User } = require('../Models')
const jwt = require('jsonwebtoken')
const passport = require('passport')


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
            res.json(user ? {
                token: jwt.sign({ id: user._id }, process.env.SECRET)
            } : user)
        })
    })

    app.get('/logout/:id', (req, res) => {
        req.logout();
        res.redirect('/');
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