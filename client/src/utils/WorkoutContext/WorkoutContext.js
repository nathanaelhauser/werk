import React, {createContext} from 'react'

const WorkoutContext = createContext ({
    workout: {},
    workoutStarted: false,
    timeLeft: 0,
    currentStage: 'exercise',
    setWorkout: () => {},
    startWorkout: () => {},
    pauseWorkout: () => {}
})

export default WorkoutContext