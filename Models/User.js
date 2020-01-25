module.exports = (model, Schema) => {
    
    const User = new Schema ({
        name: String,
        email: String,
        age: Number,
        weight: Number
    })

    return model('User', User)
}