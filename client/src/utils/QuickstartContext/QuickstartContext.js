import { createContext } from 'react'

const QuickstartContext = createContext({
  area: '',
  workouts: [],
  getWorkouts: () => {}
})

export default QuickstartContext