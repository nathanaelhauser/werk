import React, {createContext} from 'react'

const WorkoutContext = createContext({
    workout: {},
    workoutStarted: false,
    timeLeft: 0,
    onExercise: true,
    currentExercise: 0,
    setWorkout: () => {},
    startWorkout: () => {},
    pauseWorkout: () => {}
})

export default WorkoutContext