import { createContext } from 'react'

const LandingContext = createContext({
  name: '',
  username: '',
  password: '',
  confirmPassword: '',
  age: 0,
  weight: 0,
  handleInputChange: () => {}
})

export default LandingContext