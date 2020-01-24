module.exports = (model, Schema) =>{
    const User = new Schema ({
        name: String,
        email: String,
        age: Number,
        weight: Number
    })

User.plugin(require('passport-local-mongoose'))
    return model ('User', User)
}