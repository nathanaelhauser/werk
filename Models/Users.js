module.exports = (model, Schema) =>{
    const User = new Schema ({
        user: {
            firstname: String,
            lastname: String,
            email: String,
            age: Integer,
            weight: Integer }
    })

User.plugin(require('passport-local-mongoose'))
    return model ('Users', User)
}
