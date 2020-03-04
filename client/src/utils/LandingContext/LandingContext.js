import { createContext } from 'react'

const LandingContext = createContext({
  name: '',
  username: '',
  age: '',
  weight: '',
  handleInputChange: () => {}
})

export default LandingContext