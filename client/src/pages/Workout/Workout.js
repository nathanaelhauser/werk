import React, { useContext, useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import WorkoutContext from '../../utils/WorkoutContext'
import Container from '@material-ui/core/Container'
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

const Workout = () => {
  const classes = useStyles()
  const [authorizedState, setAuthorizedState] = useState(true)
  const { exercises, workout, id } = { exercises: [], workout: 'Awesome Workout', id: 10 }

  useEffect(() => {
    UserAuthAPI.authorizeUser()
      .then(({ data: { isAuthorized } }) => {
        setAuthorizedState(isAuthorized)
      })
      .catch(e => console.error(e))
  }, [])

  return (
    <Container>
      <UnauthorizedRedirect authorized={authorizedState} />
      <h1>{workout}</h1>
    </Container>
  )
}

export default Workout