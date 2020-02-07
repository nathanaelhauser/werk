import { createContext } from 'react'

const LandingContext = createContext({
  name: '',
  username: '',
  password: '',
  confirmPassword: '',
  age: '',
  weight: '',
  handleInputChange: () => {}
})

export default LandingContext