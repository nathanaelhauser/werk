import { createContext } from 'react'

const FriendsContext = createContext({
  friends: [],
  friend: '',
  handleInputChange: () => {},
  handleSubmit: () => {},
  handleDelete: () => {},
  setFriends: () => {}
})

export default FriendsContext