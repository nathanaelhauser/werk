module.exports = (model, Schema) => {

  const Exercise = new Schema({
    name: String,
    category: String,
    equipment: [String],
    description: String,
    mainMuscles: [String],
    secondaryMuscles: [String],
    workout: [{ type: Schema.Types.ObjectId, ref: 'Workout' }]
  })

  return model('Exercise', Exercise)
}