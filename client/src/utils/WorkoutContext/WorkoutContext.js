import React, {createContext} from 'react'

const WorkoutContext = createContext({
    workout: {},
    workoutStarted: false,
    setWorkout: () => {},
    setWorkoutStarted: () => {}
})

export default WorkoutContext