import { createContext } from 'react'

const FriendsContext = createContext({
  friends: [],
  friend: '',
  handleInputChange: () => {},
  handleSubmit: () => {}
})

export default FriendsContext