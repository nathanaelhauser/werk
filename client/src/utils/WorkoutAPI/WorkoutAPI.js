import axios from 'axios'

const WorkoutAPI = {

  getAllWorkouts: () => axios.get('/workouts'),
  createWorkout: (workout) => axios.post('/workouts', workout),
  updateWorkout: (id, values) => axios.put(`/workouts/${id}`, values),
  deleteWorkout: (id) => axios.delete(`/workouts/${id}`)

}

export default WorkoutAPI