import React, { useContext, useEffect, useState } from 'react'
// import { useTimer } from 'react-timer-hook'
import WorkoutContext from '../../utils/WorkoutContext'
import Container from '@material-ui/core/Container'
import StartWorkoutCard from '../../components/StartWorkoutCard'
import WorkoutTimerCard from '../../components/WorkoutTimerCard'
import UserAuthAPI from '../../utils/UserAuthAPI'
import UnauthorizedRedirect from '../../components/UnauthorizedRedirect'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const Workout = props => {
  const [authorizedState, setAuthorizedState] = useState(true)
  const { workout, workoutStarted } = useContext(WorkoutContext)

  useEffect(() => {
    UserAuthAPI.authorizeUser()
      .then(({ data: { isAuthorized } }) => {
        setAuthorizedState(isAuthorized)
      })
      .catch(e => console.error(e))
  }, [])

  return (
    <Container>
      <Grid container
            direction="column"
            justify="center"
            alignItems="center">
      <UnauthorizedRedirect authorized={authorizedState} />
      {/* <h1>{workout.name}</h1> */}
      <Typography>{workout.name}</Typography>
      {
        workoutStarted
        ? <WorkoutTimerCard />
        : <StartWorkoutCard />
      }  
      </Grid>
      
    </Container>
  )
}

export default Workout