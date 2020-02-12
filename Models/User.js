module.exports = (model, Schema) =>{
    const User = new Schema ({
        name: String,
        username: {
            type: String,
            unique: true
        },
        email: String,
        age: Number,
        weight: Number,
        isLoggedIn: {
            type: Boolean,
            default: true
        },
        workouts: [{ type: Schema.Types.ObjectId, ref: 'Workout' }],
        friends: [{ type: Schema.Types.ObjectId, ref: 'User' }]
    })

    User.plugin(require('passport-local-mongoose'))
    return model ('User', User)
}