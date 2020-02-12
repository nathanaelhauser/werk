module.exports = (model, Schema) =>{
    const User = new Schema ({
        name: String,
        username: String,
        email: String,
        age: Number,
        weight: Number,
        workouts: [{ type: Schema.Types.ObjectId, ref: 'Workout' }],
        friends: [{ type: Schema.Types.ObjectId, ref: 'User' }]
    })

    User.plugin(require('passport-local-mongoose'))
    return model ('User', User)
}