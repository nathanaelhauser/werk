module.exports = (model, Schema) => {

  const Workout = new Schema({
    name: String,
    excercises: [String]
  })

  return model('Workout', Workout)
}