import React, {createContext} from 'react'

const WorkoutContext = createContext({
    workouts: [],
    workout: {},
    workoutStarted: false,
    setWorkout: () => {},
    setWorkoutStarted: () => {}
})

export default WorkoutContext