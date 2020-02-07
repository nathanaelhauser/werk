import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import WorkoutContext from '../../utils/WorkoutContext'

const useStyles = makeStyles({
  paper: {
    height: '100%',
    width: '100%'
  }
})

const StartWorkout = () => {
  const classes = useStyles()
  const { startWorkout } = useContext(WorkoutContext)

  return (
    <Container>
      <Grid container direction="row" alignItems="center" justify="center">
        <Grid item sm={12} md={6}>
          <Paper className={classes.paper}>
            <Button variant="contained" color="primary" onClick={startWorkout}>Start</Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default StartWorkout