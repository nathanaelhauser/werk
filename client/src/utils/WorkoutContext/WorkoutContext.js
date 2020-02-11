import React, {createContext} from 'react'

const WorkoutContext = createContext({
    workouts: [],
    workout: {},
    workoutStarted: false,
    setWorkout: () => {},
    setWorkoutStarted: () => {},
    handleDeleteWorkout: () => {}
})

export default WorkoutContext