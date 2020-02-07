import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import WorkoutContext from '../../utils/WorkoutContext'

const useStyles = makeStyles({
  grid: {
    height: '50vh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const StartWorkout = () => {
  const classes = useStyles()
  // const { startWorkout } = useContext(WorkoutContext)
  const { startWorkout } = { startWorkout: () => { } }

  return (
    <Container>
      <Grid container direction="row" alignItems="center" justify="center">
        <Grid item sm={12} md={6} className={classes.grid}>
          <Button variant="contained" color="primary" onClick={startWorkout}>Start</Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default StartWorkout