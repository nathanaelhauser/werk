module.exports = (model, Schema) => {
    
    const User = new Schema ({
        firstname: String,
        lastname: String,
        age: Number
    })

    return model('User', User)
}