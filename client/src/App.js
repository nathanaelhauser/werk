import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
// import tags for pages
import About from './pages/About'
import Landing from './pages/Landing'
import Home from './pages/Home'
import Quickstart from './pages/Quickstart'
import Profile from './pages/Profile'
import Workout from './pages/Workout'
import Exercises from './pages/Exercises'
import Recent from './pages/Recent'
import Nav from './components/Nav'
import NavDrawer from './components/NavDrawer'
import DrawerContext from './utils/DrawerContext'
import Custom from './pages/Custom'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/core/styles'
import WorkoutContext from './utils/WorkoutContext'
import UserContext from './utils/UserContext'
import LogoutContext from './utils/LogoutContext'
import FriendsContext from './utils/FriendsContext'
import FriendAPI from './utils/FriendAPI'
import UserAPI from './utils/UserAPI'
import UserAuthAPI from './utils/UserAuthAPI'

const { addFriend, deleteFriend } = FriendAPI

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#424242',
    },
    secondary: {
      // main: "#86DEB7"
      main: "#f44336"
    },
  },
  typography: {
    "fontFamily": "\"Bangers\"",
    "fontSize": 36
  }

})

const closingCode = () => {
  UserAuthAPI.logoutUser()
    .catch(e => console.error(e))
  return null;
}
window.onbeforeunload = closingCode

const App = props => {

  /////////////////////////
  // Workout State
  /////////////////////////

  const [workoutState, setWorkoutState] = useState({
    workout: {},
    workoutStarted: false
  })

  workoutState.setWorkout = workout => setWorkoutState({ ...workoutState, workout })

  workoutState.setWorkoutStarted = workoutStarted => setWorkoutState({ ...workoutState, workoutStarted })

  /////////////////////////
  // User State
  /////////////////////////

  const [userState, setUserState] = useState({
    _id: 0,
    name: '',
    username: '',
    age: 0,
    weight: 0
  })

  userState.updateUserContext = user => {
    setUserState({ ...userState, ...user })
  }

  useEffect(() => {
    if (sessionStorage.getItem('werkToken')) {
      UserAPI.getMyUser(sessionStorage.getItem('werkToken'))
        .then(({ data: user }) => setUserState({ ...user }))
        .catch(e => console.error(e))
    }
  }, [sessionStorage.getItem('werkToken')])

  /////////////////////////
  // Friends State
  /////////////////////////

  const [friendsState, setFriendsState] = useState({
    friends: [],
    friend: ''
  })

  friendsState.handleInputChange = event =>
    setFriendsState({ ...friendsState, [event.target.name]: event.target.value })

  friendsState.handleSubmit = event => {
    event.preventDefault()
    addFriend(friendsState.friend)
      .then(({ data: friend }) => {
        let friends = [...friendsState.friends]
        friends.push(friend)
        setFriendsState({ ...friendsState, friends, friend: '' })
      })
      .catch(e => console.error(e))
  }

  friendsState.handleDelete = friendID => event => {
    deleteFriend(friendID)
      .then(() => {
        let friends = [...friendsState.friends]
        friends = friends.filter(friend => friend._id !== friendID)
        setFriendsState({ ...friendsState, friends })
      })
      .catch(e => console.error(e))
  }

  friendsState.setFriends = friends => {
    setFriendsState({ ...friendsState, friends })
  }

  /////////////////////////
  // Drawer State
  /////////////////////////

  const [drawerState, setDrawerState] = useState({
    isOpen: false
  })

  drawerState.toggleDrawer = open => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }
    setDrawerState({ ...drawerState, isOpen: open })
  }

  /////////////////////////
  // Logout State
  /////////////////////////

  const [logoutState, setLogoutState] = useState({
    loggingOut: false
  })

  logoutState.setLoggingOut = loggingOut => {
    setLogoutState({ ...logoutState, loggingOut })
  }

  /////////////////////////
  // Main App
  /////////////////////////

  return (
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={userState}>
        <WorkoutContext.Provider value={workoutState}>
          <FriendsContext.Provider value={friendsState}>
            <DrawerContext.Provider value={drawerState}>
              <LogoutContext.Provider value={logoutState}>
                <Router>
                  <div>
                    <Nav />
                    <NavDrawer />
                    <Switch>
                      <Route exact path="/">
                        {/* page tags */}
                        <Landing />
                      </Route>
                      <Route path="/home">
                        {/* page tags */}
                        <Home />
                      </Route>
                      <Route path="/about">
                        <About />
                      </Route>
                      <Route path="/quickstart">
                        <Quickstart />
                      </Route>
                      <Route path="/custom">
                        <Custom />
                      </Route>
                      <Route path="/profile">
                        <Profile />
                      </Route>
                      <Route path="/workout">
                        <Workout />
                      </Route>
                      <Route path="/exercises">
                        <Exercises />
                      </Route>
                      <Route path="/recent">
                        <Recent />
                      </Route>

                    </Switch>
                  </div>
                </Router>
              </LogoutContext.Provider>
            </DrawerContext.Provider>
          </FriendsContext.Provider>
        </WorkoutContext.Provider>
      </UserContext.Provider>
    </ThemeProvider>

  )
}

export default App