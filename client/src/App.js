import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { useTimer } from 'react-timer-hook'
// import tags for pages
import About from './pages/About'
import Landing from './pages/Landing'
import Home from './pages/Home'
import Quickstart from './pages/Quickstart'
import Profile from './pages/Profile'
import Workout from './pages/Workout'
import Exercises from './pages/Exercises'
import Nav from './components/Nav'
import NavDrawer from './components/NavDrawer'
import DrawerContext from './utils/DrawerContext'
import Custom from './pages/Custom'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/core/styles'
import WorkoutContext from './utils/WorkoutContext'

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
  const { seconds, restart, pause } = useTimer({ onExpire: () => {
    if (workoutState.currentExercise === workoutState.workout.exercises.length - 1) {
      return
    }
    if (workoutState.onExercise) {
      setWorkoutState({ ...workoutState, onExercise: false })
      restart(15000)
    } else {
      setWorkoutState({ 
        ...workoutState, 
        onExercise: true,
        currentExercise: workoutState.currentExercise + 1
      })
      restart(60000)
    }
  }})

  const [workoutState, setWorkoutState] = useState({
    workout: {},
    workoutStarted: false,
    timeLeft: 0,
    onExercise: true,
    currentExercise: 0
  })

  workoutState.setWorkout = workout => setWorkoutState({ ...workoutState, workout })

  workoutState.startWorkout = () => {
    setWorkoutState({ ...workoutState, currentExercise: 0, onExercise: true, workoutStarted: true })
  }

  workoutState.pauseWorkout = () => {
    pause()
  }

  useEffect(() => {
    setWorkoutState({ ...workoutState, timeLeft: seconds })
  }, [seconds])

  const [drawerState, setDrawerState] = useState({
    isOpen: false
  })

  drawerState.toggleDrawer = open => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }
    setDrawerState({ ...drawerState, isOpen: open })
  }

  return (
    <ThemeProvider theme={theme}>
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

              </Switch>
            </div>
          </Router>
        </DrawerContext.Provider>
      </WorkoutContext.Provider >
    </ThemeProvider>

  )
}

export default App