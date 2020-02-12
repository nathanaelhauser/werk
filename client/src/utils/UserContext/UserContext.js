import { createContext } from 'react'

const UserContext = createContext({
  _id: 0,
  name: '',
  username: '',
  age: 0,
  weight: 0,
  updateUserContext: () => {}
})

export default UserContext