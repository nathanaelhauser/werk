import axios from 'axios'

const ExerciseAPI = {

  getExercises: () => axios.get('/exercises'),
  createExercise: (exercise) => axios.post('/exercises', exercise),
  updateExercise: (id, values) => axios.put(`/exercises/${id}`, values),
  deleteExercise: (id) => axios.delete(`/exercises/${id}`)

}

export default ExerciseAPI