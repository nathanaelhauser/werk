import { createContext } from 'react'
import CustomCard from '../../components/CustomCard'

const CustomContext = createContext({
  workout: '',
    exercise: '',
    exercises: [],
    handleCustomInputChange: () => {},
    handleCustomInputSelect: () => {}
})

export default CustomContext