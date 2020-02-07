import React, {createContext} from 'react'

const WorkoutContext = createContext ({
    workout: {},
    workoutStarted: false,
    timeLeft: 0,
    currentStage: 'exercise',
    setWorkout: () => {},
    startWorkout: () => {}
})

export default WorkoutContext