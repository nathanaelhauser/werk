import { createContext } from 'react'

const LogoutContext = createContext({
  loggingOut: false,
  setLoggingOut: () => {}
})

export default LogoutContext