import { createContext } from 'react'
import CustomCard from '../../components/CustomCard'

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