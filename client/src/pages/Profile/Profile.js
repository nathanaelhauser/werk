import React, { useState, useEffect } from 'react'
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
import SignOutButton from '../../components/SignOutButton'
import UserAuthAPI from '../../utils/UserAuthAPI'
import UnauthorizedRedirect from '../../components/UnauthorizedRedirect'
import WorkoutContext from '../../utils/WorkoutContext'
import WorkoutAPI from '../../utils/WorkoutAPI'
import ProfileContext from '../../utils/ProfileContext'

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
  const [value, setValue] = React.useState(0)
  const [authorizedState, setAuthorizedState] = useState(true)
  const [ profileState, setProfileState ] = useState({
    name: '',
    age: 0,
    weight: 0
  })

  profileState.handleInputChange = event => {
    setProfileState({ ...profileState, [event.target.name]: event.target.value })
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

  return (
    <ProfileContext.Provider value={profileState}>
    <div className={classes.root}>
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
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <MyProfileCard />
        <SignOutButton />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CustomCard />
      </TabPanel>
    </div>
    </ProfileContext.Provider>
  )
}

export default Profile