module.exports = (model, Schema) => {

  const Exercise = new Schema({
    name: String,
    category: String,
    equipment: [String],
    description: String,
    mainMuscles: [String],
    secondaryMuscles: [String]
  })

  return model('Exercise', Exercise)
}