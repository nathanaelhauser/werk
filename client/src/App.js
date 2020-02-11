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
import UserAPI from './utils/UserAPI'

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

  useEffect(() => {
    if (sessionStorage.getItem('werkToken')) {
      UserAPI.getMyUser(sessionStorage.getItem('werkToken'))
        .then(({ data: user }) => setUserState({ ...user }))
        .catch(e => console.error(e))
    }
  }, [sessionStorage.getItem('werkToken')])

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
  // Main App
  /////////////////////////

  return (
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={userState}>
        <WorkoutContext.Provider value={workoutState}>
          <DrawerContext.Provider value={drawerState}>
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
          </DrawerContext.Provider>
        </WorkoutContext.Provider>
      </UserContext.Provider>
    </ThemeProvider>

  )
}

export default App