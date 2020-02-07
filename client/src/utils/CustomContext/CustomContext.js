import { createContext } from 'react'

const CustomContext = createContext({
  workoutTitle: '',
    exercise: '',
    exercises: [],
    area: '',
    setArea: () => {},
    handleCustomInputChange: () => {},
    handleCustomAddExercise: () => {},
    handleCustomRemoveExercise: () => {},
    handleCustomTitleChange: () => {},
    handleCustomAddWorkout: () => {}
})

export default CustomContext