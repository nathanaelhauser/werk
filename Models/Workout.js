module.exports = (model, Schema) => {

  const Workout = new Schema({
    name: String,
    area: String,
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    exercises: [{ type: Schema.Types.ObjectId, ref: 'Exercise' }]
  })

  return model('Workout', Workout)
}