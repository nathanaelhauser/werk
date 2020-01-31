import React, {createContext} from 'react'

const WorkoutContext = createContext ({
    Workout: '',
    Workouts: [],
    handleInputChange: () => {},
    handleAddWorkOut: () => {},
    handleToggle: () => {},
    handleRemoveWo: () =>{}
})

export default WorkoutContext