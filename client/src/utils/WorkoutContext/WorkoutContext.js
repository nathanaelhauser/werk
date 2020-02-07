import React, {createContext} from 'react'

const WorkoutContext = createContext ({
    workout: {},
    workoutStarted: false,
    setWorkout: () => {},
    startWorkout: () => {}
})

export default WorkoutContext