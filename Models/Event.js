module.exports = (model, Schema) => {

  const Event = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    workout: { type: Schema.Types.ObjectId, ref: 'Workout' }
    
  }, { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } })

  return model('Event', Event)
}