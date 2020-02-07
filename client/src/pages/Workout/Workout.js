import React, { useContext, useEffect, useState } from 'react'
import { useTimer } from 'react-timer-hook'
import { makeStyles } from '@material-ui/core/styles'
import WorkoutContext from '../../utils/WorkoutContext'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import StartWorkout from '../../components/StartWorkout'
import UserAuthAPI from '../../utils/UserAuthAPI'
import UnauthorizedRedirect from '../../components/UnauthorizedRedirect'


const useStyles = makeStyles({
  root: {
    position: 'relative',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0'
  }
})

const Workout = props => {
  const classes = useStyles()
  const [authorizedState, setAuthorizedState] = useState(true)
  const { seconds, restart } = useTimer()
  const { exercises, workout, id } = { exercises: ['blah', 'next', 'you suck'], workout: 'Awesome Workout', id: 10 }

  useEffect(() => {
    UserAuthAPI.authorizeUser()
      .then(({ data: { isAuthorized } }) => {
        setAuthorizedState(isAuthorized)
      })
      .catch(e => console.error(e))
  }, [])

  const startTimer = () => {
    restart(Date.now()+60000)
  }

  return (
    <Container>
      <UnauthorizedRedirect authorized={authorizedState} />
      <StartWorkout />
      <h1>{`${seconds}`}</h1>
      <button onClick={startTimer}>Start</button>
    </Container>
  )
}

export default Workout