const {User} = require('../Models')
const jwt = require  ('jsonwebtoken')

module.export = app => {
    app.post ('/userAuth', (req, res) => {
        const {userName, email} = req.body
        User.register(new User({userName, email}), req.body.password, e => {if(e){console.log(e)}
        res.sendStatus(200)
        })
    })

    app.post('/login', (req, res) =>{
        User.authenticate()(req.body.username, req.body.password,(e, user) =>{if (e) {console.log(e)}
    res.json(user ? {
        token: jwt.sign({id: user._id}, process.env.SECRET)} :user)
    })
    })
}