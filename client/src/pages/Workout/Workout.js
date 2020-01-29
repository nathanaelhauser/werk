import React from 'react'
import Nav from '../../components/Nav'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import WorkoutList from '../../components/WorkoutList'

const Workout = () => {
  
  return(
    <Container maxWidth="sm">
      <Typography variant="h2">
        My Workouts
      </Typography>
      <WorkoutList />
    </Container>
  )
}

export default Workout
