module.exports = (model, Schema) => {

  const Exercise = new Schema({
    name: String,
    isPush: Boolean,
    workout: { type: Schema.Types.ObjectId, ref: 'Workout' }
  })

  return model('Exercise', Exercise)
}