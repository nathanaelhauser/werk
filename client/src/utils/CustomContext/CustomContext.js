import { createContext } from 'react'

const CustomContext = createContext({
  workoutTitle: '',
    exercise: '',
    exercises: [],
    handleCustomInputChange: () => {},
    handleCustomAddExercise: () => {},
    handleCustomRemoveExercise: () => {},
    handleCustomTitleChange: () => {}
})

export default CustomContext