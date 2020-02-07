import { createContext } from 'react'

const CustomContext = createContext({
  workoutTitle: '',
    exercise: '',
    exercises: [],
    area: '',
    handleCustomInputChange: () => {},
    handleCustomAddExercise: () => {},
    handleCustomRemoveExercise: () => {},
    handleCustomTitleChange: () => {},
    handleCustomAddWorkout: () => {}
})

export default CustomContext