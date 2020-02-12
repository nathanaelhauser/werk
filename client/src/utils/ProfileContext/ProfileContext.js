import { createContext } from 'react'

const ProfileContext = createContext({
  name: '',
  age: '',
  weight: '',
  handleInputChange: () => {},
  clearInputs: () => {}
})

export default ProfileContext