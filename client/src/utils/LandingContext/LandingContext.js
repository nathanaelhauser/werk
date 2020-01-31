import { createContext } from 'react'

const LandingContext = createContext({
  name: '',
  username: '',
  password: '',
  age: 0,
  weight: 0,
  handleInputChange: () => {}
})

export default LandingContext