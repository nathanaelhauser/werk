import { createContext } from 'react'

const ProfileContext = createContext({
  name: '',
  age: '',
  weight: '',
  handleInputChange: () => {}
})

export default ProfileContext