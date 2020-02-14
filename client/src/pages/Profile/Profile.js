import React, { useState, useEffect, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import MyProfileCard from '../../components/MyProfileCard'
import CustomCard from '../../components/CustomCard'
import FriendsCard from '../../components/FriendsCard'
import SignOutButton from '../../components/SignOutButton'
import UserAuthAPI from '../../utils/UserAuthAPI'
import UnauthorizedRedirect from '../../components/UnauthorizedRedirect'
import WorkoutContext from '../../utils/WorkoutContext'
import WorkoutAPI from '../../utils/WorkoutAPI'
import ProfileContext from '../../utils/ProfileContext'
import UserContext from '../../utils/UserContext'

const {getWorkout, deleteWorkout, getUserWorkouts } = WorkoutAPI

function TabPanel(props) {
  const { children, value, index, ...other } = props

    return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    alignItems: 'center'
  },
}))

const Profile = () => {
  const classes = useStyles()
  const { setWorkout } = useContext(WorkoutContext)
  const { _id: author } = useContext(UserContext)
  const [value, setValue] = React.useState(0)
  const [authorizedState, setAuthorizedState] = useState(true)
  const [goWorkout, setGoWorkout] = useState(false)

  const renderRedirectWorkout = () => {
    if (goWorkout) {
      return <Redirect to="/workout" />
    }
  }

  const [ profileState, setProfileState ] = useState({
    name: '',
    age: '',
    weight: ''
  })

  profileState.handleInputChange = event => {
    setProfileState({ ...profileState, [event.target.name]: event.target.value })
  }

  profileState.clearInputs = () => {
    setProfileState({ ...profileState, name: '', age: '', weight: '' })
  }

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  useEffect(() => {
    UserAuthAPI.authorizeUser()
      .then(({ data: { isAuthorized } }) => {
        setAuthorizedState(isAuthorized)
      })
      .catch(e => console.error(e))
  }, [])

  const [ workoutState, setWorkoutState ] = useState({
    workouts: [],
    workout: {}
  })

  workoutState.handleStartWorkout = (id) => {
    getWorkout(id)
    .then(({data: workout}) => {

      setWorkout({ ...workout[0], id })
      setGoWorkout(true)
    })
    .catch(e => console.error(e))
  }

  workoutState.handleDeleteWorkout = (id) => {
    let workouts = JSON.parse(JSON.stringify(workoutState.workouts))
    let workoutsFiltered = workouts.filter(workout => workout._id !== id)
    setWorkoutState({...workoutState, workouts: workoutsFiltered})
  }

  useEffect(() => {
    let token = sessionStorage.getItem('werkToken')
    getUserWorkouts(token)
    .then(({data: workouts}) => {
      setWorkoutState({...workoutState, workouts})
    })
    .catch(e => console.error(e))
  }, [])

  

  return (
    <WorkoutContext.Provider value={workoutState}>
    <ProfileContext.Provider value={profileState}>
    <div className={classes.root} align="center">
      <UnauthorizedRedirect authorized={authorizedState} />
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="My Profile" {...a11yProps(0)} />
          <Tab label="My Workouts" {...a11yProps(1)} />
          <Tab label="My Friends" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <MyProfileCard />
        <SignOutButton />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CustomCard />
        {renderRedirectWorkout()}
      </TabPanel>
      <TabPanel value={value} index={2}>
        <FriendsCard />
      </TabPanel>
    </div>
    </ProfileContext.Provider>
    </WorkoutContext.Provider>
  )
}

export default Profile