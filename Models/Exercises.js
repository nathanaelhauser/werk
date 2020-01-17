module.exports =(model, Schema) => {
    const Exercises = new Schema ({
        arms: {
            push: String,
            pull: String,
            cardio: String

        },
        legs: {
            push: String,
            pull: String,
            cardio: String
        },
        core:{
            push: String,
            pull: String,
            cardio: String
        }       
    })
    return model ('Exercises', Exercises)
}