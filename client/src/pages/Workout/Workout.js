import React, { useContext, useEffect, useState } from 'react'
// import { useTimer } from 'react-timer-hook'
import WorkoutContext from '../../utils/WorkoutContext'
import Container from '@material-ui/core/Container'
import StartWorkoutCard from '../../components/StartWorkoutCard'
import WorkoutTimerCard from '../../components/WorkoutTimerCard'
import UserAuthAPI from '../../utils/UserAuthAPI'
import UnauthorizedRedirect from '../../components/UnauthorizedRedirect'

const Workout = props => {
  const [authorizedState, setAuthorizedState] = useState(true)
  // const { seconds, restart } = useTimer()
  // const { workout, workoutStarted } = useContext(WorkoutContext)
  const { workout, workoutStarted } = { 
    workout: { name: 'Yeah Boy' },
    workoutStarted: true
  }

  useEffect(() => {
    UserAuthAPI.authorizeUser()
      .then(({ data: { isAuthorized } }) => {
        setAuthorizedState(isAuthorized)
      })
      .catch(e => console.error(e))
  }, [])

  // const startTimer = () => {
  //   restart(Date.now()+60000)
  // }

  return (
    <Container>
      <UnauthorizedRedirect authorized={authorizedState} />
      <h1>{workout.name}</h1>
      {
        workoutStarted
        ? <WorkoutTimerCard />
        : <StartWorkoutCard />
      }
    </Container>
  )
}

export default Workout