module.exports = (model, Schema) =>{
    const User = new Schema ({
        user: {
            userName:String,
            email: String,}
    })

User.plugin(require('passport-local-mongoose'))
    return model ('User', User)
}